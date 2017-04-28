import {addTodo} from './todoHelpers'

test('addTodo schould add the passed todo tp the list', ()=>{
  const startTodos =[
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false}
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = addTodo(startTodos, newTodo);

  expect(result).toEqual(expected);
})


test('addTodo schould not mutate the existing todo array', ()=>{
  const startTodos =[
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false}
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id:1, name:'one', isComplete: false},
    {id:2, name:'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = addTodo(startTodos, newTodo);

  expect(result).not.toBe(startTodos);
})
