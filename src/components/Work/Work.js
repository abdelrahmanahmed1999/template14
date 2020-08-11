import React from 'react';
import axios from 'axios';
import {Headingtwo,Part,Icon,PartTitle,Line,PartDesc} from './Workstyle.js';

class Work extends React.Component{

  state={
    ourwork:[]
  }

  componentDidMount(){
    axios.get('js/data.json').then((respond) =>{
      this.setState({
        ourwork:respond.data.works
      });
    })
  }

  render(){

    const work=this.state.ourwork,
          allwork=work.map((elem)=>{
            return(
              <div key={elem.id} className="col-md-4">
                  <Part className="card">
                    <div className="card-body">
                        <Icon className={elem.icon_name}></Icon>
                        <PartTitle className="card-title">{elem.title}</PartTitle>
                        <Line className="line"/>
                        <PartDesc className="card-text">{elem.body}
                        </PartDesc>
                    </div> 
                  </Part>
              </div>
            )
          });

    return (
      <section className="Work">
        <div className="container">
          <Headingtwo>My Work</Headingtwo>
          <div className="row">
            {allwork}
          </div>
        </div>
      </section>
    );
  }
}

export default Work;