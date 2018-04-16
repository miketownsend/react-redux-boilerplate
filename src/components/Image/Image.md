A wrapper around a img tag to provide error and loading states/icons.
Uses padding-top to provide a standard aspect ratio. Must be wrapped in something which fixes it's width for the aspect ratio to work.

```jsx

<div>
  <div style={{ width: '100px', float: 'left', marginRight: '1em' }}>
    <Image medium={"http://static.tvmaze.com/uploads/images/medium_portrait/18/45454.jpg"} />
  </div>
  <div style={{ width: '200px', float: 'left' }}>
    <Image medium={"http://static.tvmaze.com/uploads/images/medium_portrait/18/45454.jpg"} />
  </div>
</div>
```
