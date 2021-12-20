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

[Live Demo](https://sammii-hk.github.io/p5-interactive-graphics/)


https://user-images.githubusercontent.com/40900195/144599023-18e27e25-9e4c-4d6a-a79a-50b8e96907ae.mov


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

<img width="1679" alt="Screenshot 2021-12-03 at 10 48 11" src="https://user-images.githubusercontent.com/40900195/144590132-b8b959b5-fe7a-49f8-a066-16f7f5d4d56b.png">


### Challenges & Achievements

This project was a fun experiment creating my first interactive graphic piece.

## Future enhancements

* To explore different graphic visualisations within P5.js.
