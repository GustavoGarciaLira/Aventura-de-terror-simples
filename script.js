document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', function() {
        const proximo = this.getAttribute('data-proximo');
        const passoAtual = this.parentElement;
        const proximoPasso = document.getElementById('passo-' + proximo);
        
        passoAtual.classList.remove('ativo');
        proximoPasso.classList.add('ativo');

        // Verifica se o próximo passo é a morte
        if (proximo === "13") {
            document.querySelector('.btn-recomecar').addEventListener('click', function() {
                // Reinicia a história
                passoAtual.classList.remove('ativo');
                document.getElementById('passo-0').classList.add('ativo');
            });
        }
    });
});

// Reiniciar a aventura ao clicar no botão de reinício
document.querySelectorAll('.btn-recomecar').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.passo').forEach(passo => {
            passo.classList.remove('ativo');
        });
        document.getElementById('passo-0').classList.add('ativo');
    });
});
