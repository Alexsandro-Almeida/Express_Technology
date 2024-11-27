
// Toggle do menu responsivo
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active'); // Altera a cor do ícone
});

// Seleciona todas as imagens
const images = document.querySelectorAll('.background-images img');

// Configurações do slider
let currentImageIndex = 0; // Índice da imagem atual
const slideInterval = 10000; // Tempo para cada imagem (10 segundos)

// Função para alternar as imagens
function slideImages() {
    // Remove a classe "active" da imagem atual
    images[currentImageIndex].classList.remove('active');

    // Atualiza o índice para a próxima imagem
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Adiciona a classe "active" à próxima imagem
    images[currentImageIndex].classList.add('active');
}

// Inicializa o slider
setInterval(slideImages, slideInterval);

// Ativa a primeira imagem ao carregar a página
images[currentImageIndex].classList.add('active');


// Configuração de Partículas
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100, // Número de partículas
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" // Cor das partículas
        },
        "shape": {
            "type": "circle", // Forma das partículas
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5, // Opacidade das partículas
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3, // Tamanho das partículas
            "random": true,
            "anim": {
                "enable": true,
                "speed": 3,
                "size_min": 0.1,
                "sync": false
            }
        },
        "move": {
            "enable": true,
            "speed": 2, // Velocidade das partículas
            "direction": "none", // Direção aleatória
            "random": true,
            "straight": false,
            "out_mode": "out", // Como as partículas saem da tela
            "bounce": false,
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas", // Detectar mouse no canvas
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Efeito ao passar o mouse
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Efeito ao clicar nas partículas
            }
        }
    },
    "retina_detect": true
});

// Modificando a quantidade de partículas com base na tela
if (window.innerWidth < 768) {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50, // Menos partículas em telas pequenas
                "density": {
                    "enable": true,
                    "value_area": 600
                }
            },
            // Outras configurações permanecem iguais
        }
    });
}




// Selecionar os elementos
const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const popupOverlay = document.getElementById('popup-overlay');

// Abrir o popup
openPopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
    setTimeout(() => popupOverlay.style.opacity = 1, 10);
});

// Fechar o popup
closePopupButton.addEventListener('click', () => {
    popupOverlay.style.opacity = 0;
    setTimeout(() => popupOverlay.style.display = 'none', 300);
});


// Mostrar as animações ao rolar
window.addEventListener('scroll', function () {
    const projects = document.querySelectorAll('.project-card');

    projects.forEach(function (project) {
        const position = project.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            project.classList.add('visible');
        }
    });
});

// Abrir o popup ou redirecionar ao clicar no botão "Saiba mais"
const buttons = document.querySelectorAll('.project-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = "#"; // Substitua pelo link de detalhes do projeto
    });
});


// Referências aos elementos
const robotContainer = document.getElementById("robot-container");
const robotDialog = document.getElementById("robot-dialog");
const closeRobotBtn = document.getElementById("close-robot");
const showRobotBtn = document.getElementById("show-robot");
const robotImg = document.getElementById("robot");

// Função para exibir mensagens no balão de diálogo enquanto o mouse estiver sobre o elemento
function showDialog(message) {
    robotDialog.textContent = message;
    robotDialog.style.display = "block";
}

// Função para esconder o balão de diálogo
function hideDialog() {
    robotDialog.style.display = "none";
}

// Exibir mensagens de boas-vindas ao carregar a página
window.addEventListener("load", () => {
    showDialog("Bem-vindo à Express Technology! Estamos aqui para ajudar você.");
    setTimeout(() => hideDialog(), 5000);
    setTimeout(() => {
        showDialog("Acredite no seu potencial! Vamos transformar suas ideias em realidade!");
        setTimeout(() => hideDialog(), 5000);
    }, 7000);
});

// Fechar o robô
closeRobotBtn.addEventListener("click", () => {
    robotContainer.style.display = "none";
    showRobotBtn.style.display = "block";
});

// Reativar o robô
showRobotBtn.addEventListener("click", () => {
    robotContainer.style.display = "flex";
    showRobotBtn.style.display = "none";
});

// Interações com a área de tecnologias utilizadas
const techItems = document.querySelectorAll(".tech-item img");

techItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        const techName = item.alt; // Obtém o nome da tecnologia pelo atributo "alt"
        switch (techName) {
            case "HTML5":
                showDialog("HTML5: A base da web moderna!");
                break;
            case "CSS3":
                showDialog("CSS3: Estilo e animação para sua página.");
                break;
            case "JavaScript":
                showDialog("JavaScript: Traz interatividade e dinamismo.");
                break;
            case "Python":
                showDialog("Python: Automação e inteligência artificial.");
                break;
            case "MySQL":
                showDialog("MySQL: Banco de dados relacional robusto.");
                break;
            case "MongoDB":
                showDialog("MongoDB: Flexibilidade para dados não estruturados.");
                break;
            case "React":
                showDialog("React: Interfaces modernas e rápidas.");
                break;
            case "NodeJS":
                showDialog("NodeJS: Backend ágil com JavaScript.");
                break;
        }
    });

    item.addEventListener("mouseout", hideDialog); // Esconde o diálogo ao sair do elemento
});

// Interações com a área "Nossos Serviços"
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {
    card.addEventListener("mouseover", () => {
        const serviceTitle = card.querySelector("h4").textContent;
        switch (serviceTitle) {
            case "Desenvolvimento de Websites":
                showDialog("Criamos sites modernos e responsivos para sua empresa!");
                break;
            case "Consultoria em Cibersegurança":
                showDialog("Proteja seus dados com nossas soluções de segurança digital.");
                break;
            case "Automação de Sistemas":
                showDialog("Automatizamos processos para otimizar sua produtividade.");
                break;
        }
    });

    card.addEventListener("mouseout", hideDialog); // Esconde o diálogo ao sair do elemento
});

// Interações com a área "Projetos"
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("mouseover", () => {
        const projectStatus = card.classList.contains("devFinalizado") ? "finalizado" : "em desenvolvimento";
        const projectTitle = card.querySelector("h4").textContent;

        if (projectStatus === "finalizado") {
            showDialog(`"${projectTitle}" está concluído e pronto para o mundo!`);
        } else {
            showDialog(`"${projectTitle}" ainda está em desenvolvimento. Estamos trabalhando para entregá-lo em breve.`);
        }
    });

    card.addEventListener("mouseout", hideDialog); // Esconde o diálogo ao sair do elemento
});

// Interações na área do CEO
const ownerCard = document.querySelector(".owner-card");

ownerCard.addEventListener("mouseover", () => {
    showDialog("Conheça Alex, o motor por trás da Express Technology. Uma mente brilhante e inspiradora!");
});

ownerCard.addEventListener("mouseout", hideDialog); // Esconde o diálogo ao sair do elemento



// Selecionando elementos
const robotImage = document.getElementById('robot');
const chatPopup = document.getElementById('chat-popup');
const closeChatButton = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const sendMessageButton = document.getElementById('send-message');
const chatMessages = document.getElementById('chat-messages');

// Abrir o popup ao clicar na imagem do robô
robotImage.addEventListener('click', () => {
    chatPopup.style.display = 'flex';
});

// Fechar o popup ao clicar no botão "X"
closeChatButton.addEventListener('click', () => {
    chatPopup.style.display = 'none';
});

// Enviar mensagem
sendMessageButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        // Adicionar mensagem do usuário
        addMessage('user', userMessage);

        // Resposta do bot (Simulação por enquanto)
        setTimeout(() => {
            addMessage('bot', getBotResponse(userMessage));
        }, 1000);

        chatInput.value = '';
    }
}

function addMessage(type, text) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll automático
}

