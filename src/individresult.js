import React from 'react';

class IndividualResult extends React.Component {
    render(){
        return(
            <>
        <div className="individual-result">
            <div id="image-div">
            <img src={this.props.image} alt={this.props.title}/>
            </div>
            <h2>{this.props.title}</h2>
            <p>{this.props.author}</p>
            <p>{this.props.price}</p>
            <p>{this.props.description}</p>
            <p><a href={this.props.moreInfo} target="_blank" rel="noopener noreferrer">Learn more!</a></p>
        </div>
        <hr />
        </>
        )
    }
}

export default IndividualResult;