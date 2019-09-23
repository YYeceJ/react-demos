import React, {Component} from 'react';
import './style.css'
import { Button,Input,Collapse } from 'element-react'
import 'element-theme-default';

let data = [
    {
        "content" : "吃早饭",
        "done" : true
    },
    {
        "content" : "吃午饭",
        "done" : true
    },
    {
        "content" : "吃晚饭",
        "done" : false
    }
]


class ToDoList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            todoList : data,
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

    renderInput () {
        return (
             <form onSubmit={event => event.preventDefault()} className='inputContainer'>
                 <Input type='text' name='text' placeholder='请输入要做的事' ref='todoInput' autoFocus={true} />
                 <Button type='primary' onClick={e => this.handleClickButton()}>提交</Button>
            </form>
        )
    }

    async handleClickButton()   {
        let text = this.refs.todoInput.value
        let list = this.state.todoList
        if(text === ''){
            alert('请输入要做的事')
        }else {
            alert(text)
            await list.push({"content":text,"done":false})
            this.setState({
                todoList : list
            })
            this.refs.todoInput.value = ''
        }
    }

    renderList () {
        const activeName = "todo";
        let  totalArr = this.state.todoList
        alert(JSON.stringify(totalArr))
        let  todoArr = totalArr.filter(item => item.done === false)
        let  doneArr = totalArr.filter(item => item.done === true)
        return (
            <Collapse value={activeName}>
                {this.renderCollapseItem(todoArr)}
                {this.renderCollapseItem(doneArr)}
            </Collapse>
        )
    }

    renderCollapseItem(arr){
        let isDone = arr[0].done === true
        if(arr.length > 0 && arr !== null){
           return (
               <Collapse.Item title={isDone ? "已完成" : "正在进行"} name={isDone ?  "done" : "todo"} >
                   {
                       arr.map(item => {
                           return  <div>{item.content}</div>
                       })
                   }
               </Collapse.Item>
           )
        }
    }
}

export default ToDoList;