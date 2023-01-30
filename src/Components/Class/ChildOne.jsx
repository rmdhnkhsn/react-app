import React, { Component } from 'react'

class ChildOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    minBeli = 1;

    render() {
        return (
            <div className="container">
                <h2 className='text-2xl'>Child Component</h2>
                <div>{this.props.stock}</div>
                <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli</button>
            </div>
        )
    }
}

export default ChildOne