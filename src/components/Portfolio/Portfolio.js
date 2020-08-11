import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {PortfolioSection,HeadingTwo,UnorderedList,ListItem,Grid,ImgBox,Image,Overlay,OverlaySpan} from './Portfoliostyle.js';

const Portfolio=()=> {

  const [ images , setImages ] = useState([])

  useEffect ( () => {
    axios.get('js/data.json').then( respond => { setImages(respond.data.portfolio) } )
  } , [] )

    const PortfolioImages = images.map((elem)=>{
      return(
        <Grid className='col-md-3 col-xs-6' key={elem.id}>
          <ImgBox>
          <Overlay>
            <OverlaySpan>Show Image{elem.id}</OverlaySpan>
          </Overlay>
            <Image src={elem.image} alt=""/>
          </ImgBox>
        </Grid>
      )
    });

  return (
    <PortfolioSection>
        <HeadingTwo className="text-center">My Portfolio</HeadingTwo>
        <UnorderedList className="list-unstyled text-center">
          <ListItem active>All</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>photoshop</ListItem>
          <ListItem>Wordpress</ListItem>
          <ListItem>mobile</ListItem>
        </UnorderedList>
        <div className="row">
          {PortfolioImages}
          <div className="clearfix"></div>
        </div>    
    </PortfolioSection>  
  );
}

export default Portfolio;