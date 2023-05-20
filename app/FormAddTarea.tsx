"use client"
import { ChangeEvent, useState } from 'react'
import './FormAddTareas.css'

export default function FormAddTarea() {

    const [TareaTitle, setTareaTitle] = useState('')
    const [TareaDescript, setTareaDescript] = useState('')
    const [TareaGrupo, setTareaGrupo] = useState('')

    const HandleTareaTitle = ( event : ChangeEvent<HTMLInputElement>) => {
        setTareaDescript( event.target.value )
    }
    const HandleTareasDescript = ( event : ChangeEvent<HTMLTextAreaElement>) => {
        setTareaDescript( event.target.value )
    }
    const HandleTareaGrupo = ( event : ChangeEvent<HTMLInputElement>) => {
        setTareaGrupo( event.target.value )
    }

    return (
        <>
            <form action="/tarea/nueva" className='text-black' method="post" id='form-task-add' autoComplete='off'>
                <div className="form-group ">

                    <label htmlFor="tareaTitle">Titulo:</label>
                    <input type="text" name="tareaTitle" id="tarea-title" onChange={ HandleTareaTitle } />

                </div>
                <div className="form-group">

                    <label htmlFor="tareaDescript">Descripción:</label>
                    <textarea name="tareaDescript" id="tarea-descript" onChange={ HandleTareasDescript }></textarea>

                </div>
                <div className="form-group">

                    <label htmlFor="tareaGrupo">Grupo:</label>
                    <input type="text" name="tareaGrupo" id="tarea-grupo" onChange={ HandleTareaGrupo } />

                </div>
                <div className="form-group">
                    <button type="submit">Agregar</button>
                </div>
            </form>
        </>
    )
}