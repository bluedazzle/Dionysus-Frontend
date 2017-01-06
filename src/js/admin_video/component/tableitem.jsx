import React from 'react';

let TableItem = React.createClass({
    getInitialState: function () {
        return {value: this.props.video.like,
                orderValue: this.props.video.order    
        }
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
    changeOrder: function(){
        let oInput = this.refs.oInput;
        let order = oInput.value;
        let id = this.props.video.id;
        this.props.onChangeOrderHandle(id, order)();
    },
    handleChange: function(e){
        this.setState({value: e.target.value});
    },
    handleOrderChange: function(e){
        this.setState({orderValue: e.target.value});
    },
    handleHidden: function(){
        let id = this.props.video.id;
        this.props.onChangeHiddenHandle(id)();
    },
    componentWillReceiveProps: function(nextProps) {
        if(nextProps.video){
            this.setState({
            value: nextProps.video.like,
            orderValue: nextProps.video.order
            });
        }else{
            this.setState({
            value: this.props.video.like,
            orderValue: this.props.video.order
            });
        }
    },

    render: function () {
        var hiddenButton;
        if(this.props.video.hidden){
            hiddenButton = <button className="ui small blue button" onClick={this.handleHidden}>显示</button>
        }else{
            hiddenButton = <button className="ui small gray button" onClick={this.handleHidden}>隐藏</button>
        }
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
                case 4:
                    return <td>综艺</td>
                default:
                    break;
            }})()}
            <td><div className="ui action input">
                <input ref="iInput" type="text" value={this.state.value} onChange={this.handleChange}/>
                <button className="ui blue button" onClick={this.changeLike}>保存</button>
                </div>
            </td>
            <td><div className="ui action input">
                <input ref="oInput" type="text" value={this.state.orderValue} onChange={this.handleOrderChange}/>
                <button className="ui blue button" onClick={this.changeOrder}>保存</button>
                </div>
            </td>
            <td>
            <a className="ui small blue button" target="_blank" href={this.props.video.url}>详情</a>
            {hiddenButton}
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