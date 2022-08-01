const { REACT_APP_PRODUCTS_SERVICE = '', REACT_APP_IMPORT_CSV_SERVICE = '' } =
  process.env

export const API_PATHS = {
  products: REACT_APP_PRODUCTS_SERVICE,
  import: REACT_APP_IMPORT_CSV_SERVICE,
  order: 'https://localhost:8080',
  cart: 'https://localhost:8080',
}

export default API_PATHS
