import React from 'react'

export default class Home extends React.Component {
  componentWillMount() {
    if (this.props.didMount) {
      this.props.actions.meta.set({
        title: 'Home Components',
        description: 'This is write by /src/components/home.js actions',
        img: 'home_components.jpeg',
        url: '/src/components/home.js'
      })
    }
  }

  render() {
    return (
      <div className="home">
        <h2>This page is /</h2>
      </div>
    )
  }
}