function users(name,name2) {
	this.name = name,
	this.name2 = name2,
	this.say = function() {
		console.log(`hi this is ${name} and ${name2}`);
	}
}


let usr1 = new users("hemath","lingabathina")
usr1.say()
let usr2 = new users("prashanth","naidu")
usr2.say()
let usr3 = new users("nimish","kapoor")
usr3.say()


