import { type } from 'os';
import { NullLiteral } from "typescript";

//定义：链表

export type ListNodeType = ListNode | null | undefined
export interface ListNode {
  val: number;
  next: ListNodeType
}