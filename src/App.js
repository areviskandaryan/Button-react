import React from 'react';
import ReactDOM from "react-dom";
import s from "./App.module.css";
import Button from "./components/Button/Button";
import Inputs from "./components/Inputs/Inputs";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: 5,
            maxValue: 30,
            count: localStorage.getItem('count') ? JSON.parse(localStorage.getItem('count')) : 0,
            step: 1,

        }
    }


    handleInc = ({target: {value}}) => {
        if ((this.state.count + this.state.step) <= this.state.maxValue) {
            this.setState((prevState) => {
                const count = prevState.step + prevState.count;
                localStorage.setItem('count', count);
                return ({count: count});
            })
        }

    }


    handleDec = ({target: {value}}) => {
        if (this.state.count - this.state.step >= this.state.minValue) {
            this.setState((prevState) => {
                const count = prevState.count - prevState.step;
                localStorage.setItem('count', count);
                return ({count: count});
            });
        }
    }

    handleReset = ({target: {value}}) => {
        this.setState((prevState) => {
            localStorage.setItem('count', 0);
            return ({count: 0});
        });
    }

    handleInputChangesStep = ({target: {value}}) => {
        let normalizeValue = Number(value)
        if (!Number.isNaN(normalizeValue)) {
            this.setState({step: normalizeValue});
        } else {
            throw new Error('Input should be a number!')
        }

    }
    handleInputChangesMinValue = ({target: {value}}) => {
        let normalizeValue = Number(value)
        if (!Number.isNaN(normalizeValue)) {
            this.setState({minValue: normalizeValue});
        } else {
            throw new Error('Input should be a number!')
        }
    }
    handleInputChangesMaxValue = ({target: {value}}) => {
        let normalizeValue = Number(value)
        if (!Number.isNaN(normalizeValue)) {
            this.setState({maxValue: normalizeValue});
        } else {
            throw new Error('Input should be a number!')
        }
    }


    render() {
        let {count, minValue, maxValue, step} = this.state;

        return (
            <div>
                <h1>Counter</h1>
                <div className={s.wrapper}>
                    <p className={s.p}>{count}</p>
                    <Inputs onhandleInputChangesStep={this.handleInputChangesStep}
                            onhandleInputChangesMaxValue={this.handleInputChangesMaxValue}
                            onhandleInputChangesMinValue={this.handleInputChangesMinValue}
                            valueStep={step} valueMin={minValue} valueMax={maxValue}/>
                    <Button disabled={false} onHandleClick={this.handleInc} text="+"/>
                    <Button disabled={count <= 0} onHandleClick={this.handleDec} text="-"/>
                    <Button disabled={false} onHandleClick={this.handleReset} text="reset"/>

                </div>

            </div>

        );

    }

}

