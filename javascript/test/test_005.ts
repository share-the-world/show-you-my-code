// import expect, {} from 'jest'

const testFindIndex = (num: number = 0): number => {
  const arr = [-2,-1,0,1,2,3,4,5,6]
  const index = arr.findIndex((v,i) => {
    console.log('序号：',i)
    return i === num
  })
  return index;
}
test('测试findIndex功能', () => {
  expect(testFindIndex(2)).toBe(4)
})