import replaceNewLineInCards from './../../utils/client/replaceNewLineInCards';

const IntroDesarrolloPersonalLessonRaw = [
  {
    type: 'content',
    title: 'Desarrollo Personal??',
    text: 'En el mundo moderno, cómo afrontas varias situaciones puede tener un impacto muy grande en tu vida.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/theater.svg',
    text: 'En este curso aprenderás cómo una mentalidad optimista y planificadora puede ayudarte a construir tu futuro, y cómo te afecta una mentalidad pesimista.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/weird-man.svg',
    text: 'Aprenderás qué es el problema mente-cuerpo, relacionado con cómo tus emociones impactan en cómo te ves y al revés; cómo te ves desarrolla tus emociones.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/yearbook.svg',
    text: 'También aprenderás qué es una crisis existencial, cómo atravesarla de forma alegre, y por qué podes tener crisis existenciales.',
  },
  {
    type: 'feedback',
    title: 'Ayudanos!',
    text: 'Necesitamos tu ayuda! Decinos todas las sugerencias o comentarios que tengas!',
    nextUrl: '/course/Desarrollo',
  },
];
const IntroDesarrolloPersonalLesson = replaceNewLineInCards(IntroDesarrolloPersonalLessonRaw);

const PesimismoYOptimismoLessonRaw = [
  {
    type: 'content',
    title: 'La cabeza de un pesimista',
    text: '“Esta lección va a ser muy mala. No te enseñará nada. Al final te vas a preguntar a dónde se fueron esos pocos minutos de tu vida.”',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/security.svg',
    text: 'Eso es un pequeño ejemplo de lo que el pesimismo puede hacer por vos. Te prepara para lo peor, reduce la tensión de las expectativas y te protege de la decepción.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/apple-logo.svg',
    text: 'Vivimos en un mundo exageradamente optimista. Esto es el resultado de muchas empresas tratando de vendernos cosas, prometiéndonos felicidad a cambio.',
  },
  {
    type: 'multiple-choice',
    question: 'Cómo impacta el pesimismo ?',
    options: [
      {
        content: 'Queso',
        message: 'Nope',
      },
      {
        content: 'Te prepara para lo peor, reduce la tensión de las expectativas y te protege de la decepción.',
        message: 'Muy bien!',
        correct: true,
      },
    ],
  },
  {
    type: 'multiple-choice',
    question: 'Cual es uno de los orígenes del optimismo implantado en la sociedad ?',
    options: [
      {
        content: 'Bananas',
        message: 'Capo',
      },
      {
        content: 'Muchas empresas tratando de vendernos cosas, prometiéndonos felicidad a cambio.',
        message: 'Excelente!',
        correct: true,
      },
    ],
  },
  {
    type: 'content',
    title: 'Por qué hay pesimistas?',
    text: `Durante siglos, las religiones difundieron mensajes oscuros:
El Budismo habla de dolor, la vida es injusta y llena de males.
El Cristianismo te carga con la culpa, con que si no hacés lo que te dicen, estás pecando.`,
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/blackboard.svg',
    text: `Fue útil: sirvió para mantener las expectativas bajo control.
Las expectativas reducidas explican la existencia de las religiones, ya que te hacen feliz. Se puede comprender mejor con la siguiente ecuación: **felicidad = realidad / expectativas**`,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/chemistry.svg',
    text: `Entonces, para **ser FELIZ**:
O mejoras la **realidad**
O reducís las **expectativas**`,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/physics.svg',
    text: `Entonces qué hace un pesimista?
Reduce sus expectativas!`,
  },
  {
    type: 'multiple-choice',
    question: 'Por qué el pesimismo puede ser racional?',
    options: [
      {
        content: 'Si lo que buscas es felicidad a corto plazo, reducir las expectativas te da una falsa sensación de felicidad.',
        message: 'Excelente!',
        correct: true,
      },
      {
        content: 'Bananas',
        message: 'Como te diste cuenta?',
      },
    ],
  },
  {
    type: 'content',
    title: 'Lecciones claves del pesimista',
    text: 'Dia a dia sostienen que:',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/presentation.svg',
    text: `Se vive mal
Todo el mundo está triste y preocupado todo el tiempo
La felicidad dura 5 minutos
No existe tener esperanza
Ser mediocre es la normalidad`,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/man-thinking.svg',
    text: 'Aunque sea un buen dia, se preguntan porque no fue mejor.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/desert.svg',
    text: 'En resumen, el **pesimismo indefinido** es la mentalidad irracional (ya que hay formas mejores) de aquellos que, sin una razón definida, piensan que el presente es malo y el futuro va a ser peor, por lo general con el objetivo de ser más feliz.',
  },
  {
    type: 'multiple-choice',
    question: 'Por qué el pesimismo indefinido es una solución a corto plazo?',
    options: [
      {
        content: 'Porque solo mira el presente.',
        message: 'Capo',
      },
      {
        content: 'Porque el mundo sería cada vez peor porque nadie hace nada para mejorarlo, por lo que se tiene que pensar peor todavía. Es una bola de nieve.',
        message: 'Excelente!',
        correct: true,
      },
    ],
  },
  {
    type: 'content',
    title: 'La salida del pesimismo indefinido',
    text: 'Aún así, hay una alternativa al pesimismo indefinido, el **optimismo definido**.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/test.svg',
    text: 'El optimismo definido dice todo lo contrario, que el mundo puede ser un lugar mejor, pero que para eso tenés que tener un plan definido de cómo ir desde el estado actual a un estado mejor.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/prohibitied-telescope.svg',
    text: 'Esto no implica hacer predicciones positivas, contrarias a las predicciones negativas explicadas antes. El optimismo definido dice que directamente no hagamos predicciones.  ',
  },
  {
    type: 'content',
    text: 'Debemos vivir el día a día sin estar esperando lo mejor ni lo peor, sino simplemente enterandonos del resultado, y no evaluar si fue bueno o malo, sino que instantáneamente buscar cómo mejorarlo. ',
  },
  {
    type: 'content',
    text: 'Para un optimista definido, el futuro será mejor que el presente si planea y trabaja duro para hacerlo mejor.',
  },
  {
    type: 'multiple-choice',
    question: 'Por qué el optimismo definido es una solución real?',
    options: [
      {
        content: 'Porque la realidad choca con la sensacion falsa.',
        message: 'Capo',
      },
      {
        content: 'Porque no te da una sensación de felicidad como en el pesimismo indefinido, sino que realmente te da felicidad ya que mejora el mundo.',
        message: 'Excelente!',
        correct: true,
      },
    ],
  },
  {
    type: 'content',
    title: 'El optimismo definido en la sociedad',
    text: 'Desde el siglo XVII hasta mediados del siglo XX, ciertos optimistas lideraron el mundo occidental. Científicos, ingenieros, médicos y hombres de negocios hicieron al mundo más rico, sano y longevo de lo que se podían imaginar.',
    forceNewStack: true,
  },
  {
    type: 'content',
    text: 'Entre los avances, estuvieron la aplicación de la química a la industria y la agricultura, la navegación a vapor, los ferrocarriles, los telégrafos eléctricos, la limpieza de continentes enteros para el cultivo y la canalización de los ríos.',
  },
  {
    type: 'content',
    text: 'Incluso la Gran Depresión no impidió el progreso implacable en los Estados Unidos, que siempre ha sido el hogar de los optimistas definidos más visionarios del mundo.',
  },
  {
    type: 'content',
    text: 'El Empire State Building se inició en 1929 y terminó en 1931. El Golden Gate Bridge se inició en 1933 y se completó en 1937. El programa de Apolo de la NASA comenzó en 1961 y puso 12 hombres en la luna antes del 1972.',
  },
  {
    type: 'content',
    text: 'A finales de 1940, un californiano llamado John Reber se propuso reinventar la geografía física de toda la bahía de San Francisco. Reber era un maestro de escuela primaria!',
  },
  {
    type: 'content',
    text: 'A pesar de su empleo, propuso públicamente construir dos enormes presas en la bahía, construir lagos masivos de agua dulce para el agua potable y el riego, y reclamar 81 millones de metros<sup>2</sup> de tierra para el desarrollo!',
  },
  {
    type: 'content',
    text: 'Aunque no tenía autoridad personal, la gente tomó el plan de Reber en serio. Fue aprobado por juntas de redacción de periódicos en California. El Congreso de los Estados Unidos celebró audiencias sobre su factibilidad.',
  },
  {
    type: 'content',
    text: 'El Cuerpo de Ingenieros del ejército construyó un modelo a escala de la bahía en Sausalito, California. Alguien tomaría hoy tal visión en serio?',
  },
  {
    type: 'multiple-choice',
    question: 'Si a un recolector de basura se le ocurre como disminuir el tráfico de la ciudad, deberíamos escucharlo?',
    options: [
      {
        content: 'Obvio que sí!',
        message: 'Excelente!',
        correct: true,
      },
      {
        content: 'Por favor, si es un recolector de basura!! Que sabe él???',
        message: 'Las mejores ideas, las disruptoras y poco convencionales, vienen justamente de lugares poco convencionales.',
      },
    ],
  },
  {
    type: 'content',
    title: 'El optimismo definido en la actualidad',
    text: 'En la década de 1960, la gente recibía todos estos grandes planes y comenzaron a cuestionarse el sentido de trabajar, ya que todo avanzaba muy bien sin su aporte. Esto provocó el fin del optimismo definido.',
    forceNewStack: true,
  },
  {
    type: 'content',
    text: 'Hoy un plan que viene de un maestro de escuela nunca sería tomado en cuenta. Una planificación de largo alcance que viene de cualquier persona con más poder, sería desechada como basura.',
  },
  {
    type: 'content',
    text: 'Todavía se puede visitar el modelo de Reber de la bahía en Sausalito, pero hoy es sólo una atracción turística: grandes planes para el futuro se han convertido en curiosidades antiguas.',
  },
  {
    type: 'content',
    text: 'El optimismo definido hace que nos esforcemos hoy para obtener mejores cosas en el futuro.',
  },
  {
    type: 'content',
    text: 'No debemos esperar a que las cosas buenas pasen por si solas. Tampoco debemos esperar a que pasen las malas. Debemos planificar el futuro y estar dispuestos a construirlo desde el presente.',
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/food/raspberry.png',
    title: 'Excelente!',
    text: 'Felicitaciones! Ahora sabes sobre diferentes tipos de mentalidades y cómo influyeron en la gente hasta ahora, para tomar mejores decisiones a la hora de mantener alguna!',
  },
];
const PesimismoYOptimismoLesson = replaceNewLineInCards(PesimismoYOptimismoLessonRaw);

