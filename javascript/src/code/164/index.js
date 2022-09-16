/**
 * 链表
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * 21. 合并两个有序链表
 * https://leetcode.cn/problems/merge-two-sorted-lists/
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  let head1 = list1.val > list2.val ? list1 : list2;
  let head2 = list1.val > list2.val ? list2 : list1;
  console.log("head1", head1);
  console.log("head2", head2);
  do {
    if (head1.val >= head2.val && head1.val <= head2.next.val && head2.next) {
      let temp1 = head1.next;
      let temp2 = head2.next;
      head2.next = head1;
      head1.next = temp2.next;

      head1 = temp1.next;
      head2 = temp2;
    } else {
      head2 = head2.next;
    }
  } while (head1 && head2.next);
  head2.next = head1;
  console.log("list1", JSON.stringify(list1));
  console.log("list2", list2);
};

/**
 *数组转链表
 * @param {Array<number>} arr
 */
const array2Link = (arr) => {
  console.log("input=", arr);
  if (!arr || !arr.length) return new ListNode(0, null);
  for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i], null);
    arr[i] = node;
    if (arr[i - 1]) {
      arr[i - 1].next = node;
    }
  }
  return arr[0];
};

// node javascript/src/code/164/index.js
const l1 = [8, 8, 9, 11],
  l2 = [1, 4, 10];

// console.log(JSON.stringify(array2Link([1, 2, 4, 6, 7, 4])));
// console.log("[]", JSON.stringify(array2Link([])));

console.log(mergeTwoLists(array2Link(l1), array2Link(l2)));
