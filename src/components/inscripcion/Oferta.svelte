<script>
    import data from '../../../public/data.json';

    let asignaturas = data.asignaturas;
    
    let seleccionadas = [];

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