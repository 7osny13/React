const INITIAL_VALUE = {
    fav: "en",
   
}

export default function FavReducer(state=INITIAL_VALUE, action){

    switch(action.type){
        case "ADD_FAVOURITE":
            return {
                ...state,
                fav: action.payload
            };
        default: 
            return state;
    }

}