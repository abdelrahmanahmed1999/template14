import styled from 'styled-components';

export const MediaInfo=styled.div`
    position: relative;
    height: 200px;
    background: ${props => props.item === 1 ? '#3b5998' : '' } ;
    background: ${props => props.item === 2 ? '#498cbf' : ''};
    background: ${props => props.item === 3 ? '#cc2127' : ''};

    @media(max-width:767px){
        height: 140px;
    }
`
  
export const Media=styled.div`
    position: absolute;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
  
export const Grid=styled.div`
    padding-left:0;
    padding-right:0;
`
   
export const Icon=styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
`
  
export const Headingfour=styled.h4`
    font-weight: bold;
    font-size: 20px;
    color: #FFF
`