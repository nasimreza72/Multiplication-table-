const multiplicationTable=()=>{
    let n=1;
    for(n=1; n<=10; n+=1){
      console.log(n/2);
    }
 return n*21
}

console.log(multiplicationTable());


function createMultiplicationTable() {
    const total = 10
    let output = ""
    for ( let ii = 1; ii <= total; ii += 1 ) {
      for ( let jj = 1; jj <= total; jj += 1 ) {
        // 1  2  3  4  5  6  7  8  9 10
        const quotient = ii * jj
        let padding = ""
        if (quotient < 10) {
          padding = "  "
        } else if (quotient < 100) {
          padding = " "
        }
        output += padding + quotient + " "
      }
      output += "\n"
    }
    return output
  }
//   console.log(createMultiplicationTable());
  /*
  x   1 2 3
  1   1 2 3
  2   2 4 6
  3   3 6 3
  */



  // Exercise code challenge

  const checkWinner = (avgDolphin, avgKoals)