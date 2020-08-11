import React from 'react';
import {AboutSection,InfoTitle,InfoDir,InfoDesc,Anchor} from './Aboutstyle.js'

const  About=()=> {
  return (
    <AboutSection>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-6 col-md-6">
              <InfoTitle>This Is Me</InfoTitle>
              <InfoDir>Creative Directory</InfoDir>
              <InfoDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="www.goole.com">explicabo</Anchor> maxime 
                  quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad 
                  veritatis?
              </InfoDesc>  
            </div> 
          </div>
        </div>
    </AboutSection>
  );
}

export default About;