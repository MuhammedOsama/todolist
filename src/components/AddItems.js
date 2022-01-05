import React, {Component} from 'react';

// style
import './styles/AddItems.scss';

export default class AddItems extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', age: ''}
    }

    handleChange = e => this.setState({[e.target.id]: e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({name: '', age: ''});
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Enter Your Name...' id='name' value={this.state.name}
                       onChange={this.handleChange}/>
                <input type='number' placeholder='Enter Your Age...' id='age' value={this.state.age}
                       onChange={this.handleChange}/>
                <input type='submit' value='Add Item'/>
            </form>
        </div>
    }
}
