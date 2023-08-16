// script.js

let root_1 = document.querySelector('[data-key]')
let biscuits_1 = document.querySelector('[data-biscuits]')
let donuts_1 = document.querySelector('[data-donuts]')
let pancakes_1 = document.querySelector('[data-pancakes]')
let status_1 = document.querySelector('[data-status]')

let root_2 = document.querySelector('[data-key]')
let biscuits_2 = document.querySelector('[data-biscuits]')
let donuts_2 = document.querySelector('[data-donuts]')
let pancakes_2 = document.querySelector('[data-pancakes]')
let status_2 = document.querySelector('[data-status]')

let root_3 = document.querySelector('[data-key]')
let biscuits_3 = document.querySelector('[data-biscuits]')
let donuts_3 = document.querySelector('[data-donuts]')
let pancakes_3 = document.querySelector('[data-pancakes]')
let status_3 = document.querySelector('[data-status]')

const pending = 'Pending'
const delivered = 'Delivered'
root_1 = {
    id: 'order1',
    biscuits: 10,
    donuts: 13,
    pancakes: 0,
    status: false,
}

root_2 = {
    id: 'order2',
    biscuits: 5,
    donuts: 0,
    pancakes: 2,
    status: false,
}

root_3 = {
    id: 'order3',
    biscuits: 12,
    donuts: 11,
    pancakes: 15,
    status: true,
}

biscuits_1= root_1.biscuits
donuts_1 = root_1.donuts
pancakes_1 = root_1.pancakes

status_1 = root_1.status ? delivered : pending

let con = document.querySelectorAll("count").innerHTML = status_1;

biscuits_2 = root_2.biscuits
donuts_2 = root_2.donuts
pancakes_2 = root_2.pancakes

status_2 = root_2.status ? delivered : pending

biscuits_3 = root_3.biscuits
donuts_3 = root_3.donuts
pancakes_3 = root_3.pancakes

status_3 = root_3.status ? delivered : pending