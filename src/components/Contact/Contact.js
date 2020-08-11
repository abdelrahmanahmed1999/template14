import React from 'react';
import {ContactSection,HeadingOne,Form,Grid,Input,InputEmail,TextArea,InputSubmit} from './Contactstyle';
import Footer from './../Footer/Footer';

const Contact=()=>{
  return (
    <React.Fragment>
      <ContactSection className="text-center">
        <div className="container">
          <HeadingOne>Drop Me A Line</HeadingOne>
          <Form>
            <div className="row">
              <Grid type="text" className="col-md-6" placeholder="Your Name"/>
              <InputEmail type="email" className="col-md-6" placeholder="Your Email"/>
              <Input type="text" className="col-md-12" placeholder="Your Subject"/>
              <TextArea className="col-md-12" cols="30" rows="10" placeholder="Your Message"></TextArea>
            </div>
            <InputSubmit type="submit" className="btn btn-primary"  value="Send"/>
          </Form>
        </div>
      </ContactSection>
      <Footer/>
    </React.Fragment>
  );
}

export default Contact;