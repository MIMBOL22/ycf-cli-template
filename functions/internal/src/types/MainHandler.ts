export type MainHandler = (event: MainHandlerEvent, context: Context) => MainHandlerResult;

export type MainHandlerResult = {
  statusCode: number;
  body: string;
}

export interface Context {
  awsRequestId: string;
  requestId: string;
  invokedFunctionArn: string;
  functionName: string;
  functionVersion: string;
  functionFolderId: string;
  memoryLimitInMB: string;
  deadlineMs: number;
  logGroupName: string;
  uberTraceId: string;
  _data: MainHandlerEvent;
}

export interface MainHandlerEvent {
  httpMethod: string;
  headers: Headers;
  url: string;
  params: MultiValueParams;
  multiValueParams: MultiValueParams;
  pathParams: MultiValueParams;
  multiValueHeaders: { [key: string]: string[] };
  queryStringParameters: MultiValueParams;
  multiValueQueryStringParameters: MultiValueParams;
  requestContext: RequestContext;
  body: string;
  isBase64Encoded: boolean;
}

export interface MultiValueParams {
}

export interface RequestContext {
  identity: Identity;
  httpMethod: string;
  requestId: string;
  requestTime: string;
  requestTimeEpoch: number;
}

export interface Identity {
  sourceIp: string;
  userAgent: string;
}
