// TODO: add images

/**
 * replaceNewLineInCards: replaces \n for \n\n in text prop of every card
 * @param  {Array} cards
 * @return {Array} processedCards
 */
const replaceNewLineInCards = (cards) => {
  return cards.map(card => (
    {
      ...card,
      text: card.text ? card.text.replace('\n', '\n\n') : null,
    }
  ));
};

const IntroduccionLessonRaw = [
  {
    type: 'content',
    //imageUrl: '/images/',
    title: 'Empecemos!',
    text: 'Hoy en día,todo es programable. Desde donde estás viendo esto, hasta algunos relojes. Además, por cada persona en el mundo hay siete dispositivos tecnológicos.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Con la programación se pueden hacer cosas que hace unos años nadie pensaba, como autos que se manejen solos, viajar a Marte o hablar por WhatsApp.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Hacer estas cosas está a tu alcance, con un poco de práctica, vas a poder hacer los juegos, páginas o aplicaciones que usas todos los días.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'La programación es lo que se viene ¿Sabías que para el 2020 va a haber un millón de puestos de trabajo sin cubrir de programación? Además, los trabajos de programación son de los mejores pagos.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    title: 'Funcionamiento de las compus',
    text: `Ahora que ya sabés lo bueno de la programación, adentrémonos en lo técnico: ¿Cómo funcionan las computadoras?
Las computadoras son torpes, lo único que saben hacer es seguir instrucciones.`,
    forceNewStack: true,
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Se las puede pensar como un robot al que hay que darle instrucciones específicas para hacer cosas, como por ejemplo, moverse para adelante, girar o saltar.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'En cualquier cosa que hacemos, seguimos una serie de pasos. Si tenemos que poner la mesa, primero vamos a la cocina, abrimos el cajón, agarramos los utensilios, vamos a la mesa y ponemos las cosas donde vayan. ',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'A esta serie de pasos le decimos **algoritmo**. Ahora vamos a hacer nuestro propio algoritmo.',
  },
  {
    type: 'order',
    question: 'Ordená las instrucciones como deberían ir para hacer un licuado',
    options: [
      {
        content: 'Meter ingredientes en la licuadora',
        step: 2,
      },
      {
        content: 'Enchufar la licuadora',
        step: 1,
      },
      {
        content: 'Disfrutar el licuado',
        step: 5,
      },
      {
        content: 'Servir licuado en el vaso',
        step: 4,
      },
      {
        content: 'Licuar',
        step: 3,
      },
    ],
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Ahora que ya conocemos qué so los algoritmos, podemos explicar las cosas más fácilmente, como por ejemplo, el funcionamiento de las búsquedas en Google',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Supongamos que una persona entra a Google y realiza una búsqueda. Google busca en su base de datos resultados de páginas que coincidan con la búsqueda y hace un ranking con las más destacadas.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Después de hacer el ranking, seleccioná los primeros diez resultados y finalmente se los muestra al usuario.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    title: 'Lenguages y algoritmos',
    text: 'Pero, ¿Cómo hacemos para que la computadora entienda un algoritmo? Tenemos que hablarle en uno de los muchos lenguajes que ella entiende.',
    forceNewStack: true,
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Se le dice escribir código a usar cualquiera de estos lenguajes para comunicarse con la computadora.',
  },
];
const IntroduccionLesson = replaceNewLineInCards(IntroduccionLessonRaw);

