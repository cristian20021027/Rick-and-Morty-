let personajes = [];

const apiRick = async (pagina) => {
let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
const api = await fetch(url);
const data = await api.json();
personajes = data.results;
console.log(personajes);
mostrarResultados(personajes);
};

const filtrarPersonajes = (filtro) => {
if (filtro) {
    filtro = filtro.toLowerCase();
    const personajesFiltrados = personajes.filter(
    (personaje) =>
        personaje.name.toLowerCase().includes(filtro) ||
        personaje.species.toLowerCase().includes(filtro) ||
        personaje.status.toLowerCase().includes(filtro)||
        personaje.gender.toLowerCase().includes(filtro)
    );
    mostrarResultados(personajesFiltrados);
} else {
    mostrarResultados(personajes);
}
};

const mostrarResultados = (personajes) => {
divRes = document.querySelector("#resultado");
divRes.innerHTML = "";
personajes.map((item) => {
    divItem = document.createElement("div");
    divItem.innerHTML = `
        <div class="card">
        <div class="infos">
            <div class="image">
            <img class="image" src="${item.image}"  alt="" >
            </div>
            <div class="info">
            <div>
                <p class="name">
                ${item.name}
                </p>
                <p class="function ${getStatusClass(item.status)}">
                ${item.status}
                </p>
            </div>
            <div class="stats">
                <p class="flex flex-col">
                ${item.species}
                </p>
            </div>
            </div>
        </div>
        <p class="request">
            ${item.origin.name}
        </p>
        </div>`;
    divRes.appendChild(divItem);
});
};
const getStatusClass = (status) => {
    if (status === "Alive") {
    return "alive";
    } else if (status === "Dead") {
    return "dead";
    } else {
    return "unknown";
    }
};

apiRick(1);

const inputFiltro = document.querySelector("#filtro");
inputFiltro.addEventListener("input", () => {
const filtro = inputFiltro.value.trim();
filtrarPersonajes(filtro);
});

