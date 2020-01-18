export const SET_SORTING_FIELD = 'SET_SORTING_FIELD';
export const SET_COMPLETED_VISIBILITY = 'SET_COMPLETED_VISIBILITY';
export const SET_SORTING_ORDER = 'SET_SORTING_ORDER';
export const SET_QUERY = 'SET_QUERY';
export const ADD_BOOK = 'ADD_BOOK';
// export const SET_FILTERING_QUERY = 'SET_FILTERING_QUERY';

export const BookVisibilities = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
};

export const SortingOptions = {
    BY_NAME: 'BY_NAME',
    BY_AUTHOR: 'BY_AUTHOR',
    BY_COMPLETED: 'BY_COMPLETED'
};

export const OrderOptions = {
    DESC: 'DESC',
    ASC: 'ASC'
};

export function setSortingOrder(order) {
    return {
        type: SET_SORTING_ORDER,
        order
    }
}

export function setSortingField(field) {
    return {
        type: SET_SORTING_FIELD,
        field
    }
}

export function setCompleteVisibility(visibility) {
    return {
        type: SET_COMPLETED_VISIBILITY,
        visibility
    }
}

export function setQuery(query) {
    return {
        type: SET_QUERY,
        query
    }
}

export function addBook(book) {
    return {
        type: ADD_BOOK,
        book
    }
}
