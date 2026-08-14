document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formContato");
    const mensagem = document.getElementById("mensagemSucesso");

    // Verifica se os elementos realmente existem na página
    if (form && mensagem) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            // Exibe a mensagem de sucesso
            mensagem.classList.remove("d-none");

            // Limpa os campos do formulário
            this.reset();

            // Oculta a mensagem de sucesso após 5 segundos
            setTimeout(() => {
                mensagem.classList.add("d-none");
            }, 5000);
        });
    }
});