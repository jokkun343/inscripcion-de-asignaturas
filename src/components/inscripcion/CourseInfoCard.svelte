<script>
	import { setListaAsignaturasElegidas, listaAsignaturasElegidas } from './coursesStore.js'
	export let asignatura

	$: asignaturasElegidas = $listaAsignaturasElegidas
	let inscrito = false

	function inscribirAsignatura() {
		const existeAsignatura = asignaturasElegidas.some((eleccion) => eleccion.id === asignatura.id)

		if (existeAsignatura) {
			asignaturasElegidas = asignaturasElegidas.filter((eleccion) => eleccion.id !== asignatura.id)
		} else {
			asignaturasElegidas = asignaturasElegidas.filter((eleccion) => eleccion.id !== asignatura.id)
			asignaturasElegidas = [...asignaturasElegidas, asignatura]
		}
		setListaAsignaturasElegidas(asignaturasElegidas)
		inscrito = !inscrito
	}
</script>

<article class="space-y-2 rounded-3xl border-2 p-4">
	<img
		class="rounded-xl"
		src="https://www.fundaciontelefonica.com/wp-content/uploads/2022/09/portada-dia-programador-2560x950-1.jpg"
		alt="Imagen de la asignatura" />
	<h2 class="font-semibold text-primary-500">{asignatura.nombre}</h2>
	<p class=" text-sm">{asignatura.profesor}</p>
	<div class=" flex flex-row justify-between text-sm">
		<p>2 secciones</p>
		<p>3 profes</p>
		<p>30 alumnos</p>
	</div>
	<div class=" flex flex-row justify-between">
		<button
			class="rounded-3xl border border-primary-500 bg-white px-6 py-2 text-sm text-primary-500 shadow-sm hover:bg-primary-100">
			Detalles
		</button>
		<button
			on:click={inscribirAsignatura}
			class="rounded-3xl bg-primary-500 px-6 py-2 text-sm text-white shadow-sm hover:bg-primary-600">
			{#if !inscrito}
				Inscribir
			{:else}
				Quitar
			{/if}
		</button>
	</div>
</article>
