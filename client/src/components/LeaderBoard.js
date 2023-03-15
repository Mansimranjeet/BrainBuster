import { Component } from 'react';

class LeaderBoard extends Component {

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
                data.sort((a,b)=> b.score - a.score)
                    this.setState({users: data});
            });
    }

    render() {
        return (
            <ol>
                {this.state.users.map(user => (
                    <li>  {user.name}            {user.score}</li>
                ))}
            </ol>
        )
    }
}

export default LeaderBoard;