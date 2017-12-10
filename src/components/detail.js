import PropTypes from 'prop-types';
import React from 'react'

export default class Detail extends React.Component {
  componentWillMount() {
    if (this.props.didMount) {
      this.props.actions.meta.set({
        title: 'Detail Components',
        description: '/src/components/detail.js actions',
        img: 'detail_components.jpeg',
        url: '/src/components/detail.js'
      })
    }
  }

  render() {
    return (
      <div className="detail">
        <h2>This page is /detail</h2>
      </div>
    )
  }
}

Detail.propTypes = {
  didMount: PropTypes.bool,
  actions: PropTypes.object
}