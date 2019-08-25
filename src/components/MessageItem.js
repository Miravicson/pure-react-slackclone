import React from "react"
import PropTypes from "prop-types"
import moment from "moment"

import "./MessageItem.css"

const MessageItem = ({ message: { name, timestamp, text } }) => {
  return (
    <div className="MessageItem">
      <div className="MessageItem-image" />
      <div className="MessageItem-details">
        <span className="MessageItem-name">{name}</span>
        <span className="MessageItem-timestamp">
          {moment(timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </span>
        <span className="MessageItem-text">{text}</span>
      </div>
    </div>
  )
}

MessageItem.propTypes = {
  message: PropTypes.object.isRequired
}

export default MessageItem
