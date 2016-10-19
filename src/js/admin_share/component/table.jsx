import React from 'react';
import TableFoot from '../../admin_video/component/tablefoot.jsx';
import TableItem from './tableitem.jsx';
import FetchDataMixin from '../../base/component/mixins.jsx';
import {generateUrl} from '../../base/component/http.jsx';

let Table = React.createClass({
    mixins: [FetchDataMixin],
    getInitialState: function () {
        return {data: {share_list: [], is_paginated: false, page_obj: {
            page_range: [],
        }},
        search: '',
        
    };
    },
    getDataByPage: function(page){
        return () => {
                if(page){
                let context = this;
                let url = '';
                if(this.state.search === ''){
                    url = generateUrl(this.props.source) + '&all=1&page=' + page;
                }else{
                    url = generateUrl(this.props.source) + '&all=1&page=' + page + '&search=' + this.state.search;
                }
                fetch(url, {credentials: 'same-origin'})
                .then(function (response) {
                    return response.json()})
                .then(function (json){
                    context.setState({data: json.body});
                })
            }
        }
    },
    onChangeHandle: function(text){
        this.setState({search: text});
    },
    onDeleteHandle: function(id){
        let context = this;
        let url = generateUrl('api/v1/share/' + id);
        fetch(url, {mode: 'cors',
            method: 'delete'
        })
        .then(function (response) {
            return response.json()})
        .then(function (json){
            context.getDataByPage(1)();
            context.props.addNotification();
        })
    },

    render: function () {
        return <table className="ui celled selectable table">
            <thead>
                <tr>
                    {this.props.ths.map(function (th, i) {
                        return <th key={i}>{th.title}</th>
                    }) }
                </tr>
            </thead>
            <tbody>
                    {this.state.data.share_list.map((video, i) => {
                        return <TableItem video={video} 
                        onDeleteHandle={this.onDeleteHandle}
                        key={i}></TableItem>
                    }) }
            </tbody>
            <tfoot>
                <tr>
                    <TableFoot tableLength={this.props.ths.length} pageObj={this.state.data.page_obj} is_paginated={this.state.data.is_paginated} 
                    getDataByPage={this.getDataByPage} onChangeHandle={this.onChangeHandle}></TableFoot>
                </tr>
            </tfoot>
        </table>
    }
})

export default Table;