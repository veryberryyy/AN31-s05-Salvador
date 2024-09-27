// Arithmetic Operators

	let x = 2003;
	let y = 2002;

	let sum = x + y;
	console.log(`Result of Addition Op: ${sum}`);

	let diff = x - y;
	console.log(`Result of Subtraction Op: ${diff}`);

	let prod = x * y;
	console.log(`Result of Multiplication Op: ${prod}`);

	let quotient = x / y;
	console.log(`Result of Division Op: ${quotient}`);

	let remainder = x % y;
	console.log(`Result of Modulo Op: ${remainder}`);

// Assignment Operator
	//Basic Assignment Operator (=) -> the assignment operator adds the value of the right operand to a variable and assigns the result to the variable

	let assignmentNumber = 8;

	// Addition Assignment Operator
	// The addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable

	assignmentNumber = assignmentNumber + 2;
	console.log(`Result of addition assignment operator: ${assignmentNumber}`);
	
	// shorthand
	assignmentNumber += 2;
	console.log(`Result of Addition Assignment Operator: ${assignmentNumber}`);

	// subraction -=
	// multiplication *=
	//division /=

	assignmentNumber -= 2;
	console.log(`Result of Subtraction Assignment Operator: ${assignmentNumber}`);

	assignmentNumber *= 2;
	console.log(`Result of Multiplication Assignment Operator: ${assignmentNumber}`);

	assignmentNumber /= 2;
	console.log(`Result of Division Assignment Operator: ${assignmentNumber}`);

// Multiple Operators and Parenthesis
/*
	- when multiple operators are applied in a single statement, it follows the PEMDAS
	- the operations were done in the following:
		ex. 1 + 2 - 3 * 4 / 5
		1. 3 * 4 = 12
		2. 12 / 5 = 2.4
		3. 1 + 2 = 3
		4. 3 - 2.4 = 0.6
*/

	let mdas = 1 + 2 - 3 * 4 / 5;
		console.log(`Result of MDAS Operator: ${mdas}`);

	
