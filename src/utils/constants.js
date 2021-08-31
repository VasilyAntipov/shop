export const ABOUT_ROUTE = '/about'
export const ADMIN_ROUTE = '/admin'
export const AUTH_ROUTE = '/auth'
export const LOGIN_ROUTE = `${AUTH_ROUTE}/login`
export const REGISTRATION_ROUTE = `${AUTH_ROUTE}/registration`
export const BASKET_ROUTE = '/basket'
export const CATALOG_ROUTE = '/catalog'
export const HOMEPAGE_ROUTE = '/homepage'
export const PRODUCTS_ROUTE = '/products'
export const PROFILE_ROUTE = '/profile'
export const ADMIN_CATALOG_ROUTE = `${ADMIN_ROUTE}/catalog`
export const ADMIN_REFERENCE_ROUTE = `${ADMIN_ROUTE}/reference`
export const ADMIN_PRODUCTS_ROUTE = `${ADMIN_ROUTE}/products`
export const ADMIN_OVERVIEW_ROUTE = `${ADMIN_ROUTE}/overview`


export const drawerItems = [
    { name: 'Обзор', route: ADMIN_OVERVIEW_ROUTE },
    { name: 'Каталог', route: ADMIN_CATALOG_ROUTE },
    { name: 'Справочники', route: ADMIN_REFERENCE_ROUTE },
    { name: 'Товары', route: ADMIN_PRODUCTS_ROUTE }
];

export const SERVER = 'http://localhost:5000'
export const PRODUCTS_PATH = '/products/'
export const CATALOG_PATH = '/catalog/'
export const ARROW = '>'
export const API = '/api'
export const IMAGE_PATH = 'images/'

export const API_URL = 'http://localhost:5000/api'
export const IMAGES_URL = API_URL + '/image/'

export const PRODUCER = 'brand'
export const PRICE = 'price'
export const ALL = 'all'

export const PRODUCT_LIMIT = 5
export const COUNT_BUTTONS = 4