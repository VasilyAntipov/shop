import {
    INIT_FILTERS,
    INIT_FILTERS_SUCCESS,
    INIT_FILTERS_FAIL,
    SHOW_FILTER_FLAG,
    CLEAR_FILTERS,
    CHANGE_FILTER_MARK,

} from "../constants"

const initState = {
    isFilter: true,
    isLoading: false,
    isLoaded: false,
    items: [],
    filterFlag: { visible: false, coordinatsY: null },
    error: null,
}

export const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_FILTERS:
            return {
                ...state,
                isLoading: true
            }
        case INIT_FILTERS_SUCCESS:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                items: [...action.payload]
            }
        case INIT_FILTERS_FAIL:
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            }
        case SHOW_FILTER_FLAG:
            return {
                ...state,
                filterFlag: {
                    visible: action.payload.visible,
                    coordinatsY: action.payload.coordinatsY
                }
            }
        case CHANGE_FILTER_MARK: {
            const { filterType, id } = action.payload;
            const items = state.items.map((item) => {
                const { data: dataSrc, type, ...itemCopy } = item;
                if (type !== filterType) {
                    return item;
                }
                const data = dataSrc.map(dataItem => {
                    if (dataItem.id === id) {
                        dataItem.checked = !dataItem.checked;
                    }
                    return { ...dataItem };
                });
                return { ...itemCopy, data };
            });
            return { ...state, items };
        }

        case CLEAR_FILTERS:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.type === action.payload)
                        return {
                            ...item,
                            data: item.data.map(dataItem => {
                                delete dataItem.checked;
                                return dataItem
                            })
                        }
                    else return item
                })
            }
        default:
            return state
    }
}
