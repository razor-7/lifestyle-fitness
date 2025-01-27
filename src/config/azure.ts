export const azureConfig = {
  apiUrl: process.env.REACT_APP_API_URL,
  environment: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === 'production',
  staticWebAppLocation: process.env.REACT_APP_STATIC_WEBAPP_LOCATION
}; 