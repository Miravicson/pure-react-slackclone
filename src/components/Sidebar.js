import React from "react"
import PropTypes from "prop-types"
import "./Sidebar.css"
import Lists from "./Lists"

const Sidebar = ({ channels, people, onListClick, activeLink }) => {
  return (
    <div className="Sidebar">
      <Lists
        items={channels}
        title="Channels"
        onListClick={onListClick}
        activeLink={activeLink}
      />
      <Lists
        items={people}
        title="People"
        onListClick={onListClick}
        activeLink={activeLink}
      />
    </div>
  )
}

Sidebar.propTypes = {
  channels: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  onListClick: PropTypes.func.isRequired,
  activeLink: PropTypes.string.isRequired
}

export default Sidebar
