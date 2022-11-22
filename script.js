const quoteContainer = document.getElementById('container');
const quoteText = document.getElementById('quoteText');
const authorName = document.getElementById('authorName');
const buttonTwitter = document.getElementById('buttonTwitter');
const buttonNew = document.getElementById('buttonNew-quote');



let apiQuotes = [];

function newQuote() {
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	
	// check if author?
	if(!quote.author){
		authorName.textContent = '~' + Anonymous;
	} else {
		authorName.textContent = '~' + quote.author;
	}

	// check if len > 120
	if(quote.text.length > 120) {
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}

	quoteText.textContent = quote.text;
}
// load new quote automatic
function loadQuote() {
	setInterval(newQuote, 15000);
}

async function getQuotes() {

	const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();

	} catch (error) {
		// do something with that error
	}
}

// tweet the quote
function tweetQuote() {
	 const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} ${authorName.innerText}`;
  	window.open(twitterUrl, '_blank');
}

// add this as story
function takeshot() {

    html2canvas(quoteText).then(
        function (canvas) {
            document
            .getElementById('output')
            .appendChild(canvas);
        })
}

// Event listners

buttonTwitter.addEventListener('click', tweetQuote);
buttonNew.addEventListener('click', getQuotes);


// on load
getQuotes();
loadQuote();

// reload all 
window.onload = function() {
	newQuote();
}



///////////////////////////////
// How I made this quote generator 



/* Phase -1
	
	make a async fn which has a const holding our apiurl
	then we make a try catch, so that we catch catch any error but here we are not concered. I'll learn that too
	now we waited for fetch(apiurl) 
	then used that resp to convert .json from string
	console.log it to see if everything is working

*/



/* Phase -2
	
	till here we fetched all quotes and converted to json
	now we need to load one random quote
	we make a new fn and it's easy as we have quotes stored globally
	this fn will have a quote var which randomy selects a quote
	how?
	Math.floor(Math.random()*apiQuotes.length)

*/

/* Phase -3

	so now comes DOM manipultion
	we grab all id to js
	now check author if nil set to anonymous and check text if long decrease fs
	id.textContent = quote.author 
	id.classList.add('this-class')

*/

/* phase -4
	
	Now we need to make buttons interactive
	so to twitter we used intent by twt
	for new quote we just added a eventlistner on click
*/


