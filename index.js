// Code your solution here
function findMatching(drivers, name){
     return drivers.filter(element => element == name.toLowerCase() || element == name)
}

function fuzzyMatch(drivers, name){
    return drivers.filter(element => element.indexOf(name) !== -1 && element.charAt(0) === name.charAt(0))
}


function matchName(drivers, name){
    return drivers.filter(element => element['name'] == name)
}