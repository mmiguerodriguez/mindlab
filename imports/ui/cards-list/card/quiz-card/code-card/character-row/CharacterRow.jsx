import React from 'react';
import CodeMirror from 'react-codemirror';

class CharacterRow extends React.Component {
  /**
   * inserts given character in codemirror
   * @param {Character} character
   */
  insertCharacter(character) {
    const editor = this.props.editor.getCodeMirror();
    editor.doc.replaceSelection(character);
    const newCursorPosition = editor.getCursor();
    editor.focus();
    editor.setCursor(newCursorPosition);
  }

  render() {
    const characterList = [
      '{',
      '}',
      '(',
      ')',
      ';',
      '"',
      '=',
      '+',
      '-',
      '<',
      '>',
      '&',
      '|',
      'tab',
    ];
    return (
      <div className="character-row">
        <div className="btn-group">
          {
            characterList.map(character =>
              <button
                key={`character-${character}`}
                className="btn"
                onClick={
                  () => {
                    this.insertCharacter(
                      character === 'tab' ? '  ' : character,
                    );
                  }
                }
              >
                {character}
              </button>,
            )
          }
        </div>
      </div>
    );
  }
}

CharacterRow.propTypes = {
  editor: React.PropTypes.instanceOf(CodeMirror),
};

CharacterRow.defaultProps = {
  editor: null,
};

export default CharacterRow;
