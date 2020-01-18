import {
    ADD_BOOK,
    BookVisibilities,
    OrderOptions,
    SET_COMPLETED_VISIBILITY, SET_QUERY,
    SET_SORTING_FIELD, SET_SORTING_ORDER,
    SortingOptions
} from './actions'

import {sortBooks, filterBooks} from "./api/ApiWorker";

const initialState = {
    visibility: BookVisibilities.SHOW_ALL,
    sortingField: SortingOptions.BY_NAME,
    sortingOrder: OrderOptions.DESC,
    books: [
        {
            name: 'Bible',
            year: 1000,
            author: 'The God',
            description: 'Holy Bible for everyone',
            isComplete: false
        },
        {
            name: 'Pride And Prejudice',
            year: 1890,
            author: 'Jane Ostin',
            description: 'Story of love',
            isComplete: true
        },
        {
            name: 'Cat Da Vinchi and crime of stolen cat',
            year: 2016,
            author: 'Kate Matushkina',
            description: 'Cat detective wants to solve a crime',
            isComplete: true
        },
        {
            name: 'Cat Da Vinchi 2',
            year: 2016,
            author: 'Kate Matushkina',
            description: 'Cat detective wants to solve next crime',
            isComplete: false
        },
        {
            name: 'Scary Stories',
            year: 2005,
            author: 'Alex Biksly',
            description: 'Scary stories for kids ',
            isComplete: true
        },
        {
            name: 'My Little Pony-3',
            year: 2005,
            author: 'Fluffy',
            description: 'Magic of pony',
            isComplete: true
        },
        {
            name: 'My Little Pony. Pony rock!',
            year: 2016,
            author: 'Fluffy',
            description: 'Pony go to the gig',
            isComplete: false
        }]
};

export function bookshelfApp(state=initialState, action) {
    switch (action.type){
        case SET_COMPLETED_VISIBILITY:
            return Object.assign({},{
                ...state,
                visibility: action.visibility,
                books: state.books
            });
        case SET_SORTING_FIELD:
            return Object.assign({}, {
                ...state,
                sortingField: action.field,
                books: sortBooks(state.books, state.sortingField, state.sortingOrder)
            });
        case SET_SORTING_ORDER:
            return Object.assign({}, state, {
                sortingOrder: action.order,
                books: sortBooks(state.books, state.sortingField, state.sortingOrder)
            });
        case SET_QUERY:
            return Object.assign({}, {
                ...state,
                books: filterBooks(initialState.books, action.query)
            });
        case ADD_BOOK:
            initialState.books.push(action.book);
            return Object.assign({},{
                ...state,
                books: initialState.books
            });
        default:
            return state;
    }
}

//todo find a place where occur a pause

