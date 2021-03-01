import React from 'react';
import Logo from '../../assets/images/logo.png';
import {StyleHeader} from './style'


export default function Header() {
    return (
        <StyleHeader>
            <img src={Logo} 
             height='50px'
             width='250px'
            alt="Webmotors logo"/>            
        </StyleHeader>
    )
}
