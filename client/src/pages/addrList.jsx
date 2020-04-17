import React, { Component } from 'react'
import api from '../api'
import AddrsTableRow from '../components/AddrsTableRow'
import Table from 'react-bootstrap/Table'

class addrList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            addrs: [],
        }
    }
    
        async addrList() {
            const response = await api.addrList();
            this.setState({
            addrs : response.data.data,
        })
    }

    componentDidMount() {
       this.addrList();
    }

    
    DataTable() {        
        const addrs = this.state.addrs
        console.log(addrs) 
        return addrs.map((data) => {
        return <AddrsTableRow data={data}/>
        });  
    } 

    render() { 
        return (
            <div className="table-wrapper">
                <Table striped bordered hocer>
                    <thead>
                        <tr>
                            <th>아이디</th>
                            <th>이름</th>
                            <th>이메일</th>
                            <th>전화번호</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default addrList