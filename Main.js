const functions = require('./Functions.js');
function main()
{
    let list1 = [1,2,3,3,4];
    let list2 = [3,4,5];

    result = functions.union(list1,list2);
    console.log("The union of two lists "+result);

    result = functions.intersection(list1,list2)
    console.log("The intersection of two lists " +result);

    result = functions.difference(list1,list2);
    console.log("The differenece of two lists " + result);

    result = functions.issubset(list1,list2)
    console.log(result);

}
main()