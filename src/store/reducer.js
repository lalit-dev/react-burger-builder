import * as actionTypes from "./actions";

const initialState = {
    ingredients: null,
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.ADD_INGREDIENT):
            if (state.ingredients[type] < 5) {
                // updating ingredients count
                const updatedIngredients = { ...this.state.ingredients };
                const updatedCount = updatedIngredients[type] + 1;
                updatedIngredients[type] = updatedCount;
                // console.log("updatedIngredients = ", updatedIngredients);

                //updating burger price 
                const totalPrice = this.state.totalPrice + ingredientsPrice[type];

                // updating state
                this.setState({ totalPrice: totalPrice, ingredients: updatedIngredients });
                this.isPurchasable(updatedIngredients);
            }
    }
}

export default reducer;