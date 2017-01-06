import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../base/component/navigation.jsx';
import Menu from '../base/component/menu.jsx';
import Table from './component/table.jsx';
import BreadCrumb from './component/breadcrumb.jsx';
import NotificationSystem from 'react-notification-system';


let mockData = {
    video_list: [{
        title: "test_video",
        url: "http://oda176fz0.bkt.clouddn.com/WeChatSight2.mp4?vframe/jpg/offset/1/w/200/h/200/",
        create_time: "2016-09-21 12:22:22",
        like: 10
    },
        {
            title: "example_video",
            url: "http://oda176fz0.bkt.clouddn.com/WeChatSight2.mp4?vframe/jpg/offset/1/w/200/h/200/",
            create_time: "2016-09-21 12:22:22",
            like: 11
        }],
    page_obj: {
        current: 1,
        next: 2,
        total: 3,
        page_range: [{ page: 1 }, { page: 2 }, { page: 3 }]
    }
};

let App = React.createClass({
    _notificationSystem: null,

    _addNotification: function () {
        this._notificationSystem.addNotification({
            message: '删除成功',
            level: 'success'
        });
    },
    _modifyNotification: function () {
        this._notificationSystem.addNotification({
            message: '修改成功',
            level: 'success'
        });
    },

    getInitialState: function () {
        return {
            title: "视频",
            page_obj: mockData.page_obj,
            videos: mockData.video_list
        }
    },
    notifyClick: function () {
        var notification = Notification.newInstance();
        notification.notice({
            content: 'content'
        });
    },
    componentDidMount: function () {
        this._notificationSystem = this.refs.notificationSystem;
    },

    render: function () {
        let admin = { nick: "rapospectre" };
        let ths = [{ title: "影片" }, { title: "上传时间" }, { title: "分类" }, { title: "热门程度" }, {title: "优先级"}, { title: "操作" }]
        return <div>
            <NotificationSystem ref="notificationSystem" />
            <Navigation source="admin/api/admin"></Navigation>
            <div className="ui bottom attached segment pushable">
                <Menu></Menu>
                <div className="pusher" style={{ width: "80%" }}>
                    <div style={{ margin: "3%" }}>
                        <BreadCrumb title={this.state.title}></BreadCrumb>
                        <Table source="api/v1/videos" tables={this.state.videos} pageObj={this.state.page_obj} ths={ths} modifyNotification={this._modifyNotification} addNotification={this._addNotification}></Table>
                    </div>
                </div>
            </div>
        </div>
    }
})

ReactDOM.render(<App/>, document.getElementById('AppRoot'));