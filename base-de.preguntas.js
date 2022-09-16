function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
        {
        pregunta: "1 ¿Cual es el elemento quimico mas abundante en la corteza terrestre?",
        respuesta: "Oxigeno",
        distractores: ["Nitrogeno", "Carbono"],
        },
        {
        pregunta: "2 ¿Como se denomina al resultado de una multiplicacion?",
        respuesta: "Producto",
        distractores: ["Resultado", "Residuo"],
        },
        {
        pregunta: "3 ¿Cuanto equivale el numero Pi?",
        respuesta: "3.1416",
        distractores: ["3.1614", "3.416"],
        },
        {
        pregunta: "4 ¿Cual fue el primer metal que emplearon los seres humanos?",
        respuesta: "Cobre",
        distractores: ["Acero", "Bronce"],
        },
        {
          pregunta: "5 ¿Cual es el primero de los numeros primos?",
          respuesta: "2",
          distractores: ["1", "4"],
        },
        {
          pregunta: "6 ¿Como se denomina al tipo de triangulo que tiene sus tres lados iguales?",
          respuesta: "Equilatero",
          distractores: ["Isosceles", "Recto"],
        },
        {
          pregunta: "7 ¿Cual es el primer elemento de la Tabla periodica?",
          respuesta: "Hidrogeno",
          distractores: ["Helio", "Argon"],
        },
        {
          pregunta: "8 ¿Como se le denomina al centro de un atomo?",
          respuesta: "Nucleo",
          distractores: ["Electron", "Proton"],
        },
        {
          pregunta: "9 ¿Cual es el gas que se encuentra en mayor cantidad en el aire que respiramos?",
          respuesta: "Nitrogeno",
          distractores: ["Oxigeno", "Carbono"],
        },
        {
          pregunta: "10 ¿Cual es el simbolo quimico del oro?",
          respuesta: "Au",
          distractores: ["Ao", "Or"],
        },
        {
          pregunta: "11 ¿Que es el cobalto?",
          respuesta: "Un mineral",
          distractores: [") Un vegetal", "Un Animal"],
        },
        {
          pregunta: "12 ¿Que se le agrega al hierro para hacer acero?",
          respuesta: "Carbono",
          distractores: ["Nitrogeno", "Oxigeno"],
        },
        {
          pregunta: "13 ¿En que parte del cuerpo se produce la insulina?",
          respuesta: "Pancreas",
          distractores: ["Higado", "Pulmones"],
        },
        {
          pregunta: "14 ¿Que rama de la biologia estudia a los animales?",
          respuesta: "Ninguno",
          distractores: ["Fauna", "Medicina"],
        },
        {
          pregunta: "15 ¿Como se llama el proceso por medio del cual las plantas obtienen su alimento?",
          respuesta: "Fotosintesis",
          distractores: ["Biosintesis", "Luminosintesis"],
        },
  ];
