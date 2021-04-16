import React, { Component } from 'react';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = { focusedElement: null };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleMouseDown(e){
        e.target.style.backgroundColor = 'hsla(33, 100%, 35%, 1)';
        this.setState({ focusedElement: e.target.id });
    }
    handleMouseUp(e){
        e.target.style.backgroundColor = 'hsla(33, 100%, 45%, 1)';
    }
    handleMouseEnter(e){
        e.target.style.backgroundColor = 'hsla(33, 100%, 45%, 1)';
    }
    handleMouseLeave(focusedElement, e){
        if(e.target.id === focusedElement){
            return;
        } else {
            e.target.style.backgroundColor = 'rgb(255, 165, 0)';
        }
    }
    render(){
        const { focusedElement } = this.state;
        return (
            <header>
                    <nav>
	                    <ul>
		                    <button id='resume'
		                       onClick={ this.props.handleChange }
		                       onMouseDown={ this.handleMouseDown }
		                       onMouseUp= { this.handleMouseUp }
		                       onMouseEnter = { this.handleMouseEnter }
		                       onMouseLeave = { this.handleMouseLeave.bind(this, focusedElement) } >
		                       Resume
		                    </button>
		                    <button id='home'
		                       onClick={ this.props.handleChange }
		                       onMouseDown={ this.handleMouseDown }
		                       onMouseUp= { this.handleMouseUp }
		                       onMouseEnter = { this.handleMouseEnter }
		                       onMouseLeave = { this.handleMouseLeave.bind(this, focusedElement)}
		                       style={{ backgroundColor: 'hsla(33, 100%, 45%, 1)'}} >
		                       Home
		                    </button>
		                    <button id='project'
		                       onClick={ this.props.handleChange }
		                       onMouseDown={ this.handleMouseDown }
		                       onMouseUp= { this.handleMouseUp }
		                       onMouseEnter = { this.handleMouseEnter }
		                       onMouseLeave = { this.handleMouseLeave.bind(this, focusedElement) } >
		                       Projects
		                    </button>
		                </ul>
	                </nav>
             </header>
        );
    }
}