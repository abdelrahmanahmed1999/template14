import styled from 'styled-components';

export const ContactSection=styled.section`
    padding: 50px 0;

    @media(max-width:767px){
        padding: 20px 0;
    }
`

export const HeadingOne=styled.h1`
    font-size: 60px;
    margin-bottom: 30px;

    @media(max-width:767px){
        font-size: 33px;
    }
`
  
export const Form=styled.form`
    width: 70%;
    margin: auto;

    @media(max-width:767px){
        width: 80%;
    }
`

export const Input=styled.input`
    box-sizing: border-box;
    outline: 0;
    border:1px solid #000;
    padding: 5px;
    margin-bottom: 10px;    

    @media(max-width:767px){
        width: 100%;
    }
`
  
export const Grid=styled(Input)`
    width:49.5%;

` 

export const InputEmail =styled(Grid)`
    margin-left:1%;

    @media(max-width:767px){
        margin-left:0;
    }
`
    
export const TextArea=styled.textarea`
    outline: 0;
    background: #ccc;

    @media(max-width:767px){
        width: 100%;
    }
`
  
export const InputSubmit=styled(Input)`
    width: 30%;
    margin-top:10px;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
`