
export default function TableTareas() {
    return (
        <>
        
            <table className="border-separate border-spacing-2 border border-slate-500">
                <caption className="caption-top">
                    Tareas
                </caption>
                <thead>
                    <tr>
                        <th className="border border-slate-600">Título</th>
                        <th className="border border-slate-600">Descripción</th>
                        <th className="border border-slate-600">Grupos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-700">Indiana</td>
                        <td className="border border-slate-700">Indianapolis</td>
                        <td className="border border-slate-700">Grupo ej</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Ohio</td>
                        <td className="border border-slate-700">Columbus</td>
                        <td className="border border-slate-700">Grupo ej</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Michigan</td>
                        <td className="border border-slate-700">Detroit</td>
                        <td className="border border-slate-700">Grupo ej</td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}