import React from 'react'

export default class Apply extends React.Component {
  componentWillMount() {
    if (this.props.didMount) {
      this.props.actions.meta.set({
        title: 'Apply Components',
        description: '/src/components/apply.js actions',
        img: 'apply_components.jpeg',
        url: '/src/components/apply.js'
      })
    }
  }

  render() {
    return (
      <div className="apply">
        <h2>This page is /apply</h2>
      </div>
    )
  }
}

Apply.propTypes = {
  didMount: React.PropTypes.bool,
  actions: React.PropTypes.object
}
