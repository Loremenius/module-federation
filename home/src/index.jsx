import React from 'react';
import ReactDOM from "react-dom";

const App = () =>{

    return(
        <div className="App">
            <h1>Hello World</h1>
        </div>
    )
}

export default App;

if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(<App />, document.getElementById('root'));
  }