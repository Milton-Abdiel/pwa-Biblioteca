let favoritos =
JSON.parse(
    localStorage.getItem(
        "favoritos"
    )
) || [];

const panelFavoritos =
document.getElementById(
    "panel-favoritos"
);

const listaFavoritos =
document.getElementById(
    "lista-favoritos"
);

const contadorFavoritos =
document.getElementById(
    "contador-favoritos"
);

function guardarFavoritos(){

    localStorage.setItem(
        "favoritos",
        JSON.stringify(
            favoritos
        )
    );

}

function agregarFavorito(id){

    const libro =
    libros.find(
        libro => libro.id === id
    );

    const existe =
    favoritos.find(
        item => item.id === id
    );

    if(existe){

        alert(
            "Este libro ya está en favoritos"
        );

        return;

    }

    favoritos.push(libro);

    guardarFavoritos();

    actualizarFavoritos();

}

function eliminarFavorito(id){

    favoritos =
    favoritos.filter(
        libro => libro.id !== id
    );

    guardarFavoritos();

    actualizarFavoritos();

}

function actualizarFavoritos(){

    contadorFavoritos.textContent =
    favoritos.length;

    const totalFavoritos =
    document.getElementById(
        "total-favoritos"
    );

    if(totalFavoritos){

        totalFavoritos.textContent =
        favoritos.length;

    }

    listaFavoritos.innerHTML = "";

    if(favoritos.length === 0){

        listaFavoritos.innerHTML =
        "<p>No hay libros favoritos.</p>";

        return;

    }

    favoritos.forEach(libro => {

        listaFavoritos.innerHTML += `

            <div class="favorito-item">

                <img
                    src="${libro.imagen}"
                    alt="${libro.titulo}">

                <h4>${libro.titulo}</h4>

                <p>${libro.autor}</p>

                <button
                    onclick="eliminarFavorito(${libro.id})">

                    ❌ Eliminar

                </button>

            </div>

        `;

    });

}

document
.querySelector(
    ".favoritos-btn"
)
.addEventListener(
    "click",
    () => {

        panelFavoritos
        .classList.add(
            "abierto"
        );

    }
);

document
.getElementById(
    "cerrar-favoritos"
)
.addEventListener(
    "click",
    () => {

        panelFavoritos
        .classList.remove(
            "abierto"
        );

    }
);

actualizarFavoritos();