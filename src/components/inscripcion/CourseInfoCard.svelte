<script>
	import { setListaAsignaturasElegidas, listaAsignaturasElegidas } from './coursesStore.js'

	export let asignatura

	let asignaturasElegidas = $listaAsignaturasElegidas

	function inscribirAsignatura(event) {
		asignaturasElegidas = [...asignaturasElegidas, asignatura]
		setListaAsignaturasElegidas(asignaturasElegidas)
	}
</script>

<article class="space-y-2 rounded-3xl border-2 p-4">
	<img class="rounded-xl" src={asignatura.image} alt="Imagen de la asignatura" />
	<h2 class="font-semibold text-primary-500">{asignatura.name}</h2>
	<p class=" text-sm">{asignatura.description}</p>
	<div class=" flex flex-row justify-between text-sm">
		<p>{asignatura.secciones} secciones</p>
		<p>3 profes</p>
		<p>302 alumnos</p>
	</div>
	<div class=" flex flex-row justify-between">
		<button
			class="rounded-3xl border border-primary-500 bg-white px-6 py-2 text-sm text-primary-500 shadow-sm hover:bg-primary-100">
			Detalles
		</button>
		<button
			on:click={inscribirAsignatura}
			class="rounded-3xl bg-primary-500 px-6 py-2 text-sm text-white shadow-sm hover:bg-primary-600">
			Inscribir
		</button>
	</div>
</article>
