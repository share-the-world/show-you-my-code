
export interface BinaryTree {
  val: number,
  left?: BinaryTree | null,
  right?: BinaryTree | null,
  next?: BinaryTree | null
}

export {connect as solution1} from './solution1';