# Acestant Frontend

## Model

```js
Event {
  id: String, // random string
  name: String, // event name
  label: String, // event type
  detail: String, // description
  time: Number, // timestamp in second
  pieces: [Piece] // list of pieces
}

Piece {
  T: Number, // relative time in second
  L: Number, // time length in second
  C: String // Comment
}
```
