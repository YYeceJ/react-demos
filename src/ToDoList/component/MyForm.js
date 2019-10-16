import React,{Component} from 'react'

const MyForm = React.forwardRef((props, ref) => {
    return (
        <form onSubmit={e =>  e.preventDefault()} style={{flex:1,marginBottom:20}}>
            <input placeholder="请输入待办事项" className='myInput' ref={ref} />
            <button onClick={props.onClickAddButton} className='myButton'>添加</button>
        </form>
    )
})

export default MyForm


