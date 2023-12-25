<script>
    import data from '../../../public/data.json';
    import { setListaAsignaturas } from './asignaturasSeleccionadas.js'

    let asignaturas = data.asignaturas;
    let asignaturasSeleccionadas = [];

    function toggleOpcion(index, opcionIndex) {
        const seleccion = {
            nombre: asignaturas[index].nombre,
            dia: asignaturas[index].opciones[opcionIndex].dia,
            hora: asignaturas[index].opciones[opcionIndex].hora,
            profesor: asignaturas[index].profesor,
            sala: asignaturas[index].sala
        };

        asignaturasSeleccionadas = asignaturasSeleccionadas.filter(
            (opcion) => !(opcion.nombre === seleccion.nombre)
        );

        asignaturasSeleccionadas = [...asignaturasSeleccionadas, seleccion];

        setListaAsignaturas(asignaturasSeleccionadas);
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