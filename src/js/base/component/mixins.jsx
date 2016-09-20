import {generateUrl} from './http.jsx';

let FetchDataMxin = {
    componentWillMount: function () {
        let context = this;
        let url = generateUrl(this.props.source) + '&all=1';
        fetch(url, {credentials: 'same-origin'})
        .then(function (response) {
            return response.json()})
        .then(function (json){
            if(json.status == 1){
                context.setState({data: json.body});
            }else if(json.status == 3){
                window.location = '/admin/login';
            }
            
        })
    }
}

export default FetchDataMxin;