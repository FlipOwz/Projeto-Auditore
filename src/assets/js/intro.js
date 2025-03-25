document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('introVideo');
    const videoContainer = document.getElementById('videoContainer');

    // Se o usuário já viu o vídeo, ocultamos o container e saímos
    if (sessionStorage.getItem("videoIntroVisto") === "true") {
        videoContainer.style.display = 'none';
        return;
    }

    // Função para ativar o som
    function unmuteVideo() {
        if (video.muted) {
            video.muted = false;
            video.play().catch(error => console.error("Erro ao tentar reproduzir:", error));
        }
    }

    // Adiciona o evento de clique para ativar o som
    document.addEventListener("click", unmuteVideo);

    video.addEventListener('ended', function() {
        // Inicia o fade out
        videoContainer.style.opacity = '0';

        // Remove o evento de clique para evitar som depois que o vídeo terminou
        document.removeEventListener("click", unmuteVideo);

        // Oculta o vídeo após a transição
        setTimeout(() => {
            videoContainer.style.display = 'none';
        }, 2000);

        // Marca que o usuário já viu o vídeo
        sessionStorage.setItem("videoIntroVisto", "true");
    });
});