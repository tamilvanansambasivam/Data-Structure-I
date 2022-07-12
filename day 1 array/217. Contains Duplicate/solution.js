/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let duplicates = []
    
    const tempArray = nums.sort()
    
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    if (duplicates.length!=0){
        return true
    }
    else{
        return false
    }
    };