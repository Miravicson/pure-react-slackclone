import React, { Component } from "react"
import PropTypes from "prop-types"
import "./TextInput.css"

export default class TextInput extends Component {
  static propTypes = {
    getMessage: PropTypes.func.isRequired
  }

  state = {
    text: ""
  }

  handleTextChange = event => {
    const {
      target: { value: text }
    } = event
    this.setState({ text })
  }

  handleEnterKey = event => {
    const { key } = event
    const { text } = this.state
    if (key === "Enter" && text) {
      const { getMessage } = this.props
      const { text } = this.state
      getMessage(text)
      this.setState({ text: "" })
    }
  }

  render() {
    const { text } = this.state
    return (
      <div className="TextInput">
        <input
          type="text"
          placeholder="Type your message here. Press enter to send"
          value={text}
          onChange={this.handleTextChange}
          onKeyPress={this.handleEnterKey}
        />
      </div>
    )
  }
}
