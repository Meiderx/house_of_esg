function showResumo(element) {
    element.querySelector('.resumo').style.display = 'block';
}

function hideResumo(element) {
    element.querySelector('.resumo').style.display = 'none';
}

function redirectToIntegrante(url) {
    window.location.href = url;
}

document.querySelector('.voltar').addEventListener('click', function() {
    history.back();
});

// Lógica para avançar para a próxima página, se aplicável
document.querySelector('.avancar').addEventListener('click', function() {
    // Lógica para avançar para a próxima página
});
