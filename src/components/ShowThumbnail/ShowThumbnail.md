Example ShowThumbnail

```jsx
const { show } = require('../../models/show/mock')
;<ul className='shows-list__list' style={{ margin: 0 }}>
  <li style={{ marginRight: '1em' }}>
    <ShowThumbnail show={show()} />
  </li>
  <li>
    <ShowThumbnail show={show({ rating: {}, image: {}})} />
  </li>
</ul>
```
