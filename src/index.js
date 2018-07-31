'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Navs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: ''
    }
  }

  componentDidMount() {
    if (this.props.defaultActive) {
      this.setState({active: this.props.defaultActive})
    } else {
      this.setState({active: this.props.tabs[0].name})
    }
  }
  
  handle(e, name) {
    e.preventDefault()
    this.setState({active: name})
    if (this.props.handleClick !== null) {
      this.props.handleClick(name)
    }
  }

  render() {
    const {tabs} = this.props

    const tabList = tabs.map((value, key) => {
      let _class = 'nav-link'
      if (this.state.active === value.name) {
        _class = 'nav-link active'
      }
      return (
        <li key={key} className="nav-item">
          <a href="#" className={_class} onClick={(e) => this.handle(e, value.name)}>{value.label}</a>
        </li>
      )
    })
    return (
      <div className="canopy-react-navs">
        <ul className="nav nav-tabs">{tabList}</ul>
      </div>
    )
  }
}

Navs.propTypes = {
  tabs: PropTypes.array.isRequired,
  defaultActive: PropTypes.string,
  handleClick: PropTypes.func,
}

Navs.defaultProps = {
  handleClick: null
}
