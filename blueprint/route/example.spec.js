import React from 'react'
import Route from './index'

describe('/* @echo DASHERIZED_NAME */', () => {
  it('should return a route configuration object', () => {
    const route = Route()
    expect(typeof Route()).toBe('object')
    expect(route).toHaveProperty('path')
    expect(route).toHaveProperty('component')
  })
})


