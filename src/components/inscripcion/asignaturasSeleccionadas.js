import { writable } from 'svelte/store';

const isLocalStorageAvailable = typeof localStorage !== 'undefined';

const listaAsignaturasGuardada = isLocalStorageAvailable ? localStorage.getItem('listaAsignaturas') : null;
const listaAsignaturasInicial = listaAsignaturasGuardada ? JSON.parse(listaAsignaturasGuardada) : [];

export const listaAsignaturas = writable(listaAsignaturasInicial);

export const setListaAsignaturas = (nuevaLista) => {
    listaAsignaturas.set(nuevaLista);
    if (isLocalStorageAvailable) {
        localStorage.setItem('listaAsignaturas', JSON.stringify(nuevaLista));
    }
}