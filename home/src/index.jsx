import React from 'react';
import ReactDOM from "react-dom";
import { Typography } from "@material-ui/core";

const App = () =>{

    return(
        <div className="App">
            <div className = "App">
                <Typography variant="h2">
                    Hello World
                </Typography>
            </div>
        </div>
    )
}

export default App;

if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(<App />, document.getElementById('root'));
  }