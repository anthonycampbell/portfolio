import React, { Component } from 'react';
import { spring, StaggeredMotion } from 'react-motion';

export default class FlipCard extends Component{
    constructor(props){
        super(props);
        this.state = {isMouseEnter: false, isMouseLeave: false};
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(e){
        this.setState({isMouseEnter: true});
        this.setState({isMouseLeave: false});
    }

    handleMouseLeave(e){
        this.setState({isMouseLeave: true});
        this.setState({isMouseEnter: false});
    }

    render() {
        const {isMouseEnter, isMouseLeave} = this.state;
        return(
            <StaggeredMotion
                defaultStyles={[{a: 0}, {a: 270}]}
                styles={prevInterpolatedStyles => {
                    if (isMouseEnter){
                        if (prevInterpolatedStyles[0].a > 89){
                            return [{a: 90}, {a: spring(360)}]
                        } else {
                            return [{a: spring(90)}, {a: 270}]
                        }
                    }
                    if (isMouseLeave){
                        if (prevInterpolatedStyles[1].a < 271){
                            return [{a: spring(0)}, {a: 270}];
                        } else {
                            return [{a: 90}, {a: spring(270)}];
                        }
                    }
                    return (prevInterpolatedStyles);
                }}>
                {rotations =>
                    <div className="flipCard" onMouseEnter={this.handleMouseEnter}
                                              onMouseLeave={this.handleMouseLeave}>
                        <div className="front" style={{ transform: `rotateY(${rotations[0].a}deg)`,
                                                        backgroundColor: this.props.frontColor }}>
                            {this.props.frontContent}
                        </div>
                        <div className="back" style={{transform: `rotateY(${rotations[1].a}deg)`,
                                                      backgroundColor: this.props.backColor }}>
                            <a href={this.props.backURL} alt="art map" target="_blank" rel="noopener noreferrer">
                                <img src={this.props.backContent}
                                 style={{opacity: 0.6}}
								 alt=''/>
                            </a>
                        </div>
                    </div>}
            </StaggeredMotion>
        )
    }
}
