import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

class TodosContainer extends React.Component{
    
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    render() {
        return(
            <div>
                {this.renderTodos()}
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer)