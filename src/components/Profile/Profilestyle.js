import styled from 'styled-components';

export const ProfileSection=styled.section`
    padding: 50px 0;
    overflow: hidden;
    
    @media(max-width:767px){
        padding: 20px 0;
    }
`

export const HeadingTwo=styled.h2`
    foont-size:60p;

    @media(max-width:767px){
        font-size:33px;
    }
`
    
export const ProfileWeb=styled.li`
    font-weight: normal;
    color: #eb5424
`
export const SkillsDesc=styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const ProfileProg=styled.div`
    overflow:hidden;
`

export const ProfilePerc=styled.span`
    float:right;
    margin-right: 100px;
`