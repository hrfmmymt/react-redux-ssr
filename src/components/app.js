import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router'

import styles from './app.scss'

export default class App extends React.Component {
  componentDidMount() {
    this.props.actions.didMount()
  }

  render() {
    const { meta } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <nav>
            <ul>
              <li><Link to="/">トップ</Link></li>
              <li><Link to="/detail">映画出演</Link></li>
              <li><Link to="/apply">ドラマ出演</Link></li>
            </ul>
          </nav>

          <div className={styles.screen}>
            {this.props.children}

            <dl>
              <dt>meta.title</dt>
              <dd>{meta.title}</dd>
              <dt>meta.description</dt>
              <dd>{meta.description}</dd>
              <dt>meta.img</dt>
              <dd>{meta.img}</dd>
              <dt>meta.url</dt>
              <dd>{meta.url}</dd>
            </dl>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
}
