import { Component } from 'react';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => {
                    this.setState({users: data});
            });
    }

    componentDidUpdate() {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => {
                    this.setState({users: data});
            });
    }

    render() {
        return (
            <ul>
                {this.state.users.map(user => (
                    <li>{user.name} joined</li>
                ))}
            </ul>
        )
    }
}

export default Users;