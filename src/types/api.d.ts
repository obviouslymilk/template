// Endpoints
type ApiGetRoutes = 'user';
type ApiPostRoutes = 'register';
type ApiRoutes = ApiGetRoutes | ApiPostRoutes;
type ApiEndpoint = `/api/${ApiRoutes}`;
