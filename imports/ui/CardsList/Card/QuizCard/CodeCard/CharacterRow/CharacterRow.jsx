import React from 'react';
import ReactAce from 'react-ace';

class CharacterRow extends React.Component {
  /**
   * inserts given character in ace editor
   * @param {Character} character
   */
  insertCharacter(character) {
    this.props.editor.editor.insert(character);
    this.props.editor.editor.textInput.focus();
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
                      character === 'tab' ? '    ' : character,
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
  editor: React.PropTypes.instanceOf(ReactAce),
};

CharacterRow.defaultProps = {
  editor: null,
};

export default CharacterRow;
