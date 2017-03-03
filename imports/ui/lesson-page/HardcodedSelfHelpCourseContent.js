import replaceNewLineInCards from './../../utils/client/replaceNewLineInCards';
// TODO: Fix quizzes
const IntroDesarrolloPersonalLessonRaw = [
  {
    type: 'content',
    title: 'Desarrollo Personal',
    text: 'En el mundo moderno, cómo afrontás varias situaciones puede tener un impacto muy grande en tu vida.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/theater.svg',
    text: 'En este curso aprenderás cómo una mentalidad optimista y planificadora puede ayudarte a construir tu futuro, y cómo te influye una mentalidad pesimista.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/weird-man.svg',
    text: 'Vas a aprender qué es el problema mente-cuerpo, que está relacionado con cómo tus emociones impactan en cómo te ves y a su vez, cómo tu aparience desarrolla tus emociones.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/yearbook.svg',
    text: 'También aprenderás qué es una crisis existencial, cómo atravesarla de forma alegre, y por qué podes tener crisis existenciales.',
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/self-help/workspace.svg',
    title: 'Felicitaciones',
    text: 'Ya sabés de que se trata este curso, en la próxima lección vamos a ver distintas mentalidades y cómo afectan a cada persona.',
    nextUrl: '/course/Desarrollo',
  },
];
const IntroDesarrolloPersonalLesson = replaceNewLineInCards(IntroDesarrolloPersonalLessonRaw);

