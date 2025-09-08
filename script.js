function enviar(nome) {
    Swal.fire({
        title: "Agradecemos pela sua compra!",
        text: `Você comprou o álbum de ${nome}.`,
        icon: "success"
    });
}

fetch('dados.json')
    .then(res => res.json())
    .then(discos => {
        const container = document.getElementById('albums-container');

        discos.forEach((disco, index) => {
            const card = document.createElement('div');
            card.classList.add('album-card');

            card.innerHTML = `
                <img src="${disco.image}" alt="${disco.album}">
                <div class="nome">${disco.name}</div>
                <div class="disco">${disco.album}</div>
                <div class="estilo">${disco.style}</div>
                <div class="preco">${disco.price}</div>
                <button onclick="enviar('${disco.name}')">Comprar</button>
            `;

            container.appendChild(card);
        });
    });
