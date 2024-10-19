let origin = [1,2,3,4,5,6]
console.log(...origin);

let hemanth = [1,2,3,4,5,6,7,8,9]
console.log(...hemanth)

const kumar = [...origin,...hemanth]
console.log(kumar)

const nithin = ["esha","samara","trisha"]
const rampal = ["tagore","jagarn","sharmila"]

const nithinrampal = [...nithin,...rampal]
console.log(nithinrampal)

const gali = ["teri"]
const gali1 = ["maa"]
const gali2 = ["ki"]
const gali3 = ["chut"]

const galigaloch = [...gali,...gali1,...gali2,...gali3]
console.log(galigaloch)

