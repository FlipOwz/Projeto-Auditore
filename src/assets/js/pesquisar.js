function search() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    console.log("Valor digitado:", input);

    let campeoes = document.querySelectorAll('.campeao');
    let noResults = document.getElementById('no-results');
    let found = false;

    campeoes.forEach(campeao => {
        let nomeTag = campeao.querySelector("p"); // Captura o <p>

        if (nomeTag) { // Verifica se <p> existe
            let nome = nomeTag.textContent.toLowerCase();

            if (nome.includes(input)) {
                campeao.classList.remove("hidden");
                campeao.classList.add("flex");
                found = true;
            } else {
                campeao.classList.remove("flex");
                campeao.classList.add("hidden");
            }
        }
    });

    // Se nenhum campeão foi encontrado, mostra a mensagem
    if (!found) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
    }
}