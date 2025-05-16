//1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
let string = ''

for (let i = 0; i < friends.length; i++) {
	string += friends[i]
}

console.log(string)

const friends2 = ['Mango', 'Poly', 'Kiwi', 'Ajax']
const string2 = friends.join('')
console.log(string2)
//2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = [
	'Карточка-1',
	'Карточка-2',
	'Карточка-3',
	'Карточка-4',
	'Карточка-5',
]

const cardToRemove = 'Карточка-3'
cards.splice(cards.indexOf(cardToRemove), 1)

cards.push('Карточка-6')

const cardToUpdate = 'Карточка-4'
cards.splice(2, 1, 'Карточка-4')
console.log(cards)
