import { useEffect } from 'react';

type timerProps = {
    handleUpdate: Function
};

function Timer(props: timerProps) {
    useEffect(() => {
        const timerID = setInterval(tick, 200);
    
        return () => clearInterval(timerID);
      });
    
    function tick() {
      props.handleUpdate()
    }
    return (
      <div></div>
    )
}

export default Timer;