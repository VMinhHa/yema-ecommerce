import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from '../../../redux/auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } =  useSnackbar();

    const handleSubmit = async(values) => {
        try {
            //auto set username = email
            values.username = values.email;

            console.log('Form submit:',values);
            const action  = register(values);   //value form
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // close dialog
            const { closeDialog } = props;
            if(closeDialog) {
                closeDialog();
            }

            //do something after register success
            console.log('new user:',user);
            enqueueSnackbar('Register success', { variant: 'success' });
        }
        catch (error) {
            console.log('Error:',error);
            enqueueSnackbar(error.message, { variant: 'error' });

        }
    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;