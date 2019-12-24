import { ROOT_PAGE_CHANGE_REDUCER_TYPE } from "../constants/types";

export function setPage(page) {
    return { type: ROOT_PAGE_CHANGE_REDUCER_TYPE, payload: { page } }
}
