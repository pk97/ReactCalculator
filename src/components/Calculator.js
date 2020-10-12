import React, { Component } from 'react'
import './Calculator.css'
class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            num1 : '',
            num2 : '',
            result: ''
        }

    }

    handleNum1 = (event) => {
        this.setState({
            num1: event.target.value
        })
    }


    handleNum2 = (event) => {
        this.setState({
            num2: event.target.value
        })
    }

    executeAddition = (event) => {
        this.setState ({
            result : parseInt(this.state.num1) + parseInt(this.state.num2)
                 })
    }

    executeSubtraction = (event) => {
        this.setState ({
            result : parseInt(this.state.num1) - parseInt(this.state.num2)
                 })
    

    }


    executeMultiplication = (event) => {
        this.setState ({
            result : parseInt(this.state.num1) * parseInt(this.state.num2)
                 })
    
    }
    executeDivision = (event) => {
        this.setState ({
            result : parseFloat(this.state.num1) / parseFloat(this.state.num2)
                 })
    }

    executeClear = (event) => {
        this.setState ({
            num1: '',
            num2: '',
            result: ''
                 })

    }

    handleSubmit = event => {
        
        if ( isNaN( parseInt(this.state.num1)) )
            {
                alert('wrong input 1')        
            }
        
        else  if ( isNaN(parseInt(this.state.num2)))
            {
                alert('wrong input 2')        
            }
        event.preventDefault()
    }

    render() {
        return (
            <div className='primary'>
            <h1> Calculator</h1>
            <form onSubmit={this.handleSubmit} >
            <div >
                <input className="inputTags" type="text" placeholder="inputOne" value={this.state.num1} onChange= {this.handleNum1}  /> 
            </div>
            <div>
                <input type="text" className="inputTags" placeholder="InputTwo" value={this.state.num2} onChange= {this.handleNum2}  />

            </div>        
            <div >
            <button className="buttonTags" onClick={this.executeAddition }> + </button>
            <button className="buttonTags" onClick={this.executeSubtraction }> - </button>
            <button className="buttonTags" onClick={this.executeMultiplication }> *</button>            
            <button className="buttonTags" onClick={this.executeDivision }> / </button>
            <h3></h3>
            </div>
            <input type="text"  placeholder="Ouput" value={this.state.result}/>
            </form>
            <button className="clearTags" onClick={this.executeClear }> Clear </button>
            </div>
        )
    }
}

export default Calculator;
