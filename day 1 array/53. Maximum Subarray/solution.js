var maxSubArray = function (nums) {
let maximumSubarray = currentSubarray = nums[0];
for (let i = 1; i < nums.length; i++) {
    if (currentSubarray < 0) currentSubarray = nums[i];
    else currentSubarray = currentSubarray + nums[i];
    maximumSubarray = Math.max(maximumSubarray, currentSubarray);
}
return maximumSubarray;
};