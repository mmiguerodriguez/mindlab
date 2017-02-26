import replaceNewLineInCards from './../../utils/client/replaceNewLineInCards';

const IntroDesarrolloPersonalLessonRaw = [
  {
    type: 'content',
    title: 'Desarrollo Personal??',
    text: 'En el mundo moderno, cómo afrontas varias situaciones puede tener un impacto muy grande en tu vida.',
  },
  {
    type: 'content',
    text: 'En este curso aprenderás como una mentalidad optimista y planificadora puede ayudarte a construir tu futuro, y cómo te afecta una mentalidad pesimista.',
  },
  {
    type: 'content',
    text: 'Aprenderás qué es el problema mente cuerpo, relacionado en cómo tus emociones impactan en cómo te ves y al revés; cómo te ves desarrolla tus emociones.',
  },
  {
    type: 'content',
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

const Leccion2 = IntroDesarrolloPersonalLesson;
// Solo por el linter, despues chau chau
export { IntroDesarrolloPersonalLesson, Leccion2 };
