import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

//components


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else {
            setScrollNav(false);
        }
    };

    const handleSignInNavBar = (e) => {
        setIsOpenModal(!isOpenModal)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    // function Navbar(props){
    //     return(props.trigger) ? (
    //         <NavBtnLink to="/signin">Sign In</NavBtnLink>
    //     )
    // }
        
    // export default function Modal(){
    //     const [modal, setModal] = useState(false);
    // }
  return ( 
   <>
   <IconContext.Provider value={{color: '#fff'}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
                Admin Dashboard
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
           
            <NavBtn>
                <NavBtnLink to="#" onClick={handleSignInNavBar}>Logout</NavBtnLink>
            </NavBtn>

        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    
   </>
  )
}

export default Navbar