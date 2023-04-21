import {Router} from 'express'
import { Todo } from '../modals/to-do'

let todos : Todo[] = []

type RequestBody = { text : string}
type RequestParams = { todoId : string}

const router = Router()

router.get('/', (req,res,next) =>{
    res.status(200).json({todos : todos})

})
router.post('/todo',(req,res,next) =>{
    const body = req.body as RequestBody
    const newTodo : Todo ={
        id: new Date().toISOString(),
        text: body.text
    }
    todos.push(newTodo)
    res.status(200).json({todos : todos , newTodo : newTodo ,  message : "Succesfully Inserted"})


})

router.put('/todo/:todoId',(req,res,next) =>{
    const params = req.params as RequestParams
    const tId = params.todoId
    const body = req.body as RequestBody
    const todoUpdates = todos.findIndex(todoItem => todoItem.id === tId)
    if(todoUpdates >= 0 ){
        todos[todoUpdates] = {id:  todos[todoUpdates].id , text : body.text}
        return res.status(200).json({todos : todos , todoUpdates : todoUpdates , message : "Succesfully Updated"}) 
    }
    res.status(400).json({message : "To Do Id missing Try Again "})
})

router.delete('/todo/:todoId',(req,res,next) =>{
    const params = req.params as RequestParams
    const todoId = params.todoId
    if(!todoId){
        return res.status(400).json({message : "To Do Id missing Try Again "})
    }
    todos = todos.filter(todoItem => todoItem.id !== todoId)
    res.status(200).json({todos : todos , message : "Succesfully Deleted"}) 
})

export default router;