const ProblemaMenteCuerpoLessonRaw = [
  {
    type: 'content',
    title: 'Qué es el problema mente-cuerpo?',
    text: 'El “problema mente-cuerpo” radica en el hecho de que a los ojos de otras personas, nuestra apariencia física es el factor que más influye en cómo otros evalúan nuestra naturaleza y nuestra personalidad.',
  },
  {
    type: 'content',
    text: 'Se asume que un rostro dulce tiene un dueño amable y benevolente, mientras que la cara larga, encarnizada, con ojos estrechos, un dueño enojado y sospechoso.',
  },
  {
    type: 'content',
    text: 'Sin embargo, hay una dramática excepción a esta regla: nuestros propios casos.',
  },
  {
    type: 'content',
    title: 'Cómo nos vemos nosotros',
    text: 'Cuando se trata de nosotros mismos, sabemos que la manera en que lucimos obviamente no es lo que somos.',
    forceNewStack: true,
  },
  {
    type: 'content',
    text: 'Por dentro podemos sentirnos tiernos, inspirados, y jóvenes, pero la cara que vemos en el espejo puede ser severa, seria, sin humor, y cada vez más semejante a la de un señor anciano y amargado. Nos sentimos mal representados.',
  },
  {
    type: 'multiple-choice',
    question: 'Cual es la diferencia en cómo vemos a los demás y cómo nos vemos a nosotros?',
    options: [
      {
        content: 'Solemos juzgar a los demas por como se ven, pero rara vez hacemos lo mismo.',
        message: 'Excelente!',
        correct: true,
      },
      {
        content: 'Esta vez cookies',
        message: 'Crack k  k   k    k     k      k',
      },
    ],
  },
  {
    type: 'content',
    title: 'Cómo nos vemos tiende a influir como somos',
    text: 'Hay una frase que dice que a los 40, todos tienen la cara que merecen. Esto es absurdo. Nadie, ni siquiera con 40 años de intentarlo, ha logrado cambiar su apariencia facial con solo pensarlo.',
    forceNewStack: true,
  },
  {
    type: 'content',
    text: 'Todo lo contrario tiende a ocurrir: nuestras personalidades suelen moldearse a las personalidades representadas por nuestros rostros, como resultado de años de otras personas asumiendo que esto debe ser lo que somos, y tratándonos así.',
  },
  {
    type: 'content',
    text: 'Las características más gentiles de alguien quien parece amable serán, por lo tanto, constantemente invitadas a la superficie, por las expectativas y el alentamiento de los demás.',
  },
  {
    type: 'content',
    title: 'Como solucionar el problema mente-cuerpo',
    text: 'El problema mente-cuerpo nos lleva a entender el compromiso de recordar que el otro no es como parece; que su cuerpo fue impuesto y no elegido, y que puede haber una personalidad muy diferente atrapada dentro de su envoltura física.',
    forceNewStack: true,
  },
  {
    type: 'content',
    text: 'Lo mejor que podemos hacer para superar el problema mente-cuerpo no es jugar con la ropa, gastar en peluquerías, o poner en peligro nuestra salud con una cirugía plástica. Nunca seremos capaces de alinear la mente y el cuerpo con la apariencia.',
  },
  {
    type: 'content',
    text: 'La solución es reconocer que el problema es una parte existencial del ser humano.',
  },
  {
    type: 'content',
    text: 'Debemos esforzarnos por recordar que el aspecto de los demás puede ser muy distinto de su personalidad, y comprender que si otro no hace eso, es por su ignorancia. No debemos sentirnos mal por lo que piensa el resto.',
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/food/raspberry.png',
    title: 'Muy bien!',
    text: 'Finalizaste la lección del problema mente cuerpo! Ahora sabes la importancia de juzgar correctamente y como hacerlo!',
  },
];
const ProblemaMenteCuerpoLesson = replaceNewLineInCards(ProblemaMenteCuerpoLessonRaw);

