var matrixReshape = function(nums, r, c) {
    if (r * c !== nums.length * nums[0].length) return nums;
    const res = [];
    let row = []
    for (let i = 0; i < nums.length; i ++) {
        for (j =0; j < nums[i].length; j ++) {
            row.push(nums[i][j])
            if (row.length === c) {
                res.push(row);
                row = [];
            }
        }
    }
    return res;
};

matrixReshape([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]],3,4)