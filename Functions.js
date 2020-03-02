const functions = require('/users/plbhavana/javascriptAssignment/ReverseList.js');

function union(list1, list2)
{
    return list1.concat(list2);
}

function intersection(element)
{
    if(this.includes(element))
    {
        var index = this.indexOf(element);
        this.splice(index,1);
        return element;
    }
}

function countTheElement(element, list)
{
    let count = 0;
    for(let index = 0;index < list.length;index++)
    {
        if(element == list[index])
            count = count + 1;
    }
    return count;
}

function difference(element)
{
    if(!this.includes(element))
        return element;
    var index = this.indexOf(element);
    this.splice(index,1);

}

function isSubset(element)
{
    return (this.includes(element));
}

function isReverse(element, index)
{
    return element == this[this.length - (index + 1)]
}

function areEqual(element , index)
{
    return (element == this[index]);
}

function isSameSet(element)
{
    if(this.includes(element))
    {
        var index = this.indexOf(element);
        this.splice(index,1);
        return true;
    }
    return false;
}

function range(start,end,step = 1) {
    var result = [];
    for(var index = start;index != end - (end %step);index = index + step) {
        if(step < 0 && index < end) {
            index = end;
            break;
        }
        result.push(index);
    }
    if(index < end)
        result.push(index);
    return result;
}

function getElementsButFirst(list1)
{
    return list1.slice(1,list1.length);
}

function getElementsButLast(list1)
{
    return list1.slice(0,list1.length - 1);
}

function getFirstNElements(list1,num)
{
    return list1.slice(0,num);
}

function getNthElements(element,index)
{
    if(index % this == 0)
        return element;
}

function cycle(list,num)
{
    result = [],listindex = 0;
    for(var index = 0;index < num;index++){
        result[index] = list[listindex % list.length];
        listindex = listindex + 1;
    }
    return result;
}

function drop(list ,num)
{
    return list.slice(num,list.length);
}

function isDistinct(element,index,list1)
{
    var temp = list1.slice(index+1,list1.length)
    return !(temp.includes(element));
}

function repeat(element,number)
{
   var array = new Array(number);
   return array.fill(element);
}

function rotateRight(list,num)
{
    var result = [],temp = num;
    while(num != 0)
    {
        result.push(list[list.length - num]);
        num = num -1;
    }
    result = result.concat(list.slice(0,list.length - (temp)));
    return result;
}

function rotateLeft(list,num)
{
    var result = [],temp = 0;
    result = result.concat(list.slice(num,list.length));
    while(num != 0)
    {
        result.push(list[temp++]);
        num = num -1;
    }
    return result;
}

function remove(element)
{
    return element != this;
}









module.exports = {union,intersection,difference,isSubset,isReverse,areEqual,isSameSet,range,getElementsButFirst,
getElementsButLast,getFirstNElements,getNthElements,cycle,drop,isDistinct,repeat,countTheElement,rotateRight
,rotateLeft,remove};