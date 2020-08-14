import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
                content:''
            }
    
    handleChange=(e)=>{

        this.setState({
            content:e.target.value
        })
    }
    handleSubmit = (e)=>{
        this.props.addTodo(this.state)
        e.preventDefault()
        this.setState({
            content:''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Add new todo:</label>
                <input type='text' id='content' onChange={this.handleChange} value={this.state.content}/>
                 
                </form>
            </div>
        )
    }
}

export default AddTodo
