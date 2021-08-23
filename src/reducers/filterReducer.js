import { mdiFormatLetterCaseLower } from "@mdi/js"
import {
    INIT_FILTERS,
    INIT_FILTERS_SUCCESS,
    INIT_FILTERS_FAIL,
    SHOW_FILTER_FLAG,
    CLEAR_FILTERS,
    CHANGE_FILTER_MARK,
    CLEAR_FILTERS_ALL,
    INIT_ORDER_GROUP_LIST_SUCCESS,

} from "../constants"

const initState = {
    isFilter: true,
    isLoading: false,
    isLoaded: false,
    items: [],
    orderList: [],
    groupList: [],
    applyButton: { visible: false, coordinatsY: null },
    error: null,
}

export const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_FILTERS:
            return {
                ...state,
                isLoading: true
            }
        case INIT_FILTERS_SUCCESS:
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
                applyButton: {
                    visible: action.payload.visible,
                    coordinatsY: action.payload.coordinatsY
                }
            }
        case CHANGE_FILTER_MARK: {
            const { filterType, id } = action.payload;
            const items = state.items.map((item) => {
                const { data: dataSrc, ...itemCopy } = item;
                if (item.type !== filterType) {
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
                                dataItem.checked = false;
                                return dataItem
                            })
                        }
                    else return item
                })
            }
        case CLEAR_FILTERS_ALL:
            return {
                ...state,
                items: state.items.map(item => {
                    return {
                        ...item,
                        data: item.data.map(dataItem => {
                            dataItem.checked = false;
                            return dataItem
                        })
                    }
                })
            }
        case INIT_ORDER_GROUP_LIST_SUCCESS:
            return {
                ...state,
                orderList: action.payload.orderList,
                groupList: action.payload.groupList
            }
        default:
            return state
    }
}
