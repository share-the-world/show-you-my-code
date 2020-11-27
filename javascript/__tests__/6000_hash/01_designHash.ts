import {MyHashSet} from '../../src/code/6000_hash/01_designHash'


(() => {
  // ["MyHashSet","add","remove","add","contains","add","remove","add","add","add","add"]
  // [[],[6],[4],[17],[14],[14],[17],[14],[14],[18],[14]]
  const set = new MyHashSet();
  set.add(6);
  set.remove(4);
  
})()