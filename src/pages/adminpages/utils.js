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

export const columnsProducts = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Название',
        accessor: 'name',
    },
]