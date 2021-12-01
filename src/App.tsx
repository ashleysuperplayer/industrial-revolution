import React from 'react';
import './App.css';
import Timer from './Timer';
import Resource from './Resource';
import {resourceProps} from './Resource';

let resList: Array<string> = [
  "rock", "wood", "tungsten", "iron"
]

function initialize() {
  let resources: Array<resourceProps> = []
  for (let kind of resList) {
    resources.push(initResource(kind))
  }
  return resources;
}

function initResource(kind: string) {
  return {
    kind: kind,
    amount: 0
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        renderResource(resources[1])
        <Timer></Timer>
      </div>
    );
  }
  renderResource(_props: resourceProps) {
    return (
    <Resource
      resourceProps = {_props}/>)
  };
}

export default App;
