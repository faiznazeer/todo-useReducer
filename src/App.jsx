import { act, useReducer, useState } from 'react'
import './App.css'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function tasksReducer(tasks, action) {
  switch(action.type) {
    case ("add_task"): {
      return [...tasks, {id: action.id, text: action.text, done: false}]
    }
    case ("change_status"): {
      return tasks.map(t => (t.id === action.id) ? {...t, done:!t.done}: {...t, done: t.done})
    }
    default: {
      throw new Error("Invalid action type: " + action.type);
    }
  }
}


function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);

  const handleAddTask = (task) => {
    dispatch({
      type: "add_task",
      id: nextId++,
      text: task
    })
  }

  const handleChangeStatus = (id) => {
    dispatch({
      type: "change_status",
      id: id
    })
  }

  return (
    <>
      <h1>ToDo using useReducer!</h1>
      <AddTask handleAddTask={handleAddTask}/>
      <TaskList tasks={tasks} handleChangeStatus={handleChangeStatus}/>
    </>
  )
}

let nextId = 3;
const initialState = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
]

export default App;

