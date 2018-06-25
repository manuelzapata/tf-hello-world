import React, { Component } from 'react';
import { Button, Tab } from 'semantic-ui-react';

import simpleModel from './models/simpleModel';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      simpleModelResult: -1
    };
  }

  executeSimpleModel(input) {
    const prediction = simpleModel(input);
    this.setState({
      simpleModelResult: prediction
    });
  }

  render() {

    const panes = [
      { 
        menuItem: 'Conceptos básicos',
        render: () => (
          <Tab.Pane>

            <div className="tab-content">
              <p>
                Ejemplo de tensores, operaciones y un modelo simple.
              </p>
              <hr />

              <Button primary onClick={() => this.executeSimpleModel(2)}>Ejecutar modelo simple</Button>
              <div>
                Result: {this.state.simpleModelResult}
              </div>
            </div>

          </Tab.Pane>
        )
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Hola TensorFlow JS!</h1>
        </header>

        <Tab panes={panes} />

      </div>
    );
  }
}

export default App;
