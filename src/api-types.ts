/**
 * This is an auto-generated file, do not edit directly!
 * Run "yarn template" to generate this file.
 */
import type { SagaIterator } from 'redux-saga';
import type { SagaApi } from './pipe';
import type {
  ApiCtx,
  CreateAction,
  CreateActionWithPayload,
  MiddlewareCo,
  Next,
  FetchJson,
  MiddlewareApiCo,
  Payload,
} from './types';

export type ApiName = string | string[];

export interface SagaQueryApi<Ctx extends ApiCtx = ApiCtx>
  extends SagaApi<Ctx> {
  request: (
    r: Partial<RequestInit>,
  ) => (ctx: Ctx, next: Next) => SagaIterator<any>;
  cache: () => (ctx: Ctx, next: Next) => SagaIterator<any>;

  uri: (uri: string) => {
    /**
     * Options only
     */
    get(req: { saga?: any }): CreateAction<Ctx>;
    get<P>(req: {
      saga?: any;
    }): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    get<P, ApiSuccess, ApiError = any>(req: {
      saga?: any;
    }): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Middleware only
     */
    get(fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    get<P>(
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    get<P, Gtx extends Ctx = Ctx>(
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    get<P, ApiSuccess, ApiError = any>(
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options and Middleware
     */
    get(req: { saga?: any }, fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    get<P>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    get<P, Gtx extends Ctx = Ctx>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    get<P, ApiSuccess, ApiError = any>(
      req: { saga?: any },
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options only
     */
    post(req: { saga?: any }): CreateAction<Ctx>;
    post<P>(req: {
      saga?: any;
    }): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    post<P, ApiSuccess, ApiError = any>(req: {
      saga?: any;
    }): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Middleware only
     */
    post(fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    post<P>(
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    post<P, Gtx extends Ctx = Ctx>(
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    post<P, ApiSuccess, ApiError = any>(
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options and Middleware
     */
    post(req: { saga?: any }, fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    post<P>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    post<P, Gtx extends Ctx = Ctx>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    post<P, ApiSuccess, ApiError = any>(
      req: { saga?: any },
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options only
     */
    put(req: { saga?: any }): CreateAction<Ctx>;
    put<P>(req: {
      saga?: any;
    }): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    put<P, ApiSuccess, ApiError = any>(req: {
      saga?: any;
    }): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Middleware only
     */
    put(fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    put<P>(
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    put<P, Gtx extends Ctx = Ctx>(
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    put<P, ApiSuccess, ApiError = any>(
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options and Middleware
     */
    put(req: { saga?: any }, fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    put<P>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    put<P, Gtx extends Ctx = Ctx>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    put<P, ApiSuccess, ApiError = any>(
      req: { saga?: any },
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options only
     */
    patch(req: { saga?: any }): CreateAction<Ctx>;
    patch<P>(req: {
      saga?: any;
    }): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    patch<P, ApiSuccess, ApiError = any>(req: {
      saga?: any;
    }): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Middleware only
     */
    patch(fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    patch<P>(
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    patch<P, Gtx extends Ctx = Ctx>(
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    patch<P, ApiSuccess, ApiError = any>(
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options and Middleware
     */
    patch(req: { saga?: any }, fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    patch<P>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    patch<P, Gtx extends Ctx = Ctx>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    patch<P, ApiSuccess, ApiError = any>(
      req: { saga?: any },
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options only
     */
    delete(req: { saga?: any }): CreateAction<Ctx>;
    delete<P>(req: {
      saga?: any;
    }): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    delete<P, ApiSuccess, ApiError = any>(req: {
      saga?: any;
    }): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Middleware only
     */
    delete(fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    delete<P>(
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    delete<P, Gtx extends Ctx = Ctx>(
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    delete<P, ApiSuccess, ApiError = any>(
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options and Middleware
     */
    delete(req: { saga?: any }, fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    delete<P>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    delete<P, Gtx extends Ctx = Ctx>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    delete<P, ApiSuccess, ApiError = any>(
      req: { saga?: any },
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options only
     */
    options(req: { saga?: any }): CreateAction<Ctx>;
    options<P>(req: {
      saga?: any;
    }): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    options<P, ApiSuccess, ApiError = any>(req: {
      saga?: any;
    }): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Middleware only
     */
    options(fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    options<P>(
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    options<P, Gtx extends Ctx = Ctx>(
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    options<P, ApiSuccess, ApiError = any>(
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options and Middleware
     */
    options(req: { saga?: any }, fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    options<P>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    options<P, Gtx extends Ctx = Ctx>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    options<P, ApiSuccess, ApiError = any>(
      req: { saga?: any },
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options only
     */
    head(req: { saga?: any }): CreateAction<Ctx>;
    head<P>(req: {
      saga?: any;
    }): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    head<P, ApiSuccess, ApiError = any>(req: {
      saga?: any;
    }): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Middleware only
     */
    head(fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    head<P>(
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    head<P, Gtx extends Ctx = Ctx>(
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    head<P, ApiSuccess, ApiError = any>(
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options and Middleware
     */
    head(req: { saga?: any }, fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    head<P>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    head<P, Gtx extends Ctx = Ctx>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    head<P, ApiSuccess, ApiError = any>(
      req: { saga?: any },
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options only
     */
    connect(req: { saga?: any }): CreateAction<Ctx>;
    connect<P>(req: {
      saga?: any;
    }): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    connect<P, ApiSuccess, ApiError = any>(req: {
      saga?: any;
    }): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Middleware only
     */
    connect(fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    connect<P>(
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    connect<P, Gtx extends Ctx = Ctx>(
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    connect<P, ApiSuccess, ApiError = any>(
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options and Middleware
     */
    connect(req: { saga?: any }, fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    connect<P>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    connect<P, Gtx extends Ctx = Ctx>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    connect<P, ApiSuccess, ApiError = any>(
      req: { saga?: any },
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options only
     */
    trace(req: { saga?: any }): CreateAction<Ctx>;
    trace<P>(req: {
      saga?: any;
    }): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    trace<P, ApiSuccess, ApiError = any>(req: {
      saga?: any;
    }): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Middleware only
     */
    trace(fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    trace<P>(
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    trace<P, Gtx extends Ctx = Ctx>(
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    trace<P, ApiSuccess, ApiError = any>(
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;

    /**
     * Options and Middleware
     */
    trace(req: { saga?: any }, fn: MiddlewareCo<Ctx>): CreateAction<Ctx>;
    trace<P>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
    ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
    trace<P, Gtx extends Ctx = Ctx>(
      req: { saga?: any },
      fn: MiddlewareApiCo<Gtx>,
    ): CreateActionWithPayload<Gtx, P>;
    trace<P, ApiSuccess, ApiError = any>(
      req: { saga?: any },
      fn: MiddlewareCo<Ctx>,
    ): CreateActionWithPayload<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>,
      P
    >;
  };

  /**
   * Only name
   */
  get(name: ApiName): CreateAction<Ctx>;
  get<P>(
    name: ApiName,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  get<P, ApiSuccess, ApiError = any>(
    name: ApiName,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and options
   */
  get(name: ApiName, req: { saga?: any }): CreateAction<Ctx>;
  get<P>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  get<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Gtx, P>;
  get<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and middleware
   */
  get(name: ApiName, fn: MiddlewareApiCo<Ctx>): CreateAction<Ctx>;
  get<P>(
    name: ApiName,
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  get<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  get<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name, options, and middleware
   */
  get(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Ctx>,
  ): CreateAction<Ctx>;
  get<P>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  get<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  get<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Only name
   */
  post(name: ApiName): CreateAction<Ctx>;
  post<P>(
    name: ApiName,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  post<P, ApiSuccess, ApiError = any>(
    name: ApiName,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and options
   */
  post(name: ApiName, req: { saga?: any }): CreateAction<Ctx>;
  post<P>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  post<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Gtx, P>;
  post<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and middleware
   */
  post(name: ApiName, fn: MiddlewareApiCo<Ctx>): CreateAction<Ctx>;
  post<P>(
    name: ApiName,
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  post<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  post<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name, options, and middleware
   */
  post(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Ctx>,
  ): CreateAction<Ctx>;
  post<P>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  post<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  post<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Only name
   */
  put(name: ApiName): CreateAction<Ctx>;
  put<P>(
    name: ApiName,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  put<P, ApiSuccess, ApiError = any>(
    name: ApiName,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and options
   */
  put(name: ApiName, req: { saga?: any }): CreateAction<Ctx>;
  put<P>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  put<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Gtx, P>;
  put<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and middleware
   */
  put(name: ApiName, fn: MiddlewareApiCo<Ctx>): CreateAction<Ctx>;
  put<P>(
    name: ApiName,
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  put<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  put<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name, options, and middleware
   */
  put(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Ctx>,
  ): CreateAction<Ctx>;
  put<P>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  put<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  put<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Only name
   */
  patch(name: ApiName): CreateAction<Ctx>;
  patch<P>(
    name: ApiName,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  patch<P, ApiSuccess, ApiError = any>(
    name: ApiName,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and options
   */
  patch(name: ApiName, req: { saga?: any }): CreateAction<Ctx>;
  patch<P>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  patch<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Gtx, P>;
  patch<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and middleware
   */
  patch(name: ApiName, fn: MiddlewareApiCo<Ctx>): CreateAction<Ctx>;
  patch<P>(
    name: ApiName,
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  patch<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  patch<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name, options, and middleware
   */
  patch(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Ctx>,
  ): CreateAction<Ctx>;
  patch<P>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  patch<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  patch<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Only name
   */
  delete(name: ApiName): CreateAction<Ctx>;
  delete<P>(
    name: ApiName,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  delete<P, ApiSuccess, ApiError = any>(
    name: ApiName,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and options
   */
  delete(name: ApiName, req: { saga?: any }): CreateAction<Ctx>;
  delete<P>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  delete<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Gtx, P>;
  delete<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and middleware
   */
  delete(name: ApiName, fn: MiddlewareApiCo<Ctx>): CreateAction<Ctx>;
  delete<P>(
    name: ApiName,
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  delete<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  delete<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name, options, and middleware
   */
  delete(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Ctx>,
  ): CreateAction<Ctx>;
  delete<P>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  delete<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  delete<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Only name
   */
  options(name: ApiName): CreateAction<Ctx>;
  options<P>(
    name: ApiName,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  options<P, ApiSuccess, ApiError = any>(
    name: ApiName,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and options
   */
  options(name: ApiName, req: { saga?: any }): CreateAction<Ctx>;
  options<P>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  options<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Gtx, P>;
  options<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and middleware
   */
  options(name: ApiName, fn: MiddlewareApiCo<Ctx>): CreateAction<Ctx>;
  options<P>(
    name: ApiName,
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  options<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  options<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name, options, and middleware
   */
  options(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Ctx>,
  ): CreateAction<Ctx>;
  options<P>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  options<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  options<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Only name
   */
  head(name: ApiName): CreateAction<Ctx>;
  head<P>(
    name: ApiName,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  head<P, ApiSuccess, ApiError = any>(
    name: ApiName,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and options
   */
  head(name: ApiName, req: { saga?: any }): CreateAction<Ctx>;
  head<P>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  head<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Gtx, P>;
  head<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and middleware
   */
  head(name: ApiName, fn: MiddlewareApiCo<Ctx>): CreateAction<Ctx>;
  head<P>(
    name: ApiName,
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  head<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  head<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name, options, and middleware
   */
  head(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Ctx>,
  ): CreateAction<Ctx>;
  head<P>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  head<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  head<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Only name
   */
  connect(name: ApiName): CreateAction<Ctx>;
  connect<P>(
    name: ApiName,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  connect<P, ApiSuccess, ApiError = any>(
    name: ApiName,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and options
   */
  connect(name: ApiName, req: { saga?: any }): CreateAction<Ctx>;
  connect<P>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  connect<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Gtx, P>;
  connect<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and middleware
   */
  connect(name: ApiName, fn: MiddlewareApiCo<Ctx>): CreateAction<Ctx>;
  connect<P>(
    name: ApiName,
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  connect<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  connect<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name, options, and middleware
   */
  connect(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Ctx>,
  ): CreateAction<Ctx>;
  connect<P>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  connect<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  connect<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Only name
   */
  trace(name: ApiName): CreateAction<Ctx>;
  trace<P>(
    name: ApiName,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  trace<P, ApiSuccess, ApiError = any>(
    name: ApiName,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and options
   */
  trace(name: ApiName, req: { saga?: any }): CreateAction<Ctx>;
  trace<P>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  trace<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<Gtx, P>;
  trace<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name and middleware
   */
  trace(name: ApiName, fn: MiddlewareApiCo<Ctx>): CreateAction<Ctx>;
  trace<P>(
    name: ApiName,
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  trace<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  trace<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;

  /**
   * Name, options, and middleware
   */
  trace(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Ctx>,
  ): CreateAction<Ctx>;
  trace<P>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Omit<Ctx, 'payload'> & Payload<P>>,
  ): CreateActionWithPayload<Omit<Ctx, 'payload'> & Payload<P>, P>;
  trace<P, Gtx extends Ctx = Ctx>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<Gtx>,
  ): CreateActionWithPayload<Gtx, P>;
  trace<P, ApiSuccess, ApiError = any>(
    name: ApiName,
    req: { saga?: any },
    fn: MiddlewareApiCo<
      Omit<Ctx, 'payload' | 'json'> &
        Payload<P> &
        FetchJson<ApiSuccess, ApiError>
    >,
  ): CreateActionWithPayload<
    Omit<Ctx, 'payload' | 'json'> &
      Payload<P> &
      FetchJson<ApiSuccess, ApiError>,
    P
  >;
}
