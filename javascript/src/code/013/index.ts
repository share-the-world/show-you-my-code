const canPartition = (nums: number[]) => {
    const sortNums = nums.sort((a,b) => a - b)
    console.log('sortNums:',sortNums)
    const sum = sortNums.reduce((sum,i) => {
        return sum + i
    },0)
    console.log('求和：',sum)
}

const nums = [1,5,11,5,6,7,13,9,10,19];
const nums1 = [1,5,5,12,12,6,6,4,4,1]

canPartition(nums);
canPartition(nums1);