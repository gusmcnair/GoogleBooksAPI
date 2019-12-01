import React from 'react';



class SearchForm extends React.Component {

    render(){
        return(
            <section className="search-section">
                <form>
                    <fieldset id="search-form">
                    <label htmlFor="book-name">Search:</label>
                    <input name="book-name" id="book-name" type="text" placeholder="The Great Gatsby" required/>
                    <button type="button" id="submit-button" onClick={() => this.props.onClick(document.getElementById('book-name').value, document.getElementById('print-type').value, document.getElementById('book-type').value)}>Submit</button>
                    </fieldset>
                    <fieldset id="refine-search">
                    <label htmlFor="print-type">Print Type:</label>
                    <select name="print-type" id="print-type">
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                    <label htmlFor="book-type">Book Type:</label>
                    <select name="book-type" id="book-type">
                        <option value="no-filter">No Filter</option>
                        <option value="free-ebook">Free Ebook</option>
                    </select>
                    </fieldset>
                </form>
            </section>
        )
    }
}

export default SearchForm;