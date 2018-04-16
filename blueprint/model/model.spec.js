import /* @echo CAMELIZED_NAME */ from './mock'
import { serialize, deserialize } from './transform'

describe('/* @echo UNDERSCORED_NAME */ - model', function () {
  it('should serialize and deserialize mocked model', function () {
    const mockedObject = /* @echo CAMELIZED_NAME */()
    const serialized = serialize(mockedObject)
    const deserialized = deserialize(serialized)

    expect(mockedObject).toEqual(deserialized)
  })
})
