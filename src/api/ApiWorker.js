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
    }];


export function searchBook(query){
    if (query === '') return books;
    return books.filter(function(book) {
        return book.name.toLowerCase().startsWith(query.toLowerCase())
    })
}

export function getBooks(){
    return books;
}
