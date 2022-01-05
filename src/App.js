import React, {Component} from 'react';

// components
import TodoItems from './components/TodoItems';
import AddItems from './components/AddItems';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 1, name: 'Muhammed', age: 23},
                {id: 2, name: 'Osama', age: 24},
                {id: 3, name: 'Ali', age: 25}
            ]
        }
    }

    deleteItem = id => {
        // 1
        // const items = this.state.items;
        // const index = items.findIndex((item) => item.id === id);
        // items.splice(index, 1);
        // this.setState({items});
        // 2
        const items = this.state.items.filter((item) => item.id !== id);
        this.setState({items});
    }

    addItem = item => {
        item.id = Math.random();
        const items = this.state.items;
        items.push(item);
        this.setState({items});
    }

    render() {
        return <div className="App container">
            <h1 className='text-center'>Todo List</h1>
            <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
            <AddItems addItem={this.addItem}/>
        </div>
    }
}
