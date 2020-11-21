![TotoyeVN.js](https://raw.github.com/LiWen780/TotoyeVN-engine/master/TVN_logo.png)
#TotoyeVN 2.0
TotoyeVN 2.0 is now out and can be find on npm, itch.io and on our website liwenstudios.fun.
TotoyeVN is a javascript game engine library used to create visual novel as web game. But, there's another project called TotoyeVN Studio  which is a software created by the same developer that uses the TotoyeVN library to create visual novels as both HTML5 and Java games.
The version 2.0 is a great upgrade of the library which makes your game run faster than before and with syntax easier to understand. 

Install TotoyeVN-engine using [npm](https://www.npmjs.com/package/totoyevn-engine):

	`npm i totoyevn-engine`
									
									#TotoyeVN 2.0 functions
#	1) Audio
		- Syntax : **new TotoyeVN.Audio(url)**
		
		The url parameter is a String which plays the role of the link of the audio file in your system file. You can also declare the Audio object as **new TotoyeVN.Audio()** and uses the object function **.src(url)** to declare the audio file at the end.

#	2) Book
		- Syntax : **new TotoyeVN.Book()**
		
		This syntax create a Book method which replaced the Scene method in version 1.0 and improved it. Just like a book, you can create chapters in the book and add pages to it. Sounds more like a visual novel, right?
		
		a) **.add(character, text)**
		
		This function is used in TotoyeVN engine, to set a character and his or her initial dialog for the scene. The character parameter can be a TotoyeVN Character object from the Character class or just a String element which is the name of the character. The text element is a string element which is the dialog(sentences or words) from the character.
		
		b) **.addChoice(array)**
		
		This function is used to set a choice setting in your game. The parameter is an special array which is labeled like that: **[{menu: "my choice 1 is", jump: "chapter_name"},{menu: "My choice 2 is", jump: "chapter_name2},...]** It makes it easier than the method for choices in version 1.0 . However, the method allows you to put a total of 4 choices to make your game more simplified.
		
		c) **.background(image_url, effect)**
		
		The method is to set a background for your scene, like a school or beach background image. The **image_url** parameter is a String link to the image you want to set as background and the effect parameter is a String element that can be whether "normal" or "dissolve" depending on how you want the background image to appear when the scene is switched.
		
		d) **.endChapter()**
		
		This method is the opposite of a TotoyeVN 2.0 method called **startChapter**. This method is called only when you want to end a chapter whether to begin a new one in the book object or just when you're done with the current one. Further information will be given below.
		
		e) **.show(character_url, effect)**
		
		The show function is used as its name said to show an character whether with a "normal" or "dissolve" effect. The character's image link is given as the first parameter of the function.
		
		f) **.hide()**
		
		Sometimes, we don't want to display the current character anymore in our next scene. So in that case, instead of displaying another one, we want that the scene don't show any character. That's why the .hide function exists for. This function hide the current character without any parameter given.
		
		g) **.play(audio)**
		
		This method take the Audio object as a parameter or the url of a audio file to play in our current scene.
		
		h) **.pause()**
		
		This method is used to pause the current audio playing in the scene.
		
		i) **.stop()**
		
		This method is used to stop the current audio playing in the scene.
		
		j) **.volume(degree)**
		
		This method is used to set the volume degree of the current audio playing in the scene. The degree value is set between 0 to 100 and must be a number.
		
		k) **.startChapter(name)**
		
		This method is used to start a new chapter in your book for the visual novel. It takes a String parameter which is the name of your chapter that might be used to jump when using a choice setting( see .addChoice function)
		
