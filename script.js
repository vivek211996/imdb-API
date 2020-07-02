var div1= document.createElement('div')
div1.setAttribute('class','input-group')
document.body.append(div1)
var input1 = document.createElement('input')
input1.setAttribute('class','form-control')
input1.setAttribute('placeholder','')
input1.setAttribute('aria-label','')
input1.setAttribute('aria-describedby','basic-addon1')
input1.setAttribute('id','ip')
div1.appendChild(input1)
var div2= document.createElement('div')
div2.setAttribute('class','input-group-append')
div1.appendChild(div2)

var btn1 = document.createElement('button')
btn1.setAttribute('type','button')
btn1.setAttribute('class','btn btn-success')
btn1.innerHTML="search"
btn1.setAttribute('onclick','moviesearch()')
btn1.setAttribute('id','bt1')
div1.appendChild(btn1)

async function moviesearch() {
					//console.log("hiii")
				try
				{
					
					
					var one = "http://www.omdbapi.com/?i=tt3896198&apikey=bdcc0d76&s="
					
					
					var two = document.getElementById('ip').value
					//console.log(two)

				   var mlink = await fetch(one+two)
				  console.log(mlink)
				  let movies = await mlink.json()
				  console.log(movies)
				  var b = document.createElement('label')
				  b.innerHTML = "REFRESH PAGE FOR NEW SEARCH"
				  document.body.append(b)
					var n=0
					var column = 3

					var nrows = Math.ceil(movies.Search.length / column)
			for (let i = 0; i < nrows; i++) 
						{
							let row = document.createElement('div')
							row.setAttribute('class','row')
							
							for (let j = 0; j < column; j++) 
							{
								let col = document.createElement('div')
								col.setAttribute('class','col-lg-4')
								
				
								var card = document.createElement('div')
								card.setAttribute('class','card')
								
								
								col.appendChild(card)
				
								var cheader = document.createElement('h4')
								cheader.classList.add('card-header','text-center')
								cheader.innerHTML =movies.Search[n].Title
								card.appendChild(cheader)
				
								var cardBody = document.createElement('div')
								cardBody.classList.add('card-body', 'card-bg', 'text-center')
								card.appendChild(cardBody)
				
								var flag = document.createElement('img')
								flag.src = movies.Search[n].Poster
								flag.classList.add('card-img-top')
								cardBody.appendChild(flag)
				
								var year = document.createElement('div')
								year.classList.add('h5')
								year.setAttribute('id','ctl')
								year.innerHTML = 'year : ' + movies.Search[n].Year
								
				
								cardBody.append(year)
	
								
								n++
								row.appendChild(col)
								
							}
							
							document.body.append(row)
						}
					
					}
					catch (err) {
					  console.log('fetch failed', err);
					 }
					}
					