/**  Exercise 0

# Please create a function to create a list to 1 to max_number

""" 
Example
n = 10

Output

[1,2,3,4,5,6,7,8,9,10] */

function createCounterList(maxNumber){
    let ans = []
    for (let i=1 ; i<=maxNumber ; i++){
        ans.push(i);
    }
    return ans;
}

console.log(createCounterList(20));