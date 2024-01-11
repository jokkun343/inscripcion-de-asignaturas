<script>
	import { listaAsignaturasElegidas } from './coursesStore.js'
	$: asignaturas = $listaAsignaturasElegidas
</script>

<aside class="mb-4 gap-2 overflow-auto rounded-3xl bg-white p-4 shadow-sm md:col-span-4 md:mb-0">
	<h2 class="mb-4 rounded-3xl text-center font-bold text-gray-900">Menú de asignaturas</h2>
	<ul>
		{#each asignaturas as asignatura}
			<li>
				<div
					class="inline-flex w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-600 ring-2 ring-transparent transition-all hover:bg-gray-100 hover:text-gray-600 hover:shadow peer-checked:border-primary-600 peer-checked:text-primary-600 peer-checked:ring-primary-400">
					<h1>{asignatura.nombre}</h1>
				</div>
			</li>
		{/each}
	</ul>
</aside>
