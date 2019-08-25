import React, { Component } from "react"
import PropTypes from "prop-types"
import MessageItem from "./MessageItem"

import "./MessageList.css"

export default class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired
  }

  messageListRef = React.createRef()

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   if (this.props.messages.length > prevProps.messages.length) {
  //     const messageListRef = this.messageListRef.current
  //     return messageListRef.scrollHeight - messageListRef.scrollTop
  //   }
  //   return null
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (snapshot !== null) {
  //     const messageListRef = this.messageListRef.current
  //     messageListRef.scrollTop = messageListRef.scrollHeight - snapshot
  //   }
  // }

  render() {
    const { messages } = this.props
    return (
      <div className="MessageList">
        {messages.map(message => (
          <MessageItem message={message} key={message.id} />
        ))}
      </div>
    )
  }
}
