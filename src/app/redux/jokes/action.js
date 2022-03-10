export const ADD_JOKE = "ADD_JOKE";
export const GENERATION_ADD_JOKE = "GENERATION_ADD_JOKE";

export function addJoke(joke) {
    return {
        type: ADD_JOKE,
        payload: joke,
    };
}

export function generationJoke() {
    
    return {
        type: GENERATION_ADD_JOKE,
    };
}