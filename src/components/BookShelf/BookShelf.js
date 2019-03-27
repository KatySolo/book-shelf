import React from 'react';
import BookMini from '../BookMini/BookMini';
import './BookShelf.css';
import {connect} from 'react-redux';


function mapStateToProps(state) {
  return {props: state};
}

const BookShelf = ({props}) => (
  <div className="shelf-container">
    {props.books.length === 0 && (
      <div>Книги не найдены</div>
    )}

    {props.books.map(function(item, index) {
      return <BookMini info={item} key={index}
        visibilityMode={props.visibility}/>;
    })}
  </div>
);


const ConnectedBookShelf = connect(mapStateToProps)(BookShelf);
export default ConnectedBookShelf;
/*
Object

books: Array (7)
0 {name: "Bible", year: 1000, author: "The God", description: "Holy Bible for everyone", isComplete: false}
1 {name: "Pride And Prejudice", year: 1890, author: "Jane Ostin", description: "Story of love", isComplete: true}
2 {name: "Cat Da Vinchi and crime of stolen cat", year: 2016, author: "Kate Matushkina", description: "Cat detective wants to solve a crime", isComplete: true}
3 {name: "Cat Da Vinchi 2", year: 2016, author: "Kate Matushkina", description: "Cat detective wants to solve next crime", isComplete: false}
4 {name: "Scary Stories", year: 2005, author: "Alex Biksly", description: "Scary stories for kids ", isComplete: true}
5 {name: "My Little Pony-3", year: 2005, author: "Fluffy", description: "Magic of pony", isComplete: true}
6 {name: "My Little Pony. Pony rock!", year: 2016, author: "Fluffy", description: "Pony go to the gig", isComplete: false}


sortingField: "BY_NAME"

sortingOrder: "DESC"

visibility: "SHOW_ALL"
 */
