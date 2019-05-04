import React from 'react'
import { Link } from 'react-router-dom'

import cityLogo from '../../Resources/images/logos/manchester_city_logo.png'

export const Logo = ({ link, linkTo, width, height }) => {
    const template = <div
        className='img_cover'
        style={{
            width: width,
            height: height,
            background: `url(${cityLogo}) no-repeat`
        }}
    />
    if (link) {
        return (
            <Link to={linkTo} className='link_logo'>
                {template}
            </Link>
        )
    } else {
        return template
    }
}