import React from "react";
import StoryBox from "./functionComponent";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };

    }

    inputNama = () => {
    }

    plusCounter = () => {
        if (this.state.value < 10) {
            this.setState({ value: this.state.value + 1 });
        }
    }
    minCounter = () => {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 });
        }
    }

    render() {
        return (
            <div>
                <p>Day by day, in every way. we getting better and batter</p>
                <h2>Hallo, {this.props.value} </h2>
                <h4>Berapa skala kebahagiaan kamu hari ini?</h4>
                <button onClick={this.minCounter}> - </button>
                <span> {this.state.value} </span>
                <button onClick={this.plusCounter}> + </button>
                <br /><br />
                <hr></hr>
                <StoryBox value = 'Khor'/>
            </div>
        )
    }
}



export default ClassComponent;

