function clear(){
	document.getElementById('images').innerHTML='';
}
var searches = [];
function search(inquiry){
	document.getElementById('loader').style = 'visibility: visible';
console.log(fetch(inquiry));
		fetch(inquiry)
				  .then(function(response) {
				  	var status = response.status;
				    return response.json();
				  })
				  .then(function(jsonResponse) {
					localStorage.setItem('response', JSON.stringify(jsonResponse));
					searches.push(JSON.parse(localStorage.getItem('response')));
					document.getElementById('loader').style = 'visibility: hidden';
					display()
				  });

}
function display(){
	for(i = 0; i<searches[searches.length - 1].collection.items.length; i++){
		var img = document.createElement('img');
		img.src = searches[searches.length - 1].collection.items[i].links[0].href;
		document.getElementById('images').appendChild(img);
	}	
}


document.getElementById('btn').addEventListener('click', execute);

function execute(){
	clear();
	search(`https://images-api.nasa.gov/search?q=${document.getElementById('searchbar').value}`);
	console.log(searches[searches.length - 1]);
}