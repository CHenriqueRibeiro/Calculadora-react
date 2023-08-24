import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height:100vh;
background-color:#CACACA;
font-family: 'Helvetica Neue', sans-serif;

display:flex;
justify-content:center;
align-items:center;
`

export const Content = styled.div`
border-radius:15px;
padding: 15px;
background-color:#000000;
width: 450px;


`

export const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;


`

export const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center

`