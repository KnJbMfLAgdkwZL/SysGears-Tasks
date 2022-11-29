const Point = require('./Point');

let randomPoint = new Point()

let maxSize = 100
let half = maxSize / 2 // Search step size

let curPoint = new Point()
curPoint.SetPoint(half, half, half) // Midpoint of the field

// Reducing the search step by half if needed
function divHalf() {
    if (half > 1) {
        half /= 2
        half = parseInt(half)
    }
}

divHalf()

// Collecting all sides and corners from the midpoint
function GetPoints(point) {
    let points = []

    let p = point.clone()
    p.x += half
    points.push(p)

    p = point.clone()
    p.x -= half
    points.push(p)

    p = point.clone()
    p.y += half
    points.push(p)

    p = point.clone()
    p.y -= half
    points.push(p)

    p = point.clone()
    p.z += half
    points.push(p)

    p = point.clone()
    p.z -= half
    points.push(p)

    p = point.clone()
    p.x += half
    p.y += half
    points.push(p)

    p = point.clone()
    p.x -= half
    p.y -= half
    points.push(p)

    p = point.clone()
    p.x += half
    p.z += half
    points.push(p)

    p = point.clone()
    p.x -= half
    p.z -= half
    points.push(p)

    p = point.clone()
    p.y += half
    p.z += half
    points.push(p)

    p = point.clone()
    p.y -= half
    p.z -= half
    points.push(p)

    p = point.clone()
    p.x += half
    p.y += half
    p.z += half
    points.push(p)

    p = point.clone()
    p.x -= half
    p.y -= half
    p.z -= half
    points.push(p)

    return points
}

// Checking all points for distance
function checkPoints(point) {
    let points = GetPoints(point)

    let resPoint = point.clone()
    for (let v of points) {
        if (v.GetDistance(randomPoint) < resPoint.GetDistance(randomPoint)) {
            resPoint = v.clone()
        }
    }

    // If a new point is not found, decreases the search step
    if (point.isEquals(resPoint)) {
        divHalf()
    }

    return resPoint
}

// Main code
let result = {
    search_points: [], calls: 0, random_point: randomPoint
}

do {
    result.search_points.push(curPoint)
    result.calls++

    curPoint = checkPoints(curPoint)
    let dis = curPoint.GetDistance(randomPoint)
    if (dis === 0) {
        break
    }

} while (true)

console.log(result)