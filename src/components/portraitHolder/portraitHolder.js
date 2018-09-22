import React, { Component } from "react";
import Portrait from "../portrait/portrait"
import Wrapper from "../wrapper/Wrapper"
import charsinfo from "../../charinfo/charinfo.json"

let score = 0;
let clicked = [];

class PortraitHolder extends Component {
    // Setting the component's initial state
    constructor(props) {
        super(props)
        this.state = {
            charsinfo
            
        };
        console.log("character Info:" + JSON.stringify(charsinfo));
        console.log(this.state.charsinfo[0].imagelocation);
    }

    ShuffleArray() {

        var currentIndex = charsinfo.length, temporaryValue, randomIndex;
        
        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            temporaryValue = charsinfo[currentIndex];
            charsinfo[currentIndex] = charsinfo[randomIndex];
            charsinfo[randomIndex] = temporaryValue;
          }

    }


    HandleClick = id => {
        console.log("clicked array" + clicked);
        console.log("id = " + id);
        for(var i = 0;i < clicked.length;i++)
        {
            console.log("clicked id: " + clicked[i]);
            if(clicked[i] === id)
            {
                //we've already clicked on this object and we have lost
                score = 0;
                clicked = [];
                this.setState({ charsinfo });
                return;
            }
        }

        score += 1;
        clicked.push(id);

        this.ShuffleArray();
        this.setState({ charsinfo });
    }

    render() {
        return (
            <div>
                <Wrapper>
                    {
                        this.state.charsinfo.map(character => (
                            <Portrait name={character.imagelocation} key={character.charid} id={character.charid} HandleClick={this.HandleClick}alt="alt" />
                        ))
                    }
                </Wrapper>
                <p>Score:{score}</p>
            </div>
        );
    }
}

export default PortraitHolder;