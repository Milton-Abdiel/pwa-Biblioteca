const contenedorLibros =
document.getElementById(
    "contenedor-libros"
);

function mostrarLibros(listaLibros){

    contenedorLibros.innerHTML = "";

    listaLibros.forEach(libro => {

        contenedorLibros.innerHTML += `

            <div class="tarjeta-libro">

                <img
                    src="${libro.imagen}"
                    alt="${libro.titulo}">

                <h3>${libro.titulo}</h3>

                <p>✍️ ${libro.autor}</p>

                <p>📚 ${libro.categoria}</p>

                <p>📅 ${libro.anio}</p>

                <button
                    class="btn-favorito"
                    onclick="agregarFavorito(${libro.id})">

                    ❤️ Favorito

                </button>

                <button
                    class="btn-detalles"
                    onclick="verDetalles(${libro.id})">

                    📖 Ver Detalles

                </button>

                <button
                    class="btn-leer"
                    onclick="leerLibro(${libro.id})">

                    📚 Leer Muestra

                </button>

            </div>

        `;

    });

}

mostrarLibros(libros);

document.getElementById(
    "total-libros"
).textContent = libros.length;

const buscador =
document.getElementById(
    "buscador"
);

buscador.addEventListener(
    "input",
    () => {

        const texto =
        buscador.value.toLowerCase();

        const resultado =
        libros.filter(libro =>

            libro.titulo
            .toLowerCase()
            .includes(texto)

            ||

            libro.autor
            .toLowerCase()
            .includes(texto)

        );

        mostrarLibros(resultado);

    }
);

const categorias =
document.querySelectorAll(
    ".categoria"
);

categorias.forEach(categoria => {

    categoria.addEventListener(
        "click",
        () => {

            const tipo =
            categoria.dataset.categoria;

            if(tipo === "Todos"){

                mostrarLibros(libros);

                return;

            }

            const filtrados =
            libros.filter(libro =>

                libro.categoria === tipo

            );

            mostrarLibros(filtrados);

        }
    );

});

document
.getElementById("btn-libros")
.addEventListener("click", () => {

    document
    .querySelector(".libros")
    .scrollIntoView({

        behavior:"smooth"

    });

});

function verDetalles(id){

    const libro =
    libros.find(
        libro => libro.id === id
    );

    document
    .getElementById(
        "modal-imagen"
    ).src = libro.imagen;

    document
    .getElementById(
        "modal-titulo"
    ).textContent = libro.titulo;

    document
    .getElementById(
        "modal-autor"
    ).textContent =
    "✍️ Autor: " + libro.autor;

    document
    .getElementById(
        "modal-categoria"
    ).textContent =
    "📚 Categoría: " + libro.categoria;

    document
    .getElementById(
        "modal-anio"
    ).textContent =
    "📅 Año: " + libro.anio;

    document
    .getElementById(
        "modal-descripcion"
    ).textContent =
    libro.descripcion;

    document
    .getElementById(
        "modal-libro"
    ).style.display = "flex";

}

function leerLibro(id){

    const libro =
    libros.find(
        libro => libro.id === id
    );

    document
    .getElementById(
        "lectura-titulo"
    ).textContent =
    libro.titulo;

    document
    .getElementById(
        "lectura-texto"
    ).textContent =
    libro.muestra;

    document
    .getElementById(
        "modal-lectura"
    ).style.display =
    "flex";

}

document
.getElementById(
    "cerrar-modal"
)
.addEventListener(
    "click",
    () => {

        document
        .getElementById(
            "modal-libro"
        )
        .style.display = "none";

    }
);

document
.getElementById(
    "cerrar-lectura"
)
.addEventListener(
    "click",
    () => {

        document
        .getElementById(
            "modal-lectura"
        )
        .style.display =
        "none";

    }
);

document
.getElementById(
    "modoOscuro"
)
.addEventListener(
    "click",
    () => {

        document.body
        .classList.toggle(
            "modo-oscuro"
        );

    }
);