const PrimerosConceptosLessonRaw = [
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Antes de ponernos a escribir código, es muy importante saber qué queremos y cómo lo vamos a hacer.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'El primer paso es pensar el algoritmo y escribir cómo funciona con nuestras palabras. Esto se llama pseudocódigo, lo vamos a usar para aprender conceptos de programación antes de escribir código.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    title: 'Variables',
    text: 'Una variable es un pedazo de memoria en el que guardamos cosas, como números, letras, palabras y más. Las variables tienen un nombre y un valor.',
    forceNewStack: true,
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: '¿Cuándo vamos a necesitar una variable? Por ejemplo, cuando estamos viendo un video en  YouTube, tenemos que guardar en qué minuto estamos. Esto lo guardaríamos en una variable numérica.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: `Por ejemplo, si queremos hacer un programa para sumar 2 números, las acciones son:
* Pedirle al usuario el primer número, y guardar lo que ingresó en la variable \`\`\`numero1\`\`\`
* Pedirle al usuario el segundo número, y guardar lo que ingresó en la variable \`\`\`numero2\`\`\`
* Mostrarle al usuario \`\`\`numero1 + numero2\`\`\``,
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Siempre es importante poner nombres expresivos a las variables. Si alguien la ve por primera vez, tiene que entender exactamente para qué sirve, y qué guarda. Por ejemplo a, que, variable y cosa no son buenos nombres!',
  },
  {
    type: 'multiple-choice',
    //imageUrl: '/images/',
    question: 'Qué es una variable?',
    options: [
      {
        content: 'Una serie de pasos que sirven para cumplir un objetivo',
        message: 'Esa es la definición de algoritmo, no de variable!',
      },
      {
        content: 'Un nombre que se le da a la memoria de la computadora',
        message: 'Las variables son pedazos de la memoria, no la memoria en si.',
      },
      {
        content: 'Una parte de la memoria que podemos usar para guardar valores',
        message: 'Bien! Esa era la opción correcta',
        correct: true,
      },
    ],
  },
  {
    type: 'multiple-choice',
    question: 'Cómo llamarías una variable que guarda la cantidad de veces que aparece una palabra en un texto?',
    options: [
      {
        content: 'cantidadApariciones',
        message: 'Bien! Es un nombre corto y claro.',
        correct: true,
      },
      {
        content: 'vecesQueApareceLaPalabraEnElTexto',
        message: 'Mal. El nombre es demasiado largo!',
      },
      {
        content: 'numero',
        message: 'Mal. Número de qué? Quién sabe',
      },
    ],
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    title: 'If y else',
    text: 'Llegó la hora de tomar decisiones. Más precisamente, en el flujo del programa. Usamos una estructura condicional cuando queremos que ocurra una acción si una condición es verdadera y otra acción si es falsa.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Supongamos que queremos guardar un secreto con contraseña. Si el usuario pone bien la contraseña, le mostramos el secreto. Si no, le mostramos un mensaje de error.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: `Como todos los lenguajes de programación están en inglés, las palabras clave son if y else.
* Pedirle al usuario la contraseña y guardarla en \`\`\`contraseñaIngresada\`\`\`
* \`\`\`if contraseñaIngresada\`\`\` es igual a \`\`\`"12345678"\`\`\`
  * mostrarle al usuario el secreto
* else
  * mostrarle al usuario el mensaje de error
mostrarle al usuario el mensaje de error
`,
  },
  {
    type: 'multiple-choice',
    question: `Cuál es el valor de la variable \`\`\`resultado\`\`\` al final del código?
* \`\`\`variable resultado = 0\`\`\`
* \`\`\`variable x = 7\`\`\`
* \`\`\`if x > 10\`\`\`
  * \`\`\`resultado = 1\`\`\`
* \`\`\`else if x < 8\`\`\`
  * \`\`\`resultado = 2\`\`\`
* \`\`\`else\`\`\`
  * \`\`\`resultado = 3\`\`\``,
    options: [
      {
        content: '1',
        message: 'X es 7, y 7 no es mayor a 10.',
      },
      {
        content: '2',
        correct: true,
      },
      {
        content: '3',
        message: 'X es 7, y 7 es menor que 8, entonces resultado va a ser 2.',
      },
    ],
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    title: 'Loops',
    text: 'Avanzando un poco más, ¿Cómo podríamos hacer para sumar los números del 1 al 100? Para esto están las estructuras repetitivas.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: `La estructura repetitiva que vamos a ver se llama \`\`\`for\`\`\`. El for se divide en cuatro partes, al principio de todo inicializamos una variable. Supongamos que esa variable la llamamos \`\`\`pasoActual\`\`\` y el valor inicial que le damos es 1.
1. \`\`\`pasoActual = 1\`\`\``,
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'El segundo paso del for es una condición, por ejemplo que ```pasoActual``` sea menor a 100. Si esa condición se cumple, es decir que es verdadera, podemos seguir con el tercer paso del for.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'La tercer parte del for es la acción que queremos hacer en cada paso. En este caso queremos hacer la suma de 1 hasta 100, así que la acción sería sumar a la variable ```sumaTotal``` el valor de la variable ```pasoActual```.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'En el caso de que pasoActual no sea menor que 100, entonces el for se termina.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: `Por último, la cuarta parte es hacer que la variable \`\`\`pasoActual\`\`\` recorra todos los valores entre 1 y 100. Esto lo hacemos sumándole 1 y volviendo ejecutar el paso 2, generando un loop o ciclo.
* pasoActual = 1
* if pasoActual < 100
  * sumaTotal es igual a sumaTotal más el pasoActual
  * sumar 1 a pasoActual y volver al 2)
