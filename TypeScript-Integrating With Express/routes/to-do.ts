import {Router} from 'express'
import { Todo } from '../modals/to-do'

let todos : Todo[] = []

const router = Router()

router.get('/', (req,res,next) =>{
    res.status(200).json({todos : todos})

})
router.post('/todo',(req,res,next) =>{
    const newTodo : Todo ={
        id: new Date().toISOString(),
        text:req.body.text
    }
    todos.push(newTodo)
    res.status(200).json({todos : todos , newTodo : newTodo ,  message : "Succesfully Inserted"})


})

router.put('/todo/:todoId',(req,res,next) =>{
    const tId = req.params.todoId
    const todoUpdates = todos.findIndex(todoItem => todoItem.id === tId)
    if(todoUpdates >= 0 ){
        todos[todoUpdates] = {id:  todos[todoUpdates].id , text : req.body.text}
        return res.status(200).json({todos : todos , todoUpdates : todoUpdates , message : "Succesfully Updated"}) 
    }
    res.status(400).json({message : "To Do Id missing Try Again "})
})

router.delete('/todo/:todoId',(req,res,next) =>{
    const todoId = req.params.todoId
    if(!todoId){
        return res.status(400).json({message : "To Do Id missing Try Again "})
    }
    todos = todos.filter(todoItem => todoItem.id !== todoId)
    res.status(200).json({todos : todos , message : "Succesfully Deleted"}) 
})

export default router;