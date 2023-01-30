import React, { Component } from 'react'
import { Table } from 'reactstrap';
import ChildOne from './ChildOne'

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: 10
        }
    }

    beliProduk = (jumlah) => {
        this.setState({
            stock: this.state.stock - jumlah
        })
    }

    render() {
        return (
            <div>
                <ChildOne
                    stock={this.state.stock}
                    fungsi={this.beliProduk.bind(this)}
                />
            </div>
        )
    }
}

export default Parent