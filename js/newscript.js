// Using Objects
root_1 = {
    id: 'Order 1',
    biscuits: 10,
    donuts: 13,
    pancakes: 0,
    delivered: false,
}

root_2 = {
    id: 'Order 2',
    biscuits: 5,
    donuts: 0,
    pancakes: 2,
    delivered: false,
}

root_3 = {
    id: 'Order 3',
    biscuits: 12,
    donuts: 11,
    pancakes: 15,
    delivered: true,
}
const pending = 'Pending'
const delivered = 'Delivered'

biscuits_1= root_1.biscuits
donuts_1 = root_1.donuts
pancakes_1 = root_1.pancakes
status_1 = root_1.delivered ? delivered : pending
firstOrder = `${root_1.id}\n${biscuits_1}\n${donuts_1}\n${pancakes_1}\n${status_1}`
console.log(firstOrder)

biscuits_2 = root_2.biscuits
donuts_2 = root_2.donuts
pancakes_2 = root_2.pancakes
status_2 = root_2.delivered ? delivered : pending
secondOrder = biscuits_2 + donuts_2 + pancakes_2 + status_2

biscuits_3 = root_3.biscuits
donuts_3 = root_3.donuts
pancakes_3 = root_3.pancakes
status_3 = root_3.delivered ? delivered : pending
thirdOrder = biscuits_3 + donuts_3 + pancakes_3 + status_3

document.querySelector('count').textContent = parseInt(firstOrder)