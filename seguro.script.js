// Este script funciona tanto para a página de login quanto para a de recuperação

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    // Só adiciona o evento se encontrar um formulário na página
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Mensagem diferente para cada página (opcional)
        if (document.title.includes("Recuperar")) {
          alert('Simulação: email de recuperação enviado com sucesso!');
        } else {
          alert('Tentativa de login enviada! Esta é uma simulação segura.');
        }
      });
    }
  });
  
