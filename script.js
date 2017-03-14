var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello world from VueJs!'
	} 
})

var app2 = new Vue({
	el : '#app2',
	data: {
		title : 'This is a vue title! ' + new Date()
	}
})

var app3 = new Vue({
	el : '#app3',
	data : {
		seen : true
	}
})

var app4 = new Vue({
	el : '#app4',
	data: {
		todos : [
			{ text : 'Learn PHP'},
			{ text : 'Learn Laravel'},
			{ text : 'Learn Vue'},
			{ text : 'Make something awesome'}
		]
	}
})

var app5 = new Vue({
	el : '#app5',
	data: {
		message : 'Reverse this text by on click event'
	},
	methods : {
		reverseText : function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el : '#app6',
	data : {
		input : ''
	}
})