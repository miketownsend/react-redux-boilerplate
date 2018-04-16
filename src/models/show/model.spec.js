import show from './mock'
import { serialize, deserialize } from './transform'

describe('show - model', function () {
  it('should serialize and deserialize mocked model', function () {
    const mockedObject = show()
    const serialized = serialize(mockedObject)
    const deserialized = deserialize(serialized)

    expect(mockedObject).toEqual(deserialized)
  })
})
