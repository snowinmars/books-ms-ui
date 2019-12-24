import { ROOT_PAGES, ROOT_PAGE_CHANGE_REDUCER_TYPE } from "../constants/types";

const initialState = {
    page: ROOT_PAGES.books
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ROOT_PAGE_CHANGE_REDUCER_TYPE:
            return {
                ...state,
                page: action.payload.page,
            };
        default:
            return state;
    }
}

export default rootReducer;
