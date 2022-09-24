import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

PasswordField.propTypes = {

    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disable: PropTypes.bool,

};

function PasswordField(props) {    
    const { form, name, label, disable } = props;

    const { control } = form;    //control là 1 object chứa các method để lấy dữ liệu từ form
    
    const [showPassword, setShowPassword] = useState(false);
    
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        
            <Controller
                name={name}
                control={control}
                
                render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
                    <>
                    <FormControl margin="normal" variant="outlined" fullWidth>
                    <InputLabel htmlFor={name}>{label}</InputLabel>
                    <OutlinedInput
                        id={name}
                        error={invalid}
                        type={showPassword ? 'text' : 'password'}
                        label={label}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={toggleShowPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                    />  
                    </FormControl>
                    <FormHelperText error>{error?.message}</FormHelperText>

                    </>
                )}
            />
   
    );

}

export default PasswordField;