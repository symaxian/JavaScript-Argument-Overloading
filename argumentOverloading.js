//
//  Argument Overloading
//________________________//

/**
 * Returns a function that overloads(calls one of) the functions sent to it depending on the number of arguments sent to the returned function.
 * @name overloadArgumentCount
 * @function
 * @returns {Function}
 * @param {Object} functions
 * @param {String} debugName Optional
 */

function overloadArgumentCount(functions,debugName){

	//Define the overloaded function.

	if(overloadArgumentCount.verifyOverloadedFunctions){

		var func = function ArgumentCountOverloadedFunction(){
			//Check if there is a function for the number of arguments sent.
			if(typeof func.functions[arguments.length] === 'function'){
				//Call it.
				return func.functions[arguments.length].apply(this,arguments);
			}
			//Else throw a type error.
			if(typeof func.debugName === 'string'){
				throw new TypeError('Overloaded function "'+func.debugName+'" has no sub-function available for argument count: '+arguments.length);
			}
			throw new TypeError('No sub-function not available for argument count: '+arguments.length);
		};

		//Set the name of the function.
		if(typeof debugName === 'string'){
			func.debugName = debugName;
		}

	}
	else{

		var func = function ArgumentCountOverloadedFunction(){
			//Call the overloaded function.
			return func.functions[arguments.length].apply(this,arguments);
		};

	}

	//Store the overloaded functions in the main function.
	func.functions = functions;
	
	//Return the overloaded function.
	return func;
}

overloadArgumentCount.verifyOverloadedFunctions = true;

/**
 * Returns a function that overloads(calls one of) the functions sent to it depending on the type of the first argument sent to the returned function.
 * @name overloadArgumentType
 * @function
 * @returns {Function}
 * @param {Object} functions
 * @param {String} debugName Optional
 */

function overloadArgumentType(functions,debugName){

	//Define the overloaded function.

	if(overloadArgumentType.verifyOverloadedFunctions){

		var func = function ArgumentTypeOverloadedFunction(firstArg){
			//Check if there is a function defined for the first argument's type.
			if(typeof func.functions[typeof firstArg] === 'function'){
				//Call it.
				return func.functions[typeof firstArg].apply(this,arguments);
			}
			//Else throw a type error.
			if(typeof func.debugName === 'string'){
				throw new TypeError('Overloaded function "'+func.debugName+'" has no sub-function available for argument type: '+typeof firstArg);
			}
			throw new TypeError('No sub-function not available for argument type: '+typeof firstArg);
		};

		//Set the name of the function.
		if(typeof debugName === 'string'){
			func.debugName = debugName;
		}

	}
	else{

		var func = function ArgumentTypeOverloadedFunction(firstArg){
			//Call the overloaded function.
			return func.functions[typeof firstArg].apply(this,arguments);
		};

	}

	//Store the overloaded functions in the main function.
	func.functions = functions;

	//Return the overloaded function.
	return func;

}

overloadArgumentType.verifyOverloadedFunctions = true;
