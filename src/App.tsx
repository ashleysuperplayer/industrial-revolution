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
  resources: Array<resourceProps>;
  constructor(props: any) {
    super(props)
    this.resources = initialize()
  }
  render () {
    return (
      <div>
        {this.renderResources()}
        <Timer></Timer>
      </div>
    );
  }
  renderResource(_props: resourceProps) {
    return (
    <Resource
      kind = {_props.kind}
      amount = {_props.amount}/>)
  };
  renderResources() {
    let stitchedResources: Array<JSX.Element> = []
    for (let resource of this.resources) {
      stitchedResources.push(this.renderResource(resource))
    }
    return stitchedResources
  }
}

export default App;
