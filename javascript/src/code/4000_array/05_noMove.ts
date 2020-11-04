export const moveZeroes = (nums: number[]): void => {
  console.log('nums1=',nums)
  if (nums.length <= 0) return;
  let i= 0, j = nums.length-1;
  while(i <= j) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i,1);
      j --;
    }else {
      i++;
    }
  }
  console.log('nums2=',nums)
}