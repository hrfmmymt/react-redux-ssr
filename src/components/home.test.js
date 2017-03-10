import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Home from './home'

test(async t => {
  const wrapper = shallow(<Home />)
  t.is(wrapper.contains(<h2>This page is /</h2>), true)
})
