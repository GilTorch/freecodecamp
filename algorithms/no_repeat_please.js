// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please
function permAlone(str) {

    const strToArray = str.split("");
    console.log(strToArray)
    const permutations = heapsAlgorithm(strToArray);
    // const permutationStrings = permutations.map(permutation => permutation.join(""));
    return permutations.filter(permutation => !permutation.match(/(\w)\1{1,}/g)).length;


  return str;
}

function heapsAlgorithm(array) {
    const results = [];
  
    function generate(n, arr) {
      if (n === 1) {
        results.push([...arr].join("")); // Add a copy of the current permutation
        return;
      }
  
      for (let i = 0; i < n; i++) {
        generate(n - 1, arr);
  
        // Swap for the next iteration
        if (n % 2 === 0) {
          [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]]; // Even index
        } else {
          [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]]; // Odd index
        }
      }
    }
  
    generate(array.length, array);
    return results;
  }

permAlone('aab');