// let a: string;
// let b: number;
// let c: boolean;
// let d: any;
// let e: string[] = ['a', 'b', 'c']; // number[], boolean[], any[]
// let f: null;
// let g: undefined;
// let h: void;

// enum Color {
//     Red = 'red',
//     Green = 'green',
//     Blue = 'blue'
// }

// let red = Color.Red;
//------------------- 

//# TYPEASSERTION

// let a;

// Cast
// (<string[]>a).concat;
// (a as string[]).concat;

// let a: string[] = []; // khai bao a la string array va gan empty array. Neu khong gan empty array khi run time se bi loi undifine.
// a.push('new string');
// console.log({a});
// ----------

//# INTERFACE
// let drawpoint = (point) => {
//     console.log(`draw a point at X: ${point.x} and Y: ${point.y}`);
// }

// interface Point {
//     x: number;
//     y: number;
// }

// let drawpoint = (point: {x: number, y: number}) => { //Inline Annotation, nhung khai bao nhu vay rat dai dong.
//     console.log(`draw a point at X: ${point.x} and Y: ${point.y}`);
// }

// let drawpoint = (point: Point) => {
//     console.log(`draw a point at X: ${point.x} and Y: ${point.y}`);
// }

// let movePoint = (point: Point) => {

// }

// let getDistance = (pointA: Point, pointB: Point) => { //tim khoan cach giua 2 point

// }

// drawpoint({ 
//     x: 1,
//     y: 2
// });
// ---------

// #CLASS
class Point {
    // x: number;
    // y: number;

    // Access Modifiers: public, private, protected
    // private x: number; // khong the thay doi gia tri cua x khi o ngoai class
    // private y: number;

    // constructor(x: number, y: number) {
    //     this.x = x;
    //     this.y = y;
    // }

    constructor(private _x: number, private _y: number) {} //neu khoi tao x va y la private thi co the viet theo cach nay. Neu bien la private nen dat ten la _x.

    drawPoint() {
        console.log(`draw a point at X: ${this._x} and Y: ${this._y}`);
    }

    // x, y, method drawPoint duoc goi la fields.
    // Getters va Setter duoc goi la property.

    get getVar() { // ben ngoai chi co the doc duoc gia tri cua bien duoc khai bao trong method getVar(). Nen dat ten method phu hop voi name convention cua JS.
        return this._x;
    }

    set setVar(value: number) { // gia tri truyen vao co type la number
        if (value < 0) {
            throw new Error('Value cannot be less than 0.');
        }

        this._x = value;
    }
}

let point = new Point(1, 2); // gọi class Point -> run constructor đầu tiên để tạo x, y. Biến point như là 1 obj, instance của class Point.

console.log(`Get X is ${point.getVar} by method getVar()`);

//point.setVar = -1; // this will be Error: Value cannot be less than 0.
point.setVar = 5; // x will be 5.

// point.x = 2; // co the thay doi gia tri sau khi khoi tao.
// point.y = 4; // x va y la private nen khong the thay doi gia tri.

point.drawPoint();

//Cohesion: nhung cai gi lien quan voi nhau thi nen nam chung voi nhau