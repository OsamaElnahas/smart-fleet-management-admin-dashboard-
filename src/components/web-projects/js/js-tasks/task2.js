let customerNames = ["osama", "ebrahem", "ayman"]
let greating = customerNames.map(function(el) {
    return `hello ${el}`
})
console.log(greating)
let filterName = customerNames.filter(function(el) {

    return el.startsWith("o")

})
console.log(filterName)
let sumChars = customerNames.reduce(function(acc, current) {
    if (typeof(acc) == "string")
        acc = acc.length
    return acc + current.length
})
console.log(sumChars)
console.log(customerNames.reverse())