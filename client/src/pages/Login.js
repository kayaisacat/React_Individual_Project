import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useForm } from '../util/hooks';

function Login (props) {

    const [errors, setErrors] = useState('')

    const { onChange, onSubmit, values} = useForm(loginUserCallback, {
        email: '',
        password: ''
    })
    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(_, result){
            console.log(result);
            props.history.push('/')
        },
        onError(err){
            console.log(err)
            // console.log(err.graphQLErrors[0].extensions.errors)
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: values
    })
    function loginUserCallback() {
        loginUser();
    }

    return (
        <div className = 'form-container'>
            <Form onSubmit={onSubmit} noValidate className={loading? 'loading': ''}>
                <h1>Login</h1>

                <Form.Input 
                    label="Email"
                    placeholder="Email..."
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                />
                <Form.Input 
                    label="Password"
                    placeholder="Password..."
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={onChange}
                />
                <Button type="submit" primary>
                    Login
                </Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className='ui error message'>
                    <ul className='list'>
                        {Object.values(errors).map(value => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

const LOGIN_USER = gql`
    mutation login(
        $email: String!
        $password: String!
    ) {
        login(
            email: $email
            password: $password
        ){
            email username
        }
    }

`

export default Login;