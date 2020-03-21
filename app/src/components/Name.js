import React from "react";
import { inject, observer } from "mobx-react";
import Heading from './Text/Heading';

class Name extends React.Component {
  render() {
    return (
      <div className='text-center mt-5'>
        <Heading value='Prakhar Baveja' />
      	<div className="col-8 mx-auto">
          <p className='source-code-pro m-3'>Hello.</p>
        </div>
      </div>
    );
  }
}

export default inject('spotifyStore')(observer(Name));
