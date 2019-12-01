import React from 'react';
import IndividualResult from './individresult'


class DisplayResults extends React.Component {
    render(){
        return(
        <div>
        {this.props.books.map((individualBook, index) =>
            <IndividualResult
                key={individualBook + "_" + index}
                title={individualBook.title}
                author={individualBook.author}
                price={individualBook.price}
                book={individualBook.book}
                description={individualBook.description}
                image={individualBook.image}
                moreInfo={individualBook.moreInfo}
            />
        )}
        
        </div>
        )}
}

export default DisplayResults;