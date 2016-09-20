import React from 'react';

let BreadCrumb = React.createClass({
    getInitialState: function () {
        return { title: "Welcome to Dionysus" }
    },

    render: function () {
        return <div className="ui breadcrumb">
            <a className="section">{this.props.title}</a>
            <i className="right angle icon divider"></i>
            <div className="ui divider"></div>
        </div>
    }
})

export default BreadCrumb;