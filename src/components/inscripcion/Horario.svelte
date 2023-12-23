<script>
    import data from '../../../public/data.json'

    let asignaturas = data.asignaturas;

    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes","Sabado"];

    let seleccionadas = [];

    const horario = [
        "08:00",
        "09:30",
        "11:00",
        "12:30",
        "14:00",
        "15:30",
        "17:00",
        "18:30",
        "20:00",
    ];

    function toggleOpcion(index, opcionIndex) {
        const seleccion = {
            nombre: asignaturas[index].nombre,
            dia: asignaturas[index].opciones[opcionIndex].dia,
            hora: asignaturas[index].opciones[opcionIndex].hora,
            profesor: asignaturas[index].profesor,
            sala: asignaturas[index].sala
        };

        seleccionadas = seleccionadas.filter(
            (opcion) => !(opcion.nombre === seleccion.nombre),
        );

        seleccionadas = [...seleccionadas, seleccion];
    }
</script>

<h1>Horario de Clases</h1>

<div>
    <h2>Menú de Asignaturas</h2>
    {#each asignaturas as asignatura, index}
        <div>
            <p>
                {asignatura.nombre}
            </p>
            <div>
                {#each asignatura.opciones as opcion, opcionIndex}
                    <label>
                        <input
                            type="radio"
                            name={`asignatura_${index}`}
                            bind:group={asignatura[index]}
                            value={opcion}
                            on:change={() => toggleOpcion(index, opcionIndex)}
                        />
                        {opcion.dia} a las {opcion.hora}
                    </label>
                {/each}
            </div>
        </div>
    {/each}
</div>

<div>
    <h2>Horario de Clases</h2>
    <table>
        <thead>
            <tr>
                <th class="hora">Hora</th>
                {#each diasSemana as dia}
                    <th>{dia}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each horario as hora}
                <tr>
                    <td>{hora}</td>
                    {#each diasSemana as dia}
                        <td>
                            {#each seleccionadas as asignatura}
                                {#if asignatura.dia === dia && asignatura.hora === hora}
                                <div class=" text-center w-auto overflow-hidden rounded-2xl border-2 border-solid border-amber-300 bg-white p-3 shadow">
                                    <p class="text-base font-bold text-gray-800 my-0">{asignatura.nombre}</p>
                                    <p class="text-xs font-light text-gray-500 my-0">Profesor {asignatura.profesor}</p>
                                    <p class="text-xs font-light text-gray-500 my-0">Sala {asignatura.sala}</p>
                                  </div>
                                {/if}
                            {/each}
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        width: 10%;
    }

    .hora {
        width: 2%;
    }
</style>