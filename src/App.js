import React, { Component } from 'react';
import { Button, Tab } from 'semantic-ui-react';

import simpleModel from './models/simpleModel';
import linearRegressionModel from './models/linearRegressionModel';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      simpleModelResult: -1,
      linearRegressionResult: -1
    };
  }

  executeSimpleModel(input) {
    const prediction = simpleModel(input);
    this.setState({
      simpleModelResult: prediction
    });
  }

  async executeLinearRegression(input) {
    const prediction = await linearRegressionModel(input);
    this.setState({
      linearRegressionResult: prediction
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
      },
      {
        menuItem: 'Modelos y capas',
        render: () => (
          <Tab.Pane>
            <div className="tab-content">
              <p>
                Ejemplo usando modelos y capas.
              </p>
              <hr />

              <Button primary onClick={() => this.executeLinearRegression(20)}>Ejecutar regresión lineal</Button>
              <div>
                Result: {this.state.linearRegressionResult}
              </div>
            </div>
          </Tab.Pane>
        )
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hola TensorFlow JS!</h1>
        </header>

        <Tab panes={panes} />

      </div>
    );
  }
}

export default App;
