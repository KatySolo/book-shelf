// sortBooks(state.books, state.sortingField, state.sortingOrder)

// export function searchBook(query) {
//     if (query === '') return books;
//     return books.filter(function (book) {
//         return book.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     })
// }

import {SortingOptions} from "../actions";

export function sortBooks(books, field, option) {
    // console.log(books, field, option);
    switch (field) {
        case SortingOptions.BY_NAME:
            return books.sort(function (a, b) {
                return (option === 'DESC') ? a.name >= b.name : a.name <= b.name;
            });
        case SortingOptions.BY_COMPLETED:
            if (option === 'SHOW_COMPLETED') {
                return books.filter((a) => a.visibility);
            }
            return books;
        case SortingOptions.BY_AUTHOR:
            return books.sort(function (a, b) {
                return ((option === 'DESC')) ? a.author >= b.author : a.author <= b.author;
            });
        default:
            return books;
    }
}

// export function sortBooks(field, order, visibility) {
//     switch (field) {
//         case 'name':
//             return books.sort(function (a, b) {
//                 return (order) ? a.name >= b.name : a.name <= b.name;
//             });
//         case 'complete':
//             if (visibility) {
//                 return books.filter((a) => a.visibility);
//             }
//             return getBooks();
//         case 'author':
//             return books.sort(function (a, b) {
//                 return (order) ? a.author >= b.author : a.author <= b.author;
//             });
//         default:
//             return getBooks();
//     }
// }

// export function getBooks() {
//     return books.sort(function (a, b) {
//         return a.name.toLowerCase() >= b.name.toLowerCase()
//     });
// }
