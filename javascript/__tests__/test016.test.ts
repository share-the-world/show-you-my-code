import {commonChars} from '../src/code/016'


const case1 = ["bella","label","roller"];
const case2 = ["cool","lock","cook"];
const case3 = ['acabcddd',"bcbdbcbd","baddbadb","cbdddcac","aacbcccd","ccccddda","cababaab","addcaccd"];
const case4 = ["aedefeedca","bdcfcfaece","bddebbaffd","aeeedcfdcb","cbbbbdcdea",
              "cfcfebbcdc","bcfeefeaca","cdbfcbfaeb","ecdabfbbae","ccbecbffaa"];

test('case1',() => {
  expect(commonChars(case1)).toBe(['e','l','l'])
})