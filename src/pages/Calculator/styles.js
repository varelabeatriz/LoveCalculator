import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #FFFCF9;    
`;

export const Title = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap');
    color: #444;
    font-family: 'Vidaloka', serif;
    font-size: 72px;
    margin: 10% 0 -10px 0;
`;

export const Subtitle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
    color: #818181;
    font-weight: 400;
    font-size: 24px;
`;

export const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    background-color: #FF7BDC;
    color: white;
    border-radius: 16px;
    width: 230px;
    height: 55px;
    border: 0px;
    margin-top: 16px;
    transition: 400ms;
    outline: none;
    `;

    export const ButtonWrapper = styled.div`
    &:hover ${Button} {
        background-color: #EC58C5;
    }
    `;

export const Input = styled.input`
        height: 40px;
        margin: 14px;
        border-radius: 16px;
        border: 0px;
        box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.25);
        outline: none;
        padding-left: 10px;
        
    `;

export const Hearts = styled.img`
   max-width: 600px;
   max-height: 600px;
   position: relative;

`;



