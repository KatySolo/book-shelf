const books = [
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
        name: 'My Little Pony',
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
    }];


export function searchBook(query) {
    if (query === '') return books;
    return books.filter(function (book) {
        return book.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}

export function sortBooks(field, isDesc, isComplete) {
    switch (field) {
        case 'name':
            return books.sort(function (a, b) {
                return (isDesc) ? a.name >= b.name : a.name <= b.name;
            });
        case 'complete':
            if (isComplete) {
                return books.filter((a) => a.isComplete);
            }
            return getBooks();
        case 'author':
            return books.sort(function (a, b) {
                return (isDesc) ? a.author >= b.author : a.author <= b.author;
            });
        default:
            return getBooks();
    }
}

export function getBooks() {
    return books.sort(function (a, b) {
        return a.name.toLowerCase() >= b.name.toLowerCase()
    });
}
