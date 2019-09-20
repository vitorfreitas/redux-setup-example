import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { updateUser } from './redux/user/actions'

function App({ updateUser, userReducer }) {
  useEffect(() => {
    updateUser({ name: 'Vitor Updated' })
  }, [updateUser])

  return <pre>{JSON.stringify(userReducer, '', 4)}</pre>
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = {
  updateUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
