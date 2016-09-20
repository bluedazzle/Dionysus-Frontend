import React from 'react';
import ReactDOM from 'react-dom';

let App = React.createClass({
    getInitialState: function(){
        return {title: "Welcome to Dionysus"}
    },

    render: function(){
        return <div><h1>{this.state.title}</h1></div>
    }
})

ReactDOM.render(<App/>, document.getElementById('AppRoot'));