import React from 'react';
import addons from 'react-addons';

let TableFoot = React.createClass({
    getInitialState: function () {
        return { title: "Welcome to Dionysus" }
    },
    onChangeHandle: function(e){
        this.props.onChangeHandle(this.refs.searchText.value);
    },

    render: function () {
        var cx = addons.classSet;
        var pre_class = cx({
            'icon': true,
            'item': true,
            'disabled': this.props.pageObj.previous == undefined
        });
        var next_class = cx({
            'icon': true,
            'item': true,
            'disabled': this.props.pageObj.next == undefined
        });
        let pageMenu = this.props.is_paginated ? <div className="ui right floated pagination menu">
                <a className={pre_class}
                    onClick={this.props.getDataByPage(this.props.pageObj.previous)}>
                    <i className="left chevron icon"></i>
                </a>
                {this.props.pageObj.page_range.map((page, i) => {
                    if (page.page == this.props.pageObj.current) {
                        return <a className="item active" key={i} 
                        onClick={this.props.getDataByPage(page.page)}>{page.page}</a>
                    } else {
                        return <a className="item" key={i}
                        onClick={this.props.getDataByPage(page.page)}>{page.page}</a>
                    }

                })}
                <a className={next_class}
                onClick={this.props.getDataByPage(this.props.pageObj.next)}>
                    <i className="right chevron icon"></i>
                </a>
            </div> : '';
        return <th colSpan={this.props.tableLength}>
            <div className="ui action left icon input">
                <i className="search icon"></i>
                <input ref="searchText" type="text" onChange={this.onChangeHandle} placeholder="搜索视频..."/>
                <button className="ui green button" onClick={this.props.getDataByPage(1)}>搜索</button>
            </div>
            {pageMenu}
        </th>
    }
})

export default TableFoot;