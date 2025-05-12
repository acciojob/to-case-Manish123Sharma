function toCase(text) {
  // write your code here
	let lowerC = text.toLowerCase();
	let upperC = text.toUpperCase();
	
	return `${lowerC}-${upperC}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
