# City-Project
This Git repository contains the source code for a 3D city scene created using HTML, JavaScript, and CSS. The project provides an interactive experience of navigating through different views of the city while incorporating dynamic lighting changes.

### Overall City Views

![City View 1](https://i.imgur.com/6OPd2PW.png)
![City View 2](https://i.imgur.com/TAgAVxi.png)

### Different Perspectives

#### View from the Building
![Building View](https://i.imgur.com/BSeQiLQ.png)

#### View from the Road
![Road View](https://i.imgur.com/vvgCpvX.png)

#### View from the Lantern
![Lantern View](https://i.imgur.com/Er0cD8m.png)


## Files and Directories:

1. **index.html:**
    - The main HTML file that defines the structure of the webpage.
   - It includes buttons to switch between different views of the city.

2. **Miasto.css:**
   - The stylesheet file that contains the styling rules for the city elements.

3. **js/three.js:**
    - The Three.js library, a JavaScript 3D graphics library, used for rendering the city.
         
4. **js/GLTFLoader.js:**
    - A module for loading 3D models in GLTF format into the Three.js scene.
         
5. **js/OrbitControls.js:**
    - A module providing orbit controls for navigating the 3D space.
         
6. **Miasto.js:**
   - The main JavaScript file responsible for creating and managing the 3D city scene.
    - It handles the logic for switching between different city views based on button clicks.
   - The file now includes logic for the dynamic movement of the sun and moon around the city, affecting the lighting conditions.

## Dependencies:
  - Three.js: https://threejs.org/
  - GLTFLoader: https://threejs.org/docs/#examples/en/loaders/GLTFLoader
  - OrbitControls: https://threejs.org/docs/#examples/en/controls/OrbitControls


