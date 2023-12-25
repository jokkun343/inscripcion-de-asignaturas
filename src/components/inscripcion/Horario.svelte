<script>
	import { listaAsignaturas } from './asignaturasSeleccionadas.js'

	$: asignaturasSeleccionadas = $listaAsignaturas

	const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado']

	const horario = ['08:00', '09:30', '11:00', '12:30', '14:00', '15:30', '17:00', '18:30', '20:00']
</script>

<div class="box-border w-full overflow-auto">
	<table class="box-border table h-full overflow-auto rounded-lg bg-white shadow">
		<thead>
			<tr>
				<th class="hora">Hora</th>
				{#each diasSemana as dia}
					<th class="w-2/12 text-center font-bold text-gray-900">{dia}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each horario as hora}
				<tr>
					<td class="h-1/10">{hora}</td>
					{#each diasSemana as dia}
						<td>
							{#each asignaturasSeleccionadas as asignatura}
								{#if asignatura.dia === dia && asignatura.hora === hora}
									<div
										class=" h-full w-auto overflow-hidden rounded-2xl border-2 border-solid border-primary-600 bg-white p-3 text-center shadow">
										<p class="my-0 text-base font-bold text-primary-800">{asignatura.nombre}</p>
										<p class="my-0 text-sm text-gray-500">
											Profesor {asignatura.profesor}
										</p>
										<p class="my-0 text-sm text-gray-500">Sala {asignatura.sala}</p>
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
	th,
	td {
		border: 1px solid #ddd;
		height: 10%;
		padding: 8px;
	}

	.hora {
		width: 2%;
	}
</style>
