import { NAME } from '../constants'
import * as selectors from '../selectors'
import { getInitialState } from '../reducer'

describe('Location - selectors', function () {
  it('"getLocation" should select core auth state', () => {
    expect(selectors.getLocation({ [NAME]: true }))
      .toEqual(true);
  })
})
