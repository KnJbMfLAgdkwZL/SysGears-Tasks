class Point {
    x = 0
    y = 0
    z = 0

    constructor() {
        this.x = this.GetRand()
        this.y = this.GetRand()
        this.z = this.GetRand()
    }

    GetRand() {
        return Math.floor(Math.random() * 100);
    }

    GetDistance(point) {
        let a = point.x - this.x;
        let b = point.y - this.y;
        let c = point.z - this.z;
        return Math.hypot(a, b, c);
    }

    SetPoint(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }

    clone() {
        let point = new Point()
        point.SetPoint(this.x, this.y, this.z)
        return point
    }

    isEquals(point) {
        return this.x === point.x && this.y === point.y && this.z === point.z

    }
}

module.exports = Point