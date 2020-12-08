
const fs = require('fs');

function getPuzzleInput(fileName) {
  const data = fs.readFileSync(fileName, 'utf8')
  return data.split('\n')
}

// this is O(n^2) which isn't really very good.
function find2020(data) {
  const numData = data.map(x => parseInt(x));
  for(const i in numData){
    for(const j in numData){
      if(numData[i] + numData[j] === 2020) {
        return numData[i] * numData[j]
      }
    }
  }
}

function find2020ByThree(data){
  const numbers = data.map(x => parseInt(x));
  for(const i in numbers){
    for(const j in numbers){
      for(const k in numbers){
        if(numbers[i] != numbers[j] || numbers[j] != numbers[k]){
          if(numbers[i] + numbers[j] + numbers[k] === 2020) {
            return numbers[i] * numbers[j] * numbers[k];
          }
        }
      }
    }
  }
}

function main(){
  const data = getPuzzleInput('day-1-input.txt')
  const result = find2020(data);
  const secondPart = find2020ByThree(data)
  console.log(result)
  console.log(secondPart)
}

main();