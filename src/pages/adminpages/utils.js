export const CATALOG = 'CATALOG'
export const PRODUCT = 'PRODUCT'

export const columnsCatalog = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Индекс',
        accessor: 'index'
    },
    {
        Header: 'Название',
        accessor: 'name',
    },
    {
        Header: 'Количество товаров',
        accessor: 'productsCount',
    },
    {
        Header: 'Id родителя',
        accessor: 'parentId',
    },
    {
        Header: 'Image',
        accessor: 'img',
    }
]

export const sortHeadersCatalog = ['id', 'index', 'name']
export const sortHeadersProduct= ['id', 'name']

export const columnsProducts = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Цена',
        accessor: 'price',
    },
    {
        Header: 'Название',
        accessor: 'name',
    },
 
    {
        Header: 'Производитель',
        accessor: 'brandId',
    },
    {
        Header: 'Страна',
        accessor: 'countryId',
    },
    {
        Header: 'Фото',
        accessor: 'img',
    },
]