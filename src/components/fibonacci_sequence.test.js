import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FibonacciSequence from './fibonacci_sequence';
 
configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('FibonacciSequence', ()=> {
	let FS = mount(<FibonacciSequence/>);

	describe('all component excist in FibonacciSequence', () => {
		it('FibonacciSequence has a component FibonacciSequence', () => {
				expect(FS.exists()).toBe(true);
		});

		it('FibonacciSequence has a div as a container', () => {
			expect(FS.find('.fibonacci_sequence_containner').exists()).toBe(true);
		});

		it('FibonacciSequence has a div as a messege', () => {
			expect(FS.find('.fibonacci_sequence_message_containner').exists()).toBe(true);
		});
	})

	describe('when rendering the form', () => {
		it('creates a form component', () => {
			expect(FS.find('form').exists()).toBe(true);
		});

		it('renders a form control component', () => {
			expect(FS.find('form').exists()).toBe(true);
		});

		it('form component has a button Calculate', () => {
			expect(FS.find('.fibonacci_sequence_submit_button').text()).toEqual('Calculate');
		});

		it('form component has a input text area', () => {
			expect(FS.find('.fibonacci_sequence_input').exists()).toBe(true);
		});
	})

	describe('when the form input a number', () => {
		let testInput = '10';
		let wrapper = shallow(<FibonacciSequence />);

		it('should respond to change event and change the state of the FibonacciSequence component', () => {
			wrapper.find('.fibonacci_sequence_input').simulate('change', {target: {name: 'fibonacci', value: testInput }});
			expect(wrapper.state('fibonacci')).toEqual(testInput);
		})

	})

	describe('and input the new input', () => {
		let testInput = '10';
		let props = {fibonacci: testInput};
		const fakeEvent = { preventDefault: () => console.log('preventDefault') };
		let wrapper = shallow(<FibonacciSequence />);
		it('adds the new to state message', () => {
			wrapper.find('.fibonacci_sequence_input').simulate('change', {target: {name: 'fibonacci', value: testInput }});
			wrapper.find('form').simulate('submit', fakeEvent);
			expect(wrapper.state('message')).toEqual('The 10th of fibonacci sequence is 55')
		})
	})

	describe('and submitting a string fibonacci', () => {
		let testInput = 'fibonacci';
		let props = {fibonacci: testInput};
		const fakeEvent = { preventDefault: () => console.log('preventDefault') };
		let wrapper = shallow(<FibonacciSequence />);
		it('adds the new to state message', () => {
			wrapper.find('.fibonacci_sequence_input').simulate('change', {target: {name: 'fibonacci', value: testInput }});
			wrapper.find('form').simulate('submit', fakeEvent);
			expect(wrapper.state('message')).toEqual('The fibonaccith of fibonacci sequence is not working because the input has to be a integer number or smaller than 1000')
		})
	})

	describe('and submitting a number 1001', () => {
		let testInput = '1001';
		let props = {fibonacci: testInput};
		const fakeEvent = { preventDefault: () => console.log('preventDefault') };
		let wrapper = shallow(<FibonacciSequence />);
		it('adds the new to state message', () => {
			wrapper.find('.fibonacci_sequence_input').simulate('change', {target: {name: 'fibonacci', value: testInput }});
			wrapper.find('form').simulate('submit', fakeEvent);
			expect(wrapper.state('message')).toEqual('The 1001th of fibonacci sequence is not working because the input has to be a integer number or smaller than 1000')
		})
	})

		describe('and submitting a number -10', () => {
		let testInput = '-10';
		let props = {fibonacci: testInput};
		const fakeEvent = { preventDefault: () => console.log('preventDefault') };
		let wrapper = shallow(<FibonacciSequence />);
		it('adds the new to state message', () => {
			wrapper.find('.fibonacci_sequence_input').simulate('change', {target: {name: 'fibonacci', value: testInput }});
			wrapper.find('form').simulate('submit', fakeEvent);
			expect(wrapper.state('message')).toEqual('The -10th of fibonacci sequence is not working because the input has to be a integer number or smaller than 1000')
		})
	})

	describe('and submitting a empity string', () => {
		let testInput = '';
		let props = {fibonacci: testInput};
		const fakeEvent = { preventDefault: () => console.log('preventDefault') };
		let wrapper = shallow(<FibonacciSequence />);
		it('adds the new to state message', () => {
			wrapper.find('.fibonacci_sequence_input').simulate('change', {target: {name: 'fibonacci', value: testInput }});
			wrapper.find('form').simulate('submit', fakeEvent);
			expect(wrapper.state('message')).toEqual('The empityth of fibonacci sequence is not working because the input has to be a integer number or smaller than 1000')
		})
	})

})