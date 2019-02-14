import React, { Component } from 'react';


class Book extends Component {

    state = { hide: 'false' };

    // const hidebook = ''
    let
    hidebook = () => {
        if (this.state.hide === 'false') {
            this.setState({ hidebook: 'hidden' })
        } else {
            this.setState({ hidebook: 'false' })
        }
    }

    render() {
        return (
            <div>

                <h1 onClick={this.hidebook} > Book Title: {this.props.book.title} </h1>
                <p className={this.state.hidebook}> Isbnn : {this.props.book.isbn} </p>
                <h3 className={this.state.hidebook}> Subtitle: {this.props.book.subtitle} </h3>
                <h3 className={this.state.hidebook}> Auhthor:{this.props.book.author} </h3>
                <h3 className={this.state.hidebook}> Puplished:{this.props.book.puplished} </h3>
                <h3 className={this.state.hidebook}> Puplisher:{this.props.book.puplisher} </h3>
                <h3 className={this.state.hidebook}> {this.props.book.page} </h3>
                <h3 className={this.state.hidebook}> Number of pages:{this.props.book.description}</h3>
                <h3 className={this.state.hidebook}> Website link :</h3>  <a href='#' className={this.state.hidebook}>  {this.props.book.website} </a>
            </div>
        )
    }
}

export default Book;
