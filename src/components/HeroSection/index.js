import React, { useState } from 'react'
import { Button } from '../ButtonElements.js'
import { Container, Panel, Title, Input, NavBtn, NavBtnLink} from './HeroElements.js';


const HeroSection = () => {
    // const [hover, setHover] = useState(false)
    // const [isOpenModal, setIsOpenModal] = useState(false)

    // const handleSignInNavBar = (e) => {
    //     setIsOpenModal(!isOpenModal)
    // }

    // const onHover = () => {
    //     setHover(!hover)
    // }

    const [input, setInput] = useState({
        RID:"",
        PID:""
      });
    
      const handleInputChange = e => {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
      }

      const handleClick = e => {
          console.log(input)
      }
    return (
        <Container>
            <Panel>
                <Title>Reservations</Title>
                <Input type='text' name='RID' placeholder='Reservation ID' onChange={handleInputChange} />
                <NavBtn>
                <NavBtnLink to="#" onClick={handleClick}>Search</NavBtnLink>
            </NavBtn>
            </Panel>

            <Panel>
                <Title>Payments</Title>
                <Input type='text' name='PID' placeholder='Payment ID' onChange={handleInputChange}/>
                <NavBtn>
                <NavBtnLink to="#" onClick={handleClick}>Search</NavBtnLink>
            </NavBtn>
            </Panel>

           
        </Container>
    );
};

export default HeroSection