const CrisisExistencialesLessonRaw = [
  {
    type: 'content',
    title: 'Qué es una crisis existencial?',
    text: 'Una crisis existencial es una época en donde uno cuestiona los fundamentos de su vida: si tiene algún significado, propósito o valor.',
  },
  {
    type: 'content',
    text: 'La crisis está definida bajo cuatro características distintivas:',
  },
  {
    type: 'content',
    text: `Cuestionamiento
    Iluminación y replanteo de vida
    Miedo a morirse
    Vivimos oscuros`,
  },
  {
    type: 'content',
    text: 'Lo que viene a continuación puede sonar terrible, pero es importante entender que es real, casi todos pasaron por esto alguna vez. Al final todo va a estar bien, y vas a estár feliz de entender cómo funcionan las crisis y cómo ayudar a otros!',
  },
  {
    type: 'content',
    title: 'Cuestionamiento',
    text: 'Un periodo en donde mucho de lo que anteriormente veíamos como normal o de sentido común, nos parece extraño, poco casual, y misterioso.',
    forceNewStack: true,
  },
  {
    type: 'content',
    text: 'Por ejemplo, podemos empezar a preguntarnos ',
  },
  {
    type: 'content',
    text: `¿Por qué vivimos en ESTA parte del mundo en vez en cualquier otra?
    ¿Por qué hacemos ESTE trabajo y NO otro?
    ¿Por qué estamos con ESTA persona y siguiendo ESTAS normas sociales?`,
  },
  {
    type: 'content',
    text: 'En poco tiempo nos damos cuenta, perturbados, que hay muchas más opciones bajo la superficie de las que nos permitimos por lo general imaginar.',
  },
  {
    type: 'content',
    text: `'Hay una famosa frase relacionada:
    \`\`\`“Es nuestra luz, no nuestra oscuridad, lo que más nos asusta”\`\`\`
    Somos mucho más libres de lo que creemos.`,
  },
  {
    type: 'content',
    title: 'Iluminación y replanteo de vida',
    text: 'Esta revelación nos produce ansiedad extrema. El reconocimiento de nuestra libertad no nos trae calma, de hecho todo lo contrario, reconocemos que hemos estado engañándonos acerca de lo que <strong>debemos</strong> ser.',
    forceNewStack: true,
  },
  {
    type: 'content',
    text: 'A nadie realmente le importa tanto lo que nosotros pensamos, lo que somos y lo que hemos elegido ser. Casi siempre sobreestimamos la importancia de nuestras malas acciones.',
  },
  {
    type: 'content',
    text: 'Llegamos a la realización incómoda de que nuestra responsabilidad principal es hacia nosotros, <strong>no</strong> hacia los demás.',
  },
  {
    type: 'content',
    title: 'Miedo a morirse',
    text: 'Estamos altamente conscientes de la muerte, el tiempo es corto y se acaba. Necesitamos reexaminar nuestras vidas pero el reloj está corriendo y suena fuerte.',
    forceNewStack: true,
  },
  {
    type: 'content',
    text: 'Hay tantas cosas para hacer, que pensamos que no vamos a llegar a hacer nada que valga la pena en el día.',
  },
  {
    type: 'content',
    title: 'Vivimos oscuros',
    text: 'Tenemos muchas opciones pero, como somos humanos, nunca tenemos la información que hubiéramos necesitado para elegir con certeza y sabiduría. Somos forzados a decidir y, como nos falta información, podemos estar seguros de que cometeremos muchos errores.',
    forceNewStack: true,
  },
  {
    type: 'content',
    text: 'La condición de la especie humana es planear nuestro curso en la oscuridad, sin una razón adecuada. Esto nos lleva a una palabra favorita de los psicólogos del existencialismo: <strong>ansiedad</strong>.',
  },
  {
    type: 'content',
    title: 'La ansiedad',
    text: 'Debido a que debemos elegir sin seguridad de lo escogido, vivimos ansiosos. No sobre algo en particular, pero como una cualidad básica de nuestras vidas.',
    forceNewStack: true,
  },
  {
    type: 'content',
    text: 'Esto puede sonar como una conspiración paralizante. Sin embargo, los psicólogos existencialistas no quieren deprimirnos, quieren entender los dilemas que por lo general percibimos como si solo afectarán a uno mismo, y traernos soluciones.',
  },
  {
    type: 'content',
    text: 'Está es la razón por la que nos avergonzamos y pensamos que tenemos algún tipo de maldición, cuando de hecho son sólo cualidades humanas que nos inmovilizan cuando las consideramos con suficiente profundidad.',
  },
  {
    type: 'content',
    title: 'Todo el mundo pasa por crisis existenciales',
    text: 'El que sufras por tener que elegir entre tantas opciones, no es una anomalía, es una de las cosas más comunes y predecibles de estar vivo.',
    forceNewStack: true,
  },
  {
    type: 'content',
    text: 'Este es un mensaje que nos beneficia escucharlo bastante seguido, porque lo que nos ayuda con el arrepentimiento es el conocimiento de que es una carga para todos. La vida libre de arrepentimientos solo existe en películas y canciones.',
  },
  {
    type: 'content',
    text: 'La manera de disminuir nuestra ansiedad es aliviar el pensamiento de que pudimos haber elegido correctamente pero fallamos. El grado de decepción, los errores y las decisiones erróneas son simplemente "una condición humana".',
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/food/raspberry.png',
    title: 'Felicitaciones!',
    text: 'Terminaste el curso de desarrollo personal! Ahora conoces mucho más cómo actúa la gente y cómo pensar y actuar para ser más feliz y vivir plenamente!',
  },
];
const CrisisExistencialesLesson = replaceNewLineInCards(CrisisExistencialesLessonRaw);

export {
  IntroDesarrolloPersonalLesson,
  PesimismoYOptimismoLesson,
  ProblemaMenteCuerpoLesson,
  CrisisExistencialesLesson,
};
