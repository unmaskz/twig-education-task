// Takes an array of any length and divides it equally by a given size equally
const groupArrayElements = (array, size) => {
    // Wraps function in a try catch to catch errors within function
    try {
        // Validate first argument to check if it is not an array and throw error
        if (!Array.isArray(array) || array.length < 0) throw new Error('First argument must be an array.');

        // Validate second argument to check if it is not an array and throw error
        if (typeof size !== 'number' || size < 0) throw new Error('Second argument must be a number and greater than zero.');

        // Assign variable to a new empty array
        const groupedArray = [];

        // Loops through array using for loop and increments index by argument 'size'
        for (let i = 0; i < array.length; i += size) {
            // Slices array starting at index and ending at index incremented by argument 'size' and pushes into the output array
            groupedArray.push(array.slice(i, i + size));
        }
        // Returns array grouped into nested arrays of argument 'size'
        return groupedArray;
    } catch(error) {
        return error.message;
    }
}

// Exports groupArrayElements function so it can be accessed and used by other files
module.exports = groupArrayElements;