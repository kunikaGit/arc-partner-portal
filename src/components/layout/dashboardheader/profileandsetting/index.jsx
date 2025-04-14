import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { images } from '../../../../utils/customFn';
import './profileandsetting.scss'
import { DownIcon } from '../../../../icons/icons';
const ProfileAndSetting = () => {
    return (
        <div className='profile-setting-wrapped'>
            <div className='profile-section'>
                <div className='profile-img'>
                    <img src={images['profile-boy.svg']} alt='profile' />
                </div>
                <div className='details'>
                    <NavDropdown
                        title={
                            <div className='name'>
                                <span>Kunika Kero</span>
                                <DownIcon />
                            </div>
                        }>
                        <NavDropdown.Item href="/">Item1</NavDropdown.Item>
                        <NavDropdown.Item href="/">Item2</NavDropdown.Item>
                        <NavDropdown.Item href="/">Item3</NavDropdown.Item>
                    </NavDropdown>
                    {/* <div className='designation'>
                        <h3>Admin</h3>
                    </div> */}
                </div>
            </div>
            {/* <div className='setting'>
                <Link to=""><img src={Icons['setting.svg']} alt='setting' /></Link>
            </div> */}
        </div>
    )
}

export default ProfileAndSetting
