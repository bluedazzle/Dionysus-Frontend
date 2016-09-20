import React from 'react';

let InputUser = React.createClass({
    getInitialState: function () {
        return {}
    },
    onChangeHandle: function(e) {
        this.props.onInputUeChange(e.target.value);
    },
    render: function () {
        let errorMsg = this.props.ueError ? <div className="ui pointing red basic label" >{this.props.ueMsg}</div> : '';
        return <div className="field">
            <label>用户名</label>
            <div className="ui left icon input">
                <input placeholder="用户名" ref="usernameText" onChange={this.onChangeHandle} name="username"/>
                <i className="user icon"></i>
            </div>
            {errorMsg}
        </div>
    }
})

export default InputUser;