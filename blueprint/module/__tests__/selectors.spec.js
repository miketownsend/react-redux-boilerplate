import { NAME } from '../constants'
import * as selectors from '../selectors'
import { getInitialState } from '../reducer'

describe('/* @echo NAME */ - selectors', function () {
  it('"getAll" getAll should select base state', () => {
    expect(selectors.getAll({ [NAME]: true }))
      .toEqual(true);
  });

  it('"getUser" should return the user object', () => {
    const obj = { userId: '1234' }
    expect(selectors.getUser({ [NAME]: { user: obj } }))
      .toEqual(obj)
  })
})
