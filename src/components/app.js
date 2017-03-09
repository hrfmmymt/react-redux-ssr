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
        <ul className="nav">
          <li><Link to="/">/Home</Link></li>
          <li><Link to="/detail">/Detail</Link></li>
          <li><Link to="/apply">/Apply</Link></li>
        </ul>
        <table className="table">
          <tbody>
            <tr>
              <th>meta.title</th>
              <td>{meta.title}</td>
            </tr>
            <tr>
              <th>meta.description</th>
              <td>{meta.description}</td>
            </tr>
            <tr>
              <th>meta.img</th>
              <td>{meta.img}</td>
            </tr>
            <tr>
              <th>meta.url</th>
              <td>{meta.url}</td>
            </tr>
          </tbody>
        </table>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  actions: React.PropTypes.object.isRequired,
  meta: React.PropTypes.object.isRequired,
  children: React.PropTypes.object.isRequired
}
