import styled from 'styled-components';

export const Headingtwo = styled.h2`
    font-size: 60px;
    
    @media(max-width:767px){
        font-size: 33px;
        text-align:center;
    }
`

export const Part = styled.div`
    margin-top: 20px;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;

    @media(max-width:767px){
        width: 80%;
        margin: 10px auto;
        padding: 20px 0;
    }
`

export const Icon=styled.i`
    color: #888;
    margin-bottom: 20px;

    @media(max-width:767px){
        margin-bottom: 0;
    }
`

export const PartTitle=styled.h3` 
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px;

    @media(max-width:767px){
        margin-bottom: 10px;
    }
`

export const Line=styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px;

    @media(max-width:767px){
        margin-bottom: 0;
    }
`

export const PartDesc=styled.p`
    font-size: 14px;
    color: #888;
    padding: 20px;

    @media(max-width:767px){
        margin: 0;
    }
`