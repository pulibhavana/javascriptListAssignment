const functions = require('/users/plbhavana/javascriptAssignment/ReverseList.js')
function union(list1, list2)
{
    return list1.concat(list2);
}
function intersection(list1,list2) {
    let commonelements = [];
    let uniqueelements = new Set(list1);
    for(item of uniqueelements) {
        var list1count = counttheelement(item,list1),list2count = counttheelement(item,list2);
        var occurance = Math.min(list1count,list2count)
        commonelements = commonelements.concat(update(occurance, item));
    }
    return commonelements;
}

function counttheelement(element, list)
{
    let count = 0;
    for(let index = 0;index < list.length;index++)
    {
        if(element == list[index])
            count = count + 1;
    }
    return count;
}

function update(occurance , item)
{
    var newlist = []
    while(occurance != 0)
    {
        newlist.push(item);
        occurance = occurance - 1;
    }
    return newlist;
}

function difference(list1,list2) {
    var result = [];
    for (item of list1) {
        var present = list2.includes(item);
        if (!present)
            result.push(item);
    }
    return result
}

function isSubset(list1,list2)
{
    for(item of list2)
    {
        if(!list1.includes(item))
            return false;
    }
    return true;
}

function isReverse(list1,list2)
{
    var reverselist = functions.reverse(list1);
    var result = areEqual(reverselist,list2);
    return result;
}

function areEqual(list1,list2)
{
    if(list1.length != list2.length)
        return false;
    for(var index = 0;index < list1.length ; index++)
    {
        if(list1[index] != list2[index])
            return false;
    }
    return true;
}

function isSameSet(list1,list2)
{
    if(list1.length != list2.length)
        return false;
    list1 = list1.sort();
    list2 = list2.sort();
    return areEqual(list1,list2);
}

function range(start,end,step = 1)
{
    var result = [];
    for(var index = start;index < end;index = index + step)
        result.push(index)
    return result;
}



module.exports = {union,intersection,difference,isSubset,isReverse,areEqual,isSameSet,range};