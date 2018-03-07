import React from 'react'
import PropTypes from 'prop-types'
import styles from './home.scss'

export default class Home extends React.Component {
  componentWillMount() {
    if (this.props.didMount) {
      this.props.actions.meta.set({
        title: 'Home Components',
        description: '/src/components/home.js actions',
        img: 'home_components.jpeg',
        url: '/src/components/home.js'
      })
    }
  }

  render() {
    const profileImage = require('../../static/profile.jpg')

    return (
      <div className={styles.wrapper}>
        <h2>某のホームページ</h2>
        <span>★★★　最新情報　★★★</span>
      </div>
    )
  }
}

Home.propTypes = {
  didMount: PropTypes.bool,
  actions: PropTypes.object
}