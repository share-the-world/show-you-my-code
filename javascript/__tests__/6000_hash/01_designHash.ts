import {MyHashSet} from '../../src/code/6000_hash/01_designHash'


(() => {
  const set = new MyHashSet();
  set.add(1);
  set.add(12);
  set.add(3);
  set.add(1);
  set.add(1000);
  set.console()

  console.log('包含12=',set.contains(12))
  console.log('包含44=',set.contains(44))

  set.remove(44)
  set.remove(3)
  console.log('移除后=',set.array)
})()