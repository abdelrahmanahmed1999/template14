import styled from 'styled-components';

export const PortfolioSection = styled.section`
    background: #f8f8f8;
    padding-top: 20px; 
`
  
export const HeadingTwo=styled.h2`
    font-size: 35px

    @media(max-width:767px){
        font-size: 33px
    }
`
  
export const UnorderedList=styled.ul`
    margin: 20px 0
`
export const ListItem = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    cursor:pointer;
    background: ${props => props.active ? '#eb5424' : ''};
    color: ${props => props.active ? '#fff' : '#000'};

    @media(max-width:767px){
        width: 72px;
    }
`

export const Grid = styled.div`
    padding-left:0;
    padding-right:0;
`
  
export const ImgBox=styled.div`
    font-size: 0;
    position: relative;

    &:hover > div{
        opacity:1
    }
`
  
export const Image=styled.img`
    width: 100%
`
  
export const Overlay=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
`  
export const OverlaySpan=styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
`