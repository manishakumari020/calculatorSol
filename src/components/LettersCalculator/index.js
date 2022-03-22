import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInput = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="calculator-app-container">
        <div className="calculator-details-container">
          <div className="calculator-item-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="phrase" htmlFor="phraseText">
                Enter the Phrase
              </label>
              <input
                className="input-item"
                id="phraseText"
                type="text"
                onChange={this.onChangeInput}
                placeholder="Enter the Phrase"
                value={inputPhrase}
              />
            </div>
            <p className="no-of-letter">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="calculator-image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
