# TotoyeVN-engine
TotoyeVN is a Visual Novel game engine made with JavaScript.

#Totoye VN
Totoye VN or Totoye Visual Novel is a javascript game library that I(Li Wen) created. It allows programmers or not to create visual novel using the library. It is entirely JavaScript with no other engine integrated. The programmer or user has access to nine(9) main methods or functions where five(5) of them can be used only to create a pretty good visual novel with sounds, background, characters, and dialogues. It creates the next scene patterns and the dissolve effect for both background and character's images.

The current version of the library is 1.0 . I'll continue to upgrade it.

The features for the next version of the library will be the "volume" function. The possibility to add video as the background and more features for the creation of a visual novel.

#Main methods

# 1) The scene of the game:
	create an object:  
		var scene = new TotoyeVN.Scene();
	This line automatically creates a black scene for your game. Now, you'll just have to add components to it.
	
	Sub-methods of the scene:
	a)	scene.add((character, text, background, effect)
	
		- The character is another object created from a class of the TotoyeVN engine called "Character".
		- The text is just a string element which contains the text that the character will be saying.
		- The background is an object created from the class "Background" of the Totoye VN engine.
		- And finally, the effect parameter is a string parameter that can be null or "dissolve". The programmer will state whether the character appears with a normal effect or a dissolve one.
		
		If you want to set a black screen for your transition. The add method becomes "scene.add(type, withsound, text)":
			- The type parameter will always have the value "blackscreen" in that case.
			- The withsound parameter is a boolean by which you can set the value true or false if you want to keep the audio during the black scene or not.
			- And finally, the text is just if you want to set a title in your black screen.
		
	b)	scene.addChoice(choice1, choice2, methode1, methode2)
		
		Do you want to add a choice in your visual novel? This method is the perfect one for that. The choice1 and choice2 parameters are two string elements that contains the texts stating the choices available for the player. The method1 is a function element that will run if the player decides to choose the first choice. And same thing for method2 and choice2. Each method takes one parameter that will play the role of the scene object inside the function.
		
	c)	scene.addSound(sound)
		
		Do you want to audio music in the background? addSound is the perfect method built inside TotoyeVN for that purpose. It takes only one parameter, a string stating the URL of the programmer audio file(mp3 or else) or a Audio object created from the "Audio" class of Totoye VN.
		
	d)	scene.bgDissolveEffect()
		
		This function is a method from the scene object that creates a dissolve effect for a background. It can be used when you're changing the background of your scene. It doesn't take any parameter(s), it only takes effect on the last background you added following your codes.
		
	e)	scene.setTextFont(font)
		
		You can decide to change the font of the text if you don't like the default one. The font character is a string element with the size of the font and the font type like "16px Arial".
		
	f)	scene.setTextColor(color)
	
		You can change the default color of the text by giving it your own like red or #FF0000

	g)	scene.clickSound(url)
	
		If you want to give a sound each time the player clicks the scene to change the dialogue, use this method by giving it the URL of your audio file as a parameter or an Audio object(TotoyeVN).
		
	h) scene.save(code)
		
		As a programmer if you want to save your game within the localStorage of the user, use that save method by giving it a code that will identify your game each time the player will save a different session of the game.
		
	i) scene.getSaving(code)
		
		That method is used to get all the saving sessions that the player had on his or her device for your specific game. The save code used in the save method has to be used in the get method of the same game. The method will return an array with four-values objects. Each of those objects will be a session that the player has saved. The object.id is the specific ID of the session saved and the object.value is some information about a scene object in TotoyeVN. The object.storage is all the elements that the programmer wanted to be saved for the sake of his or her game. And finally, the object.image is the source link of the background where the scene has been saved. None of them has to be used since the TotoyeVN method ".addSaving()" will set every information you'll be wanted to the current scene. The package array getting from that method can be used to select a specific saved data and give it as paramater to the scene.addSaving method.
		
	j) scene.gameStorage(name, element)
		
		If you want to save a variable element or a element during a specific choice without your game, you can use the method gameStorage. It helps adding elements that the programmer might want to use in a scene like a bar of friendship or bar of energy.
			
	k) scene.addSaving(savedElement)
	
		This .addSaving method can used to set a specific set of data return by the scene.getSaving() method to the current scene the user is using.
		An example of the codes might be:
				var saved = scene.getSaving("mycode");
				scene.addSaving(saved[4]); /* Load the fifth saved scene.*/
	
	l) scene.start()
		
		This method starts the loop of your scene.
		
	m) scene.end(event)
		
		Just like you can start your game, as a programmer or just a game developer you might want to end it as well. In that case, use that TotoyeVN method scene.end(). Its parameter is a method that you might want to run as an ending event like "go back to the main menu" for the example. If no parameter is given or if the parameter isn't a function, it will just close the window of the game.
		
	n) scene.volume(magnitude)
		
		Set the volume to the current soundtrack of the scene by using this method. The parameter "magnitude" is the percentage of the volume going from 0 to 100. Magnitude(Data type =>number)
		
# 2) Create a Background object:
	Create an object:
		var background = new TotoyeVN.Background("yourBackground.png");
		
	A Background object is a TotoyeVN object that allows you to pass any background properties to another method by just using one element created for that purpose. The method or object takes one parameter which is the URL of the image used for the specified background. The effect can be changed by using the bgDissolveEffect() method inside the scene object.
	
