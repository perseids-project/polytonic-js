import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';

// see https://github.com/yannickcr/eslint-plugin-react/issues/2209
/* eslint-disable react/no-unused-state */

const layout = {
  default: [
    '` 1 2 3 4 5 6 7 8 9 0 \u0313\u0342 \u0313\u0300 {bksp}',
    '{tab} ; ς ε ρ τ υ θ ι ο π \u0342 \u0300 \\',
    '{lock} α σ δ φ γ η ξ κ λ \u0301 \u0313 {enter}',
    '{shift} ζ χ ψ ω β ν μ , . \u0313\u0301 {copy}',
    '.com @ {space}',
  ],
  shift: [
    '~ ! @ # $ % ^ & * ( ) \u0314\u0342 \u0314\u0300 {bksp}',
    '{tab} : \u0308\u0301 Ε Ρ Τ Υ Θ Ι Ο Π \u0345 \u0300 |',
    '{lock} Α Σ Δ Φ Γ Η Ξ Κ Λ \u0308 \u0314 {enter}',
    '{shift} Ζ Χ Ψ Ω Β Ν Μ < > \u0314\u0301 {copy}',
    '.com @ {space}',
  ],
};

const display = {
  '{copy}': 'copy',
};

const setCaret = (elem, pos) => {
  elem.focus();

  if (pos !== null && elem.setSelectionRange) {
    elem.setSelectionRange(pos, pos);
  }
};

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      layoutName: 'default',
      shifted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyboardChange = this.handleKeyboardChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.copyTextarea = this.copyTextarea.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const { setInput } = this.keyboardRef;

    this.setState({ value }, () => setInput(value));
  }

  handleKeyboardChange(value) {
    const { caretPosition } = this.keyboardRef;

    this.setState(({ shifted }) => {
      if (shifted) {
        return {
          value,
          shifted: false,
          layoutName: 'default',
        };
      }

      return { value };
    }, () => setCaret(this.textareaRef, caretPosition));
  }

  handleKeyPress(button) {
    if (button === '{copy}') {
      this.copyTextarea();
    }

    if (button === '{shift}') {
      this.setState(({ shifted }) => ({
        layoutName: shifted ? 'default' : 'shift',
        shifted: !shifted,
      }));
    }

    if (button === '{lock}') {
      this.setState(({ layoutName }) => ({
        layoutName: layoutName === 'default' ? 'shift' : 'default',
        shifted: false,
      }));
    }
  }

  copyTextarea() {
    // eslint-disable-next-line no-undef
    const doc = window ? window.document : null;

    if (doc && doc.execCommand) {
      this.textareaRef.select();
      doc.execCommand('copy');
      this.textareaRef.blur();
    }
  }

  render() {
    const { value, layoutName } = this.state;

    return (
      <>
        <div className="row pt-4 mb-3">
          <div className="col-12 text-center">
            <h1 className="h3 font-weight-normal">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="polytonic-keyboard-input-and-output" className="mb-0">
                Polytonic Greek Virtual Keyboard
              </label>
            </h1>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2">
            <textarea
              ref={(r) => { this.textareaRef = r; }}
              className="form-control input-lg"
              id="polytonic-keyboard-input-and-output"
              type="text"
              placeholder="Type using the virtual keyboard ..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              rows="4"
              value={value}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Keyboard
              keyboardRef={(r) => { this.keyboardRef = r; }}
              onChange={this.handleKeyboardChange}
              onKeyPress={this.handleKeyPress}
              layout={layout}
              display={display}
              mergeDisplay
              layoutName={layoutName}
              preventMouseDownDefault
              newLineOnEnter
            />
          </div>
        </div>
      </>
    );
  }
}

export default Input;
