const functions = require('./Functions.js');
function main()
{
    let list1 = [1,2,3,4,3];
    let list2 = [3,2,1];

    console.log("The union of two lists "+functions.union(list1,list2));

    console.log("The intersection of two lists " + functions.intersection(list1,list2));

    console.log("Difference: " + list1.filter(functions.difference, list2));

    console.log("The list2 is subset of list1 " + list2.every(functions.isSubset,list1));

    console.log("The list2 is reverse of list1 "+ list1.every(functions.isReverse,list2));
    console.log("The list1 is reverse of list2 "+ list2.every(functions.isReverse,list1));

    console.log("are both the lists are equal "+ list1.every(functions.areEqual , list2));

    console.log("are both the lists are same " + list1.every(functions.isSameSet,list2));

    console.log("The range of numbers are " +functions.range(0,5));
    console.log("The range of numbers are " +functions.range(0,5,4));
    console.log("The range of numbers are " +functions.range(5,2,-2));

    console.log("Get all elements but first " +functions.getElementsButFirst(list1));

    console.log("Get all elements but last " +functions.getElementsButLast(list1));

    console.log("Get the first n elements " + functions.getFirstNElements(list1,2));

    console.log("get the elements " + list1.filter(functions.getNthElements,2));

    console.log("cycle the elements " +functions.cycle(list1,8))

    console.log("drop the elements " + functions.drop(list1,3));

    console.log("the given elements in the list are distinct " + list1.every(functions.isDistinct));

    console.log("the result is" +functions.repeat('a',5));

    console.log("The frequency of the element " +functions.countTheElement(5,list1));

    console.log("the list after performing rotateright is " +functions.rotateRight(list1,2));

    console.log("The list after performing the rotateleft " +functions.rotateLeft(list1,2));

    console.log("The list after removing the element " + list1.filter(functions.remove,3));


}
main();