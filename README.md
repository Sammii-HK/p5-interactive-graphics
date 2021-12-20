# P5 Interactive Graphics

A Frontend app, which renders an interactive graphic visualisation which reacts to the users cursor movement and position, created with P5.js and Javascript.

## Details

### Timeframe

1 day

### Technologies Used

* [P5.js](https://p5js.org/)
* Javascript  

### App Overview

To create an interactive graphic, which is created with calculated geometry, correlating to the users cursor position, as an introduction to [P5.js](https://p5js.org/).

![Interactive Graphics Example](./assets/p5.mov);

#### Development Process

Function to watch the cursor position.

```js
function mouseMoved() {
  if (mouseX < (windowWidth/3)){
      r = map(mouseY, 0, windowHeight, 0, 255)
  } else if (mouseX > ((windowWidth/3)-windowWidth)){
      b = map(mouseY, 0, windowHeight, 0, 255)
  } else {
      g = map(mouseY, 0, windowHeight, 0, 255)
  }
  radius = map(mouseY, 0, windowHeight, 100, 350)
};
```

#### Functionality

Move your cursor around, have some fun.

### Challenges & Achievements

This project was a fun experiment creating my first interactive graphic piece.

## Future enhancements

* To explore different graphic visualisations within P5.js.
