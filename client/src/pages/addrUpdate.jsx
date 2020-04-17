
import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            email: '',
            phone: '',
        }
    }

    handleChangeInputName = async event => { 
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }

    handleChangeInputPhone = async event => {
        const phone = event.target.value 
        this.setState({ phone })
    }

    handleUpdateAddr = async () => {
        const { id, name, email, phone } = this.state
        const payload = { name, email, phone }

        await api.addrUpdate(id, payload).then(res => {
            window.alert(`Movie updated successfully`)
            this.setState({
                name: '',
                email: '',
                phone: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const addr = await api.addrOne(id) 

        this.setState({
            name: addr.data.data.name,
            email: addr.data.data.email,
            phone: addr.data.data.phone,
        })
    }

    render() {
        const { name, email, phone } = this.state
        return (
            <Wrapper>
                <Title>주소록 수정</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Email: </Label>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />

                <Label>Phone: </Label>
                <InputText
                    type="text"
                    value={phone}
                    onChange={this.handleChangeInputPhone}
                />

                <Button onClick={this.handleUpdateAddr}>주수록 수정</Button>
                <CancelButton href={'/addr/list'}>취소</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesUpdate