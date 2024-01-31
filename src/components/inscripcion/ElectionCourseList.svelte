<script>
	import data from '../../../public/data.json'
	import CourseInfoCard from './CourseInfoCard.svelte'

	let asignaturas = data.asignaturas
</script>

<section
	class="max-h-full space-y-4 overflow-auto rounded-3xl bg-white p-4 shadow-sm md:col-span-8 md:h-full">
	<details class="rounded-xl border-2 p-4" open name="asignaturas">
		<summary> Asignaturas reprobadas </summary>
		<div class="mt-2 grid grid-cols-3 gap-4">
			<CourseInfoCard asignatura={asignaturas[0]} />
			<CourseInfoCard asignatura={asignaturas[1]} />
			<CourseInfoCard asignatura={asignaturas[2]} />
			<CourseInfoCard asignatura={asignaturas[3]} />
			<CourseInfoCard asignatura={asignaturas[4]} />
		</div>
	</details>
	<details class="rounded-xl border-2 p-4" name="asignaturas">
		<summary> Asignaturas pendientes </summary>
		<div class="mt-2 grid grid-cols-3 gap-x-2">
			<CourseInfoCard asignatura={asignaturas[5]} />
			<CourseInfoCard asignatura={asignaturas[6]} />
		</div>
	</details>
	<details class="rounded-xl border-2 p-4" name="asignaturas">
		<summary> Asignaturas Por cursar </summary>
		<div class="mt-2 grid grid-cols-3 gap-x-2"></div>
	</details>
</section>
