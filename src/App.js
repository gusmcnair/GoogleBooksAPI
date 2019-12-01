import React from 'react';
import './App.css';
import Header from './headerbar.js';
import SearchForm from './searchform.js';
import DisplayResults from './displayresults.js';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: [],
      books: [
      
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(searchTerm, printType, bookType) {
    let printCall = "";
    let bookCall = "";
    if(bookType === "free-ebook"){bookCall = "&filter=free-ebooks"};
    if (printType === "books"){printCall = "&printType=books"}
    else if (printType === "magazines"){printCall = "&printType=magazines"};
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}${printCall}${bookCall}&key=AIzaSyANoZ0X2hpzeMaDd6UGJ-c2pFRXiosVBO4`)
    .then(response => {
        if(response.ok){
            return response.json();
        }
    })
    .then(response => {
      const newState = response.items.map(book => {
        return {
          title: book.volumeInfo.title,
          author: typeof book.volumeInfo.authors !== "undefined" ? ((((JSON.stringify(book.volumeInfo.authors)).replace(/"/g, "")).replace(/\[/g, "")).replace(/\]/g, "")).replace(/,/g, ", ") : "",
          price: book.saleInfo.saleability === "FOR_SALE" ? `$${book.saleInfo.listPrice.amount}` : "",
          description: book.volumeInfo.description,
          image: typeof book.volumeInfo.imageLinks !== "undefined" ? book.volumeInfo.imageLinks.thumbnail : "",
          moreInfo: book.volumeInfo.infoLink,
        }})
          this.setState({
            error: "",
            books: newState
          })})
    .catch(err => {this.setState ({
            error: "Error: " + err.message + ". Please try again.",
            books: [],
    })})
  }

  render(){
    return(
      <div className="app-div">
        <Header />
        <SearchForm 
          onClick={this.handleClick}
          />
                <div className="error-display">{this.state.error}</div>
        <DisplayResults books={this.state.books}/>
      </div>
    )
  }

}

export default App;