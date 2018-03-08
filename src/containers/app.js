import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import {didMount} from '../actions/didmount'

// component
import App from '../components/app'

// state to props
const mapStateToProps = (state, ownProps) => {
  return {
    meta: state.meta,
    didMount: state.didMount
  }
}

// dispatch proos
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      didMount: bindActionCreators(didMount, dispatch)
    }
  }
}

// fetchData function on access at server
App.fetchData = (dispatch) => {
  return dispatch({
    type: 'META-SET',
    meta: {
      title: 'App Container fetchData',
      description: '/src/containers/app.js fetchData',
      img: 'app_container.jpeg',
      url: '/src/containers/app.js'
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
