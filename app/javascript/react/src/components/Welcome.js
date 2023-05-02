import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions/index';

const Welcome = ({ greeting, fetchGreeting }) => {

    useEffect(() => {
        fetchGreeting();
      }, []);

  return (
    <div>
      {<p>Loading...</p>}
      {<p>{greeting.message}</p>}
      {<p>error</p>}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      greeting: state.greeting,
    };
  };
  
  export default connect(mapStateToProps, { fetchGreeting })(Welcome);