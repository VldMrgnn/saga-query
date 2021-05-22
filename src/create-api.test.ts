import test from 'ava';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put } from 'redux-saga/effects';
import { createTable, Action, MapEntity, createReducerMap } from 'robodux';

import { Middleware, Next, createApi, CreateActionPayload } from './create-api';

interface RoboCtx<D = any, P = any> {
  payload: CreateActionPayload<P>;
  url: string;
  response: D;
  actions: Action[];
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserResponse {
  id: string;
  name: string;
  email_address: string;
}

const deserializeUser = (u: UserResponse): User => {
  return {
    id: u.id,
    name: u.name,
    email: u.email_address,
  };
};

interface Ticket {
  id: string;
  name: string;
}

interface TicketResponse {
  id: string;
  name: string;
}

const deserializeTicket = (u: TicketResponse): Ticket => {
  return {
    id: u.id,
    name: u.name,
  };
};

const users = createTable<User>({ name: 'USER' });
const tickets = createTable<Ticket>({ name: 'TICKET' });
const reducers = createReducerMap(users, tickets);

interface FetchApiOpts {
  url: RequestInfo;
  options?: RequestInit;
}

const mockUser = { id: '1', name: 'test', email_address: 'test@test.com' };
const mockTicket = { id: '2', name: 'test-ticket' };

function* convertNameToUrl(ctx: RoboCtx, next: Next) {
  if (!ctx.url) {
    ctx.url = ctx.payload.name;
  }
  yield next();
}

function* onFetchApi(ctx: RoboCtx, next: Next) {
  const url = ctx.url;
  let json = {};
  if (url === '/users') {
    json = {
      users: [mockUser],
    };
  }

  if (url === '/tickets') {
    json = {
      tickets: [mockTicket],
    };
  }

  ctx.response = json;
  yield next();
}

function* setupActionState(ctx: RoboCtx, next: Next) {
  ctx.actions = [];
  yield next();
}

function* processUsers(ctx: RoboCtx<{ users?: UserResponse[] }>, next: Next) {
  if (!ctx.response.users) {
    yield next();
    return;
  }
  const curUsers = ctx.response.users.reduce<MapEntity<User>>((acc, u) => {
    acc[u.id] = deserializeUser(u);
    return acc;
  }, {});
  ctx.actions.push(users.actions.add(curUsers));
  yield next();
}

function* processTickets(
  ctx: RoboCtx<{ tickets?: UserResponse[] }>,
  next: Next,
) {
  if (!ctx.response.tickets) {
    yield next();
    return;
  }
  const curTickets = ctx.response.tickets.reduce<MapEntity<Ticket>>(
    (acc, u) => {
      acc[u.id] = deserializeTicket(u);
      return acc;
    },
    {},
  );
  ctx.actions.push(tickets.actions.add(curTickets));
  yield next();
}

function* saveToRedux(ctx: RoboCtx, next: Next) {
  for (let i = 0; i < ctx.actions.length; i += 1) {
    const action = ctx.actions[i];
    yield put(action);
  }
  yield next();
}

function setupStore(saga: any) {
  const sagaMiddleware = createSagaMiddleware();
  const reducer = combineReducers(reducers as any);
  const store: any = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(saga);
  return store;
}

test('createApi: when create a query fetch pipeline - execute all middleware and save to redux', (t) => {
  const api = createApi<RoboCtx>('app');
  api.use(convertNameToUrl);
  api.use(onFetchApi);
  api.use(setupActionState);
  api.use(processUsers);
  api.use(processTickets);
  api.use(saveToRedux);
  const fetchUsers = api.create(`/users`);

  const store = setupStore(api.saga());
  store.dispatch(fetchUsers());
  t.deepEqual(store.getState(), {
    [users.name]: { [mockUser.id]: deserializeUser(mockUser) },
    [tickets.name]: {},
  });
});

test('createApi: when providing a generator the to api.create function - should call that generator before all other middleware', (t) => {
  t.plan(2);
  const api = createApi<RoboCtx>('app', { url: '' });
  api.use(convertNameToUrl);
  api.use(onFetchApi);
  api.use(setupActionState);
  api.use(processUsers);
  api.use(processTickets);
  api.use(saveToRedux);
  const fetchUsers = api.create(`/users`);
  const fetchTickets = api.create(`/ticket-wrong-url`, function* (ctx, next) {
    // before middleware has been triggered
    ctx.url = '/tickets';

    // triggers all middleware
    yield next();

    // after middleware has been triggered
    t.deepEqual(ctx.actions, [
      tickets.actions.add({
        [mockTicket.id]: deserializeTicket(mockTicket),
      }),
    ]);
    yield put(fetchUsers());
  });

  const store = setupStore(api.saga());
  store.dispatch(fetchTickets());
  t.deepEqual(store.getState(), {
    [users.name]: { [mockUser.id]: deserializeUser(mockUser) },
    [tickets.name]: { [mockTicket.id]: deserializeTicket(mockTicket) },
  });
});