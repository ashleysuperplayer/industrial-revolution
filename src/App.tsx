import React, { useState, useEffect } from 'react';
import Timer from './Timer'
import Resource from './Resource'
import Button from './Button'
import './index.css';

// structs
interface appProps {
  
}

interface producerState {
  name: string;
  delta: number;
  deltaEffects: Array<number>;
  deltaBase: number;
}

interface resourceState {
  name: string;
  delta: number;
  amount: number;
  deltaEffects: Array<number>;
  deltaBase: number;
}

function App(props: appProps) {
  function update() {
    updateResources();
    updateDelta();
  }

  function newDelta(resource: resourceState, base: number) {
    let newDelta: number = base;
    console.log(newDelta);
    for (let effect of resource.deltaEffects) {
      newDelta *= effect;
      console.log("increased pop delta: " + newDelta);
      console.log("effect: " + effect);
    }
    return {...resource, delta: newDelta};
  }

  function resourceClick(resource: resourceState) {
    console.log("button clicked");
  }

  function newAmount(oldResource: resourceState) {
    let newResource = oldResource
    newResource.amount += newResource.delta;
    console.log(newResource.amount);
    return ({...newResource, amount: newResource.amount});
  }

  function newLabourAmount(oldLabour: resourceState) {
    let newAmount: number = population.amount;
    for (let effect of oldLabour.deltaEffects) {
      newAmount *= effect;
    }
    return ({...oldLabour, amount: newAmount});
  }

  function populationGrowth(oldPopulation: resourceState) {
    let r = 1; // growth rate coefficient. all effects on population growth e.g. disease, pollution, crime
    let k = 10000000; // carrying capacity. k stands for KISS, space / space requirement
    let P = oldPopulation.amount; // current population
    for (let effect of oldPopulation.deltaEffects) {
      r *= effect;
    }
    return({...oldPopulation, delta: r*P*(1-P/k)});
  }

  function updateResources() {
    setPopulation(newAmount(population));
    setLabour(newLabourAmount(labour));
    setRock(newAmount(rock));
    setWood(newAmount(wood));
    setIron(newAmount(iron));
  }

  function updateDelta() {
    setPopulation(populationGrowth(population));
  }

  //initialise resource state
  const [population, setPopulation] = useState<resourceState>({name: "population", delta: 0, amount: 7870000, deltaEffects: [1, 0.001], deltaBase: 1});
  const [labour, setLabour] = useState<resourceState>({name: "labour", delta: 0, amount: 0, deltaEffects: [0.4], deltaBase: 0});
  const [rock, setRock] = useState<resourceState>({name: "rock", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1});
  const [wood, setWood] = useState<resourceState>({name: "wood", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1});
  const [iron, setIron] = useState<resourceState>({name: "iron", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1});

  return ( 
  <body className="topDiv">
    <div>
      <div>
        <Resource name = {population.name} amount = {Math.round(population.amount).toString()}></Resource>
        {population.delta}
      </div>
      <div>
        <Button className = "" onClick = {() => resourceClick(labour)} text="labour"/>
        <Resource name = {labour.name} amount = {Math.round(labour.amount).toFixed(1)}></Resource>
        {labour.delta /*debugging*/}
      </div>
      <div>
        <Resource name = {rock.name} amount = {Math.round(rock.amount).toFixed(1)}></Resource>
      </div>
      <div>
        <Resource name = {wood.name} amount = {Math.round(wood.amount).toFixed(1)}></Resource>
      </div>
      <div>
        <Resource name = {iron.name} amount = {Math.round(iron.amount).toFixed(1)}></Resource>
      </div>
    </div>
    <div>
      <Timer handleUpdate = {update}></Timer>
    </div>
  </body>)
}

export default App;