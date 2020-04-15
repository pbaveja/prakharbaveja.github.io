import React from "react";
import { inject, observer } from "mobx-react";
import Heading from './Text/Heading';

class Name extends React.Component {
  render() {
    return (
      <div className='text-center mt-5'>
        <Heading value='Prakhar Baveja' />
      	<div className="col-12 col-md-10 mx-auto">
          {/*<p className='source-code-pro m-3'>Hello.</p>*/}
          <h6 className='source-code-pro mt-4'>full-stack developer</h6>
          <p className='source-code-pro text-sm mt-3'><i className='fas fa-map-marker-alt'></i>&nbsp;Delhi, India</p>
          <p className='font-regular mt-4'>Welcome to my corner on the web.<br/> 
          Here you can find some of my work with the technologies used to create them.<br/>
          Be it a restful API or an elegant box-shadow, I can help you craft it!
          </p>
        </div>
      </div>
    );
  }
}

export default inject('spotifyStore')(observer(Name));
