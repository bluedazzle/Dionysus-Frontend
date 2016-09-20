import React from 'react';

let InputPwd = React.createClass({
    getInitialState: function () {
        return {}
    },
    onChangeHandle: function(e) {
        this.props.onInputPwdChange(e.target.value);
    },
    render: function () {
        let errorMsg = this.props.pwdError ? <div className="ui pointing red basic label">{this.props.pwdMsg}</div> : "";
        return <div className="field">
            <label>密码</label>
            <div className="ui left icon input">
                <input type="password" ref="passwordText" placeholder="密码" onChange={this.onChangeHandle} name="password"/>
                <i className="lock icon"></i>
            </div>
            {errorMsg}
        </div>
    }
})

export default InputPwd;