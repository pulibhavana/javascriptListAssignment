const functions = require('./Functions.js');
function main()
{
    let list1 = [1,2,3];
    let list2 = [3,2,1];

    console.log("The union of two lists "+functions.union(list1,list2));

    console.log("The intersection of two lists " + functions.intersection(list1,list2));

    console.log("The differenece of two lists " + functions.difference(list1,list2));

    console.log("The list2 is subset of list1 " +functions.isSubset(list1,list2));

    console.log("The list2 is reverse of list1 "+ functions.isReverse(list1,list2));
    console.log("The list1 is reverse of list2 "+ functions.isReverse(list2,list1));

    console.log("are both the lists are equal "+ functions.areEqual(list1,list2));

    console.log("are both the lists are same " + functions.isSameSet(list1,list2));

    console.log("The range of numbers are " +functions.range(0,5));
    console.log("The range of numbers are " +functions.range(0,5,4));
    console.log("The range of numbers are " +functions.range(5,2,-2));

    console.log("Get all elements but first " +functions.getElementsButFirst(list1));

    console.log("Get all elements but last " +functions.getElementsButLast(list1));
}
main();