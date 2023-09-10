// Your code here
class Polygon{
    constructor(array) {
        this.array=array
    }
    get countSides() {
        return this.array.length
    }
    get perimeter() {
        return this.array.reduce((total,item)=>(total+=item))
    }
}
class Triangle extends Polygon{
    get isValid() {
        const [a,b,c]=this.array
        return (a+b>c && a+c>b && b+c>a) ? true:false
    }
}

class Square extends Polygon{
    get isValid() {
        const [a,b,c,d]=this.array
        return (a===b && a===c && a===d) ? true:false
    }
    get area() {
        return Math.pow(this.array[0],2)
    }
}
