import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../form-controls/InputField';
import { Avatar, Typography,Button, Box, LinearProgress } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PasswordField from '../form-controls/PasswordField';


RegisterForm.propTypes = {
    onSubmit: PropTypes.func, 
};

function RegisterForm(props) {
      const schema = yup.object({     //Định nghĩa schema là 1 object
        fullName: yup.string().required('Please enter your full name')
        .test('Should has at least two words', 'Please enter at least two words', (value) => {
            // console.log('Value:',value);
            return value.split(' ').length >= 2;
        }),
        email: yup.string().required('Please enter your email')
        .email('Please enter a valid email address'),
        password: yup.string().required('Please enter a password')
        .min(6, 'Password must be at least 6 characters'),
        retypePassword: yup.string().required('Please retype your password')
        .oneOf([yup.ref('password')], 'Passwords must match'),
        //1 trong giá trị định nghĩa trong mảng. Giống giá trị field yup.ref('password')
        //không giống thì passwords must match
      
      }).required();

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),  
    });

    const handleSubmit = async (values) => {
        const {onSubmit} = props;
        if(onSubmit) {
            await onSubmit(values);     //đợi handleSubmit từ register page xử lý xong
        }

        // form.reset();       //Reset form
    };

    const { isSubmitting } = form.formState;

    return (
        <Box sx={{ marginTop: "8px" }} >
            {isSubmitting && <LinearProgress sx={{ position: "absolute" , top: "16px", left: 0, right: 0}} />}

            {/* <Avatar sx={{ margin: '0 auto', bgcolor: 'secondary.main'}} >
                <LockOutlinedIcon> </LockOutlinedIcon>
            </Avatar> */}

            <Typography sx={{ margin: "16px 0px 32px 0px" ,textAlign: "center"}} component="h3" variant="h5">Create An Account </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>  
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} fullWidth/>
                <PasswordField name="retypePassword" label="Retype Password" form={form} fullWidth/>

                <Button 
                disabled={isSubmitting} type="submit"
                sx={{ mt: 3, mb: 2}}
                variant="contained"  
                size='large'
                fullWidth>
                    Sign up
                </Button>
            </form>
        </Box>
    );
}

export default RegisterForm;