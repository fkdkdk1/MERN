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

class addrInsertPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
        const email = event.target.validity.valid
            ? event.target.value
            : this.state.email

        this.setState({ email })
    }

    handleChangeInputPhone = async event => {
        const phone = event.target.value
        this.setState({ phone })
    }

    handleInsertAddr = async () => {
        const { name, email, phone } = this.state
        const payload = { name, email, phone }

        await api.addrInsert(payload).then(res => {
            window.alert(`Movie inserted successfully`)
            this.setState({
                name: '',
                email: '',
                phone: '',
            })
        })
    }

    render() {
        const { name, email, phone } = this.state
        return (
            <Wrapper>
                <Title>Create Movie</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>E-mail: </Label>
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

                <Button onClick={this.handleInsertAddr}>주소록 등록</Button>
                <CancelButton href={'/addrs/list'}>취소</CancelButton>
            </Wrapper>
        )
    }
}

export default addrInsertPage