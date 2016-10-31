import React from 'react';

let TableItem = React.createClass({
    getInitialState: function () {
        return {value: ""}
    },
    deleteItem: function(id){
        let context = this;
        return () => {
            let mid = '#delm' + id.toString();
            $(mid)
                .modal({
                    closable: false,
                    onDeny: function () {
                    },
                    onApprove: function () {
                        context.props.onDeleteHandle(id);
                    }
                })
                .modal('show');
                }
    },
    changeLike: function(){
        let iInput = this.refs.iInput;
        let like = iInput.value;
        let id = this.props.video.id;
        this.props.onChangeLikeHandle(id, like)();
    },
    handleChange: function(e){
        this.setState({value: e.target.value});
    },

    render: function () {
        return <tr>
            <td>
                <h4 className="ui image header">
                    <img src={this.props.video.thumb_nail} className="ui mini rounded image"/>
                    <div className="content">{this.props.video.title}
                        <div className="sub header">
                            <span><i className="icon comment"></i></span>
                            <span>&nbsp; </span>
                        </div>
                    </div>
                </h4>
            </td>
            <td>{this.props.video.create_time}</td>
            {(() => {switch(this.props.video.classification) {
                case 1:
                    return <td>电影</td>
                case 2:
                    return <td>MV</td>
                case 3:
                    return <td>搞笑</td>
                default:
                    break;
            }})()}
            <td><div className="ui action input">
                <input ref="iInput" type="text" defaultValue={this.props.video.like}/>
                <button className="ui blue button" onClick={this.changeLike}>保存</button>
                </div>
            </td>
            <td>
            <a className="ui small blue button" target="_blank" href={this.props.video.url}>详情</a>
            <button className="ui small green button" onClick={this.deleteItem(this.props.video.id)}>删除</button>
            <div className="ui basic modal" id={"delm" + this.props.video.id}>
                        <i className="close icon"></i>
                        <div className="header">
                            删除视频 {this.props.video.title}
                        </div>
                        <div className="image content">
                            <div className="image">
                                <i className="remove user icon"></i>
                            </div>
                            <div className="description">
                                <p>请确认,您要删除视频 {this.props.video.title} 吗?</p>
                            </div>
                        </div>
                        <div className="actions">
                            <div className="two fluid ui inverted buttons">
                                <div className="ui red basic cancel inverted button">
                                    <i className="remove icon"></i>
                                    不不,点错了
                                </div>
                                <div className="ui green basic approve inverted button">
                                    <i className="checkmark icon"></i>
                                    废话
                                </div>
                            </div>
                        </div>
                    </div>
            </td>
        </tr>
    }
})

export default TableItem;