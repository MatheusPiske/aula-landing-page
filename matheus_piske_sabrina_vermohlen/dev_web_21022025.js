// Exibe os dados do formulário ao submeter
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const idade = document.getElementById('idade').value;

    // Exibe os dados na div 'resultado'
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h3>Dados do Usuário</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Idade:</strong> ${idade}</p>
    `;
});

// Função para rolar até o topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Exibe o botão "Voltar ao Início" quando o usuário rolar até o meio da página
window.onscroll = function() {
    const scrollButton = document.getElementById('scrollToTopBtn');
    if (document.documentElement.scrollTop > window.innerHeight / 2) {
        scrollButton.style.display = 'block'; 
    } else {
        scrollButton.style.display = 'none'; 
    }
};
