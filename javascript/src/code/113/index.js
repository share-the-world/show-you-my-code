/**
 * 721. 账户合并
 * https://leetcode-cn.com/problems/accounts-merge/
 * @param {*} accounts 
 */
var accountsMerge = function(accounts) {
    const res = []
    while(accounts.length > 0) {
        let first = accounts.shift();
        let i = 0
        while(i < accounts.length) {
            let item = accounts[i]
            if (item[0] === first[0]) {
                const set = new Set([...first, ...item]);
                if (set.size < (item.length + first.length -1)){// 存在相同账号
                    const array = Array.from(set);
                    array.sort((a,b) => a.localeCompare())
                    accounts.splice(i,1);// 删掉
                    continue;
                }
            }
            i ++;
        }
        res.push(first)
    }
    return res;
};

accountsMerge([
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["Mary", "mary@mail.com"]
])