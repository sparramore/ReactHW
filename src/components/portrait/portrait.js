import React, { Component } from "react";

class Portrait extends Component  {
    // Setting the component's initial state
    constructor(props)
    {
      super(props)
      this.state = {
    };
    }


    render() {
        return (
          <div>
            <img src={this.props.name} alt={this.props.alt} onClick={() => this.props.HandleClick(this.props.id)} className="img-responsive portrait"/>
          </div>
        );
      }
    }

export default Portrait;



