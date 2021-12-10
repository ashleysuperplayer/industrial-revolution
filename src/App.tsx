import React, { useState, useEffect } from 'react';
import Timer from './Timer'
import ResourceDisplay from './Resource'
import Button from './Button'
import './index.css';

// structs
interface appProps {
  
}

interface City {
  name: string;
  space: number;
  resources: Array<Resource>;
}

interface Country {
  name: string;
  space: number;
  cities: Array<City>;
}

interface Producer {
  name: string;
  product: string; // idk what type this will be yet
  delta: number;
  amount: number;
  deltaEffects: Array<number>;
  deltaBase: number;
  changer: Function;
}

interface Resource {
  name: string;
  delta: number;
  amount: number;
  deltaEffects: Array<number>;
  deltaBase: number;
  changer: Function;
}

// my app :)
function App(props: appProps) {
  function startup() {
    initPR();
  }

  function initPR() {
    setPopulation(setChanger(population, setPopulation));
    setLabour(setChanger(labour, setLabour));
    setRock(setChanger(rock, setRock));
    setWood(setChanger(wood, setWood));
    setIron(setChanger(iron, setIron));
    // setFarmer(setChanger(farmer, setFarmer));
  }

  function update() {
    updateResources();
    updateDelta();
  }

  function newDelta(resource: Resource, base: number) {
    let newDelta: number = base;
    console.log(newDelta);
    for (let effect of resource.deltaEffects) {
      newDelta *= effect;
      console.log("increased pop delta: " + newDelta);
      console.log("effect: " + effect);
    }
    return {...resource, delta: newDelta};
  }

  function resourceClick(resource: Resource) {
    console.log("button clicked");
  }

  function newAmount(oldResource: Resource) {
    let newResource = oldResource
    newResource.amount += newResource.delta;
    console.log(newResource.amount);
    return ({...newResource, amount: newResource.amount});
  }

  function newLabourAmount(oldLabour: Resource) {
    let newAmount: number = population.amount;
    for (let effect of oldLabour.deltaEffects) {
      newAmount *= effect;
    }
    return ({...oldLabour, amount: newAmount});
  }

  function populationGrowth(oldPopulation: Resource) {
    let r = 1; // growth rate coefficient. all effects on population growth e.g. disease, pollution, crime
    let k = 10000000; // carrying capacity. k stands for KISS, space / space requirement
    let P = oldPopulation.amount; // current population
    for (let effect of oldPopulation.deltaEffects) {
      r *= effect;
    }
    return({...oldPopulation, delta: r*P*(1-P/k)});
  }

  function updateResources() {
    // only for resources that update with newAmount
    for (let resource of resourceList) {
      resource.changer(newAmount(resource));
    }
    setLabour(newLabourAmount(labour));
  }

  // strictly for deltas that update every tick
  function updateDelta() {
    setPopulation(populationGrowth(population));
  }

  function setChanger(resource: Resource, setter: Function): Resource;

  function setChanger(producer: Producer, setter: Function): Producer;

  function setChanger(PR: any, setter: any) {
    let newPR = PR;
    newPR.changer = setter
    return {...newPR}
  }

  // hooks
  // initialize resources
  const [population, setPopulation] = useState<Resource>({name: "population", delta: 0, amount: 7870000, deltaEffects: [1, 0.001], deltaBase: 1, changer: () => {return setChanger(population, setPopulation)}});

  const [labour, setLabour] = useState<Resource>({name: "labour", delta: 0, amount: 0, deltaEffects: [0.48], deltaBase: 0, changer: () => {return setChanger(labour, setLabour)}});

  const [rock, setRock] = useState<Resource>({name: "rock", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1, changer: () => {return setChanger(rock, setRock)}});

  const [wood, setWood] = useState<Resource>({name: "wood", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1, changer: () => {return setChanger(wood, setWood)}});

  const [iron, setIron] = useState<Resource>({name: "iron", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1, changer: () => {return setChanger(iron, setIron)}});

  let resourceList: Array<Resource> = [population, rock, wood, iron];

  // initialize producers
  const [farmer, setFarmer] = useState<Producer>({name: "farmer", product: "food", delta: 0, amount: 0, deltaEffects: [1], deltaBase: 0, changer: () => {return setChanger(farmer, setFarmer)}})

  let producerList = [farmer]

  // run startup once on loading
  useEffect(() => {
    startup();
  }, []);

  return ( 
  <body className="topDiv">
    <div>
      <div>
        <ResourceDisplay name = {population.name} amount = {Math.round(population.amount).toString()}></ResourceDisplay>
        {population.delta}
      </div>
      <div>
        <Button className = "" onClick = {() => resourceClick(labour)} text="labour"/>
        <ResourceDisplay name = {labour.name} amount = {Math.round(labour.amount).toFixed(1)}></ResourceDisplay>
        {labour.delta /*debugging*/}
      </div>
      <div>
        <ResourceDisplay name = {rock.name} amount = {Math.round(rock.amount).toFixed(1)}></ResourceDisplay>
      </div>
      <div>
        <ResourceDisplay name = {wood.name} amount = {Math.round(wood.amount).toFixed(1)}></ResourceDisplay>
      </div>
      <div>
        <ResourceDisplay name = {iron.name} amount = {Math.round(iron.amount).toFixed(1)}></ResourceDisplay>
      </div>
    </div>
    <div>
      <Timer handleUpdate = {update}></Timer>
    </div>
  </body>)
}

export default App;