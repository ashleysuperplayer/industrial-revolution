interface resourceProps {
    name: string;
    amount: string;
  }

function Resource(props: resourceProps) {
    return (
        <div>{props.name}: {props.amount}</div>
    )
}

export default Resource;