#	3) button
		- Syntax : **new TotoyeVN.button(title)**
		
		The button method was in the version 1.0, but has been improved in the version 2.0. This method is better used for the Screen object of the library and creates a button for the developer. The "title" is a String parameter that will appear on the button when created. The "title" parameter is not necessary.
		
		a) **.setBackground(image_url)**
		
		If you want to put an image as your button background in order for it to appear different from a conventional button, the setBackground method can be used by just passing the image link as a String parameter to the method.
		
		b) **.setFont(color, size, style)**
		
		As its name said, this method is used to set a font to the button. All three parameters are String element. Color can be word(like red, blue, yellow), rbga or hexadecimal(#FF0000). And style can be "bold", "normal", or "italic" for the title.
		
		c) **.setTitle(t)**
		
		Like said for the button object syntax, the title parameter wasn't necessary since it can be given by using this method.
		
		d) **.setBorder(width, color, type)**
		
		This method is used to manipulate the border of the button. It takes three parameters: width which is the number of pixels defining the width of the border, color which is the color of the border, and finally the type which can be "dotted", "dashed", "solid", "double", "groove", "ridge", "none".
		
		e) **.roundedBorder(i)**
		
		This method is used to set the radius of the button's border. The parameter **i** is a number between 0 and 100.
		
		f) **.setWidth(degree)**
		
		This method is used to give a width to the button element. The degree parameter is a number element between 0 to 100.
		
		g) **.setHeight(degree)**
		
		This method is used to give a height to the button element. The degree parameter is a number element between 0 to 100.
		
		h) **.alignX(ans)**
		
		Used to align the button on the x-axis of your screen. The parameter **ans** can be whether a String or a Number. As a number, it is considered as a percentage depending on the width of your screen. And as a String, it can whether be "left", "right", or "center".
		
		i) **.alignY(ans)**
		
		The method is used to align the button on the y-axis of your screen. The parameter **ans** can be a String or a Number. As a number, it is considered as a percentage depending on the height of your screen. And as a String, it can whether be "top", "bottom", or "center".
		
		j) **.setX(a)**
		
		This method is used to place the button on the x-axis. It is similar to the alignX method when given only a Number as parameter. The **a** parameter is a Number defines as a percentage depending on the width of the screen.
		
		k) **.setY(b)**
		
		This method is used to place the button on the y-axis. It is similar to the alignY method when given only a Number as parameter. The **b** parameter is a Number defines as a percentage depending on the height of the screen.
		
		l) **.eventListener(event, method)**
		
		For the ones familiar with the JavaScript programming language, this method is similar to the **addEventListener**. It is used to set an event to the button. The event parameter is a String that can be "click", "mouseover", "mousedown", "mouseup" or "mouseout" and the method parameter is the function to run when the event occurs. 
		
#	4) Character
		- Syntax : **new TotoyeVN.Character(name, color)**
		
		The Character method is one of the simplest methods of the TotoyeVN 2.0 since it doesn't have any sub-methods. Both parameters are String elements: the name of the character, and the color you define for him(will be set when the name appears in the box name).
		
#	5) gameIcon
		- Syntax : **new TotoyeVN.gameIcon(icon)**
		
		This method is the second simplest method of the TotoyeVN 2.0. It doesn't have sub-method and is still the same as the gameIcon from version 1.0. It takes one parameter(String) which is the link to the image you want for your web game page icon. This method will only work for HTML5 games.
		
#	6) image
		- Syntax : **new TotoyeVN.image(src)**
		
		The method is used to create an image element, specially used in the Screen object. The parameter is not necessary, but is the link(String) to the image file.
		
		a) **.src(link)**
		
		If no parameter has been given to the object or if you simply want to change the source file, the src method can be used for that.
		
		b) **.setWidth(w)**
		
		Used to set the width of the image in the scene by giving a parameter(Number) **w**, defined as a percentage of the width of the screen.
		
		c) **.setHeight(h)**
		
		Used to set the height of the image in the scene by giving a parameter(Number) **h**, defined as a percentage of the height of the screen.
		
		d) **.alignX(x)**
		
		Used to align the image on the x-axis of your screen. The parameter **x** can be whether a String or a Number. As a number, it is considered as a percentage depending on the width of your screen. And as a String, it can whether be "left", "right", or "center".
		
		e) **.alignY(y)**
		
		The method is used to align the image on the y-axis of your screen. The parameter **y** can be a String or a Number. As a number, it is considered as a percentage depending on the height of your screen. And as a String, it can whether be "top", "bottom", or "center".
		
		f) **.setX(a)**
		
		This method is used to place the image on the x-axis. It is similar to the alignX method when given only a Number as parameter. The **a** parameter is a Number defines as a percentage depending on the width of the screen.
		
		g) **.setY(b)**
		
		This method is used to place the image on the y-axis. It is similar to the alignY method when given only a Number as parameter. The **b** parameter is a Number defines as a percentage depending on the height of the screen.
		
#	7) Reader
		- Syntax : **new TotoyeVN.Reader(book_object)**
		
		This method is a new method on TotoyeVN 2.0 which will helps to read the object **Book** when created. It takes one parameter is a TotoyeVN.Book object with all chapters in it.
		
		a) **.startAt(chapter_name)**
		
		The method is used to determine at which chapter of the book the reader will start reading. Thanks to that function, when creating your chapter for the Book object, you don't need to worry about which chapter to create first. If you don't tell the Reader where to start, you'll never be able to read the book :D.
		
		b) **.next()**
		
		This method is used to change page in your book. The Reader usually starts at the first page of the chapter defined. 
		
		c) **.read()**
		
		This method starts the loop to read the book given to the Reader by parameter.
		
		d) **.roundedNameBox(degree)**
		
		Used to set a border radius degree to the box containg the name on the scene. The **degree** parameter is set between 0 and 10.
		
		e) **.roundedDialogBox(degree)**
		
		Used to set a border radius degree to the box containg the dialog on the scene. The **degree** parameter is set between 0 and 10.
		
		f) **.setTextColor(r,g,b)**
		
		Used to set the color of the text for the dialog box. The method only takes three parameters(all Number type) which are RGB parameters for the color.
		
		g) **.setBoxColor(r,g,b)**
		
		Used to set the color of the dialog box and the name box. The method only takes three parameters(all Number type) which are RGB parameters for the color.
		
		h) **.saveJSON()**
		
		This method is used to save all the important information of the current scene's state and return it as a JSON data.
		
		i) **.loadJSON(json)**
		
		The method can be used to update the current scene by loading as parameter the JSON data got from the .saveJSON method. Both methods can than be used to add saving settings to your game.
		
