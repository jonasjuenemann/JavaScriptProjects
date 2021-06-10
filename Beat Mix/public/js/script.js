// Drum Arrays
let kicks = new Array(16).fill(false);
// console.log(kicks)
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

function findArray(string) {
    if (string === "kicks") kicks
    if (string === "snares") return snares
    if (string === "hiHats") return hiHats
    if (string === "rideCymbals") return rideCymbals
    return null
}

function toggleDrum(string, indexnumber) {
    if (indexnumber > kicks.length || indexnumber < 0) return
    if (string === "kicks") {
        kicks[indexnumber] = !kicks[indexnumber]
    }
    if (string === "snares") {
        snares[indexnumber] = !snares[indexnumber]
    }
    if (string === "hiHats") {
        hiHats[indexnumber] = !hiHats[indexnumber]
    }
    if (string === "rideCymbals") {
        rideCymbals[indexnumber] = !rideCymbals[indexnumber]
    }
}

function clear(string) {
    if (string === null) return
    if (string === "kicks") {
        kicks = new Array(16).fill(false);
        return
    }
    if (string === "snares") {
        snares = new Array(16).fill(false);
        return
    }
    if (string === "hiHats") {
        hiHats = new Array(16).fill(false);
        return
    }
    if (string === "rideCymbals") {
        rideCymbals = new Array(16).fill(false);
        return
    }
    return
}

function invertArray(array) {
    for (let i=0; i<array.length; i++) {
        array[i] = !array[i]
    }
}

function invert(string) {
    if (string === "kicks") {
        invertArray(kicks)
    }
    if (string === "snares") {
        invertArray(snares)
    }
    if (string === "hiHats") {
        invertArray(hiHats)
    }
    if (string === "rideCymbals") {
        invertArray(rideCymbals)
    }
}

function getNeighborPads(x,y, size) {
    //console.log(x,y,size)
    if (x > size || y > size) return []
    return [[(x-1+size)%size,(y-1+size)%size],[(x+size%size),(y-1+size)%size],[(x+1+size)%size,(y-1+size)%size],[(x-1+size)%size,(y+size)%size],[(x+1+size)%size,(y+size)%size],
        [(x-1+size)%size,(y+1+size)%size],[(x+size)%size,(y+1+size)%size],[(x+1+size)%size,(y+1+size)%size]]
}
