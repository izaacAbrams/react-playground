import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    state = {
        chamber: null,
        spinningTheChamber: false
    }
    componentWillUnmount() { 
        clearTimeout(this.timeout);
    }
    pullTheTrigger = () => {
        this.setState({
        spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {  
            const randomChamber = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
            })
            
        }, 2000)
    }
    renderText() {
        const { chamber, spinningTheChamber} = this.state;
        const { bulletInChamber} = this.props;
        if(spinningTheChamber){
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (bulletInChamber === chamber) {
            return 'BANG!!!!'
        } else {
            return `you're safe!`
        }
    }
    render() {
        return (
            <div>
                <p>{this.renderText()}</p>
                <button onClick={this.pullTheTrigger}>
                    Pull the Trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun;