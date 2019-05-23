import React, {Component} from "react";
import Button from 'react-bootstrap/Button';


class AddTodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this)
    }
    addItem(e) {
        if(this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = "";
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <span>Add new task</span>
                        <input ref={(a) => this._inputElement = a}
                            id="taskInput" type="text" placeholder="new task"/>
                        <Button variant="info">add</Button>
                    </form>
                </div>
            </div>
        )
    }
}
 export default AddTodoList
