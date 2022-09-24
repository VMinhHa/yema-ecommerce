import Button from 'components/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'redux/auth/userSlice'


const DropdownUser = () => {
    
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.current)
    
    const handleLogout = () => {
        const action = logout()
        dispatch(action)
    }
  return (
    <div className="dropdown__item__user">
        <i className='bx bx-user '
        >
        </i>
            <div className="dropdown__item__content">
                <li>Xin chào: {user.fullName}</li>
                <li>{user.email}</li>
                <Button 
                    size='sm'
                    onClick={handleLogout}
                className="dropdown__item__btn">Đăng xuất</Button>
            </div>
    </div>
  )
}

export default DropdownUser