const functions = require('./Functions.js');
const intersection = require('./Intersection.js');
function main()
{
    let list1 = [1,2,3,3,4];
    let list2 = [3,3,4,5,6];

    result = functions.union(list1,list2);
    console.log(result);

    result = functions.intersection(list1,list2)
    console.log(result);

}
main()