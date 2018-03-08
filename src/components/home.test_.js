import React from 'react'
import { shallow } from 'enzyme'
import Home from './home'

test('jest test', () => {
  const wrapper = shallow(<Home />)
  wrapper.contains(<span>hoge</span>)
})
