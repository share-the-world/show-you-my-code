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
  let large = list1.val > list2.val ? list1 : list2;
  let small = list1.val > list2.val ? list2 : list1;

  const queue = [small];
  do {
    const last = queue[queue.length - 1];
    const ll = queue[queue.length - 2];
    if (last.val < large.val) {
      queue.push(last.next ? last.next : large);
    } else if (ll) {
      ll.next = large;
      queue.pop();
      queue.push(large);
      const temp = large.next;
      large.next = small;
      large = temp;
    }
    console.log(
      `queue:${queue.map((v) => (v ? v.val : undefined))}\t`,
      `large:${toArray(large)}\t`,
      `small:${toArray(small)}\t`,
      "\n"
    );
  } while (large && small);
  console.log("large", large);
  console.log("small", small);
  return queue[0];
};

/**
 * 链表转数组
 * @param {ListNode} link
 * @returns {Array<number>}
 */
function toArray(link) {
  const arr = [];
  while (link) {
    arr.push(link.val);
    link = link.next;
  }
  return arr;
}

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
// const l1 = [8, 8, 9, 11],
//   l2 = [1, 4, 10];
const l1 = [5, 5, 6],
  l2 = [1, 3, 4];

// console.log(JSON.stringify(array2Link([1, 2, 4, 6, 7, 4])));
// console.log("[]", JSON.stringify(array2Link([])));

console.log(JSON.stringify(mergeTwoLists(array2Link(l1), array2Link(l2))));
// console.log("数组->链表", array2Link(l1));
// console.log("链表换数组", toArray(array2Link(l1)));
