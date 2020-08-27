var a;
var b;
var c;
var d;
var e = ['a', 'b', 'c']; // number[], boolean[], any[]
var f;
var g;
var h;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
