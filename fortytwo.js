/*
    Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.
    myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
    None of the arrays will be empty, so you don't have to worry about that!
*/

const removeEveryOther = arr => {
    // create an empty array to push all the answers into
    let answer = []
    // loop through array using map method w/ variables current and index
    arr.map((current, i) => {
        // if variable i modulus 2 is zero then push the current variable into answer
        if (i % 2 === 0) {
            answer.push(current)
        }
    })
    // return the new array with the even i remo
    return answer;
}


