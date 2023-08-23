import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-align: center;
max-width: 120px;
width: 60px;
height: 60px;
padding: 7px;
margin: 5px;
background-color: #333333;
border: none;
color: #FFFFFF;
font-size: 22px;
border-radius: 50%;
font-family: 'Helvetica Neue',sans-serif;
&:hover{
    opacity: 0.6;
    
}
&.bckg-orange{
    background-color: orange;
}

&.numberZero{
    border-radius: 75px;
    padding-left: 20px;
    text-align: inherit;
    max-width: 135px;
    width: 135px;
    height: 60px;
}
&.textblack{
    color: #000000;
    background-color:#A5A5A5;
}
`