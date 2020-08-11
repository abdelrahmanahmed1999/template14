import styled from 'styled-components'

export const HomeSection = styled.section`
    height:500px;
    background:url("images/Home/home-bg.jpg");
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size:cover;
    position:relative;
`

export const HomeInfo = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`

export const HeadingOne = styled.h1`
    font-size:60px;
    font-weight:bold;
    color:#5e5e5e;

    @media(max-width:767px){
        font-size:33px;
    }
`

export const HeadingFour = styled.h4`
    font-size:35px;
    color:#eb5424;
    margin-bottom:20px;
  
    @media(max-width:767px){
        font-size:23px;
    }
`

export const Paragraph = styled.p`
    font-size:20px;
    line-height:1.5;
    color:#888;
    margin-bottom:20px;
        
    @media(max-width:767px){
        font-size:15px;
        width:300px;
    }

`

export const Span = styled.span`
    color:#000;
`

export const Button = styled.button`
    font-size:18px;
    border:0;
    padding:15px;
    font-weight:bold;

    &:hover{
        background:#FFF;
        color:#eb5424;
    }
`