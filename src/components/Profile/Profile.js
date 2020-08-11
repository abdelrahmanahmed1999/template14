import React , { useState , useEffect }from 'react';
import axios from 'axios';
import {ProfileSection,HeadingTwo,ProfileWeb,SkillsDesc,ProfileProg,ProfilePerc} from './Profilestyle.js';

const Profile=() =>{

  const [ progress , setProgress ] = useState([]);

  useEffect (() => {
      axios.get('js/data.json').then((respond => {
        setProgress(respond.data.profile);
      }))
  },[]);

  const allprogress=progress.map(elem =>{
    return (
        <ProfileProg key={elem.id}>
          <span className="title">{elem.title}</span>
          <ProfilePerc>{elem.progress}</ProfilePerc>
        <div className="progress">
          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={elem.progress} aria-valuemin="0"
              aria-valuemax="100" style={{width:elem.progress}}>   
          </div>
        </div>  
        </ProfileProg>
    )
  })
  
  return (
    <ProfileSection>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <HeadingTwo>My profile</HeadingTwo>
            <ul className="list-unstyled">
              <div className="row">
                <li className="col-md-6 col-xs-6">
                  Name
                </li>
                <li className="col-md-6 col-xs-6">
                Abdo Tarek
                </li>
                <li className="col-md-6 col-xs-6">
                Birthday
                </li>
                <li className="col-md-6 col-xs-6">
                19/7/1999
                </li>
                <li className="col-md-6 col-xs-6">
                Address
                </li>
                <li className="col-md-6 col-xs-6">
                Faisal
                </li>
                <li className="col-md-6 col-xs-6">
                Phone
                </li>
                <li className="col-md-6 col-xs-6">
                123456789
                </li>
                <li className="col-md-6 col-xs-6">
                Website
                </li>
                <ProfileWeb className="col-md-6 col-xs-6">
                wwww.google.com
                </ProfileWeb>
              </div>
              <div className="clearfix"></div>
            </ul>
          </div>

          <div className="col-md-8">
            <HeadingTwo> Some Skills</HeadingTwo>
            <SkillsDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate,
               omnis similique.
            </SkillsDesc>
          {allprogress}       
          </div>
        </div>
      </div>
    </ProfileSection>
  );
}

export default Profile;