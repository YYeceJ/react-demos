import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { createStore } from 'redux'
import todoApp from "../reducers";
import {Provider} from "react-redux";

let store = createStore(todoApp)
const App = () => (
    <Provider store={store}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </Provider>
)

export default App