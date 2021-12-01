import React from 'react'

export interface resourceProps {
    kind: string;
    amount: number;
}

export interface resourceState {
}

// function Resource(props) {
//     return (
//         <div>{this.props.kind}: {this.props.amount}</div>
//     )
// }

class Resource extends React.Component<resourceProps, resourceState> {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div></div>
        );
    }
    tick() {
        
    }
}

export default Resource;