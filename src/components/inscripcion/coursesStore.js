import { writable } from 'svelte/store';

const isSessionStorageAvailable = typeof sessionStorage !== 'undefined';

const listaAsignaturasElegidasGuardada = isSessionStorageAvailable ? sessionStorage.getItem('listaAsignaturasElegidas') : null;
const listaAsignaturasElegidasInicial = listaAsignaturasElegidasGuardada ? JSON.parse(listaAsignaturasElegidasGuardada) : [];

export const listaAsignaturasElegidas = writable(listaAsignaturasElegidasInicial)

export const setListaAsignaturasElegidas = (nuevaLista) => {
    listaAsignaturasElegidas.set(nuevaLista);
    if (isSessionStorageAvailable) {
        sessionStorage.setItem('listaAsignaturasElegidas', JSON.stringify(nuevaLista));
    }
}

const listaAsignaturasGuardada = isSessionStorageAvailable ? sessionStorage.getItem('listaAsignaturas') : null;
const listaAsignaturasInicial = listaAsignaturasGuardada ? JSON.parse(listaAsignaturasGuardada) : [];

export const listaAsignaturas = writable(listaAsignaturasInicial);

export const setListaAsignaturas = (nuevaLista) => {
    listaAsignaturas.set(nuevaLista);
    if (isSessionStorageAvailable) {
        sessionStorage.setItem('listaAsignaturas', JSON.stringify(nuevaLista));
    }
}