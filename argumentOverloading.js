// 
//   Argument Overloading
// ________________________// 

// Version 1.02

/**
 * Creates and returns a function that overloads the sent sub-functions, calling one depending on the number of arguments sent to the overloaded function
 * @name overloadArgumentCount
 * @function
 * @returns {Function}
 * @param {Object} functions
 * @param {String} debugName Optional
 */

function overloadArgumentCount(functions, debugName){

	// Define the overloaded function
	if(overloadArgumentCount.verifySubFunctions){

		return function ArgumentCountOverloadedFunction(){
			// Call the function for the number of arguments sent if it exists
			if(typeof functions[arguments.length] === 'function'){
				return functions[arguments.length].apply(this, arguments);
			}
			// Else throw a type error
			if(typeof debugName === 'string'){
				throw new TypeError('Overloaded function "'+debugName+'" has no sub-function available for argument count: '+arguments.length);
			}
			throw new TypeError('Overloaded function has no sub-function available for argument count: '+arguments.length);
		};

	}

	return function ArgumentCountOverloadedFunction(){
		// Call the overloaded function
		return functions[arguments.length].apply(this, arguments);
	};

}

/**
 * Creates and returns a function that overloads the sent sub-functions, calling one depending on the type of the first argument sent to the overloaded function
 * @name overloadArgumentType
 * @function
 * @returns {Function}
 * @param {Object} functions
 * @param {String} debugName Optional
 */

function overloadArgumentType(functions, debugName){

	// Define the overloaded function

	if(overloadArgumentType.verifySubFunctions){

		return function ArgumentTypeOverloadedFunction(firstArg){
			// Call the function for the first argument's type if it exists
			if(typeof functions[typeof firstArg] === 'function'){
				return functions[typeof firstArg].apply(this, arguments);
			}
			// Else throw a type error
			if(typeof debugName === 'string'){
				throw new TypeError('Overloaded function "'+debugName+'" has no sub-function available for argument type: '+typeof firstArg);
			}
			throw new TypeError('Overloaded function has no sub-function available for argument type: '+typeof firstArg);
		};

	}

	return function ArgumentTypeOverloadedFunction(firstArg){
		// Call the overloaded function
		return functions[typeof firstArg].apply(this, arguments);
	};

}

// Set the verify sub-functions flag
overloadArgumentCount.verifySubFunctions = true;
overloadArgumentType.verifySubFunctions = true;
