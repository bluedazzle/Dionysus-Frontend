import React from 'react';
import {generateUrl} from './http.jsx';
import FetchDataMxin from './mixins.jsx';

let Navigation = React.createClass({
    mixins: [FetchDataMxin],
    getInitialState: function(){
        return {data: {nick: ''}}
    },
    onExitHandle: function(){
        let url = generateUrl('admin/api/logout');
        fetch(url, {
            method: 'get',
            credentials: 'same-origin'
        })
        .then(function(res){
            return res.json()
        })
        .then(function(json){
            window.location = '/admin/login';
        })
    },

    render: function(){
        return <nav className="ui menu" style={{margin: "-1px 0"}}>
    <div className="ui header item">
        <img src="/s/image/avatar.png" height="30px;" style={{marginRight: 10}}></img>
        大头秀管理
    </div>
    <div className=" right menu">
        <div id="admin_dropdown" className="ui dropdown item">
            <img className="ui mini circular image" src="/s/image/avatar.png"></img>
            <div className="content">
                <div className="ui sub header">管理员</div>
                { this.state.data.nick }
                <i className="dropdown icon"></i>
            </div>
            <div className="menu">
                <a href="/admin/setting" className="item"><i className="ui icon setting"></i>设置</a>
                <div onClick={this.onExitHandle} className="item"><i className="ui icon sign out"></i>退出</div>
            </div>
        </div>
    </div>
</nav>
    }
})

export default Navigation;