#	8) Screen
		- Syntax : **new TotoyeVN.Screen()**
		
		The Screen object is one of the most important method of the TotoyeVN 2.0 after the Book and Reader methods. It's a improved version of both Panel and Game methods from version 1.0. It is used to manipulate the different panels of your game like Main menu, game space, credit panel, etc. 
		
		a) **.createLayer(name)**
		
		Used to create a layer in your screen by giving it a name(dataType: String) as parameter. Consider the layer as a page where one can contains the main menu, one the game, one the information about the game, and so on.
		
		b) **.addToLayer(layer_name, object)**
		
		As it was said, a layer is like a page, in other words, you can also put thing on it to appear on the screen. The layer_name parameter(String) is used to determine in which layer, the second parameter(Object) or the object must be added. The object can be an image object, a button object, a Book object || an Audio object or a reader object. If a Book is set as the parameter of a Reader, only the Reader object has to be added to the Screen object since the Reader already has the Book object within it.
		
		c) **.changeView(layer_name)**
		
		The first layer to appear on the screen is the first one created. However, you can change which layer to display by using this method which takes the layer_name(String) as parameter.
		
		d) **.open()**
		
		This method is used to start the layer view of the Screen object. Without it, no layer will be displayed.
		
		e) **.closeWindow()**
		
		This method can be used to close the entire web page of the game. Can only be used for HTML5 games(or web games).
		
		
		
##	Example of a random Visual Novel made with TotoyeVN 2.0
	```
					
	var Max = new TotoyeVN.Character("Zoey", "red");
	var script = new TotoyeVN.Book();
	var back = new TotoyeVN.Audio("audio.mp3");
			
	//-----------------------------------------------HOMECOMING-chapter
	script.startChapter("Homecoming");
			
		script.add(Max, "Hi everyone");
			script.background("outschool.png");
			script.show("Vanessa.png", "dissolve");
			
		script.add(Max, "How are you?");
		
		script.add(Max, "How was the day?");
			script.background("outschool.png", "dissolve");
			script.hide("Vanessa.png");
			
		script.add(Max, "Was it good?"); 
			script.show("Vanessa.png","dissolve");
			
		script.add(Max, "I think I'll go in class now.");
			script.background("outschool.png", "dissolve");
			
		script.addChoice([{menu: "Where are you from?", jump: "USA"},{menu: "What town are you from?", jump: "Tokyo"},{menu: "How old are you?", jump: "Age"}, {menu: "What's your favorite color?", jump: "Yellow"}]);
			
	script.endChapter();
			
	//------------------------------------------------------USA-chapter
	script.startChapter("USA");
	
		script.add(Max, "Ow, you're from USA. That's great.");
		
		script.add(Max, "You must had a pretty good childhood.");
			script.show("Vanessa.png", "dissolve");
			script.background("outschool.png");
			
	script.endChapter();
			
	//-------------------------------------------------------Tokyo
	script.startChapter("Tokyo");
	
			script.add(Max, "No kidding! I'm from Tokyo too.");
			
			script.add(Max, "That's great. We're from the same town then!");
			
	script.endChapter();
			
	//-------------------------------------------------------Age
	script.startChapter("Age");
	
		script.add(Max, "19 years old!? Wow, you're pretty a big guy.");
		
		script.add(Max, "I'm 16, so...");
		
	script.endChapter();
			
	//-------------------------------------------------------Yellow
	script.startChapter("Yellow");
	
		script.add(Max, "You like Yellow?");
		
		script.add(Max, "That's good. I mean, it's a pretty color.");
		
	script.endChapter();
	
	//Create the Reader object
			
	var reader = new TotoyeVN.Reader(script);
			
		reader.startAt("Homecoming");
		reader.read();
		reader.setTextColor(245,275,124);
		reader.setBoxColor(0,0,0);
		
	//Create the Screen object
	
	var screen = new TotoyeVN.Screen();
	
		screen.createLayer("game");
		screen.addToLayer("game", reader);
		screen.open();
	
	//Create a JavaScript event to go to the next page using the right arrow of my computer
	
	document.addEventListener("keydown", function(e){
		if(e.keyCode == 39)
		{
			reader.next();
		}
	});
	```
	
