"use client"
import { useState } from "react"
import './Tarea.css'

export default function Tarea({taskTitle, taskDescript, taskGroup} : {taskTitle: string, taskDescript: string, taskGroup: string}) {

    let [IsOpen, setIsOpen] = useState(false)

    const HandleIsOpen = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className={ IsOpen == false ? 'task-item task-close' : 'task-item task-open' } onClick={ HandleIsOpen }>
                <div className="flex flex-row task-content">
                    <div className="taskTitle">
                        { taskTitle }
                    </div>
                    <div className="taskDescript">
                        { taskDescript }
                    </div>
                    <div className="taskGroup">
                        { taskGroup }
                    </div>
                </div>
            </div>
        </>
    )
}