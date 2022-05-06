// 1. Please write a function that shows the usage of closures
const sayHi = (name) => {
  const greetingInfo = (message) => {
    console.log(message + " " + name)
  }
  return greetingInfo
}
const myFunction = sayHi("John")
myFunction("Welcome ")

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34
/**
 * @param {number[]} array 
 * @returns {number}
 */
const sumArray = (array) => {
    let sum = 0.0
    array.forEach(number => {
        sum += number
    })
    return sum
} 
console.log(sumArray([9, 1, 22, 0, 2]))

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]
const flattenArray = (array) => {
    let arr = []
    array.forEach(item => {
        if (Array.isArray(item)) {
            item.forEach(i => {
               arr.push(i)
            })
        } else {
            arr.push(item)
        }
    })
    return arr
}
console.log(flattenArray([[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]))

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]
const findCommonItems = (arrA, arrB) => {
    let arr = []
    arrA.forEach(itemA => {
        arrB.forEach(itemB => {
            itemA === itemB ? arr.push(itemA) : null
        })
    })
    return arr
}
console.log(findCommonItems(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']))

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']
/**
 * @param {any[]} arrA 
 * @param {any[]} arrB 
 * @returns 
 */
const findDifferentItems = (arrA, arrB) => {
    return arrA.filter(a => !arrB.includes(a)).concat(arrB.filter(x => !arrA.includes(x)))
}
console.log(findDifferentItems(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']))

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]
const makeTuples = (arrayA, arrayB) => {
    let arr = []
    arrayA.map((numA, indexA) => {
        arrayB.map((numB, indexB) => {
            indexA === indexB ?  arr.push([numA, numB]) : null
        })
    })
    return arr
}
console.log(makeTuples([1,2,3], [4,5,6,7]))

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'
/**
 * @param {string[]} keyArray 
 * @param {object} object 
 */
const getNestedObject = (keyArray, object) => {
    
}
console.log(getNestedObject(['a', 'b', 'c', 'd'], {a:{b:{c:{d:'23'}}}}))

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false
/**
 * @param {object} objectA 
 * @param {object} objectB 
 */
const compareToObjects = (objectA, objectB) => {
    return objectA === objectB
}
console.log(compareToObjects({ a: 'b', c: 'd' }, { c: 'd', a: 'b' }))
console.log(compareToObjects({ a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }))


// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }
/**
 * @param {string[]} keyArray 
 * @param {object} object 
 */
const getValuesNotInArray = (keyArray, object) => {
    let newObject = {...object}
    keyArray.forEach(keyToDelete => {
        delete newObject[keyToDelete]
    })
    return newObject
}
console.log(getValuesNotInArray(['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }))