export default function TaskList({ tasks, handleChangeStatus }) {
    return <div>
        {tasks.map(task => (
            <div key={task.id}>
                <input type="checkbox" checked={task.done} onChange={() => handleChangeStatus(task.id)}></input>
                <span>{task.text}</span>
            </div>
        ))}
    </div>
}