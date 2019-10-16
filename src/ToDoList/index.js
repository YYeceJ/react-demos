import React, {Component, Fragment} from 'react';
import './style.css'
import {Checkbox, Button} from 'element-react'
import 'element-theme-default';
import MyForm from "./component/MyForm";

function Header(props) {
    return (
        <div className='titleContainer'>
            <div className='titleStyle'> {props.title} </div>
            <div className='groupNum'>{props.number}</div>
        </div>
    )
}

class Page extends Component {
    constructor(props, context) {
        super(props, context);
        this.myInput = React.createRef()
        this.state = {
            todoList: [],
            inputValue : ''
        }
    }

    componentDidMount() {
        this.getOriginalTodoList()
    }

    getOriginalTodoList() {
        fetch('./todoList.json')
            .then(resp => resp.json())
            .then(result => {
                this.setState({
                    todoList: result.data
                })
            })
    }


    handleItem(item, handling) {
        let arr = this.state.todoList
        if (item) {
            let index = arr.indexOf(item)
            if (index !== -1) {
                if (handling === 'changeStatus') {
                    arr[index].done = !item.done
                }
                if (handling === 'deleteItem') {
                    arr.splice(index, 1)
                }
                this.setState({
                    todoList: arr
                })
            }
        }
    }

    renderItem(list) {
        if (list.length > 0) {
            return (
                <Fragment>
                    <Header title={list[0].done ? 'Done' : 'Todo'} number={list.length}/>
                    <ul>
                    {
                        list.reverse().map((item) => {
                            return (
                                <li className='noteContainer'>
                                    <div className='contentContainer'>
                                        <Checkbox checked={item.done}
                                                  onChange={_ => this.handleItem(item, 'changeStatus')}/>
                                        <div className='contentText'>{item.content}</div>
                                    </div>
                                    <i className="el-icon-delete" onClick={_ => this.handleItem(item, 'deleteItem')}/>
                                </li>
                            )
                        })
                    }
                    </ul>
                </Fragment>
            )
        }
    }

    handlerTextChange() {
        let text = this.myInput.current.value
        let arr = this.state.todoList
        if (text !== '' && text !== undefined) {
            arr.push({"id": arr.length + 1, "content": text, "done": false})
            this.setState({
                todoList: arr
            })
            this.myInput.current.value = ''
        } else {
            alert('请输入内容')
        }
    }

    renderList() {
        let totalArr = this.state.todoList
        let todoArr = totalArr.filter(item => item.done === false)
        let doneArr = totalArr.filter(item => item.done === true)
        return (
            <Fragment >
                {this.renderItem(todoArr)}
                {this.renderItem(doneArr)}
            </Fragment>
        )
    }

    render() {
        return (
            <div className='container'>
                <MyForm onClickAddButton={() => this.handlerTextChange()} ref={this.myInput}/>
                {this.renderList()}
            </div>
        );
    }
}

export default Page;