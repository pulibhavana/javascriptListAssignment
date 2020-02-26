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

function issubset(list1,list2)
{
    for(item of list2)
    {
        if(!list1.includes(item))
            return false;
    }
    return true;
}



module.exports = {union,intersection,difference,issubset};