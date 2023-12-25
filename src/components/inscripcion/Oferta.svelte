<script>
	import data from '../../../public/data.json'
	import { listaAsignaturas } from './asignaturasSeleccionadas.js'
	import { setListaAsignaturas } from './asignaturasSeleccionadas.js'

	let asignaturas = data.asignaturas
	$: asignaturasSeleccionadas = $listaAsignaturas

	function toggleOpcion(index, opcionIndex) {
		const seleccion = {
			nombre: asignaturas[index].nombre,
			dia: asignaturas[index].opciones[opcionIndex].dia,
			hora: asignaturas[index].opciones[opcionIndex].hora,
			profesor: asignaturas[index].profesor,
			sala: asignaturas[index].sala
		}

		asignaturasSeleccionadas = asignaturasSeleccionadas.filter(
			(opcion) => !(opcion.nombre === seleccion.nombre)
		)

		asignaturasSeleccionadas = [...asignaturasSeleccionadas, seleccion]

		setListaAsignaturas(asignaturasSeleccionadas)
	}
</script>

<aside class="h-full max-h-screen w-1/3 gap-2 overflow-auto rounded-lg border bg-white p-4 shadow">
	<h2 class="mb-4 text-center font-bold text-gray-900">Menú de asignaturas</h2>
	<ul>
		{#each asignaturas as asignatura, index}
			<li>
				<details class="mb-4 rounded-md">
					<summary class="cursor-pointer px-4 py-2">
						{asignatura.nombre}
					</summary>
					<div class="box-border flex flex-col gap-4 p-2">
						{#each asignatura.opciones as opcion, opcionIndex}
							<label class="cursor-pointer">
								<input
									class="peer hidden"
									type="radio"
									name={`asignatura_${index}`}
									bind:group={asignatura[index]}
									value={opcion}
									on:change={() => toggleOpcion(index, opcionIndex)} />
								<div
									class="inline-flex w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-600 ring-2 ring-transparent transition-all hover:bg-gray-100 hover:text-gray-600 hover:shadow peer-checked:border-primary-600 peer-checked:text-primary-600 peer-checked:ring-primary-400">
									<div class="block">
										<p class="w-auto font-semibold">{opcion.dia} a las {opcion.hora} horas</p>
										<p class="my-0 text-sm">
											Profesor {asignatura.profesor}
										</p>
										<p class="my-0 text-sm">Sala {asignatura.sala}</p>
									</div>
								</div>
							</label>
						{/each}
					</div>
				</details>
			</li>
		{/each}
	</ul>
</aside>
