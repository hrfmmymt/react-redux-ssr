// import React from 'react'
// import test from 'ava'
// import { shallow } from 'enzyme'
// import Home from '../home'

// test('ava test', () => {
//   const wrapper = shallow(<Home />)
//   wrapper.contains(<span>hoge</span>)
// })

import React from 'react'
import { shallow } from 'enzyme'
import Home from '../home'

test('jest test', () => {
  const wrapper = shallow(<Home />)
  // wrapper.contains(<span>hoge</span>)
  expect(wrapper).toMatchSnapshot()
})