function getBotResponse(message) {
    // Normalizar a mensagem do usuário
    const normalizedMessage = message.toLowerCase();

    // Dicionário de respostas organizadas por palavras-chave com múltiplas frases
    const responses = {
        serviços: [
            'Oferecemos desenvolvimento de sites responsivos e sistemas personalizados.',
            'Trabalhamos com automação de processos empresariais e consultoria em TI.',
            'Oferecemos soluções de marketing digital, SEO e branding.',
            'Também fazemos hospedagem em nuvem, suporte técnico e análise de dados.'
        ],
        tecnologias: [
            'Somos especializados em tecnologias como JavaScript, Python, Node.js, e React.',
            'Trabalhamos também com frameworks como Django, Flask, e bibliotecas de IA como TensorFlow e PyTorch.',
            'Utilizamos bancos de dados como MySQL, MongoDB e PostgreSQL, dependendo da necessidade do projeto.'
        ],
        linguagens: [
            'As linguagens principais que utilizamos são JavaScript, Python, Java e C#.',
            'Também oferecemos suporte a outras linguagens, como PHP, Ruby e Swift.',
            'Se precisar de ajuda com linguagens específicas, é só perguntar!'
        ],
        emoções_triste: [
            'Sinto muito por saber disso. Lembre-se de que você é mais forte do que imagina.',
            'Dias difíceis passam. Se precisar de algo, estou aqui para ajudar.',
            'Pode ser bom conversar com alguém próximo. Você merece apoio e cuidado.'
        ],
        emoções_feliz: [
            'Que ótimo saber disso! Continue espalhando essa energia positiva. 😊',
            'Aproveite esse momento maravilhoso! Estou aqui para qualquer coisa que precisar.',
            'Que alegria! Isso é inspirador. Espero que seu dia continue incrível.'
        ],
        suporte: [
            'Por favor, descreva seu problema técnico com mais detalhes para que eu possa ajudar.',
            'Estamos aqui para resolver seus problemas. Diga o que está acontecendo.',
            'Se for um erro específico, compartilhe a mensagem de erro ou os passos que levaram a ele.'
        ],
        ajuda: [
            'Claro! Em que exatamente você gostaria de ajuda?',
            'Posso ajudar com dúvidas técnicas, recomendações de ferramentas ou até mesmo motivação!',
            'Explique sua dúvida e encontrarei a melhor resposta para você.'
        ],
        saudação: [
            'Olá! Como posso te ajudar hoje?',
            'Oi! Espero que seu dia esteja ótimo. Vamos conversar.',
            'Bom dia/boa tarde! Estou à disposição para ajudar.'
        ],
    };

    // Mapeamento de combinações de palavras-chave para categorias
    const keywords = {
        serviços: ['serviço', 'serviços', 'trabalho', 'projetos', 'empresa'],
        tecnologias: ['tecnologia', 'framework', 'biblioteca', 'técnicas'],
        linguagens: ['linguagem', 'programação', 'codar', 'código', 'sintaxe'],
        emoções_triste: ['triste', 'deprimido', 'mal', 'desmotivado', 'preciso de ajuda'],
        emoções_feliz: ['feliz', 'alegre', 'motivado', 'contente', 'ótimo'],
        suporte: ['suporte', 'problema', 'erro', 'ajuda técnica', 'funciona'],
        ajuda: ['ajuda', 'informação', 'explicar', 'detalhes', 'saber mais'],
        saudação: ['olá', 'oi', 'bom dia', 'boa tarde', 'boa noite', 'e aí']
    };

    // Detectar expressões matemáticas e realizar cálculo
    const mathExpression = message.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
    if (mathExpression) {
        const num1 = parseFloat(mathExpression[1]);
        const operator = mathExpression[2];
        const num2 = parseFloat(mathExpression[3]);

        let result;
        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': 
                result = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero não é permitida.';
                break;
            default: result = 'Erro: Operação desconhecida.';
        }
        return `O resultado de ${num1} ${operator} ${num2} é: ${result}`;
    }

    // Verificar as palavras-chave na mensagem
    for (const category in keywords) {
        if (keywords[category].some((keyword) => normalizedMessage.includes(keyword))) {
            const possibleResponses = responses[category];
            return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
        }
    }

    // Resposta padrão para mensagens não categorizadas
    return 'Desculpe, não entendi. Pode reformular sua pergunta? 😊';
}

// Sistema de autoapoio com reconhecimento emocional
function getMotivationalQuote() {
    const motivationalQuotes = [
        'Você é capaz de superar qualquer desafio. Confie em si mesmo.',
        'As dificuldades são apenas oportunidades para crescer.',
        'Cada dia é uma chance de recomeçar. Vá em frente!',
        'Você é mais forte do que pensa. Continue avançando.',
        'O esforço de hoje constrói o sucesso de amanhã.'
    ];

    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

// Exemplos de chamadas
console.log(getBotResponse('Quais serviços vocês oferecem?')); // Responde sobre serviços
console.log(getBotResponse('Quais tecnologias vocês utilizam?')); // Responde sobre tecnologias
console.log(getBotResponse('Estou triste hoje.')); // Responde com apoio emocional
console.log(getBotResponse('Quanto é 12 * 7?')); // Realiza o cálculo
console.log(getMotivationalQuote()); // Retorna uma frase motivacional aleatória
