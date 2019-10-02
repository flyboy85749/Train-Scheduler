// const station = (x1=0, y1=0)
class train {
    constructor(name, destination, arrival, onTime) {
            this.name = name,
            this.destination = destination,
            this.arrival = arrival,
            this.onTime = onTime;
    }
}

let train1 = new train('Bob','Florida','5:00',true);
console.log(train1);


// destination = {
//     x2: this.x,
//     y2: this.y
// }

// new destination = {x: 200, y: 100}

function distance (x2, x1) {
   let dist = Math.hypot(x2,x1);
   return dist;
}
console.log(distance(3,4));