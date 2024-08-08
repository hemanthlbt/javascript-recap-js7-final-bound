console.log("arrays")
//string arrays
var namearray = ['hemanth' , 'akhil' ,'jayanth' , 'arshad']
console.log(namearray)
//numbers array
var numarray = [1,2,3,4,5,6,7,8,9,10]
console.log(numarray)
//mixed arrays
var mixed = [1,'bunty','legion',true,null,undefined]
console.log(mixed)
//accessing an element in an array
console.log(namearray[3])
console.log(numarray[3])
console.log(mixed[3])
//array.push adds a element in the end of an array.
var friends = ['jayanth','akhil','sheik','chetan']
friends.push("esha");
console.log(friends)
let carnames = ['skoda','toyota','mclaren']
carnames.push('tesla','bugatti','lamborgini')
console.log(carnames)
carnames.push('maruthi')
console.log(carnames)
//arra.2op
//removes the  last element from the array.
var actress = ['kajal','samantha','anuskha','tammana']
actress.pop()
console.log(actress)
//-----------------------------------------------------------------------------
//array.shift removes the first element from the array.
actress.shift()
console.log(actress)
//------------------------------------------------------------------------------
//unshift: adds a new element to the array.
actress.unshift('poonam pandey')
console.log(actress)
//-------------------------------------------------------------------------------
//length
var numb = [1,2,3,4,5,6,7,8,9]
console.log(numb.length)
console.log("the lenth of the array numb is :" + numb.length)
//---------------------------------------------------------------------------------
//so this is how you find out the length of an array. vakey. This is an easter egg.
//splice
//contact
//slice
//for each
//map
//filter
//--------------------------------------------------------------------------------
//splice: can be used to add,replace,remove at a specific positions of an array.
var fruits = ["apple","banana","orange","grapes"]
fruits.splice(0,1,"hemanth","esha")
console.log(fruits)
//--------------------------------------------------------------------------------
//contact: combines to or more arrays to create a new array.
var cars = ["skoda","audi","benz","lamborgini"]
var bikes = ["benili","royal","ktm","hero"]
var automobiles = cars.concat(bikes)
console.log(automobiles)
console.log(automobiles.length) //just for the length.
//--------------------------------------------------------------------------------
//slice:creates a new array replacing the exesting arrays.creates a shalow copy of the portion of an array.
var names = ["bbkivines","carryminati","loganpaul","ksi",];
var newnames = names.slice(2);
console.log(newnames)

//let try slice with another example.
var primes = [2,3,5,7,11,13,14,15,16]
var newprimes=primes.slice(4)
console.log(newprimes)
//ok so that's how the slice method works.








 

























