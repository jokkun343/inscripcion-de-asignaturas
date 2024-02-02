<script>
	import { listaAsignaturas } from './coursesStore.js'
	import Course from './Course.svelte'

	$: asignaturasSeleccionadas = $listaAsignaturas

	const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado']
	const horario = ['08:00', '09:30', '11:00', '12:30', '14:00', '15:30', '17:00', '18:30', '20:00']
</script>

<div class="max-h-full overflow-auto rounded-3xl bg-white p-6 shadow-sm md:col-span-8 md:h-full">
	<div class="h-full overflow-auto">
		<table class="table w-full table-fixed border-collapse border border-neutral-200 md:h-full">
			<thead class="sticky top-0 h-14 border border-neutral-200 bg-white shadow">
				<tr>
					<th class="w-16 border border-neutral-200"></th>
					{#each diasSemana as dia}
						<th class="border border-neutral-200 text-center font-bold text-neutral-900">
							{dia}
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each horario as hora}
					<tr>
						<td class="text-center">{hora}</td>
						{#each diasSemana as dia}
							<td class="h-28 border border-neutral-200 p-2">
								{#each asignaturasSeleccionadas as asignatura}
									{#if asignatura.dia === dia && asignatura.hora === hora}
										<Course {asignatura} />
									{/if}
								{/each}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
