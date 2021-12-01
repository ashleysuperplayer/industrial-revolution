import React from 'react';

type timerProps = {
};

type timerState = {
    time: string;
};

class Timer extends React.Component<timerProps, timerState> {
    intervalID: number;
    constructor(props: timerProps) {
        super(props);
        this.state = { time: new Date().toLocaleString() };
        this.intervalID = 0;
    }
    render () {
        return (
            null
        )
    }
    componentDidMount() {
        this.intervalID = window.setInterval(
            () => this.tick(),
            200
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString()
        })
    }
}

export default Timer;