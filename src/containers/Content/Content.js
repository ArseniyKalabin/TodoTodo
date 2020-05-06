import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from '../../hoc/PrivateRoute/PrivateRoute';
import * as actions from '../../store/actions/index';
import SignIn from '../../components/Content/SignIn/SignIn';
import HomePage from '../../components/Content/HomePage/HomePage';
import TodoList from '../../components/Content/TodoList/TodoList';


class Content extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login">
                    <SignIn
                        isLogged={this.props.isLogged}
                        signInHandler={this.props.signInRequestHandler}
                    />
                </Route>
                <PrivateRoute path="/todolist">
                    <TodoList todoList={this.props.todoList} fetch={this.props.fetchTodosRequestHandler} />
                </PrivateRoute>
                <PrivateRoute path="/" exact >
                    <HomePage user={this.props.user} />
                </PrivateRoute>
            </Switch>
        );
    }
}

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged,
    user: state.auth.user,
    todoList: state.todos.todosList
});

const mapDispatchToProps = dispatch => ({
    signInRequestHandler: (authData) => dispatch(actions.signInRequest(authData)),
    fetchTodosRequestHandler: () => dispatch(actions.fetchTodosRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Content);