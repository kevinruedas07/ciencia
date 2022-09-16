function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
        {
        pregunta: "1 ¿Cuál es el elemento químico más abundante en la corteza terrestre?",
        respuesta: "Oxígeno",
        distractores: ["Nitrógeno", "Carbono"],
        },
        {
        pregunta: "2 ¿Cómo se denomina al resultado de una multiplicación?",
        respuesta: "Producto",
        distractores: ["Resultado", "Residuo"],
        },
        {
        pregunta: "3 ¿Cuánto equivale el número Pi?",
        respuesta: "3.1416",
        distractores: ["3.1614", "3.416"],
        },
        {
        pregunta: "4 ¿Cuál fue el primer metal que emplearon los seres humanos?",
        respuesta: "Cobre",
        distractores: ["Acero", "Bronce"],
        },
        {
          pregunta: "5 ¿Cuál es el primero de los número primos?",
          respuesta: "2",
          distractores: ["1", "4"],
        },
        {
          pregunta: "6 ¿Cómo se denomina al tipo de triángulo que tiene sus tres lados iguales?",
          respuesta: "Equilátero",
          distractores: ["Isósceles", "Recto"],
        },
        {
          pregunta: "7 ¿Cuál es el primer elemento de la Tabla periódica?",
          respuesta: "Hidrogeno",
          distractores: ["Helio", "Argón"],
        },
        {
          pregunta: "8 ¿Cómo se le denomina al centro de un átomo?",
          respuesta: "Núcleo",
          distractores: ["Electrón", "Protón"],
        },
        {
          pregunta: "9 ¿Cuál es el gas que se encuentra en mayor cantidad en el aire que respiramos?",
          respuesta: "Nitrógeno",
          distractores: ["Oxígeno", "Carbono"],
        },
        {
          pregunta: "10 ¿Cuál es el símbolo químico del oro?",
          respuesta: "Au",
          distractores: ["Ao", "Or"],
        },
        {
          pregunta: "11 ¿Qué es el cobalto?",
          respuesta: "Un mineral",
          distractores: ["Un vegetal", "Un Animal"],
        },
        {
          pregunta: "12 ¿Qué se le agrega al hierro para hacer acero?",
          respuesta: "Carbono",
          distractores: ["Nitrógeno", "Oxígeno"],
        },
        {
          pregunta: "13 ¿En qué parte del cuerpo se produce la insulina?",
          respuesta: "Páncreas",
          distractores: ["Hígado", "Pulmones"],
        },
        {
          pregunta: "14 ¿Qué rama de la biología estudia a los animales?",
          respuesta: "Ninguno",
          distractores: ["Fauna", "Medicina"],
        },
        {
          pregunta: "15 ¿Cómo se llama el proceso por medio del cual las plantas obtienen su alimento?",
          respuesta: "Fotosíntesis",
          distractores: ["Biosíntesis", "Luminosíntesis"],
        },
  ];
