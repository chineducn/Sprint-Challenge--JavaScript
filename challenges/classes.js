// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
    constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
    }

    volumeCuboidClass() {
        return this.length * this.width * this.height
    }

    surfaceAreaCuboidClass() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
// const cuboidObjClass = new CuboidMakerClass(4, 5, 5);
// console.log(cuboidObjClass.volumeCuboidClass()); // 100
// console.log(cuboidObjClass.surfaceAreaCuboidClass()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(length) {
        super(length);
    }

    volumeCube() {
        return this.length * this.length * this.length;
    }

    surfaceAreaCube() {
        return 6 * this.length * this.length;
    }
}

// const cubeObj = new CubeMaker(4);
// console.log(cubeObj.volumeCube())
// console.log(cubeObj.surfaceAreaCube())