import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

class UserList extends Component {

  componentWillMount () {
    this.props.fetchMessage()
    this.props.fetchUsers()
  }

  renderUser (user) {
    return (
      <div className="card card-block" key={ user.id }>
        <h4 className="card-title">{ user.name }</h4>
        <p className="card-text">{ user.company.name }</p>
        <a className="btn btn-primary" href={ user.website }>Email</a>
      </div>
    )
  }

  render () {
    return (
      <div>
        <h3>{ this.props.message }</h3>
        <div className="user-list">
          { this.props.users.map(this.renderUser) }
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users,
    message: state.auth.message
  }
}

export default connect(mapStateToProps, actions)(UserList)