* terminó el for`,
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: `Veamos otro ejemplo
* \`\`\`for\`\`\` desde 1 hasta 100 guardando el valor en \`\`\`pasoActual\`\`\`
  * If pasoActual es igual a 99
    * alertar al usuario que el for se está por terminar
En este ejemplo, el código adentro del if va a ser ejecutado una sola vez, cuando pasoActual sea igual a 99. En el resto de las ejecuciones no pasará nada, ya que \`\`\`pasoActual\`\`\` será diferente de 99`,
  },
  {
    type: 'multiple-choice',
    question: `Qué valor tiene la variable \`\`\`carga\`\`\` cuando se termina de ejecutar el programa?
* inicializamos la variable \`\`\`carga\`\`\` en 40
* \`\`\`for\`\`\` desde 1 hasta 100 guardando el valor en \`\`\`pasoActual\`\`\`
  * \`\`\`if carga es igual a pasoActual\`\`\`
    * \`\`\`carga = carga + 1\`\`\`
  * \`\`\`if carga > 60\`\`\`
    * \`\`\`carga = 60\`\`\``,
    options: [
      {
        content: '59',
        message: 'Mal. Carga llega a ser 60, no se detiene en 59',
      },
      {
        content: '60',
        correct: true,
      },
      {
        content: '100',
        message: 'Mal. Carga deja de subir en 60 por el segundo if.',
      },
    ],
  },
];
const PrimerosConceptosLesson = replaceNewLineInCards(PrimerosConceptosLessonRaw);

const LenguajesLessonRaw = [
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Ahora que ya aprendimos los primeros conceptos de la programación, vamos a aprender la sintaxis de un lenguaje muy usado hoy en día, **JavaScript**.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'Con JavaScript se pueden hacer desde cosas simples como un formulario, hasta juegos en realidad virtual.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'En los lenguajes de programación, el código se divide en líneas. Por cada línea, le podemos dar al programa diversas instrucciones, como por ejemplo, empezar una estructura condicional o declarar una variable.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'El programa lee las líneas de arriba para abajo. Entonces si tenemos que declarar una variable que vamos a usar después, se tiene que primero declarar la variable y sólo después de declararla la podemos usar.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    text: 'En la mayoría de las líneas que no son estructuras condicionales o repetitivas, el último caracter de la línea es un punto y coma ;  que sirve para darle a entender a la computadora que la línea se termina ahí.',
  },
  {
    type: 'content',
    //imageUrl: '/images/',
    title: 'Alert',
    text: `En JavaScript es muy común usar la palabra clave \`\`\`alert\`\`\` que sirve para darle mensajes al usuario. La sintaxis es la siguiente:
\`\`\`alert(“Hello world!”);\`\`\``,
    forceNewStack: true,
  },
];
const LenguajesLesson = replaceNewLineInCards(LenguajesLessonRaw);

export { IntroduccionLesson, PrimerosConceptosLesson, LenguajesLesson };
