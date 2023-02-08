

export  function  sum (items) { 
    const allCost = []
    const finalCostArray =[]
    items.forEach(el => {
        finalCostArray.push(el.cost * el.quantity)
    });
    allCost.push(finalCostArray.reduce((a,b)=>a+b))
    return allCost
}