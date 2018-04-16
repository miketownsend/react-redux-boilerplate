import { NAME } from '../constants'
import * as selectors from '../selectors'

describe('rest - selectors', function () {
  it('"getAll" getAll should select base state', () => {
    expect(selectors.getAll({ [NAME]: true })).toEqual(true)
  })

  it('"getRequest" should return the request object identified by sourceId', () => {
    const sourceId = 'SOURCE_ID'
    expect(selectors.getRequest({ [NAME]: { [sourceId]: 1 } }, sourceId))
      .toEqual(1)
  })
})
