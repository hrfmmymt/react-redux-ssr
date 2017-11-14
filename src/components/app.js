import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
  componentDidMount() {
    this.props.actions.didMount()
  }

  render() {
    const { meta } = this.props

    return (
      <div className="container">
        <h1>React-Redux-Server-Side-Rendering-Sample</h1>
        <div className="main">
          <nav>
            <ul>
              <li><Link to="/">/Home</Link></li>
              <li><Link to="/detail">/Detail</Link></li>
              <li><Link to="/apply">/Apply</Link></li>
            </ul>
          </nav>

          <div className="screen">
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
  actions: React.PropTypes.object.isRequired,
  meta: React.PropTypes.object.isRequired,
  children: React.PropTypes.object.isRequired
}
