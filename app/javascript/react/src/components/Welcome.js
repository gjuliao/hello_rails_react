import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions/index';

const Welcome = ({ greeting, fetchGreeting }) => {

    useEffect(() => {
        fetchGreeting();
      }, []);

  return (
    <div>
      {greeting.loading && <p>Loading...</p>}
      {!greeting.loading && !greeting.error && <p>{greeting.greeting.message}</p>}
      {greeting.error && <p>Error: {greeting.error.message}</p>}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      greeting: state.greeting,
    };
  };
  
  export default connect(mapStateToProps, { fetchGreeting })(Welcome);