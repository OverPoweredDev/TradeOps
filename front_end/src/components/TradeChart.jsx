import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';

class TradeChart extends Component {
    constructor() {
        super();
        this.state = {
            iFrameHeight: '0px',
            iFrameWidth: '0px'
        }
    }

    render() {
        return (
            <iframe 
                style={{maxWidth:640, width:this.state.iFrameWidth, height:this.state.iFrameHeight, overflow:'visible'}}
                onLoad={() => {
                    const obj = ReactDOM.findDOMNode(this);
                    this.setState({
                        "iFrameHeight":  obj.contentWindow.document.body.scrollHeight + 'px',
                        "iFrameWidth":  obj.contentWindow.document.body.scrollWidth + 'px'
                    });
                }} 
                ref="iframe" 
                src="tradeChart.html" 
                width={this.state.iFrameWidth} 
                height={this.state.iFrameHeight} 
                scrolling="no" 
                frameBorder="0"
            />
        );
    }
}

export default TradeChart;