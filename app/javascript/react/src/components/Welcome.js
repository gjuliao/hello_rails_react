import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Welcome = () => {
  return (
    <div>Welcome</div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Welcome />, document.getElementById('root'))
})

export default Welcome