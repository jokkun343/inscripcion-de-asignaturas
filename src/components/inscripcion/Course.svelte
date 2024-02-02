<script>
	export let asignatura
	const { nombre, profesor, sala } = asignatura
</script>

<article
	class="flex h-full justify-center flex-col overflow-hidden rounded-xl border border-solid border-primary-500 bg-white p-3 text-center align-middle shadow-sm">
	<p class="text-sm font-bold text-primary-600 mb-1">{nombre}</p>
	<p class="text-xs text-gray-500">
		Profesor {profesor}
	</p>
	<p class="text-xs text-gray-500">Sala {sala}</p>
</article>
