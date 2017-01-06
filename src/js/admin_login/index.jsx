import React from 'react';
import ReactDOM from 'react-dom';
import InputUser from './component/inputue.jsx';
import InputPwd from './component/inputpwd.jsx';
import {generateUrl} from '../base/component/http.jsx';

let App = React.createClass({
    getInitialState: function () {
        return { ueError: false, pwdError: false, ueMsg: '', pwdMsg: '', userName: '', password: ''}
    },
    onLoginHandle: function(e){
        let context = this;
        if(this.state.userName == ''){
            this.setState({ueError: true, ueMsg: '请输入用户名'});
            return false;
        }
        if(this.state.password == ''){
            this.setState({pwdError: true, pwdMsg: '请输入密码'});
            return false;
        }
        let formData = new FormData();  
        formData.append("username", this.state.userName);  
        formData.append("password", this.state.password);
        let url = generateUrl('admin/api/login');
        fetch(url, {
            method: "post", 
            credentials: 'same-origin',
            body: formData
        })
        .then(function(res){
            return res.json()
        })
        .then(
            function(json){
                if(json.status == 1){
                    window.location = '/admin/video';
                }else{
                    if(json.msg.hasOwnProperty("username")){
                        context.setState({ueError: true, ueMsg: json.msg.username});
                    }else{
                        context.setState({pwdError: true, pwdMsg: json.msg.password});
                    } 
                }
            }
        )
    },
    onInputUeChange: function(text){
        this.setState({userName: text, ueError: false, ueMsg: ''});
    },
    onInputPwdChange: function(text){
        this.setState({password: text, pwdError: false, pwdMsg: ''});
    },

    render: function () {
        return <div>
            <div style={{height: 300}}></div>
            <div className="ui raised very padded text container segment">

                <h2 className="ui header">后台管理</h2>
                <div className="ui two column middle aligned very relaxed stackable grid">
                    <div className="column">
                        <div className="ui form">
                            <InputUser ref="inputuser" onInputUeChange={this.onInputUeChange}
                            ueError={this.state.ueError} ueMsg={this.state.ueMsg}></InputUser>
                            <InputPwd ref="inputpwd" onInputPwdChange={this.onInputPwdChange}
                            pwdError={this.state.pwdMsg} pwdMsg={this.state.pwdMsg}></InputPwd>
                            <button className="ui blue submit button" onClick={this.onLoginHandle}>登陆</button>
                        </div>
                    </div>
                    <div className="ui vertical divider"></div>
                    <div className="center aligned column"> 
                        <h2 className="ui center aligned icon header"><img src="/s/image/header.png" className="circular alternate icon" style={{height: 40}}/> 大头秀 </h2>
                    </div>
                </div>
            </div>
        </div>
    }
})

ReactDOM.render(<App/>, document.getElementById('AppRoot'));