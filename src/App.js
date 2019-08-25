import React, { Component } from "react"
import "./App.css"
import MessageList from "./components/MessageList"
import Sidebar from "./components/Sidebar"
import TextInput from "./components/TextInput"
import uuid from "uuidv4"

import { channels, people, messages } from "./data"

class App extends Component {
  state = {
    channels,
    people,
    messages,
    activeLink: "general"
  }

  messageListRef = React.createRef()

  countMessages = messages => {
    return Object.keys(messages).reduce((totalNumber, key) => {
      return (totalNumber += messages[key].length)
    }, 0)
  }

  // getChannelsWithNewMessage = () => {
  //   return Object.keys(messages).reduce((channelsWithMessages, key) => {
  //     return
  //   }, [])
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (
      this.countMessages(this.state.messages) >
      this.countMessages(prevState.messages)
    ) {
      const messageListRef = this.messageListRef.current
      return messageListRef.scrollHeight - messageListRef.scrollTop
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const messageListRef = this.messageListRef.current
      messageListRef.scrollTop = messageListRef.scrollHeight - snapshot
    }
  }

  componentDidMount() {
    const messageListRef = this.messageListRef.current
    setTimeout(() => {
      messageListRef.scrollTop = messageListRef.scrollHeight
    }, 1000)
  }

  handleLinkClick = link => {
    this.setState({ activeLink: link })
  }

  handleTextInput = text => {
    const newMessage = {
      name: "Victor",
      timestamp: new Date(),
      id: uuid(),
      text
    }

    const { messages, activeLink } = this.state
    const newActiveLinkMessage = [...(messages[activeLink] || []), newMessage]
    const newMessages = {
      ...messages,
      [activeLink]: newActiveLinkMessage
    }
    this.setState({ messages: newMessages })
  }

  render() {
    const { channels, activeLink, messages } = this.state
    const messageList = messages[activeLink]
    return (
      <div className="App">
        <div className="App-sidebar">
          <Sidebar
            channels={channels}
            people={people}
            onListClick={this.handleLinkClick}
            activeLink={activeLink}
          />
        </div>
        <div className="App-messageList" ref={this.messageListRef}>
          <MessageList messages={messageList || []} />
        </div>
        <div className="App-textInput">
          <TextInput getMessage={this.handleTextInput} />
        </div>
      </div>
    )
  }
}

export default App