# 3) Create a Character object:
	Create an object:
		var Lucy = new TotoyeVN.Character("Lucy", "Lucy.png", "#FF0000");
		
	This method allows the programmer to create a Character object which can be used in the same way as the Background object, as a single parameter which has the properties for a character. The object takes three(3) parameters:
	
	- The name of the character.
	- The URL of the character image used in the scene. That parameter can be replaced by the null element if the programmer wants the character to be invisible or if he or she is the main character which in most VN doesn't appear in the scene.
	- The last parameter is the color specific to the character. The boxes with the name and the text of the character will take that color whenever the character is talking in the scene.
	
# 4) Create an Audio object:
	Create the object:
		var audio = new TotoyeVN.Audio("myaudio.mp3");
		
	This method takes one parameter which is the URL of the audio element.

# 5) Set an icon to the game:
	Create the icon:
		new TotoyeVN.gameIcon("theicon.png")
	
	This is just a "link element" icon for the scene web page. The method takes one parameter whic is the URL of the image file. 

# 6) Create a game object:
	Create the object:
		new TotoyeVN.Game();
	
	This object is used if you want to create a perfect visual novel with main menu and other panels. The Game object will in that case, be the parent of all the other object of the visual novel.
	
	Sub-methods:
		a) game.add(panel)
			This method is used to add panel objects to the game. The panels will contains the main menu and other panels that the programmer would like to put inside the game like Gallery and bonus page.
		
		b) game.view(panel)
			Automatically, when a panel is added to the Game object, it is invisible to the view to give a certain illusion just like using the pages of a book. The view method determines which panel will be visible to the user. If you use the view method five times on five different panels, it will only display the last one.
			
		c) game.next()
			The next method is a sub-method of the Game object that display the next panel in the list depending on how all panels were added.
		
		d) game.previous()
			The previous method is a sub-method of the Game object that display the previous panel in the list depending on how the panels were added to the Game object.
		
		e) game.closeWindow()
			This method can be used to close the current window of the game.
			
# 7) Create a panel obejct:
	Create the object:
		new TotoyeVN.Panel()
	
	The Panel object is a view layer used in TotoyeVN to display a perfect game. It isn't essential to the creation of a game neither is the Game object.
	
	Sub-methods:
		a) panel.add(element, priority)
			This method is used to add HTML element to the panel like DIV, H1, SPAN and others. You can also add three of the TotoyeVN's objects: image, button and scene. The sub-method takes two parameters : element which is the element being added and priority which is a number where the element with the higher priority will be at the highest layer of the screen.
		
		b) panel.background(style)
			The background method is used as its name sayed to add a background style to a specific panel. The style parameter can be whether a color or a image URL.
			
# 8) Create an Image object:
	Create the object:
		new TotoyeVN.image(source)
	You can choose to create your own image element using the conventional way in JavaScript or you can use the image object from the TotoyeVN engine. The source parameter is the URL of your image.
	
	Sub-methods of the object:
		a) image.src(s)
			You may have create your object without a parameter. In that case, you can give the image URL to your image object later using this method.
			
		b) image.width(percent)
			The width method is used to set the width dimension of your image. It takes one parameter which is the percentage comparing to the width of the panel.
			
		c) image.height(percent)
			The height method is used to set the height dimension of your image. It takes one parameter which is the percentage comparing to the height of the panel.
			
		d) image.alignX(par)
			The alignX method can be used to set the position of the image in the x-axis. The parameter "par" can be whether a number between 0 to 100(percentage) or a string to set the alignment to "left", "center", or "right" in the x-direction.
			
		e) image.alignY(par)
			The alignY method can be used to set the position of the image in the y-axis. The parameter "par" can be whether a number between 0 to 100(percentage) or a string to set the alignment to "left", "center", or "right" in the y-direction.
			
# 9) Create a button object:
	Create the object:
		new TotoyeVN.button(text)
	You can choose to create your own button element using the conventional way in JavaScript or you can use the button object from the TotoyeVN engine. The text parameter is the text which will be displayed on the button.
	
	Sub-methods of the object:
		a) button.title(s)
			You may have create your buttonn object without a parameter. In that case, you can set your text later using this method.
			
		b) button.width(percent)
			The width method is used to set the width dimension of your button. It takes one parameter which is the percentage comparing to the width of the panel.
			
		c) button.height(percent)
			The height method is used to set the height dimension of your button. It takes one parameter which is the percentage comparing to the height of the panel.
			
		d) button.alignX(par)
			The alignX method can be used to set the position of the button in the x-axis. The parameter "par" can be whether a number between 0 to 100(percentage) or a string to set the alignment to "left", "center", or "right" in the x-direction.
			
		e) button.alignY(par)
			The alignY method can be used to set the position of the button in the y-axis. The parameter "par" can be whether a number between 0 to 100(percentage) or a string to set the alignment to "left", "center", or "right" in the y-direction.
			
		f) button.background(style)
			The background method is used as its name stated, to add a background style to a button. The style parameter can be whether a color or a image URL.
			
		g) button.fontColor(c)
			The fontColor method is used to set a color to the text giving to the button object.
			
		h) button.eventListener(eventName, method)
			This method operates just like the addEventListener method. The eventName parameter can be "click", "over" or others and the method parameter is the function you want to run when the event occurs.
			
		i) button.check(other)
		
			This method can be used to check if a button HTML element is the same as the current button. That method can be very important in some situations during programming. It can be compared to the array method indexOf() in case of an array of TVN button object.
