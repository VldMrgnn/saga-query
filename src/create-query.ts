import { call } from 'redux-saga/effects';
import { Action, createTable, MapEntity, ActionWithPayload } from 'robodux';

import { createApi, Next, Middleware, CreateActionPayload } from './create-api';

interface FetchApiOpts {
  url: RequestInfo;
  options: RequestInit;
}

export interface QueryCtx<R, P = any> {
  payload: CreateActionPayload<P>;
  request: FetchApiOpts;
  response: R;
}

export function createQuery<E, R = any, Ctx extends QueryCtx<R> = any>(
  name: string,
  onFetchApi: (opts: FetchApiOpts) => Generator<any, any, any>,
) {
  const cache = createTable<E>({ name });
  const api = createApi<Ctx>(name, { request: {} } as any);

  api.use(function* urlTemplate(ctx, next) {
    const { options = {} } = ctx.payload;
    const url = Object.keys(options).reduce((acc, key) => {
      return acc.replace(`:${key}`, options[key]);
    }, ctx.payload.name);
    ctx.request.url = url;
    yield next();
  });
  api.use(function* fetchApi(ctx, next): Generator<any, any, any> {
    if (!ctx.request.url) {
      ctx.request.url = ctx.payload.name;
    }
    const response = yield call(onFetchApi, ctx.request);
    ctx.response = response;
    yield next();
  });
  return { ...api, ...cache };
}