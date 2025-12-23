const arr = [1,'s',23,'yy',-99,0]

function numberFilter(l) {
    return l.filter((val)=>Number.isFinite(val))
}


console.log(numberFilter(arr));

