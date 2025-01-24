import { useState } from "react"

export default function AddTask({handleAddTask}) {
    const [task, setTask] = useState('');
    return <div>
        <input value={task} onChange={e => setTask(e.target.value)} ></input>
        <button onClick={() => handleAddTask(task)}>Add task</button>
    </div>
}