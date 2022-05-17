import styled from 'styled-components'


export const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #11111196;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainModal = styled.div`
  border-radius: 3px;
  padding: 1.5rem 6rem;
  background: #eee;

  .close-btn {
    background: #8bd69f;
    padding: 0.5rem 1rem;
    border-radius: 3px;
  }

  .main-body {
    display: flex;
    flex-direction: column;

    span {
      margin: 0 0 1rem 0;
      font-size: 0.8rem;
      font-weight: bold;
    }
  }



  .data {
    color: green;
  }
`