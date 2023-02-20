import { Component } from 'react';

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }


    componentDidMount() {
        fetch('/api/questions')
            .then(response => response.json())
            .then(data => {
                    this.setState({questions: data});
            });
    }

    // componentDidUpdate() {
    //     fetch('/api/questions')
    //         .then(response => response.json())
    //         .then(data => {
    //                 this.setState({questions: data});
    //         });
    // }

    render() {
        return (
            <ul>
                {this.state.questions.filter((que, i )=> i ===this.props.index).map((question, i) => (
                 <><p>{this.props.index + 1}. {question.question}</p>
                    {question.options.map((reptile) => <p>{reptile}</p>)}</>
                ))}
            </ul>
        )
    }
}


export default Questions;