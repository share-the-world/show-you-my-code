let res = []
for(let i = 0; i < 100; i ++){
    const row = []
    for(let j = 0; j < 100; j ++){
        row.push(Math.floor(Math.random()* 10000))
    }
    res.push(row)
}
console.log(JSON.stringify(res))
