import FormAddTarea from './FormAddTarea'
import Tarea from './Tarea'

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-blue-300 text-white px-2" style={{fontSize: "2.1em", color: "#000"}}>
          Tareas<br />
          Pendientes!
        </span>
      </div>

      <div className="container mx-auto flex mt-5 gap-1">
        <div className="flex-none w-80 p-4 rounded-lg bg-white">
          <FormAddTarea />
        </div>
        <div className="grow p-4 grow rounded-lg bg-indigo-300">
          <Tarea taskTitle='Ejemplo' taskDescript='Ejemplo 01' taskGroup='Prueba' />
          <Tarea taskTitle='Ejemplo' taskDescript='Ejemplo 01' taskGroup='Prueba' />
          <Tarea taskTitle='Ejemplo' taskDescript='Ejemplo 01' taskGroup='Prueba' />
          <Tarea taskTitle='Ejemplo' taskDescript='Ejemplo 01' taskGroup='Prueba' />
        </div>
      </div>
    </>
  )
}
