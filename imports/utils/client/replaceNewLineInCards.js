/**
 * replaceNewLineInCards: replaces \n for \n\n in text prop of every card
 * @param  {Array} cards
 * @return {Array} processedCards
 */
const replaceNewLineInCards = cards => (
  cards.map(card => (
    {
      ...card,
      text: card.text ? card.text.replace(/\n/g, '\n\n') : null,
      question: card.question ? card.question.replace(/\n/g, '\n\n') : null,
    }
  ))
);

export default replaceNewLineInCards;
