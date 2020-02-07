// import React, { Component } from 'react';
// import './App.css';
// import Form from './Form'

// class App extends Component {
//   render() {

//     return (
//       <div className="App">
//         <Form />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Keypad from "./components/Keypad";
import Form from './Form'

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

   onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


  
  calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
              result: NaN
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
          <div>
              <Form />
                <div className="calculator-body">
                    <Result result={this.state.result}/>
                    <Keypad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
