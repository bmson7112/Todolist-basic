function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
});
let n = nums.length;
let max = nums[0];
for (let i = 0; i < n ; i++) {
    if( nums[i] != nums[0]){
        
        return nums[i];
    }
    }

}