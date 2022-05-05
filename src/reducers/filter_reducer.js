import {
    LOAD_PRODUCTS,
    SET_GRID_VIEW,
    SET_LIST_VIEW,
    UPDATE_SORT,
    UPDATE_FILTERES,
    SORT_PRODUCTS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS
} from '../actions';

export const filter_reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_PRODUCTS:
            let maxPrice = payload.map((p) => p.price);
            maxPrice = Math.max(...maxPrice)
            return {
                ...state,
                filteredProducts: payload,
                allProducts: payload,
                filters: {...state.filters,
                    maxPrice: maxPrice,
                    price: maxPrice,

                }

            }

        default:
            return (state);
    }

}