import React, { useState, useEffect } from 'react';
import './App.css';
import Timer from './Timer'
import Resource from './Resource'
import Button from './Button'
import { resourceUsage } from 'process';

// structs
interface appProps {

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
  }

  function calcDelta(resource: resourceState) {
    let newDelta: number = resource.deltaBase;
    for (let effect of resource.deltaEffects) {
      newDelta *= effect;
    }
    return {...resource, delta: newDelta};
  }

  function resourceClick(resource: resourceState) {
    console.log("button clicked");
  }

  function newAmount(oldResource: resourceState) {
    let newResource = oldResource;
    newResource.amount += newResource.delta;
    console.log(newResource.amount);
    return ({...newResource});
  }

  function newLabourAmount(oldLabour: resourceState) {
    let newAmount: number = population.amount;
    for (let effect of oldLabour.deltaEffects) {
      newAmount *= effect;
    }
    return ({...oldLabour, amount: newAmount});
  }

  function updateResources() {
    setPopulation(newAmount(population));
    setLabour(newLabourAmount(labour));
    setRock(newAmount(rock));
    setWood(newAmount(wood));
    setIron(newAmount(iron));
  }

  //initialise resource state
  const [population, setPopulation] = useState<resourceState>({name: "population", delta: 0, amount: 100, deltaEffects: [1, 1.02], deltaBase: 1});
  const [labour, setLabour] = useState<resourceState>({name: "labour", delta: 0, amount: 0, deltaEffects: [0.4, 2], deltaBase: 0});
  const [rock, setRock] = useState<resourceState>({name: "rock", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1});
  const [wood, setWood] = useState<resourceState>({name: "wood", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1});
  const [iron, setIron] = useState<resourceState>({name: "iron", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1});

  return ( 
  <div>
    <div>
      <div>
        <Resource name = {population.name} amount = {population.amount}></Resource>
      </div>
      <div>
        <Button className = "" onClick = {() => resourceClick(labour)} text="labour"/>
        <Resource name = {labour.name} amount = {labour.amount}></Resource>
        {labour.delta /*debugging*/}
      </div>
      <div>
        <Resource name = {rock.name} amount = {rock.amount}></Resource>
      </div>
      <div>
        <Resource name = {wood.name} amount = {wood.amount}></Resource>
      </div>
      <div>
        <Resource name = {iron.name} amount = {iron.amount}></Resource>
      </div>
    </div>
    <div>
      <Timer handleUpdate = {update}></Timer>
    </div>
  </div>)
}

export default App;