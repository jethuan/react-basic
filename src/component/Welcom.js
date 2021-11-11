import React, {Component} from 'react';

export default class HelloWorld extends React.Component {
    render() {
        return <div>
            <p>Hello JET {this.props.username}</p>
            <Logout/>
        </div>    
    }

}
class Logout extends Component{
    render() {
        return <div>
            <p>XIn chào</p>
        </div>
    }
}
