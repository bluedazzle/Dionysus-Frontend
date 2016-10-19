import React from 'react';

let Menu = React.createClass({
    getInitialState: function () {
        return { title: "Welcome to Dionysus" }
    },

    render: function () {
        return <div className="ui visible left vertical sidebar menu">
            <a className="item" href="/admin/video" target="_self"><i className="video icon"></i> 视频 </a>
            <a className="item" href="/admin/share" target="_self"><i className="video icon"></i> 分享 </a>
        </div>
    }
})

export default Menu;