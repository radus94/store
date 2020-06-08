import products from "../../pages/products";

export function globalReducer(state, action) {
    const {
        type,
        payload,
    } = action;

    switch(type) {
        case 'ADD_TO_BAG': {
            const addedProduct = state.products.find(product => product.id === payload.id);
            let updatedCart = [...state.cart];
            if(!updatedCart.some(e => e.id === payload.id)){
                updatedCart.push({
                    ...addedProduct,
                    qty: payload.qty
                });
            }
            console.log("Count", updatedCart)
            return {
                ...state,
                cart: updatedCart
            }
        }

        case 'REMOVE_FROM_BAG': {
            const updatedCart = state.cart.filter(cartItem => cartItem.id !== payload.id);

            return {
                ...state,
                cart: updatedCart
            }
        }

        case 'ADD_TO_WISH': {
            const addedWish = state.products.find(product => product.id === payload.id);
            let updatedWish = [...state.wishlist];
            if(!updatedWish.some(e => e.id === payload.id)) {
                updatedWish.push({
                    ...addedWish,
                    qty: payload.qty
                });
            }

            return {
                ...state,
                wishlist: updatedWish
            }
        }


        case 'REMOVE_FROM_WISH': {
            const updatedWish = state.wishlist.filter(wishItem => wishItem.id !== payload.id);

            return {
                ...state,
                wishlist: updatedWish
            }
        }

        default:
            throw new Error(`Unhandled action type ${type}`);
    }
}
