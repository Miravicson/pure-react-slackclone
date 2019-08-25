import React from "react"
import PropTypes from "prop-types"
import "./Lists.css"

const Lists = ({ items, title, onListClick, activeLink }) => {
  return (
    <div className="ChannelList">
      <span className="ChannelList-title">{title}</span>
      <ul>
        {items.map(item => (
          <li
            key={item.name}
            className={`ChannelList-item ${item.name === activeLink &&
              "selected"} ${(item.name === "general" ||
              item.name === "react") &&
              "hasMessage"}`}
          >
            <button onClick={() => onListClick(item.name)}>{item.link}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

Lists.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onListClick: PropTypes.func.isRequired,
  activeLink: PropTypes.string.isRequired,
  hasMessage: PropTypes.bool.isRequired
}

export default Lists
