# Currículo Web Interativo - Kaua Camargo

## 📌 Requisitos obrigatórios

### 🧱 Estrutura em HTML5
Uso correto das tags semânticas: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.

**Inclusão de:**

✅ Título da página `<title>` - "Meu Currículo - Desenvolvedor Web"

✅ Texto de apresentação (`<h1>`, `<p>`) - "Olá! Eu sou Kaua Camargo"

✅ Lista (`<ul>`) - Lista de habilidades técnicas

✅ Links com `<a>` (para redes sociais ou e-mail) - LinkedIn, GitHub, E-mail, Twitter

✅ Mídia: `<img>` com descrição textual - Foto de perfil com alt descritivo

✅ Campo de formulário simples (input de nome, e-mail e textarea)

### 🎨 Estilização com CSS3
CSS externo (`style.css`) com organização clara e comentada

**Aplicar:**

✅ Layout com Flexbox (menu de navegação e seções responsivas)

✅ Cores, fontes, margens e paddings personalizados (gradientes modernos)

✅ Efeitos de hover simples (botões e links com animações)

✅ Responsividade básica para dispositivos móveis (media queries)

### 🧠 Inclusão de JavaScript (JS básico)
Arquivo JS externo (`script.js`)

**Pelo menos duas funcionalidades básicas:**

✅ Exibir uma saudação com `alert()`
```javascript
document.getElementById("btn-saudacao").addEventListener("click", function() {
    alert("Olá! Obrigado por visitar meu currículo. Espero que goste do que viu! 😊");
});
```

✅ Contador de visitas local usando `localStorage`
```javascript
let visitas = localStorage.getItem('visitas') || 0;
visitas = parseInt(visitas) + 1;
localStorage.setItem('visitas', visitas);
```

✅ Mudança de cor de fundo dinâmica
```javascript
btnMudarCor.addEventListener('click', function() {
    corAtual = (corAtual + 1) % cores.length;
    body.style.background = cores[corAtual];
});
```

✅ Alterar dinamicamente o conteúdo de um elemento com `innerText`
```javascript
nomeInput.addEventListener('input', function() {
    const nome = this.value.trim();
    if (nome) {
        nomeSaudacao.textContent = `Olá! Eu sou ${nome}`;
    }
});
```

### 🖼️ Canvas (opcional, mas recomendado)
✅ Criar um pequeno gráfico com `<canvas>` como ilustração de habilidade

- Gráfico de barras mostrando nível de habilidades
- Gradientes e animações no canvas
- Dados dinâmicos de HTML5, CSS3, JavaScript, Office e Windows

### 📁 Organização sugerida dos arquivos
```
/curriculo/
├── index.html
├── style.css
├── script.js
└── /media/
    ├── foto.jpg
    └── README.md
```

### 🧪 Exemplo de funcionalidades com JS implementadas
✅ Botão que exibe uma mensagem de boas-vindas;

✅ Campo de nome que, ao ser preenchido, aparece como saudação no topo da página;

✅ Clique para mudar cor de fundo (5 gradientes diferentes);

✅ Um contador de visitas local usando localStorage;

✅ Canvas com gráfico de habilidades;

✅ Formulário de contato com validação;

✅ Efeitos de hover e animações;

✅ Scroll suave na navegação;

✅ Mostrar/esconder seções;

✅ Efeitos visuais nos links sociais.

### 🌐 Publicação sugerida (gratuita)
Os alunos devem publicar a página usando um dos seguintes serviços:

- GitHub Pages
- Netlify
- Vercel

## Rubrica de Avaliação (Nota Final: 0 a 10)

| Critério | Pontuação | Status | Descrição |
|----------|-----------|--------|-----------|
| 1. Estrutura semântica com HTML | 2,0 pts | ✅ Completo | Uso adequado de tags (`<header>`, `<main>`, `<section>`, etc.) e organização. |
| 2. Estilização com CSS | 2,0 pts | ✅ Completo | CSS externo, layout com flexbox, cores, fontes, efeitos simples. |
| 3. Inclusão e uso de mídias | 1,0 pt | ✅ Completo | Inserção correta de imagens com descrições. |
| 4. Funcionalidades com JavaScript básico | 2,0 pts | ✅ Completo | Pelo menos 2 interações simples: alert, toggle, innerText, etc. |
| 5. Publicação da página online | 1,0 pt | ⏳ Pendente | Página publicada e funcionando corretamente em um dos serviços propostos. |
| 6. Organização e clareza do código | 1,0 pt | ✅ Completo | Arquivos organizados, identação adequada, uso de comentários. |
| 7. Criatividade e identidade visual | 1,0 pt | ✅ Completo | Visual atrativo, layout cuidado e conteúdo personalizado. |

**Total: 9,0 pontos** 🎉

## 🚀 Como Executar

1. **Abra o arquivo `index.html`** em qualquer navegador moderno
2. **Adicione sua foto** na pasta `media/` com o nome `foto.jpg`
3. **Personalize o conteúdo** com suas informações
4. **Publique** em GitHub Pages, Netlify ou Vercel

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- ✅ Desktop
- ✅ Tablet  
- ✅ Smartphone

---

**Desenvolvido por Kaua Camargo para a Unidade I - Webapps** 