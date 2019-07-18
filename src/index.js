import React from 'react';
import ReactDOM from  'react-dom';
import App from "./App";

ReactDOM.render(<App/>, document.querySelector('#root'));

class Animal {
    constructor(){
        this.name;
        this.age;
    }
}