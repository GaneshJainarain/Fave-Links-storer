import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       console.log("UPDATED")
       console.log(event.target.value)
       //changing the state
       this.setState({name: event.target.value, URL: event.target.value})
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       console.log("CLICKED")

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
            <label>Name</label>
            <input type="text" onChange={this.handleChange} value={this.state.name}></input>
            <label>URL</label>
            <input type="text" onChange={this.handleChange} value={}></input>
            </form>
        )
    
    }
}

export default Form;
