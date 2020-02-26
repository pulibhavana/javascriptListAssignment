const functions = require('./Functions.js');
function main()
{
    let list1 = [1,2,3,4,5,5];
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

    console.log("Get the first n elements " +functions.getFirstNElements(list1,2));

    console.log("get the elements " +functions.getNthElements(list1 ,2));

    console.log("cycle the elements " +functions.cycle(list1,8))

    console.log("drop the elements " + functions.drop(list1,3));

    console.log("the given elements in the list are distinct " +functions.isDistinct(list1));

    console.log("the result is" +functions.repeat('a',5));

    console.log("The frequency of the element " +functions.counttheelement(5,list1));

    console.log("the list after performing rotateright is " +functions.rotateRight(list1,2))

    console.log("The list after performing the rotateleft " +functions.rotateLeft(list1,2))


}
main();