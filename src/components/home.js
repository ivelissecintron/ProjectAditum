import React, { Component } from 'react'
import Table from '../components/table'
import Sidebar from '../components/sidebar'

class Home extends Component {
    
    render() {
        return (
            <div>
                <Sidebar/>
                <Table/>
            </div>
        )

    }
}

export default Home
