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



export const columnsProduct = [
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
        accessor: 'brand.name',
    },
    {
        Header: 'Страна',
        accessor: 'country.name',
    },
    {
        Header: 'Фото',
        accessor: 'img',
    },
]
export const sortHeadersProduct = ['id', 'name']


export const labelsProduct = {
    edit: {
        title: 'Изменение продукта',
        context: 'Внесите изменения в выбранный продукт',
        button: 'Изменить'
    },
    add: {
        title: 'Добавление продукта',
        context: 'Внесите данные для добавления продукта',
        button: 'Добавить'
    }
}
export const labelsCategory = {
    edit: {
        title: 'Изменение категории',
        context: 'Внесите изменения в выбранную категорию',
        button: 'Изменить'
    },
    add: {
        title: 'Добавление категории',
        context: 'Внесите данные для добавления категории',
        button: 'Добавить'
    }
}

