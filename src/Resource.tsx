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

class Resource extends React.Component<resourceProps, resourceState> { // eslint-disable-next-line
    constructor(props: resourceProps) {
        super(props)
    }
    render() {
        return(
            <div>{this.props.kind}: {this.props.amount}</div>
        );
    }
    tick() {
        
    }
}

export default Resource;