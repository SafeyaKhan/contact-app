import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props) {
        super(props)
        this.state = { name: '', email: '' ,img_url:''}
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.img_url === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '' ,img_url:''});
        this.props.history.push('/');
    };
    
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" placeholder="Name" value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" placeholder="Email" value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Image url</label>
                        <input type="text" placeholder="Email" value={this.state.img_url}
                            onChange={(e) => this.setState({ img_url: e.target.value })}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact
