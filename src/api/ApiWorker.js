import {SortingOptions} from "../actions";

export function sortBooks(books, field, option) {
    switch (field) {
        case SortingOptions.BY_NAME:
            return books.sort(function (a, b) {
                return (option === 'DESC') ? a.name <= b.name : a.name >= b.name;
            });
        case SortingOptions.BY_AUTHOR:
            return books.sort(function (a, b) {
                return ((option === 'DESC')) ? a.author <= b.author : a.author >= b.author;
            });
        default:
            return books;
    }
}

export function filterBooks(books, query) {
    if (query === '') return books;
    return books.filter((a) => a.name.toLowerCase().startsWith(query.toLowerCase()));
}
