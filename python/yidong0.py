#!/usr/bin/python3
#-*-coding:utf-8-*-

def nums(*args):
    args=list(args)
    args=sorted(args)
    n = args.count(0)
    while True:
        n = n-1
        args.remove(0)
        args.append(0)
        if n==0:
          break
    return args

args=input("input list:")
args=eval(args)

print(nums(*args))

#leetcode address 
#https://leetcode-cn.com/leetbook/read/array-and-string/c6u02/
