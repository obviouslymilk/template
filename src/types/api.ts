// Endpoints
type ApiGetRoutes = 'user';
type ApiPostRoutes = 'register';
type ApiRoutes = ApiGetRoutes | ApiPostRoutes;
export type ApiEndpoint = `/api/${ApiRoutes}`;
