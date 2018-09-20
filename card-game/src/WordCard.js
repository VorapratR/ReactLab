import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
const prepareStateFromWord = (give_word) =>{
    let word = give_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess:[],
        completed: false 
       } 
}
export default class WordCard extends Component{
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    //activate =  c => { console.log(`${c} has been activated.`) } 
    activateHandler = (c) => {
        //console.log(`${c} has been activate`)
        let guess = [this.state.guess+c]
        console.log("guess-- " + guess.length)
        console.log('word-- ' + this.state.word.length)
        this.setState({guess})
        if (guess.length === this.state.chars.length){
            if(guess.join('').toString() === this.state.word){
                this.setState({guess:[],completed:true})
            }else{
                this.setState({guess:[],attempt:this.state.attempt + 1 })
            }
        }
    }

    render(){
        return(
            <div className= "App">
            //{Array.from(this.props.value).map((c,i) => <CharacterCard value={c} key= {i} activationHandler={this.activateHandler}/>)}
            { Array.from(this.state.chars).map( 
                (c,i)=> <CharacterCard value = {c} key = {i} attempt={this.state.attempt} activateHandler={this.activateHandler}/> 
            )}
            </div>
        )
    }

}