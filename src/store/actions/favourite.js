export const addfavourite = (payload) => {
    return {
        payload, // new data 
        type: "ADD_FAVOURITE" // nam of action
    }
}