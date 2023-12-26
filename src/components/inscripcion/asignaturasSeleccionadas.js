import { writable } from 'svelte/store';

export const listaAsignaturas = writable([]);

export const setListaAsignaturas = (nuevaLista) => {
    listaAsignaturas.set(nuevaLista);
}