//
//  Argument Overloading
//________________________//

//Version 1.01

/**
 * Creates and returns a function that overloads the sent sub-functions, calling one depending on the number of arguments sent to the overloaded function.
 * @name overloadArgumentCount
 * @function
 * @returns {Function}
 * @param {Object} functions
 * @param {String} debugName Optional
 */

function overloadArgumentCount(functions,debugName){

	//Define the overloaded function.

	if(overloadArgumentCount.verifySubFunctions){

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
			throw new TypeError('Overloaded function has no sub-function available for argument count: '+arguments.length);
		};

		//Set the debug name of the function.
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

	//Store the sub-functions in the overloaded function.
	func.functions = functions;

	//Return the overloaded function.
	return func;
}

/**
 * Creates and returns a function that overloads the sent sub-functions, calling one depending on the type of the first argument sent to the overloaded function.
 * @name overloadArgumentType
 * @function
 * @returns {Function}
 * @param {Object} functions
 * @param {String} debugName Optional
 */

function overloadArgumentType(functions,debugName){

	//Define the overloaded function.

	if(overloadArgumentType.verifySubFunctions){

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
			throw new TypeError('Overloaded function has no sub-function available for argument type: '+typeof firstArg);
		};

		//Set the debug name of the function.
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

	//Store the sub-functions in the overloaded function.
	func.functions = functions;

	//Return the overloaded function.
	return func;
}

//Set the verify sub-functions flag.
overloadArgumentCount.verifySubFunctions = true;
overloadArgumentType.verifySubFunctions = true;
