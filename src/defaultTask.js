import React, { useState, useEffect } from 'react';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';
import './TaskList.css';

function App() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            checked: false,
            taskName: 'Study and review Javascript DOM',
            remarks: 'Very Easy'
        },
        {
            id: 2,
            checked: false,
            taskName: 'Study React Router',
            remarks: 'A bit challenging but fun'
        },
        {
            id: 3,
            checked: false,
            taskName: 'Dissect Javascript Data Structure and Algorithm',
            remarks: 'It was challenging at first'
        }
    ]);

    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskRemarks, setNewTaskRemarks] = useState('');

    const handleAddTask = (event) => {
        event.preventDefault();
        if (newTaskName.trim() !== '') {
            const newTask = {
                id: tasks.length + 1,
                checked: false,
                taskName: newTaskName.trim(),
                remarks: newTaskRemarks.trim()

            };
            setTasks([...tasks, newTask]);
            setNewTaskName('');
            setNewTaskRemarks('');
        }
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <Container className="d-flex flex-column align-items-center mt-5 container">
            <div className="d-flex justify-content-between align-items-center w-100">
                <h1 className='text-dark fw-bolder display-1'>To-Do List</h1>
                {/* <h3>{currentTime}</h3> */}
                <Form onSubmit={handleAddTask} className="d-flex align-items-center">
                    <Form.Control
                        type="text"
                        placeholder="Task Name"
                        value={newTaskName}
                        onChange={(event) => setNewTaskName(event.target.value)}
                        className="me-2"
                    />
                    <Form.Control
                        type="text"
                        placeholder="Task Details"
                        value={newTaskRemarks}
                        onChange={(event) => setNewTaskRemarks(event.target.value)}
                        className="me-2"
                    />
                    <Button variant="dark" type="submit" className="me-2">
                        Add Task
                    </Button>
                </Form>
            </div>
            <ListGroup className="w-100 mt-3">
                {tasks.map((task) => (
                    <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
                        <div>
                            <Form.Check
                                type="checkbox"
                                checked={task.checked}
                                onChange={() =>
                                    setTasks(
                                        tasks.map((t) =>
                                            t.id === task.id ? { ...t, checked: !t.checked } : t
                                        )
                                    )
                                }
                                label={task.taskName}
                            />
                            <div className="text-muted">{task.remarks}</div>
                        </div>
                        <Button variant="danger" onClick={() => handleDeleteTask(task.id)}>
                            Remove
                        </Button>
                    </ListGroup.Item>
                ))}<br />
            </ListGroup>
        </Container>
    );
}

export default App;