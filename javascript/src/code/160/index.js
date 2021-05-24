/**
 * 剑指 Offer 37. 序列化二叉树
 * https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {

};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    var arr = JSON.parse(data);
    if (arr.length <= 0) return null
    var res = [];
    for (let i in arr) {
        if (arr[i] !== null) {
            res.push({val: 0})
        }
    }
    for(let i = 1; i < arr.length; i ++){
        
    }

    return res[0]
};

deserialize("[1,2,3,null,null,4,5]")


/*
n = 2^l - 1
l = 2*i
r = 2*i + 1
0
/ \
1   2
  / \
 5   6
*/
