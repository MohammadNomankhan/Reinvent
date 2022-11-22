# Reinvent
Reinvent is a quote generator which randomly popsup a quote.
Maybe this can be your morning motivation pill.

## case-study
The project is divided in multiple steps to make it simpler.
1. Think
2. Skeleton
3. What to steal?
4. Content(HTML)
5. Styling(CSS)
6. Functionality(JS)
7. Extras

### Think
1. First we will think of the structure. In this case we'll have a background(a cool bg which will take up whole screen). Then we will make a container which will hold quote, author, tweet btn, and a new quote btn.
2. At first we will use dummy values for quote and author.
3. Keeping in mind the mobile view, we'll just add 1rem margin on left and right. Also decrease the font sizes.

### Skeleton
1. Backgroung: A bg pattern or img or gradient bg or radical gradient, which will be given to body. Body will be  100vh x 100vw.
	Body will be -> flex, jc and ai - center
2. Container: This will hold a quote, author and 2 btns in a container(total 3 items). Here we'll place them in a certain fashion.
	Container will be -> mw-90rem and w-auto, flex, column, padding, jc-center, ai-space-evenly
3. the btns: flex, space-between

### What to steal
1. I would quickly search for cool backgrounds or gradients or images.
2. Same for btns
Then adjust them according to my need.

### Content
body
	div-container
		quote
		author
		btns
			tweet
			new quote
		btns
	div-container
body

### Styling
Implement what we did in skeleton step

### Functionality

1. Phase -1
	make a async fn which has a const holding our apiurl
	then we make a try catch, so that we catch catch any error but here we are not concered. I'll learn that too
	now we waited for fetch(apiurl) 
	then used that resp to convert .json from string
	console.log it to see if everything is working

2.Phase -2
	till here we fetched all quotes and converted to json
	now we need to load one random quote
	we make a new fn and it's easy as we have quotes stored globally
	this fn will have a quote var which randomy selects a quote
	how?
	Math.floor(Math.random()*apiQuotes.length)

3. Phase -3
	so now comes DOM manipultion
	we grab all id to js
	now check author if nil set to anonymous and check text if long decrease fs
	id.textContent = quote.author 
	id.classList.add('this-class')

4. phase -4
	Now we need to make buttons interactive
	so to twitter we used intent by twt
	for new quote we just added a eventlistner on click


### Extras
Just added a setInterval which calls newQuote after 15secs