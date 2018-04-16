import { NAME } from '../constants'
import * as selectors from '../selectors'

describe('/* @echo CAPITALIZED_NAME */ - selectors', function () {
  it('"getForm" should select form', () => {
    expect(selectors.getForm({ form: { [NAME]: true } }))
      .toEqual(true);
  });

  it('"getSyncErrors" should return syncErrors', () => {
    expect(selectors.getSyncErrors({ form: { [NAME]: { syncErrors: true } } }))
      .toEqual(true)
  })
})
