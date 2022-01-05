import React from 'react';

// style
import './styles/TodoItems.scss';

export default function TodoItems(props) {
    return <div className='list-items'>
        <div>
            <span className='name title'>Name</span>
            <span className='age title'>Age</span>
            <span className='action title'>Action</span>
        </div>
        {props.items.length ? props.items.map((item, id) => <div key={id}>
            <span className='name'>{item.name}</span>
            <span className='age'>{item.age}</span>
            <span className='action icon' onClick={() => props.deleteItem(item.id)}>&times;</span>
        </div>) : <p>There is no items to show.</p>}
    </div>
}
