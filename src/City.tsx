import React, { useState, useEffect } from 'react';

interface CityProps {
    name: string;
    space: number;
    resources: Array<Resource>;
    producers: Array<Producer>
}

interface Resource {
    name: string;
    delta: number;
    amount: number;
    deltaEffects: Array<number>;
    deltaBase: number;
    changer: Function;
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

function City(props: CityProps) {
    function newFarmer() {
        
    }
    /* need a function to handle ticks. cities will compartmentalize the global state. 
    Timer sends tick() to App -> App sends tick() to Cities -> 
    Cities tick() along once -> Cities pass state back to App -> 
    App handles interactions between cities and sends props back down to them -> Timer sends tick() to App
    */
    return (
    <div>

    </div>)
}