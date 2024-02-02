<script>
	import listaAsignaturas from '../../../public/data copy.json'

	let asignaturasSeleccionadas = listaAsignaturas

	const semestres = [
		'1er Semestre',
		'2do Semestre',
		'3er Semestre',
		'4to Semestre',
		'5to Semestre',
		'6to Semestre',
		'7mo Semestre',
		'8vo Semestre',
		'9no Semestre',
		'10mo Semestre',
		'11vo Semestre'
	]
	const filas = [1,2,3,4,5,6,7,8]
</script>

<div class="max-h-full overflow-auto rounded-3xl bg-white p-6 shadow-sm md:col-span-8 md:h-full">
	<div class="h-full overflow-auto">
		<table class="table w-full table-fixed border-collapse border border-neutral-200 md:h-full">
			<thead class="sticky top-0 h-14 bg-white shadow">
				<tr>
					{#each semestres as semestre}
						<th class="text-xs text-neutral-900">
							{semestre}
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each filas as fila}
					<tr>
						{#each semestres as semestre}
							<td class="h-28 p-2">
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
