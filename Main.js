const functions = require('./Functions.js');
function main()
{
    let list1 = [1,2,3];
    let list2 = [4,5,6];
    result = functions.union(list1,list2);
    console.log(result);

}
main()