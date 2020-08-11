import React from 'react';
import {HomeSection,HomeInfo,HeadingOne,Paragraph,Span,HeadingFour,Button} from './Homestyle.js';

const Home=() =>{
  return (
    <HomeSection className="text-center">
      <div className="container">
        <HomeInfo>
          <HeadingOne>Abdo Tarek</HeadingOne>
          <HeadingFour>Creative Director</HeadingFour>
          <Paragraph>Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web 
                and Mobile. Let us work together. Thank you. 
          </Paragraph>
          <Button className="btn btn-warning">Let's Begin</Button>
        </HomeInfo>
      </div>
    </HomeSection>
  );
}

export default Home;