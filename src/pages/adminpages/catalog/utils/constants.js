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
export const sortHeadersProduct= ['id', 'name']
export const dialogDataProduct = [
    {
        typeField: "TEXT",
        itemName: "name",
        label: "Название",
    },
    {
        typeField: "TEXT",
        itemName: "price",
        label: "Цена",
    },
    {
        typeField: "COMBO",
        options: menuItems,
        optionLabel: option => option.id + ' ' + option.name,
        itemName: "categoryId",
        label: "Категория",
    },
    {
        typeField: 'COMBO',
        options: brands,
        optionLabel: option => option.name,
        itemName: "brandId",
        label: "Производитель",
    },
    {
        typeField: "COMBO",
        options: countries,
        optionLabel: option => option.name,
        itemName: "countryId",
        label: "Страна",
    },
    {
        typeField: "FILE",
        itemName: "file",
    }
]

export const labels = {
    editProduct: {
        title: 'Изменение продукта',
        context: 'Внесите изменения в выбранный продукт',
        button: 'Изменить'
    },
    addProduct: {
        title: 'Добавление продукта',
        context: 'Внесите данные для добавления продукта',
        button: 'Добавить'
    },
    editCategory: {
        title: 'Изменение категории',
        context: 'Внесите изменения в выбранную категорию',
        button: 'Изменить'
    },
    addCategory: {
        title: 'Добавление категории',
        context: 'Внесите данные для добавления категории',
        button: 'Добавить'
    }
}

