// Lista de questions sobre el ahorro
const questionsAhorro = [
    {
        question: "¿Cuál es la mejor manera de ahorrar para la jubilación?",
        options: ["Guardar el dinero debajo del colchón", "Invertir en acciones", "No ahorrar"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Qué es una cuenta de ahorros?",
        options: ["Una cuenta donde guardas tu dinero y ganas intereses", "Una cuenta donde puedes pedir prestado dinero", "Una cuenta para gastar dinero"],
        respuestaCorrecta: 0
    },
    {
        question: "¿Cuál es la regla básica del ahorro?",
        options: ["No gastar nunca dinero", "Gastar todo lo que se gana", "Guardar una parte del dinero ganado"],
        respuestaCorrecta: 2
    },
    {
        question: "¿Por qué es importante tener un fondo de emergencia?",
        options: ["Para gastar en cosas innecesarias", "Para cubrir gastos inesperados", "Para donar a organizaciones benéficas"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Cuál de las siguientes options es una estrategia efectiva para ahorrar dinero?",
        options: ["Comprar impulsivamente", "Seguir un presupuesto mensual", "Ignorar los precios y comprar lo que desees"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Cuál de los siguientes no es un ejemplo de ahorro a largo plazo?",
        options: ["Ahorrar para comprar un coche nuevo", "Guardar dinero para una emergencia médica", "Ahorrar para un viaje de vacaciones el próximo mes"],
        respuestaCorrecta: 2
    },
    {
        question: "¿Cuál de las siguientes afirmaciones es verdadera sobre el interés compuesto?",
        options: ["El interés compuesto solo se aplica a las cuentas de ahorro", "El interés compuesto significa que los intereses se calculan sobre el capital inicial y los intereses acumulados", "El interés compuesto solo se aplica a las inversiones a corto plazo"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Qué es un fondo de emergencia y por qué es importante tener uno?",
        options: ["Un fondo de emergencia es un ahorro reservado para comprar cosas lujosas", "Un fondo de emergencia es un ahorro destinado a cubrir gastos inesperados, como reparaciones de automóviles o facturas médicas", "Un fondo de emergencia es un tipo de inversión a largo plazo"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Cuál de las siguientes acciones podría ayudarte a ahorrar dinero en tus facturas mensuales?",
        options: ["Mantener las luces encendidas todo el día", "Apagar los electrodomésticos cuando no estén en uso", "Dejar el grifo abierto mientras te cepillas los dientes"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Cuál de las siguientes afirmaciones es verdadera sobre la planificación financiera?",
        options: ["La planificación financiera es solo para personas con altos ingresos", "La planificación financiera implica establecer metas financieras y crear un plan para alcanzarlas", "La planificación financiera no es importante para el ahorro"],
        respuestaCorrecta: 1
    },
];

// Definir las questions sobre inversión
const questionsInversion = [
    {
        question: "¿Qué es el ROI (Return on Investment)?",
        options: ["Una medida de la rentabilidad de una inversión.", "Una cuenta bancaria.", "Un tipo de impuesto."],
        respuestaCorrecta: 0
    },
    {
        question: "¿Qué es un fondo de inversión?",
        options: ["Un préstamo a largo plazo.", "Un vehículo de inversión donde se combinan los fondos de varios inversores y se invierten en diferentes activos financieros.", "Una cuenta de ahorro."],
        respuestaCorrecta: 1
    },
    {
        question: "¿Cuál de las siguientes opciones es un ejemplo de inversión de riesgo?",
        options: ["Comprar acciones de una empresa establecida.", "Invertir en bonos del gobierno.", "Invertir en una startup tecnológica emergente."],
        respuestaCorrecta: 2
    },
    {
        question: "¿Qué es la diversificación de la cartera de inversiones?",
        options: ["Poner todo el dinero en una sola inversión.", "Distribuir la inversión en diferentes activos para reducir el riesgo.", "No invertir en absoluto."],
        respuestaCorrecta: 1
    },

    <p>
  Crea un enlace a
  <a href="https://todosparaunospe.github.io/juego2/">la página de inicio de Mozilla</a>.
</p>
];

let respuestasCorrectas = 0;

// Función para mostrar la question actual
function mostrarquestion(questions, index) {
    const questionActual = questions[index];
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');

    questionContainer.textContent = questionActual.question;
    optionsContainer.innerHTML = '';

    questionActual.options.forEach((opcion, idx) => {
        const button = document.createElement('button');
        button.textContent = opcion;
        button.addEventListener('click', () => checkAnswer(questionActual, idx, questions));
        optionsContainer.appendChild(button);
    });
}

// Función para verificar la respuesta seleccionada
function checkAnswer(question, selectedIndex, questions) {
    if (selectedIndex === question.respuestaCorrecta) {
        respuestasCorrectas++;
        alert('¡Respuesta correcta!');
    } else {
        alert('Respuesta incorrecta. ¡Inténtalo de nuevo!');
    }
    
    // Mostrar la siguiente question o finalizar el juego
    const currentIndex = questions.indexOf(question);
    if (currentIndex < questions.length - 1) {
        mostrarquestion(questions, currentIndex + 1);
    } else {
        alert(`¡Juego terminado! Respuestas correctas: ${respuestasCorrectas}/${questions.length}`);
    }
}

// Función para iniciar el juego de Ahorro
function iniciarJuegoAhorro() {
    respuestasCorrectas = 0;
    mostrarquestion(questionsAhorro, 0);
}

// Función para iniciar el juego de Inversión
function iniciarJuegoInversion() {
    respuestasCorrectas = 0;
    mostrarquestion(questionsInversion, 0);
}

// Iniciar el juego de Ahorro cuando se hace clic en el enlace "Ahorro"
document.getElementById('ahorro-link').addEventListener('click', (event) => {
    event.preventDefault();
    iniciarJuegoAhorro();
});

// Iniciar el juego de Inversión cuando se hace clic en el enlace "Inversión"
document.getElementById('inversion-link').addEventListener('click', (event) => {
    event.preventDefault();
    iniciarJuegoInversion();
});
