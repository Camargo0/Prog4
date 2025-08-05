// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Botão de saudação com alert()
    const btnSaudacao = document.getElementById('btn-saudacao');
    btnSaudacao.addEventListener('click', function() {
        alert('Olá! Obrigado por visitar meu currículo. Espero que goste do que viu! 😊');
    });

    // 2. Contador de visitas usando localStorage
    const contadorVisitas = document.getElementById('contador-visitas');
    let visitas = localStorage.getItem('visitas') || 0;
    visitas = parseInt(visitas) + 1;
    localStorage.setItem('visitas', visitas);
    contadorVisitas.textContent = visitas;

    // 3. Botão para mudar cor de fundo
    const btnMudarCor = document.getElementById('btn-mudar-cor');
    const body = document.body;
    let corAtual = 0;
    const cores = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];

    btnMudarCor.addEventListener('click', function() {
        corAtual = (corAtual + 1) % cores.length;
        body.style.background = cores[corAtual];
        
        // Efeito visual de confirmação
        btnMudarCor.textContent = 'Cor Alterada!';
        setTimeout(() => {
            btnMudarCor.textContent = 'Mudar Cor de Fundo';
        }, 1000);
    });

    // 4. Canvas - Gráfico de habilidades
    const canvas = document.getElementById('skills-canvas');
    const ctx = canvas.getContext('2d');
    
    // Dados das habilidades
    const habilidades = [
        { nome: 'HTML5', nivel: 60 },
        { nome: 'CSS3', nivel: 55 },
        { nome: 'JavaScript', nivel: 40 },
        { nome: 'Office', nivel: 80 },
        { nome: 'Windows', nivel: 85 }
    ];

    function desenharGrafico() {
        const width = canvas.width;
        const height = canvas.height;
        const padding = 40;
        const barWidth = (width - 2 * padding) / habilidades.length;
        
        // Limpar canvas
        ctx.clearRect(0, 0, width, height);
        
        // Desenhar barras
        habilidades.forEach((habilidade, index) => {
            const x = padding + index * barWidth + barWidth / 2;
            const barHeight = (habilidade.nivel / 100) * (height - 2 * padding);
            const y = height - padding - barHeight;
            
            // Gradiente para as barras
            const gradient = ctx.createLinearGradient(0, y, 0, height - padding);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            
            // Desenhar barra
            ctx.fillStyle = gradient;
            ctx.fillRect(x - barWidth/3, y, barWidth/1.5, barHeight);
            
            // Adicionar texto
            ctx.fillStyle = '#333';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(habilidade.nome, x, height - 10);
            ctx.fillText(habilidade.nivel + '%', x, y - 10);
        });
        
        // Adicionar título
        ctx.fillStyle = '#333';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Nível de Proficiência', width/2, 25);
    }

    // Desenhar o gráfico
    desenharGrafico();

    // 5. Manipulação do formulário
    const form = document.getElementById('contato-form');
    const nomeInput = document.getElementById('nome');
    const nomeSaudacao = document.getElementById('nome-saudacao');

    // Atualizar saudação quando o nome for digitado
    nomeInput.addEventListener('input', function() {
        const nome = this.value.trim();
        if (nome) {
            nomeSaudacao.textContent = `Olá! Eu sou ${nome}`;
        } else {
            nomeSaudacao.textContent = 'Olá! Eu sou Kaua Camargo';
        }
    });

    // Processar envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = nomeInput.value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Simular envio
        alert(`Obrigado ${nome}! Sua mensagem foi recebida com sucesso. Entraremos em contato em breve!`);
        
        // Limpar formulário
        form.reset();
        nomeSaudacao.textContent = 'Olá! Eu sou Kaua Camargo';
    });

    // 6. Efeito de digitação no título (removido para evitar problemas de layout)
    // function typeWriter(element, text, speed = 100) {
    //     let i = 0;
    //     element.textContent = '';
    //     
    //     function type() {
    //         if (i < text.length) {
    //             element.textContent += text.charAt(i);
    //             i++;
    //             setTimeout(type, speed);
    //         }
    //     }
    //     type();
    // }

    // Aplicar efeito de digitação ao título principal
    // const tituloOriginal = nomeSaudacao.textContent;
    // setTimeout(() => {
    //     typeWriter(nomeSaudacao, tituloOriginal, 100);
    // }, 1000);

    // 7. Animação de scroll suave para links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 8. Efeito de hover nas seções
    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 9. Mostrar/esconder seção de estatísticas
    const estatisticasSection = document.getElementById('estatisticas');
    let estatisticasVisivel = true;
    
    // Adicionar botão para mostrar/esconder estatísticas
    const btnToggleStats = document.createElement('button');
    btnToggleStats.textContent = 'Mostrar/Esconder Estatísticas';
    btnToggleStats.className = 'btn-secondary';
    btnToggleStats.style.marginTop = '1rem';
    
    btnToggleStats.addEventListener('click', function() {
        if (estatisticasVisivel) {
            estatisticasSection.style.display = 'none';
            this.textContent = 'Mostrar Estatísticas';
        } else {
            estatisticasSection.style.display = 'block';
            this.textContent = 'Esconder Estatísticas';
        }
        estatisticasVisivel = !estatisticasVisivel;
    });
    
    // Adicionar botão antes da seção de estatísticas
    estatisticasSection.parentNode.insertBefore(btnToggleStats, estatisticasSection);

    // 10. Efeito de confirmação para links sociais
    document.querySelectorAll('.social-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            const originalText = this.textContent;
            this.textContent = '✓ ' + originalText;
            
            setTimeout(() => {
                this.textContent = originalText;
            }, 1000);
        });
    });

    console.log('Currículo carregado com sucesso! 🚀');
}); 