const PesimismoYOptimismoLessonRaw = [
  {
    type: 'content',
    title: 'La cabeza de un pesimista',
    text: 'Así pensaría un pesimista:\n> “Esta lección va a ser muy mala. No me enseñará nada. Al final me voy a preguntar a dónde se fueron esos pocos minutos de mi vida.”',
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
    question: 'Cómo impacta el pesimismo?',
    options: [
      {
        content: 'Te hace sentir infeliz y pesimo.',
        message: 'Quizas, pero no es lo habitual.',
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
    question: 'Cual es uno de los orígenes del optimismo implantado en la sociedad?',
    options: [
      {
        content: 'Los humanos son óptimos por naturaleza.',
        message: 'Óptimos o no, no tiene nada que ver con el optimismo.',
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
El Budismo habla de dolor, que la vida es injusta y está llena de males.
El Cristianismo te carga con culpa, con que si no hacés lo que te dicen, estás pecando.`,
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/blackboard.svg',
    text: `Esto fue útil, sirvió para mantener las expectativas bajo control.
Las expectativas reducidas explican la existencia de las religiones, ya que te hacen feliz.
Se puede comprender mejor con la siguiente ecuación: **felicidad = realidad / expectativas**`,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/chemistry.svg',
    text: `Entonces, para **ser FELIZ**:
* Mejoras la **realidad**
ó
* Reducís las **expectativas**`,
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
        content: 'Porque le hace mal a la sociedad.',
        message: 'En todo caso esto explica por qué **no** es racional',
      },
    ],
  },
  {
    type: 'content',
    title: 'Lecciones claves del pesimista',
    text: `Dia a dia sostienen que:
* Se vive mal
* La felicidad dura 5 minutos
* No existe tener esperanza
* Ser mediocre es la normalidad`,
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/man-thinking.svg',
    text: 'Aunque sea un buen dia, se preguntan por qué no fue mejor. Piensan que todo el mundo está triste y preocupado todo el tiempo',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/desert.svg',
    text: 'En resumen, el **pesimismo indefinido** es la mentalidad irracional (ya que hay formas mejores) de aquellos que piensan que el presente es malo y el futuro va a ser peor, por lo general con el objetivo de ser más feliz.',
  },
  {
    type: 'multiple-choice',
    question: 'Por qué el pesimismo indefinido es una solución a corto plazo?',
    options: [
      {
        content: 'Porque solo considera el presente.',
        message: 'Que solo considere el presente no está relacionado con ser a corto plazo.',
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
    text: 'Esto no implica hacer predicciones positivas, contrarias a las predicciones negativas explicadas antes.\nEl optimismo definido dice que directamente no hagamos predicciones.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/tools.svg',
    text: 'Debemos vivir el día a día sin estar esperando lo mejor ni lo peor, sino simplemente enterándonos del resultado, y no evaluar si fue bueno o malo, sino que instantáneamente buscar cómo mejorarlo. ',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/desk.svg',
    text: 'Para un optimista definido, el futuro será mejor que el presente si planea y trabaja duro para lograrlo.',
  },
  {
    type: 'multiple-choice',
    question: 'Por qué el optimismo definido es una solución real?',
    options: [
      {
        content: 'Porque la realidad choca con la sensacion falsa.',
        message: 'Estás seguro?',
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
    text: 'Desde el siglo XVII hasta mediados del siglo XX, ciertos optimistas lideraron el mundo occidental.\nCientíficos, ingenieros, médicos y hombres de negocios hicieron al mundo más rico, sano y longevo de lo que se podían imaginar.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/chemistry-1.svg',
    text: 'Entre los avances, estuvieron la aplicación de la química a la industria y agricultura, la navegación a vapor, los ferrocarriles, los telégrafos eléctricos, la limpieza de continentes enteros para el cultivo y la canalización de los ríos.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/statue-of-liberty.svg',
    text: 'Incluso la Gran Depresión no impidió el progreso implacable en los Estados Unidos, que siempre ha sido el hogar de los optimistas definidos más visionarios del mundo.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/golden-gate-bridge.svg',
    text: 'El Empire State Building se inició en 1929 y terminó en 1931.\nEl Golden Gate Bridge se inició en 1933 y se completó en 1937.\nEl programa de Apolo de la NASA comenzó en 1961 y puso 12 hombres en la luna antes del 1972.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/dam.svg',
    text: 'A finales de 1940, un californiano llamado John Reber se propuso reinventar la geografía física de toda la bahía de San Francisco. Reber era tan solo un maestro de escuela primaria!',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/water.svg',
    text: 'A pesar de su empleo, propuso públicamente construir dos enormes presas en la bahía, construir lagos masivos de agua dulce para el agua potable y el riego, y reclamar 81 millones de metros cuadrados de tierra para el desarrollo!',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/presentation-1.svg',
    text: 'Aunque no tenía autoridad personal, la gente tomó el plan de Reber en serio. Fue aprobado por juntas de redacción de periódicos en California. El Congreso de los Estados Unidos celebró audiencias sobre su factibilidad.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/engineer.svg',
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
    text: 'En la década de 1960, la gente recibía todos estos grandes planes y comenzaron a cuestionarse el sentido de trabajar, ya que todo avanzaba muy bien sin su aporte.\nEsto provocó el fin del optimismo definido.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/strategy.svg',
    text: 'Hoy un plan que viene de un maestro de escuela nunca sería tomado en cuenta. Una planificación de largo alcance que viene de cualquier persona con más poder, sería desechada como basura.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/parthenon.svg',
    text: 'Todavía se puede visitar el modelo de Reber de la bahía en Sausalito, pero hoy es sólo una atracción turística: grandes planes para el futuro se han convertido en curiosidades antiguas.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/road-1.svg',
    text: 'El optimismo definido hace que nos esforcemos hoy para obtener mejores cosas en el futuro.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/strategy-1.svg',
    text: `* No debemos esperar a que las cosas buenas pasen por si solas.
* No debemos esperar a que pasen las malas.
* Debemos planificar el futuro y estar dispuestos a construirlo desde el presente.`,
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/self-help/list.svg',
    title: 'Excelente!',
    text: 'Ahora vas a poder tomar mejores decisiones porque ya sabés cómo los diferentes tipos de mentalidades influyen en vos y en el resto de la gente!',
  },
  {
    type: 'feedback',
    title: 'Ayudanos!',
    text: 'Necesitamos tu ayuda! Decinos todas las sugerencias o comentarios que tengas!',
    nextUrl: '/course/Desarollo',
  },
];
const PesimismoYOptimismoLesson = replaceNewLineInCards(PesimismoYOptimismoLessonRaw);

const ProblemaMenteCuerpoLessonRaw = [
  {
    type: 'content',
    title: 'Qué es el problema mente-cuerpo?',
    text: 'El “problema mente-cuerpo” radica en el hecho de que a los ojos de otras personas, nuestra apariencia física es el factor que más influye en cómo evalúan nuestra naturaleza y personalidad.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/manly.svg',
    text: 'Se asume que un rostro dulce tiene un dueño amable y benevolente, mientras que la cara larga, encarnizada y con ojos estrechos, un dueño enojado y sospechoso.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/happy.svg',
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
    imageUrl: '/images/courses/self-help/mirror.svg',
    text: 'Por dentro podemos sentirnos tiernos, inspirados y jóvenes, pero la cara que vemos en el espejo puede ser severa, seria, sin humor, y cada vez más semejante a la de un señor anciano y amargado. Nos sentimos mal representados.',
  },
  {
    type: 'multiple-choice',
    question: 'Cual es la diferencia en cómo vemos a los demás y cómo nos vemos a nosotros?',
    options: [
      {
        content: 'Solemos juzgar a los demas por como se ven, pero rara vez hacemos lo mismo con nosotros.',
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
    text: 'Hay una frase que dice que a los 40 todos tienen la cara que merecen. Esto es absurdo. Nadie, ni siquiera con 40 años de intentarlo, ha logrado cambiar su apariencia facial con solo pensarlo.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/businessman.svg',
    text: 'Todo lo contrario tiende a ocurrir: nuestras personalidades suelen moldearse a las personalidades expresadas por nuestros rostros, como resultado de años de otras personas asumiendo que esto debe ser lo que somos, y tratándonos así.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/target.svg',
    text: 'Las características más gentiles de alguien que parece amable serán constantemente llevadas a la superficie, por las expectativas y el alentamiento de los demás.',
  },
  {
    type: 'content',
    title: 'Como solucionar el problema mente-cuerpo',
    text: `El problema mente-cuerpo nos lleva a entender el compromiso de recordar que el otro:
* No es como parece
* Su cuerpo fue impuesto y no elegido
* Puede tener una personalidad muy diferente atrapada dentro de su envoltura física.`,
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/price-tag.svg',
    text: 'Lo mejor que podemos hacer para superar el problema mente-cuerpo no es jugar con la ropa, gastar en peluquerías o poner en peligro nuestra salud con una cirugía plástica.\nNunca seremos capaces de alinear la mente y el cuerpo con la apariencia.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/brain-1.svg',
    text: 'La solución es reconocer que el problema es una parte existencial del ser humano.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/girl.svg',
    text: 'Debemos esforzarnos por recordar que el aspecto de los demás puede ser muy distinto de su personalidad, y comprender que si otro no hace eso con nostros, es por su ignorancia.\nNo debemos sentirnos mal por lo que piensa el resto.',
  },
  {
    type: 'multiple-choice',
    question: 'Si una persona tiene aspecto serio y amargado, su personalidad suele ser seria y amargada?',
    options: [
      {
        content: 'Lamentablemente sí, aunque puede ser cambiada.',
        message: 'Correcto!',
        correct: true,
      },
      {
        content: 'No. Que tiene que ver su apariencia con su personalidad??',
        message: 'Prueba releer la seccion.',
      },
    ],
  },
  {
    type: 'multiple-choice',
    question: 'Debemos tratar a alguien con cara redonda que parece un nene, como a un nene?',
    options: [
      {
        content: 'No. A pesar de que es probable que tenga algunas actitudes infantiles, debemos ayudarlo intentando tratarlo como si no fuese así.',
        message: 'Excelente!',
        correct: true,
      },
      {
        content: 'Por qué no? Debe ser divertido!',
        message: 'No te dejes llevar por tus emociones. Podes herir a otros.',
      },
    ],
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/self-help/happy-1.svg',
    title: 'Muy bien!',
    text: 'Finalizaste la lección del problema mente cuerpo! Ahora ya sabés que la apariencia superficial no es importante y que la felicidad no tiene que ver con cómo te ves!',
    nextUrl: '/course/Desarrollo',
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
    imageUrl: '/images/courses/self-help/crisis.svg',
    text: `La crisis está definida bajo cuatro características distintivas:
* Cuestionamiento
* Iluminación y replanteo de vida
* Miedo a morirse
* Vivir a oscuras`,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/tunnel.svg',
    text: 'Lo que viene a continuación puede sonar terrible, pero es importante entender que es real y que casi todos pasaron por esto alguna vez.\nAl final todo va a estar bien y vas a estár feliz de entender cómo funcionan las crisis y cómo ayudar a otros!',
  },
  {
    type: 'content',
    title: 'Cuestionamiento',
    text: 'Un periodo en donde mucho de lo que anteriormente veíamos como normal o de sentido común nos parece extraño, poco casual, y misterioso.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/questions.svg',
    text: `Por ejemplo, podemos empezar a preguntarnos:
* ¿Por qué vivimos en **esta** parte del mundo en vez en cualquier otra?
* ¿Por qué hacemos **este** trabajo y **no** otro?
* ¿Por qué estamos con **esta** persona y siguiendo **estas** normas sociales?`,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/iceberg.svg',
    text: 'En poco tiempo nos damos cuenta, perturbados, que hay muchas más opciones bajo la superficie de las que nos permitimos por lo general imaginar.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/freedom.svg',
    text: `Hay una famosa frase relacionada:
> “Es nuestra luz, no nuestra oscuridad, lo que más nos asusta”
Somos mucho más libres de lo que creemos.`,
  },
  {
    type: 'multiple-choice',
    question: 'Que ocurre en el periodo de cuestionamiento?',
    options: [
      {
        content: 'Nos agarra ansiedad.',
        message: 'Estás seguro?',
      },
      {
        content: 'Nos aislamos.',
        message: 'Estás seguro?',
      },
      {
        content: 'Mucho de lo que antes veíamos como normal nos parece extraño.',
        message: 'Excelente!',
        correct: true,
      },
    ],
  },
  {
    type: 'content',
    title: 'Iluminación y replanteo de vida',
    text: 'La revelación mencionada previamente nos produce ansiedad extrema.\nEl reconocimiento de nuestra libertad no nos trae calma, de hecho todo lo contrario, reconocemos que hemos estado engañándonos acerca de lo que <strong>debemos</strong> ser.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/brain.svg',
    text: 'A nadie realmente le importa tanto lo que nosotros pensamos, lo que somos y lo que hemos elegido ser.\nCasi siempre sobreestimamos la importancia de nuestras malas acciones.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/binoculars.svg',
    text: 'Llegamos a la realización incómoda de que nuestra responsabilidad principal es hacia nosotros, **no** hacia los demás.',
  },
  {
    type: 'multiple-choice',
    question: 'Es correcto pensar cómo otros interpretaron nuestras acciones?',
    options: [
      {
        content: 'Obvio, muchísimo, así aprendemos para futuras ocasiones.',
        message: 'Si la mayoría de lo que hacemos no son notadas, para que mejorarlas? Lo que importa es el contenido de la conversación.',
      },
      {
        content: 'Sí, pero sin exagerar. Si la mayoría de lo que hacemos no son notadas, para que mejorarlas?',
        message: 'Excelente! Lo más importante realmente es el contenido de la conversación.',
        correct: true,
      },
      {
        content: 'No, para que?',
        message: 'Siempre está bueno pensar que se podría mejorar y como mejorarlo.',
      },
    ],
  },
  {
    type: 'content',
    title: 'Miedo a morirse',
    text: 'Estamos altamente conscientes de la muerte. Nuestra vida es corta y se acaba lentamente.\nNecesitamos reexaminar nuestras vidas pero el reloj está corriendo y notamos alarmadamente como avanza.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/todo-list.svg',
    text: 'Hay tantas cosas para hacer que pensamos que no vamos a llegar a hacer nada que valga la pena durante el día.',
  },
  {
    type: 'content',
    title: 'Vivimos a oscuras',
    text: 'Tenemos muchas opciones pero, como somos humanos, nunca tenemos la información que hubiéramos necesitado para elegir con certeza y sabiduría.\nSomos forzados a decidir y, como nos falta información, podemos estar seguros de que cometeremos muchos errores.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/human.svg',
    text: 'La condición de la especie humana es planear nuestro camino en la oscuridad, sin una razón adecuada.\nEsto nos lleva a una palabra favorita de los psicólogos del existencialismo: **ansiedad**.',
  },
  {
    type: 'content',
    title: 'La ansiedad',
    text: 'Debido a que debemos elegir sin seguridad de lo escogido, vivimos ansiosos.\nNo sobre algo en particular, pero como una cualidad básica de nuestras vidas.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/puzzle.svg',
    text: 'Esto puede sonar como una conspiración paralizante.\nSin embargo, los psicólogos existencialistas no quieren deprimirnos. Ellos quieren entender los dilemas que por lo general percibimos como si solo afectarán a uno mismo, y traernos soluciones.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/devil.svg',
    text: 'Esta es la razón por la que nos avergonzamos y pensamos que tenemos algún tipo de maldición, cuando de hecho son sólo cualidades humanas que nos inmovilizan cuando las consideramos con suficiente atención.',
  },
  {
    type: 'multiple-choice',
    question: 'Por qué nos agarra ansiedad en una crisis existencial?',
    options: [
      {
        content: 'Como el tiempo se acaba, debemos tomar una decisión, pero como vivimos a oscuras, nunca podemos estamos seguros de elegir correctamente. Esto nos trae ansiedad.',
        message: 'Excelente!',
        correct: true,
      },
      {
        content: 'Estamos en una crisis. Obviamente nos vamos a sentir ansiosos!',
        message: 'Puede ser que en cualquier crisis nos sintamos ansiosos. Aún así no responde por qué en está. ',
      },
    ],
  },
  {
    type: 'content',
    title: 'Todo el mundo pasa por crisis existenciales',
    text: 'El que sufras por tener que elegir entre tantas opciones no es una anomalía, es una de las cosas más comunes y predecibles de estar vivo!',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/ear.svg',
    text: 'Este es un mensaje que nos beneficia escucharlo bastante seguido, porque lo que nos ayuda con el arrepentimiento es el conocimiento de que es una carga para todos.\nLa vida libre de arrepentimientos solo existe en películas y canciones.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/self-help/relieved.svg',
    text: 'La manera de disminuir nuestra ansiedad es aliviar el pensamiento de que pudimos haber elegido correctamente pero fallamos.\nEl grado de decepción, los errores y las decisiones erróneas son simplemente una condición humana!',
  },
  {
    type: 'multiple-choice',
    question: 'Debemos sentirnos mal por equivocarnos?',
    options: [
      {
        content: 'Por qué nos sentiriamos mal? Todo el mundo se equivoca todo el tiempo, es normal.',
        message: 'Excelente!',
        correct: true,
      },
      {
        content: 'Si nos equivocamos tenemos que sentirnos mal, es como funciona nuestro cuerpo.',
        message: 'Es cierto que nuestro cuerpo funciona así, pero no significa que no se pueda arreglar!',
      },
    ],
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/self-help/road.svg',
    title: 'Felicitaciones!',
    text: 'Terminaste el curso de desarrollo personal! Ahora conoces mucho más cómo actúa la gente y cómo pensar y actuar para ser más feliz y vivir plenamente!',
  },
  {
    type: 'feedback',
    title: 'Ayudanos!',
    text: 'Necesitamos tu ayuda! Decinos todas las sugerencias o comentarios que tengas!',
    nextUrl: '/',
  },
];
const CrisisExistencialesLesson = replaceNewLineInCards(CrisisExistencialesLessonRaw);

export {
  IntroDesarrolloPersonalLesson,
  PesimismoYOptimismoLesson,
  ProblemaMenteCuerpoLesson,
  CrisisExistencialesLesson,
};
