//Understanding Components

Vue.component('todo-item',{
	props : ['todo'],
	template : '<li> {{todo.text}} </li>'
})

var app7 = new Vue({
	el : '#app7',
	data : {
		groseryList : [
			{ text : 'Chal'},
			{ text : 'dal'},
			{ text : 'alu'},
			{ text : 'potol'},
			{ text : 'chini'}
		]
	}
})

Vue.component('todo-list',{
	props : ['list'],
	template : '<li>{{ list.item }}</li>'
})

var app8 = new Vue({
	el : '#app8',
	data : {
		todoList : [
			{item : 'Getup from bed'},
			{item : 'Brush your teath'},
			{item : 'Go for prayer'},
			{item : 'Have some breakfast'},
			{item : 'Do assignment'}
		]
	}
})

Vue.component('students',{
	props : ['student'],
	template : '<li>{{student.name}}</li>'
})

var app9 = new Vue({
	el : '#app9',
	data : {
		students : [
			{name : 'Jakarea',address : 'kahaloo'},
			{name : 'parvez'},
			{name : 'zehad'},
			{name : 'ali saheb'}
		]
	}
})


Vue.component('products',{
	props : ['product'],
	template : '<tr><td>{{product.name}}</td><td>{{product.price}}</td><td>{{product.company}}</td></tr>'
})

var app10 = new Vue({
	el : '#app10',
	data : {
		products : [
			{ name : 'super glue', price : 38, company : 'Pran'},
			{ name : 'Sugur', price : 64, company : 'Fresh'},
			{ name : 'mouse', price : 800, company : 'Logitech'},
			{ name : 'Tissue paper', price : 45, company : 'basundhara'},
			{ name : 'Shirt', price : 1590, company : 'DorjiBari'},
			{ name : 'cegarate', price : 12, company : 'Malbro'}
		]
	}
})