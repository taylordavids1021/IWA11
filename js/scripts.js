// // script.js
// First Order
const order1_biscuits = document.querySelector('[data-key="order1"] .biscuits .count')
order1_biscuits.innerHTML = '10'

const order1_donuts = document.querySelector('[data-key="order1"] .donuts .count')
order1_donuts.innerHTML = '13'

const order1_pancakes = document.querySelector('[data-key="order1"] .pancakes .count')
order1_pancakes.innerHTML = '0'

const order1_status = document.querySelector('[data-key="order1"] .status ')
order1_status.innerHTML = 'Pending'
// Second Order
const order2_biscuits = document.querySelector('[data-key="order2"] .biscuits .count')
order2_biscuits.innerHTML = '5'

const order2_donuts = document.querySelector('[data-key="order2"] .donuts .count')
order2_donuts.innerHTML = '0'

const order2_pancakes = document.querySelector('[data-key="order2"] .pancakes .count')
order2_pancakes.innerHTML = '2'

const order2_status = document.querySelector('[data-key="order2"] .status ')
order2_status.innerHTML = 'Pending'
// Third Order
const order3_biscuits = document.querySelector('[data-key="order3"] .biscuits .count')
order3_biscuits.innerHTML = '12'

const order3_donuts = document.querySelector('[data-key="order3"] .donuts .count')
order3_donuts.innerHTML = '11'

const order3_pancakes = document.querySelector('[data-key="order3"] .pancakes .count')
order3_pancakes.innerHTML = '15'

const order3_status = document.querySelector('[data-key="order3"] .status ')
order3_status.innerHTML = 'Delivered'
