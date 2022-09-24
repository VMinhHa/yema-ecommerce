import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } =  useSnackbar();

    const handleSubmit = async(values) => {
        try {

            // console.log('Form submit:',values);
            const action  = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // close dialog
            const { closeDialog } = props;
            if(closeDialog) {
                closeDialog();
            }
            //do something after register success
            // console.log('new user:',user);
        }
        catch (error) {
            console.log('Failed to login:',error);
            enqueueSnackbar(error.message, { variant: 'error' });

        }
    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;