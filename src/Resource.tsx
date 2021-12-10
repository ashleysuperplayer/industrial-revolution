interface resourceProps {
    name: string;
    amount: string;
  }

function ResourceDisplay(props: resourceProps) {
    return (
        <div>{props.name}: {props.amount}</div>
    )
}

export default ResourceDisplay;