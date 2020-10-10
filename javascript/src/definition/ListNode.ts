import { NullLiteral } from "typescript";

//定义：链表
export interface ListNode {
  val: number;
  next: ListNode | null | undefined
}