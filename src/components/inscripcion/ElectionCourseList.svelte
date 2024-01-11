<script>
	import data from '../../../public/data.json'
	import CourseInfoCard from './CourseInfoCard.svelte'

	let asignaturas = data.asignaturas

	let asignaturaprueba = {
		image:
			'https://www.fundaciontelefonica.com/wp-content/uploads/2022/09/portada-dia-programador-2560x950-1.jpg',
		name: 'Programación II',
		description: 'este ramo es muy god',
		secciones: 2
	}
</script>

<section class="col-span-8 space-y-4 rounded-3xl bg-white p-4 shadow-sm">
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
