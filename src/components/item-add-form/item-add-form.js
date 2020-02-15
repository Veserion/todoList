import React from "react";
import "./item-add-form.css";
import {inject, observer} from "mobx-react";

class _ItemAddForm extends React.Component {
    state = {label: ""};

    onLabelChange = ({target: {value: label}}) => this.setState({label});

    onSubmit = e => {
        e.preventDefault();
        this.props.taskStore.addItem(this.state.label);
        this.setState({label: ""});
    };

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                    value={this.state.label}
                />
                <button className="btn btn-info">Add Item</button>
            </form>
        );
    }
}

const ItemAddForm = inject("taskStore")(observer(_ItemAddForm))

export default ItemAddForm
