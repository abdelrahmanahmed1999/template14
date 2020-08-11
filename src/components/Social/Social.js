import React from 'react';
import axios from 'axios';
import {MediaInfo,Grid,Media,Icon,Headingfour} from './Socialstyle';

class Social extends React.Component{

  state={
    social:[]
  }

  componentDidMount=()=>{
    axios.get('js/data.json').then(respond =>{
      this.setState({
        social:respond.data.social
      });
    });
  }

  render(){

    const allsocial=this.state.social.map(elem=>{
      return (
        <Grid className="col-md-4" key={elem.id}>
        <MediaInfo item={elem.id} >
          <Media>
            <Icon className={elem.icon}></Icon>
            <div className="media-body">
              <Headingfour className="media-heading">{elem.title}</Headingfour>
              <Headingfour className="media-heading">{elem.body}</Headingfour>
            </div>
          </Media>
        </MediaInfo>
      </Grid>
      )
    });
    return (
      <section className="social">
          <div className="row">

          {allsocial}
  
          </div>
      </section>
    );
  }  
}

export default Social;