/*
	project name: Fibonacci Sequence
	auther: Kevin Yeh
	return: revinyeh@gmail.com 
	created: May. 14. 2018
	varsion: 0.1.0
*/

import React, { Component } from 'react';
import './fibonacci_sequence.css';
import _ from 'lodash'

class FibonacciSequence extends Component {
	constructor(props){
		super(props);
		this.state = {
			fibonacci: '',
			message: 'Please enter your fibonacci sequence...'
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

// fibonacci function with closure memoize function from lodash 
	fibonacci = _.memoize((n)  => {
	  return n < 2 ? 
	  	n
	  	: 
	  	this.fibonacci(n - 1) + this.fibonacci(n - 2);
	});

// handling every input from user to state
	handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

// handling submit button and calculate fibonacci number and return the result bane to state message valuable
  handleSubmit(e) {
    e.preventDefault();
    // if user input nothing then return a stirng empity as input
    let fibonacci = this.state.fibonacci ? 
    	this.state.fibonacci 
    	: 
    	'empity';
    // if the input is not a number or bigger than 1000 or smaller than 0, than return a error message other wise return result
    let result = Number.isInteger(Number(fibonacci)) && fibonacci < 1000 && fibonacci > 0 ? 
    	this.fibonacci(fibonacci)
    	: 
    	'not working because the input has to be a integer number or smaller than 1000';
    let message = `The ${fibonacci}th of fibonacci sequence is ${result}`;
    // rerendering component with new state
    this.setState({
    	fibonacci: '',
    	message: message
    });
  }

  render() {
  	let { fibonacci, message } = this.state;
    return (
      <div className="fibonacci_sequence_containner">
        <form onSubmit={this.handleSubmit}>
        	<input onChange={this.handleChange}
                 value={fibonacci}
                 type='text'
                 name='fibonacci'
                 className='fibonacci_sequence_input'
                 placeholder='Inout your sequence here...'/>
        		<button className='fibonacci_sequence_submit_button'
        						type='submit'>
        			Calculate
        		</button>
        </form>
        <div className='fibonacci_sequence_message_containner'>
        	{message}
        </div>
      </div>
    );
  }
}

export default FibonacciSequence;
