import { writable } from 'svelte/store';

export const listaAsignaturasElegidas = writable([])

export const setListaAsignaturasElegidas = (nuevaLista) => {
    listaAsignaturasElegidas.set(nuevaLista);
}

export const listaAsignaturas = writable([]);

export const setListaAsignaturas = (nuevaLista) => {
    listaAsignaturas.set(nuevaLista);
}