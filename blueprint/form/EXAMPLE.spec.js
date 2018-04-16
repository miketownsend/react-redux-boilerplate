import React from 'react';
import { shallow, mount, render } from 'enzyme';

import i18n from './/* @echo CAPITALIZED_NAME */.i18n'
import Component from './/* @echo CAPITALIZED_NAME */';

describe('/* @echo CAPITALIZED_NAME */', () => {
  it('should render without throwing an error', function() {
    const component = shallow(<Component methodId={'method-1'} />)
    expect(component.find('h1').text()).toBe(t('title'))
    expect(component.is('./* @echo DASHERIZED_NAME */')).toBe(true)
  }

  it('should submit on click', function () {
    const onSubmit = sinon.spy() // sinon is a global included in tests/jest.setup.js via /jest.config.js
    const component = shallow(<Component methodId={'method-1'} onSubmit={onSubmit}/>)
    component.find('button').simulate('click')
    expect(onSubmit.callCount).toBe(1)
  })
})
