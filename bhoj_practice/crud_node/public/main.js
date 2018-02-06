var update = document.getElementById('update')


update.addEventListener('click',function(){
//Send put request here


})


var del = document.getElementById('delete')

del.addEventListener('click',function(){

	fetch('quotes',{
	method:'delete',
	header{
	'Content-Type':'application/json'
	},

	body.JSON.stringify({
	'name':'Nishant'
	})

	}).then(res => {
 	if(res.ok) return res.json()

	}).then(data =>{
	console.log(data)
	window.location.reload()

	})

})


