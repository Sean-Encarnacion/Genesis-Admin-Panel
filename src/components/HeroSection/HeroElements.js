import styled from 'styled-components';

export const Container = styled.div`
    background: #FEF9E7;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const Panel = styled.div`
    background: #333;
    margin-bottom: 3rem;
    border-radius: 7px;
    box-shadow: #111 5px 5px 6px;
    padding: 1.5rem 6rem;
    display: flex;
    flex-direction: column;
    
`

export const Title = styled.span`
    font-size: 1.2rem;
    color: #eee;
    margin: 0 auto 1.7rem auto;
    
`

export const Input = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled.button`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    margin: 10px;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #a8ffc4;
        color: #010606;
    }
`
