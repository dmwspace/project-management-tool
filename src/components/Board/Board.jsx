import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tokenService from '../../utils/tokenService'
import { GoArrowRight } from "react-icons/go"
import { Form, Button } from 'react-bootstrap'

function Tasks(props) {
    const filteredTasks = props.project.tasks.filter((task) => {
        return task.category === props.category
    })

    async function handleUpdate(taskId) {
        try {
            const response = await fetch(`/api/projects/${props.projectId}/tasks/${taskId}`, {
                method: "PUT",
                //body: JSON.stringify(formData),
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            console.log(data)
            props.setProject(data)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div style={{width: '100%'}}>
            <h2>{props.category}</h2>
            <ul style={{width: '33%'}}>
                {filteredTasks.map((task) => (
                    <li key={task._id} style={{fontSize: '15px'}}>
                        {task.content}
                        {props.category !== 'Complete' &&
                            <Button onClick={() => { handleUpdate(task._id) }} title="move"><GoArrowRight /></Button>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

function NewTask(props) {
    const [formData, setFormData] = useState({
        content: '',
        category: 'Planned'
    })

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await fetch(`/api/projects/${props.projectId}/tasks`, {
                method: "PUT",
                body: JSON.stringify(formData),
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            console.log(data)
            props.setProject(data)
            setFormData({
                content: '',
                category: formData.category
            })
        } catch (err) {
            console.log(err)
        }
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    console.log(formData)
    return (
        <Form onSubmit={handleSubmit} style={{width: '40%'}}>
            <Form.Control
                type="text"
                name="content"
                value={formData.content}
                placeholder='Enter Task'
                onChange={handleChange}
            />
            <Form.Select name="category" onChange={handleChange}>
                <option value='Planned'>Planned</option>
                <option value='In Progress'>In Progress</option>
                <option value='Complete'>Complete</option>
            </Form.Select>
            <Button type='submit'>
                Submit
            </Button>
        </Form>
    )
}

export default function Board() {
    const { projectId } = useParams()
    const [project, setProject] = useState(null)
    console.log('projectId: ', projectId)

    useEffect(() => {
        getUserProject()
    }, [projectId])

    async function getUserProject() {
        try {
            const response = await fetch(`/api/projects/${projectId}`, {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                },
            });
            if (!response.ok) {
                throw new Error("Can't find that Project")
            }
            const data = await response.json();
            setProject(data)
            console.log(data)

        } catch (error) {
            console.log(error)
        }

    }
    console.log(project)
    if (!project) return <h1>Loading</h1>

    return (
        <div style={{width: '100%', alignItems: 'center'}}>
            <div style={{marginLeft: '30%'}}>
                <h1>{project.title}</h1>
                <NewTask projectId={projectId} setProject={setProject} />
            </div>

            <section>
                <Tasks project={project} projectId={projectId} category="Planned" setProject={setProject} />
                <Tasks project={project} projectId={projectId} category="In Progress" setProject={setProject} />
                <Tasks project={project} projectId={projectId} category="Complete" setProject={setProject} />
            </section>
        </div>

    )
}