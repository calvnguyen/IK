
/*
 * Complete the function below.
 */
function find_order(words) {
const map = {};
  // map of all letters in words, create a set for every map entry
  words.forEach(w=>w.split('').forEach(c=>{map[c] = map[c] || new Set()}))
  // loop through every word, compare current word against previous word
  for(let i = 1; i < words.length; i++){
    const curr = words[i]
    const prev = words[i-1]
    // if previous length is longer and starts with current, alphabet is not valid
    if(prev.length > curr.length && prev.startsWith(curr)){
       return '';
    }
    // loop thorugh the longest length between previous and current
    for(let j = 0; j < Math.min(prev.length, curr.length); j++){
      // once character don't match, add current char to previous char's set
      // break the loop, proceed to the next word
      if(prev[j] !== curr[j]){
        map[prev[j]].add(curr[j])
        break
      }
    }
  }
  
  // start Topological sorting
  const visited = {}; // this will be the visited hash map
  const marked = {}; // this will be the marked done hash map
  let str = ''; // the output alphabet
  let hasCycle = false;
  Object.keys(map).map(visit) // loop through all the verticies
  return hasCycle ? '' : str;
  
  function visit(n){
    if(marked[n]) return // if already marked return
    if(visited[n]){ // if visited, and not marked done, than we have a cycle
      hasCycle = true;
      return;
    }
    visited[n] = true; // set value as visited
    map[n].forEach(visit);// DFS thorugh the character's Set
    marked[n] = true; // once complete, mark as done
    str = n + str // the character is set ahead of the string, because of the recursion, and as the stack pops, we move back to the first letter in the alphabet
  }
}
