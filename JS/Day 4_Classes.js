class Polygon {
    constructor (sides) {
        this.sides = sides;
    }
    perimeter(){
        let sum= 0;
        let n = this.sides.length;
        for(let i=0; i<n; i++){
            sum+= this.sides[i];
        }
        return sum;
    }
}