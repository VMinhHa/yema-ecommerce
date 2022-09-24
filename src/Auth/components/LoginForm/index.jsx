import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from '../form-controls/InputField';
import { Avatar, Typography,Button, Box, LinearProgress } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PasswordField from '../form-controls/PasswordField';


LoginForm.propTypes = {
    onSubmit: PropTypes.func, 
};

function LoginForm(props) {
      const schema = yup.object({     //Định nghĩa schema là 1 object
        identifier: yup.string().required('Please enter your email')
        .email('Please enter a valid email address'),
        password: yup.string().required('Please enter a password')
      
      }).required();

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',

        },
        resolver: yupResolver(schema),  
    });

    const handleSubmit = async (values) => {
        // console.log('TODO FORM:', values);
        const {onSubmit} = props;
        if(onSubmit) {
            await onSubmit(values);
        }

        // form.reset();       //Reset form
    };

    const { isSubmitting } = form.formState;

    return (
        <Box sx={{ marginTop: "8px"}} >
            {isSubmitting && <LinearProgress sx={{ position: "absolute" , top: "16px", left: 0, right: 0}} />}

            {/* <Avatar sx={{ margin: '0 auto', bgcolor: 'secondary.main'}} >
                <LockOutlinedIcon> </LockOutlinedIcon>
            </Avatar> */}

            <Typography sx={{ margin: "16px 0px 32px 0px" ,textAlign: "center"}} component="h3" variant="h5">Sign In </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>  
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} fullWidth/>

                <Button 
                disabled={isSubmitting} type="submit"
                sx={{ mt: 3, mb: 2}}
                variant="contained" 
                size='large'
                fullWidth>
                    Sign in
                </Button>
            </form>
        </Box>
    );
}

export default LoginForm;