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

        case SET_LIST_VIEW:
            return {...state, gridView: false };

        case SET_GRID_VIEW:
            return {...state, gridView: true };

        case SORT_PRODUCTS:
            const { sort, filteredProducts } = state;
            let tempProducts = [...filteredProducts];
            if (sort === "price-lowest") {
                tempProducts = tempProducts.sort((a, b) => a.price - b.price);
            } else if (sort === "price-highest") {
                tempProducts = tempProducts.sort((a, b) => b.price - a.price);
            }
            if (sort === "name-a") {
                tempProducts = tempProducts.sort((a, b) => {
                    return (a.name.localeCompare(b.name))
                })
            } else if (sort === "name-z") {
                tempProducts = tempProducts.sort((a, b) => {
                    return (b.name.localeCompare(a.name));
                })
            }
            return {...state, filteredProducts: tempProducts };

        case FILTER_PRODUCTS:
            const { allProducts } = state;
            const { text, category, company, color, price, shipping } = state.filters;
            let temporaryProducts = [...allProducts];
            if (text) {
                temporaryProducts.filter(product => {
                    return (product.name.totLowerCase.startsWith(text));
                })
            }
            if (category !== "all") {
                temporaryProducts.filter(product => {
                    return (product.category === category);
                })
            }
            if (company !== "all") {
                temporaryProducts.filter(product => {
                    return (product.company === company);
                })
            }
            if (color !== "all") {
                temporaryProducts.filter(product => {
                    return (product.color === color)
                })
            }
            temporaryProducts = temporaryProducts.filter(
                (product) => product.price <= price
            );
            if (shipping) {
                temporaryProducts = temporaryProducts.filter((product) =>
                    product.shipping === true
                );
            }
            return {...state, filteredProducts: temporaryProducts };


        default:
            return (state);
    }

}