import styled from 'styled-components';

export const AboutSection = styled.section`
    height: 500px;
    background-image: url('images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    @media(max-width:767px){
        height: 350px;
    }
`

export const InfoTitle = styled.h2`
    font-weight: bold;
    font-size: 60px;
    margin:10px 0;

    @media(max-width:767px){
        font-size: 33px;
    }
`

export const InfoDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-top:10px;
    margin-bottom: 20px;

    @media(max-width:767px){
        font-size: 30px;
    }
`

export const InfoDesc = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`

export const Anchor = styled.a`
    text-decoration: none
`