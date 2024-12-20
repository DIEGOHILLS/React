import React, { Component } from "react";
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

class Rating extends Component {

  //Class constructor assigns the initial state
    constructor(props) {
        super(props);
        this.state = {rating: this.props.rating};
    }

    handleClick(ratingValue) {
        this.setState({rating: ratingValue})
    }

  render() {
    return (

      <div>
        {/* EXAMPLE1: <h1>Rating: {this.props.rating}</h1>

        {this.props.rating >=1 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
        {this.props.rating >=2 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
        {this.props.rating >=3 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
        {this.props.rating >=4 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
        {this.props.rating >=5 ? (<IoIosStar/>) : (<IoIosStarOutline/>)} */}

        {/* //EXAMPLE2: */}
        <h2>Rating: {this.state.rating}</h2>

        {/* //Bind the handleClick function to our component */}

        {this.state.rating >=1 ? (<IoIosStar onClick={this.handleClick.bind(this, 1)}/>) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 1)}/>)}
        {this.state.rating >=2 ? (<IoIosStar onClick={this.handleClick.bind(this, 2)}/>) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 2)}/>)}
        {this.state.rating >=3 ? (<IoIosStar onClick={this.handleClick.bind(this, 3)}/>) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 3)}/>)}
        {this.state.rating >=4 ? (<IoIosStar onClick={this.handleClick.bind(this, 4)}/>) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 4)}/>)}
        {this.state.rating >=5 ? (<IoIosStar onClick={this.handleClick.bind(this, 5)}/>) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 5)}/>)}
      </div>
    );
  }
}
export default Rating;
