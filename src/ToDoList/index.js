import React, {Component}  from 'react';
import './style.css'
import {Button, Input, Collapse, Checkbox,Table} from 'element-react'
import 'element-theme-default';

let data = [
    {
        "content": "吃早饭",
        "done": true
    },
    {
        "content": "吃午饭",
        "done": true
    },
    {
        "content": "吃晚饭",
        "done": false
    }
]

class ToDoList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            todoList: data,
            text: '',
            hover : false
        }
    }

    render() {
        return (
            <div className='container'>
                {this.renderInput()}
                {this.renderList()}
            </div>
        );
    }

    renderInput() {
        return (
            <form onSubmit={event => event.preventDefault()} className='inputContainer'>
                <input type='text' name='text'
                       placeholder='请输入要做的事'
                       ref='todoInput'
                       autoFocus={true}
                       className='todoInput'
                />
                <button onClick={e => this.handleClickButton()} className='todoButton'>提交</button>
            </form>
        )
    }

    renderList() {
        let totalArr = this.state.todoList
        let todoArr = totalArr.filter(item => item.done === false)
        let doneArr = totalArr.filter(item => item.done === true)
        return (
            <div className='notesContainer'>
                {this.renderNotesItem(todoArr)}
                {this.renderNotesItem(doneArr)}
            </div>
        )
    }

    renderNotesItem(arr) {

        if(arr.length > 0 && arr !== null){
            return (
                <div className='noteGroupContainer'>
                    <div className='titleContainer'>
                        {
                            arr[0].done === true ? <div className='titleStyle'> Done </div> : <div className='titleStyle'>ToDo</div>
                        }
                        <div className='groupNum'>{arr.length}</div>
                    </div>
                    {
                        arr.reverse().map((item,index) => {
                            return (
                                <div className={['noteContainer',]}
                                     // style={index % 2 === 0 ? {backgroundColor: '#fff'} : {backgroundColor: '#fafafa'}}
                                     style={this.state.hover ? {backgroundColor: '#eef1f6'} : {backgroundColor: '#fff'}}
                        // this.state.hover ? {backgroundColor: '#eef1f6'} : {backgroundColor: '#fff'
                                     onMouseEnter={() => this.setState({hover : true})}
                                     onMouseLeave={() => this.setState({hover : false})}>
                                    <div className='contentContainer'>
                                        <Checkbox checked={item.done} onChange={_ => this.handleClickCheckbox(item)} />
                                        <div className='contentText' >{item.content}</div>
                                    </div>
                                    <div>
                                        <i className="el-icon-delete" onClick={_ => this.handleClickDeleteButton(item)}></i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    handleClickButton() {
        let text = this.refs.todoInput.value
        let arr = this.state.todoList
        if (text !== '') {
            arr.push({"content": text, "done": false})
            this.setState({
                todoList: arr
            })
            this.refs.todoInput.value = ''
        } else {
            alert('请输入内容')
        }
    }

    handleClickCheckbox(item) {
        if (item) {
            let arr = this.state.todoList
            arr.forEach(element => {
                if (element.content == item.content) {
                    element.done = !item.done
                }
            })
            this.setState({
                todoList: arr
            })
        }
    }

    handleClickDeleteButton(item) {
        let arr = this.state.todoList
        if (item) {
            arr.forEach((element, index) => {
                if (element.content == item.content) {
                    arr.splice(index, 1)
                }
            })
            this.setState({
                todoList: arr
            })
        }
    }
}

export default ToDoList;