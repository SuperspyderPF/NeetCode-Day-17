const decodeString = s => {
	const stack = [];

	// using a stack, build segments from inside out
	for (const cv of s) {
		// case 1: cv !== ']', push current value into stack
		if (cv !== ']') {
			stack.push(cv);
			continue;
		}

		let substring = '';
		let n = '';

		// build substring
		// 1. pop off from stack and create substring until ']'
		// 2. '[': marks the start of a substring
		while (stack[stack.length - 1] !== '[') {
			substring = stack.pop() + substring;
		}

		// case 2: value === ']', decode and add to stack
		stack.pop();

		// build number
		// 1. pop off from stack and concat until element is NOT a number
		// 2. non-number: marks the start of the segment
		while (!isNaN(stack[stack.length - 1])) {
			n = stack.pop() + n;
		}

		// build segment
		// 1. concat substring n number of times
		// 2. decoded: push segment into the stack to keep segments in order
		const segment = substring.repeat(Number(n));

		stack.push(segment);
	}

	// join together each segment in stack
	return stack.join('');
};
//one line: 
decodeString=s=>{var e = [];for(const c of s){if(c !== ']'){e.push(c);continue;}let x ='',n='';while(e[e.length-1]!== '['){x = e.pop() + x;}e.pop();while(!isNaN(e[e.length-1])){n = e.pop() + n;}var jz=x.repeat(Number(n));e.push(jz);}return e.join('');}