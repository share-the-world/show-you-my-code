/**
 * 排序比较器，
 */
export type Compare<T> = (a: T, b: T) => number;
// 冒泡排序-数组为纯数字
export {bubbleSort} from './BubbleSort'