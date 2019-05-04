import React from 'react'
import { Logo } from '../ui/icons'

const Footer = () =>{
    return (
        <footer className='bck_blue'>
            <div className='footer_logo'>
                <Logo
                width='70px'
                height='70px'
                link={true}
                linkTo='/'
                />
            </div>
            <div className='footer_discl'>
            Manchester city @2018. All right reserved
            </div>
        </footer>
    )
}

export default Footer