import { useDispatch } from 'react-redux'
import { initCatalogSuccess } from '../actions/menuActions';

export const getCatalog = () => {
    fetch('http://localhost:3001/api/catalog')
    .then(response => {
        return response.json();
    })
    .then(data => {
        useDispatch(initCatalogSuccess(data))
    })
}
   