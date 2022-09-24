import { Box, Button, Dialog, DialogContent, IconButton } from '@mui/material'
import React, { useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux'

import { showForm, hideForm } from 'redux/auth/userSlice'

import Slide from '@mui/material/Slide';
import Register from '../Auth/components/Register'
import Login from '../Auth/components/Login'

import DialogActions from '@mui/material/DialogActions';
import DropdownUser from 'Auth/components'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
  });
  const MODE = {
	LOGIN: 'login',
	REGISTER: 'register',
  }
const LoginModal = () => {

    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.user.current)
	const isLoggedIn = !!loggedInUser.id
    // const [open, setOpen] = useState(false);

    const isOpen = useSelector(state => state.user.showForm)

    const [mode, setMode] = useState(MODE.LOGIN);
    
    const handleClose = () => {
        dispatch(hideForm())
    }

    const handleClickOpen = () => {
        dispatch(showForm())
    }

  return (
    <div 
        className="header__menu__item header__menu__right__item">
        {
            !isLoggedIn && (
                <button 
                    className='header__menu__item__btn'
                    onClick={handleClickOpen}>
                        Đăng nhập 
                </button>
            )
        }
        {
            isLoggedIn && (
                <DropdownUser/>
            )
        }
    <Dialog
        disableEscapeKeyDown
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        // aria-describedby="alert-dialog-slide-description"
    >
        {/* <DialogTitle>{"Login"}</DialogTitle> */}
        <IconButton style={{ position: "absolute", top: "8px", right: "8px"}}
            onClick={handleClose}
        >
        <CloseIcon />
        </IconButton>

        <DialogContent>
        {mode === MODE.REGISTER && (
            <>
            <Register closeDialog={handleClose} /> 

            <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)} >
                Already have an account. Login here.
                </Button>
            </Box>
            </>
        )}

        {mode === MODE.LOGIN && (
            <>
            <Login closeDialog={handleClose} />
            
            <Box textAlign="center">
                <Button color="primary" 
                onClick={() => setMode(MODE.REGISTER)} >
                Don't have an account. Register here.
                </Button>
            </Box>
            </>
        )}

        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
    </Dialog>
    </div>
  )
}

export default LoginModal