import React, { useState } from 'react';
import AddRequestAction from '../actions/AddRequestAction';
import RequestDemo from './RequestDemo';
import { Container, Row }from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

let dispatch;

const RequestDemoFunc = (props) => {


    const addRequest = (request) => {
        dispatch(AddRequestAction(request)).then((response) => {
            
            
            setRenderForm('ADD_REQUEST');
        });
    }

    let [renderForm, setRenderForm] = useState('ADD_REQUEST');
    
    if (renderForm === 'ADD_REQUEST')  {
        return (
            <div>
                <Container>
                    <Row>
                        <RequestDemo  addRequest={addRequest} />
                    </Row>
                   
                </Container>
            </div>
        );
    }
   
    else {
        return null;
    }
}

export default RequestDemoFunc;