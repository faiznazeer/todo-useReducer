export default function TaskList({ tasks }) {
    return <div>
        {tasks.map(task => (
            <div key={task.id}>{task.text}</div>
        ))}
    </div>
}