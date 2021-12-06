//--------------------------------------------LI WEN STUDIOS
//--------------------------------------------TotoyeVN 2.0 made by LI WEN
//-----------------------------------------------November 20th, 2020

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.TotoyeVN = {}));
}(this, (function (exports) { 'use strict';
	
	const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
								  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
								  
	const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
	
	const dpi = window.devicePixelRatio;
	
	const BLACKSCENE = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAKRBEIDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==";
	
	//-----------------------AUDIO-------------------------------------------------
	
	function Audio(url){
		
		this.type = "audio";
		this.element = document.createElement("AUDIO");
		this.element.style.display = "none";
		this.url = url || "";
		
		if (this.element.canPlayType("audio/mpeg")) 
		{
			this.element.setAttribute("src",this.url);
		}
		else 
		{
			this.element.setAttribute("src",this.url);
		}

		this.element.setAttribute("controls", "controls");
	}
	Object.assign(Audio.prototype, {
		src: function(url) {
			
			  if (this.element.canPlayType("audio/mpeg")) {
				this.element.setAttribute("src",url);
			  } else {
				this.element.setAttribute("src",url);
			  }

			  this.element.setAttribute("controls", "controls");
		},
		play: function(){
			this.element.play();
		},
		setTime: function(time){
			this.element.currentTime = time;
		},
		loop: function(){
			this.element.setAttribute("loop", "loop");
		},
		pause: function(){
			this.element.pause();
		},
		stop: function() {
			this.element.pause();
			this.element.currentTime = 0;		
		},
		volume: function(v){
			
			if(v >= 0 && v <= 100)
			{
				this.element.volume = Number(v/100);
			}
		},
		remove: function()
		{
			for(var i = 0; i< document.body.childNodes.length; i++)
			{
				if(document.body.childNodes[i].tagName == "AUDIO")
				{
					document.body.removeChild(document.body.childNodes[i]);
				}
			}
		}
	});
	
	//----------------------------------------------------------BOOK
	
	function Book()
	{
		this.type = "book";
		
		this.pages = [];
		this.chapters = {};
		
		this.endGame = {};
		
		this.currentPage = {
			
			type: "",
			
			start: true,
			
			dialog : {
				character: null,
				text: null
			},
			
			choices: [],
			
			background: {
				image: null,
				effect: "normal"
			},
			show : {
				value: false,
				character: null,
				effect: "normal"
			},
			music : {
				sound: null,
				volume: 50,
				status: "pause"
			},
			
			wordByWordDisplay : {
				value: false,
				time : 0
			}
		};
		
		this.currentChapter = []; // Chapters are like label in Ren'Py
	}
	Object.assign(Book.prototype, {
		addDialog: function(character, text)
		{
			if(this.currentPage.start == false)
			{
				this.pages.push(this.currentPage);
				this.adjustCurrentPage();
			}
			else
			{
				this.currentPage.start = false;
			}
			
			//Add scenes,pages
			if(character.type == "character" && typeof(character) != "string")
			{
				this.currentPage.type = "dialogue";
				this.currentPage.dialog.character = character;
				this.currentPage.dialog.text = text || "";
			}
			else if(typeof(character) == "string")
			{
				this.currentPage.type = "dialogue";
				this.currentPage.dialog.character = new Character(character, "black");
				this.currentPage.dialog.text = text || "";
			}
		},
		
		addChoice: function(arrayOfChoices)
		{
			if(arrayOfChoices.length > 1 && arrayOfChoices.length <= 4)
			{
				//arrayOfChoices = [{menu: "blah?", jump: "chapter_name"},{menu: "rah?", jump: "chapter_name2},...]
				
				if(this.currentPage.start == false)
				{
					this.pages.push(this.currentPage);
					this.adjustCurrentPage();
				}
				else
				{
					this.currentPage.start = false;
				}
				
				//Add an array of choices and the array of jump
				this.currentPage.type = "choice";
				
				for(var i = 0; i < arrayOfChoices.length; i++)
				{
					if(typeof(arrayOfChoices[i]) == "object")
					{
						this.currentPage.choices.push(arrayOfChoices[i]);
					}
				}
			}
			else
			{
				console.log("You need to set between one to four choices");
			}
		},
		
		addBlackScreen: function(text)
		{
			if(this.currentPage.start == false)
			{
				this.pages.push(this.currentPage);
				this.adjustCurrentPage();
			}
			else
			{
				this.currentPage.start = false;
			}
			
			//Add black screen
			if(typeof(text) == "string" || text == null)
			{
				this.currentPage.type = "transition";
				this.currentPage.dialog.text = text || "";
			}
			else
			{
				console.log("Argument error.");
			}
		},
		
		background: function(image, effect)
		{
			if(typeof(image) == "string")
			{
				if(isImageURL(image) == true)
				{
					this.currentPage.background.image = image;
				}
				else
				{
					if(image.toLowerCase() == "black")
					{
						this.currentPage.background.image = BLACKSCENE;
					}
				}
				
				if(typeof(effect) == "string" && (effect.toLowerCase() == "normal" || effect.toLowerCase() == "dissolve"))
				{
					this.currentPage.background.effect = effect || "normal";
				}
			}
		},
		
		endChapter: function(endMethod)
		{
			if((endMethod != null) && typeof(endMethod) == "function")
			{
				this.endGame[this.currentChapter] = endMethod;
			}
			
			this.pages.push(this.currentPage);
			this.chapters[this.currentChapter] = this.pages;
			this.resetCurrentPage();
			this.currentChapter = [];
			this.pages = [];
		},
		
		show: function(character_url, effect)
		{
			//Effect = "normal", "dissolve"
			if(typeof(character_url) == "string")
			{
				this.currentPage.show.value = true;
				this.currentPage.show.character = character_url;
				
				if(typeof(effect) == "string" && (effect.toLowerCase() == "normal" || effect.toLowerCase() == "dissolve"))
				{
					this.currentPage.show.effect = effect || "normal";
				}
			}
		},
		
		hide: function()
		{
			this.currentPage.show.value = true;	
			this.currentPage.show.character = null;
			this.currentPage.show.effect = "normal";
		},
		
		play: function(audio)
		{
			if(typeof(audio) == "string")
			{
				this.currentPage.music.sound = new Audio(audio);
				this.currentPage.music.status = "play";
			}
			else if(audio.type == "audio")
			{
				this.currentPage.music.sound = audio;
				this.currentPage.music.status = "play";
			}
		},
		
		pause: function()
		{
			this.currentPage.music.status = "pause";
		},
		
		resume: function()
		{
			this.currentPage.music.status = "resume";
		},
		
		stop: function()
		{
			this.currentPage.music.status = "stop";
		},
		
		volume: function(degree)
		{
			if(typeof(degree) == "number" && degree >= 0 && degree <= 100)
			{
				this.currentPage.music.volume = degree;
			}
		},
		
		resetCurrentPage: function()
		{
			this.currentPage = {
				
				type: "",
				
				start: true,
				
				dialog : {
					character: null,
					text: null
				},
				
				choices: [],
				
				background: {
					image: null,
					effect: "normal"
				},
				show : {
					value: false,
					character: null,
					effect: "normal"
				},
				music : {
					sound: null,
					volume: 50,
					status: "pause"
				},
				
				wordByWordDisplay : {
					value: false,
					time : 0
				}
			};
		},
		
		adjustCurrentPage: function()
		{
			this.currentPage = {
				
				type: "",
				
				start: false,
				
				dialog : {
					character: null,
					text: null
				},
				
				choices: [],
				
				background: {
					image: this.currentPage.background.image,
					effect: "normal"
				},
				show : {
					value: false,
					character: null,
					effect: "normal"
				},
				music : {
					sound: this.currentPage.music.sound,
					volume: this.currentPage.music.volume,
					status: this.currentPage.music.status
				},
				
				wordByWordDisplay : {
					value: this.currentPage.wordByWordDisplay.value,
					time : this.currentPage.wordByWordDisplay.time
				}
			};
		},
		
		startChapter: function(name)
		{
			if(typeof(name) == "string")
			{
				this.currentChapter = name;
				this.chapters[this.currentChapter] = [];
			}
		},
		
		setLetterByLetterDisplay: function(bool, elapse)
		{
			if(bool == true || bool == false)
			{
				this.currentPage.wordByWordDisplay.value = bool;
				
				if(bool == true && typeof(elapse) == "number")
				{
					if(elapse > 0 && elapse <= 1)
					{
						this.currentPage.wordByWordDisplay.time = elapse;
					}
				}
			}				
		}
	});
	
	//------------------------BUTTON--------------------------------------
	
	function button(title)
	{
		this.type = "button";
		
		this.element = document.createElement("BUTTON");
		this.element.style.backgroundColor = "white";
		this.element.style.cursor = "pointer";
		this.element.style.color = "black";
		this.element.style.outline = "none";
		this.element.style.fontSize = "107%";
		this.element.style.position = "absolute";
		
		if((title) || (title != null))
		{
			this.element.appendChild(document.createTextNode(title))
		}
		
		document.body.appendChild(this.element);
		
		this.width = (this.element.offsetWidth/window.innerWidth)*100;
		this.height = (this.element.offsetHeight/window.innerHeight)*100;
		
		var Bu = this.element;
		var change = {x: window.innerWidth, y: window.innerHeight};
		this.element.style.display = "none";
		
		window.addEventListener("resize", function()
		{
			Bu.style.marginLeft = (Number(Bu.style.marginLeft.substring(0, Bu.style.marginLeft.length-2)) * (window.innerWidth/change.x))+"px";
			Bu.style.marginTop = (Number(Bu.style.marginTop.substring(0, Bu.style.marginTop.length-2)) * (window.innerHeight/change.y))+"px";
			Bu.style.width = Bu.offsetWidth * (window.innerWidth/change.x)+"px";
			Bu.style.height = Bu.offsetHeight * (window.innerHeight/change.y)+"px";
			
			change = {x: window.innerWidth, y: window.innerHeight};
		});
	}
	
	Object.assign(button.prototype, {
		
		setBackground: function(style)
		{
			if(typeof(style) == "string")
			{
				if((style.lastIndexOf('.') != (-1)) || (style.startsWith("data:image")))
				{
					this.element.style.backgroundImage = "url('"+style+"')";
					this.element.style.backgroundSize = "100% 100%";
					this.element.style.backgroundRepeat = "no-repeat";
				}
				else
				{
					this.element.style.backgroundColor = style;
				}
			}
		},
		
		setFont: function(color, size, style)
		{
			if(color != null)
			{
				this.element.style.color = color;
			}
			if(size != null)
			{
				//In percentage from 0 to 100 -> height of the screen
				this.element.style.fontSize = (size * (window.innerHeight/100))+"px"
			}
			if(style != null)
			{
				//Style can be normal, italic or bold
				if(style == "bold")
				{
					this.element.style.fontWeight = "bold";
				}
				else if(style == "normal" || style == "italic")
				{
					this.element.style.fontWeight = "normal";
					this.element.style.fontStyle = style;
				}
			}
		},
		
		setFontStyle: function(style)
		{
			if(style != null)
			{
				//Style can be normal, italic or bold
				if(style == "bold")
				{
					this.element.style.fontWeight = "bold";
				}
				else if(style == "normal" || style == "italic")
				{
					this.element.style.fontWeight = "normal";
					this.element.style.fontStyle = style;
				}
			}
		},
		
		setFontSize: function(size)
		{
			if(size != null)
			{
				//In percentage from 0 to 100 -> height of the screen
				this.element.style.fontSize = (size * (window.innerHeight/100))+"px"
			}
		},
		
		setFontColor: function(color)
		{
			if(color != null)
			{
				this.element.style.color = color;
			}
		},
		
		setTitle: function(t)
		{
			if(typeof(t) == "string" || typeof(t) == "number")
			{
				this.element.innerHTML = t;
				this.width = (this.element.offsetWidth/window.innerWidth)*100;
				this.height = (this.element.offsetHeight/window.innerHeight)*100;
			}
		},
		
		setBorder: function(width, color, type)
		{
			let w = (width+"px") || "";
			let c = color || "";
			let t = "";
			
			if(type == "dotted" || type == "dashed" || type == "solid" || type == "double" || type == "groove" || type == "ridge" || type == "none")
			{
				t = type;
			}
			this.element.style.border = w+" "+t+" "+c;
		},
		
		setBorderWidth: function(width)
		{
			this.element.style.borderWidth = width+"px";
		},
		
		setBorderColor: function(color)
		{
			this.element.style.borderColor = color;
		},
		
		setBorderStyle: function(type)
		{
			if(type == "dotted" || type == "dashed" || type == "solid" || type == "double" || type == "groove" || type == "ridge" || type == "none")
			{
				this.element.style.borderStyle = type;
			}
		},
		
		roundedBorder: function(i)
		{
			//i is between 1 and 100
			if((i <= 100) && (i >= 0))
			{
				this.element.style.borderRadius = (i*(window.innerWidth/100))+"px";
			}
		},
		
		setWidth: function(w)
		{
			//w is between 0 to 100
			if((w > this.width) && (w <= 100))
			{
				var unit = window.innerWidth/100;
				this.element.style.width = (w*unit)+"px"; 
				this.width = w;
			}
		},
		
		setHeight: function(h)
		{
			//h is between 0 to 100
			if((h > this.height) && (h <= 100))
			{
				var unit = window.innerHeight/100;
				this.element.style.height = (h*unit)+"px";
				this.height = h;
			}
		},
		
		alignX: function(par)
		{
			var unit = window.innerWidth/100;
			
			if(typeof(par) == "string")
			{
				if(par.toLowerCase() == "left")
				{
					this.element.style.marginLeft = "0px";
				}
				else if(par.toLowerCase() == "center")
				{
					this.element.style.marginLeft = ((window.innerWidth/2)-((this.width*unit)/2))+"px";
				}
				else if(par.toLowerCase() == "right")
				{
					this.element.style.marginLeft = (window.innerWidth-(this.width*unit))+"px";
				}
			}
		},
		
		alignY: function(par)
		{
			var unit = window.innerHeight/100;
			
			if(typeof(par) == "string")
			{
				if(par.toLowerCase() == "top")
				{
					this.element.style.marginTop = "0px";
				}
				else if(par.toLowerCase() == "center")
				{
					this.element.style.marginTop = ((window.innerHeight/2)-((this.height*unit)/2))+"px";
				}
				else if(par.toLowerCase() == "bottom")
				{
					this.element.style.marginTop = (window.innerHeight-(this.height*unit))+"px";
				}
			}
			/*else if(typeof(par) == "number")
			{
				this.element.style.marginTop = (par*unit)+"px";
			}*/
		},
		
		setX: function(x)
		{
			//x is a percentage based on the width of the screen
			this.element.style.marginLeft = (x * (window.innerWidth/100))+"px";
		},
		
		setY: function(y)
		{
			//y is a percentage based on the height of the screen
			this.element.style.marginTop = (y * (window.innerHeight/100))+"px";
		},
		
		getWidth: function()
		{
			return this.width;
		},
		
		getHeight: function()
		{
			return this.height;
		},
		
		eventListener: function(event, method)
		{
			if(event == "click" || event == "mouseover" || event == "mousedown" || event == "mouseout" || event == "mouseup")
			{
				this.element.addEventListener(event, method);
			}
		}
		
	});
	
	//----------------------------------------CHARACTER
	
	function Character(name, color)
	{
		this.type = "character"
		this.name = name || "...";
		this.color = color || "";	
	}
	
	//-----------------------------------------------IMAGE
	
	function image(src)
	{
		this.type = "image";
		this.element = new Image();
		
		if(src != null)
		{
			this.element.src = src;
		}
		
		this.element.style.position = "absolute";
		this.element.style.display = "none";
		document.body.appendChild(this.element);
		
		this.width = (this.element.offsetWidth/window.innerWidth)*100;
		this.height = (this.element.offsetHeight/window.innerHeight)*100;
		
		var Im = this.element;
		var changeI = {x: window.innerWidth, y: window.innerHeight};
		
		window.addEventListener("resize", function()
		{
			Im.style.marginLeft = (Number(Im.style.marginLeft.substring(0, Im.style.marginLeft.length-2)) * (window.innerWidth/changeI.x))+"px";
			Im.style.marginTop = (Number(Im.style.marginTop.substring(0, Im.style.marginTop.length-2)) * (window.innerHeight/changeI.y))+"px";
			Im.style.width = Im.offsetWidth * (window.innerWidth/changeI.x)+"px";
			Im.style.height = Im.offsetHeight * (window.innerHeight/changeI.y)+"px";
			
			changeI = {x: window.innerWidth, y: window.innerHeight};
		});
	}
	Object.assign(image.prototype, {
		src: function(sr)
		{
			if(typeof(sr) == "string")
			{
				this.element.src = sr;
			}
		},
		
		setWidth: function(w)
		{
			//w is between 0 to 100
			if(w <= 100)
			{
				var unity = window.innerWidth/100;
				this.element.style.width = (w*unity)+"px"; 
				this.width = w;
			}
		},
		
		setHeight: function(h)
		{
			//h is between 0 to 100
			if(h <= 100)
			{
				var unity = window.innerHeight/100;
				this.element.style.height = (h*unity)+"px";
				this.height = h;
			}
		},
		
		alignX: function(text)
		{
			var unit = window.innerWidth/100;
			
			if(typeof(text) == "string")
			{
				if(text.toLowerCase() == "left")
				{
					this.element.style.marginLeft = "0px";
				}
				else if(text.toLowerCase() == "center")
				{
					this.element.style.marginLeft = ((window.innerWidth/2)-((this.width*unit)/2))+"px";
				}
				else if(text.toLowerCase() == "right")
				{
					this.element.style.marginLeft = (window.innerWidth-(this.width*unit))+"px";
				}
			}
		},
		
		alignY: function(text)
		{
			var unit = window.innerHeight/100;
			
			if(typeof(text) == "string")
			{
				if(text.toLowerCase() == "top")
				{
					this.element.style.marginTop = "0px";
				}
				else if(text.toLowerCase() == "center")
				{
					this.element.style.marginTop = ((window.innerHeight/2)-((this.height*unit)/2))+"px";
				}
				else if(text.toLowerCase() == "bottom")
				{
					this.element.style.marginTop = (window.innerHeight-(this.height*unit))+"px";
				}
			}
		},
		
		setX: function(x)
		{
			//x is a percentage based on the width of the screen
			this.element.style.marginLeft = (x * (window.innerWidth/100))+"px";
		},
		
		setY: function(y)
		{
			//y is a percentage based on the height of the screen
			this.element.style.marginTop = (y * (window.innerHeight/100))+"px";
		}
	});
	
		//--------------------------------------------------------------------Key
	
	function Key()
	{
		this.type = "key";
	}
	Object.assign( Key.prototype, {
		A: 65,
		B: 66,
		C: 67,
		D: 68,
		E: 69,
		F: 70,
		G: 71,
		H: 72,
		I: 73,
		J: 74,
		K: 75,
		L: 76,
		M: 77,
		N: 78,
		O: 79,
		P: 80,
		Q: 81,
		R: 82,
		S: 83,
		T: 84,
		U: 85,
		V: 86,
		W: 87,
		X: 88,
		Y: 89,
		Z: 90,
		LEFT: 37,
		RIGHT: 39,
		UP: 38,
		DOWN: 40,
		SPACE: 32,
		ENTER: 13,
		SHIFT: 16,
		CTRL: 17,

		eventListener: function(touche, type, method){
		
			if(type == true)
			{
				document.addEventListener("keydown", function(event){
					if(event.keyCode == touche)
					{
						method();
					}
				});
			}
			else if(type == false)
			{
				document.addEventListener("keyup", function(event){
					if(event.keyCode == touche)
					{
						method();
					}
				});
			}
		}
	});
	
	//----------------------------------------------------------------Reader
	var TIMER = 0;

	function Reader(book)
	{
		this.type = "reader";
		
		if(typeof(book) == "object" && book.type == "book")
		{
			this.Book = book;
		}
		else
		{
			this.Book = null;
		}
			this.previousPage = null;
			this.currentPage = 0;
			this.currentChapter = "";
			this.startingChapter = "";
			this.opa = 0;
			this.opa2 = 0;
			this.lire = null;
			this.dialogEvent = false;
			this.dialogFunction = null;
			
			//Create the scenes
			this.element = document.createElement("DIV");
			this.background = new Image();
			this.dialogBox = document.createElement("DIV");
			this.text = document.createElement("P");
			this.nom = document.createElement("DIV");
			this.character = new Image();
			this.audio = null;
			this.menuPanel = document.createElement("DIV");
			this.transitionPanel = document.createElement("DIV");
			this.menu1 = document.createElement("BUTTON");
			this.menu2 = document.createElement("BUTTON");
			this.menu3 = document.createElement("BUTTON");
			this.menu4 = document.createElement("BUTTON");
			
			//Positionner les objects de maniere absolue
			this.element.style.position = "absolute";
			this.background.style.position = "absolute";
			this.dialogBox.style.position = "absolute";
			this.character.style.position = "absolute";
			this.nom.style.position = "absolute";
			this.menuPanel.style.position = "absolute";
			this.transitionPanel.style.position = "absolute";
			this.menu1.style.position = "absolute";
			this.menu2.style.position = "absolute";
			this.menu3.style.position = "absolute";
			this.menu4.style.position = "absolute";
			
			//Positionner les objects
			this.element.style.height = window.innerHeight+"px";
			this.element.style.width = window.innerWidth+"px";
			this.background.style.height = window.innerHeight+"px";
			this.background.style.width = window.innerWidth+"px";
			this.menuPanel.style.height = window.innerHeight+"px";
			this.menuPanel.style.width = window.innerWidth+"px";
			this.transitionPanel.style.height = window.innerHeight+"px";
			this.transitionPanel.style.width = window.innerWidth+"px";
			
			this.dialogBox.style.width = (window.innerWidth*0.9)+"px";
			this.dialogBox.style.height = (window.innerHeight*0.3)+"px";
			this.dialogBox.style.marginTop = (window.innerHeight - (window.innerHeight*0.3))+"px";
			this.dialogBox.style.marginLeft = ((window.innerWidth/2) - (window.innerWidth*0.45))+"px";
			this.dialogBox.style.fontSize = "120%";
			
			this.nom.style.width = (window.innerWidth*0.3)+"px";
			this.nom.style.height = (window.innerHeight*0.05)+"px";
			this.nom.style.marginTop = (window.innerHeight - (window.innerHeight*0.3) - (window.innerHeight*0.05))+"px";
			this.nom.style.marginLeft = ((window.innerWidth/2) - (window.innerWidth*0.45))+"px";
			this.nom.style.fontSize = ((window.innerHeight*0.04))+"px";
			this.nom.style.fontWeight = "bold";
			
			this.text.style.paddingLeft = "5%";	
			this.text.style.paddingRight = "5%";
			this.text.style.textAlign = "justify";
			this.text.style.MozUserSelect = "none";
			this.text.style.WebkitUserSelect = "none";
			this.text.style.MsUserSelect = "none"; 
			this.text.style.userSelect = "none";
			this.text.style.OUserSelect = "none";
			
			this.text.unselectable = "on";
			this.text.onselectstart = "return false"; 
			this.text.onmousedown = "return false";
			
			this.character.style.height = (window.innerHeight*0.8)+"px";
			this.character.style.width = ((window.innerHeight*0.8)* (451/999))+"px";
			this.character.style.marginLeft = ((window.innerWidth/2) - ((window.innerHeight*0.8)* (451/999)*0.5))+"px";
			this.character.style.marginTop = (window.innerHeight - (window.innerHeight*0.8))+"px";
			
			this.character.style.MozUserSelect = "none";
			this.character.style.WebkitUserSelect = "none";
			this.character.style.MsUserSelect = "none"; 
			this.character.style.userSelect = "none";
			this.character.style.OUserSelect = "none";
			
			this.character.unselectable = "on";
			this.character.onselectstart = "return false"; 
			this.character.onmousedown = "return false";
			
			this.menu1.style.width = (window.innerWidth/2)+"px";
			this.menu2.style.width = (window.innerWidth/2)+"px";
			this.menu3.style.width = (window.innerWidth/2)+"px";
			this.menu4.style.width = (window.innerWidth/2)+"px";
			
			this.menu1.style.height = (window.innerHeight/20)+"px";
			this.menu2.style.height = (window.innerHeight/20)+"px";
			this.menu3.style.height = (window.innerHeight/20)+"px";
			this.menu4.style.height = (window.innerHeight/20)+"px";
			
			this.menu1.style.marginLeft = (window.innerWidth/4)+"px";
			this.menu2.style.marginLeft = (window.innerWidth/4)+"px";
			this.menu3.style.marginLeft = (window.innerWidth/4)+"px";
			this.menu4.style.marginLeft = (window.innerWidth/4)+"px";
			
			this.menu1.style.fontSize = ((window.innerHeight/20) * 0.45)+"px";
			this.menu2.style.fontSize = ((window.innerHeight/20) * 0.45)+"px";
			this.menu3.style.fontSize = ((window.innerHeight/20) * 0.45)+"px";
			this.menu4.style.fontSize = ((window.innerHeight/20) * 0.45)+"px";
			
			//Other styles
			this.menu1.style.borderRadius = "16px";
			this.menu2.style.borderRadius = "16px";
			this.menu3.style.borderRadius = "16px";
			this.menu4.style.borderRadius = "16px";
			
			this.menu1.style.fontWeight = "bold";
			this.menu2.style.fontWeight = "bold";
			this.menu3.style.fontWeight = "bold";
			this.menu4.style.fontWeight = "bold";
			
			//put the menu button invisible
			this.menu1.style.display = "none";
			this.menu2.style.display = "none";
			this.menu3.style.display = "none";
			this.menu4.style.display = "none";
			this.menuPanel.style.display = "none";
			this.transitionPanel.style.display = "none";
			
			//pointer cursor pour menus
			this.menu1.style.cursor = "pointer";
			this.menu2.style.cursor = "pointer";
			this.menu3.style.cursor = "pointer";
			this.menu4.style.cursor = "pointer";
			
			//Delete outline
			this.menu1.style.outline = "none";
			this.menu2.style.outline = "none";
			this.menu3.style.outline = "none";
			this.menu4.style.outline = "none"
			
			//radius border
			this.boxRadius = 0;
			this.dialogRadius = 0;
			
			//add paragraph for transition
			this.paragraph = document.createElement("P");
			this.paragraph.style.display = "table-cell";
			this.paragraph.style.verticalAlign = "middle";
			this.paragraph.style.textAlign = "center";
			this.paragraph.style.paddingRight = "2%";
			this.paragraph.style.paddingLeft = "2%";
			this.paragraph.style.fontSize = "120%";
			this.paragraph.style.cursor = "pointer";
			
			//prepare objects for resize
			var element = this.element;
			var backgroundEle = this.background;
			var menuPanel = this.menuPanel;
			var transitionPanel = this.transitionPanel;
			var dialogBox = this.dialogBox;
			var nomElement = this.nom;
			var characterElement = this.character;
			var textElement = this.text;
			var paragraph = this.paragraph;
			var menu1 = this.menu1, menu2 = this.menu2, menu3 = this.menu3, menu4 = this.menu4; 
			
			//Use window.resize
			window.onresize = function()
			{
				element.style.height = window.innerHeight+"px";
				element.style.width = window.innerWidth+"px";
				backgroundEle.style.height = window.innerHeight+"px";
				backgroundEle.style.width = window.innerWidth+"px";
				menuPanel.style.height = window.innerHeight+"px";
				menuPanel.style.width = window.innerWidth+"px";
				transitionPanel.style.height = window.innerHeight+"px";
				transitionPanel.style.width = window.innerWidth+"px";
				
				dialogBox.style.width = (window.innerWidth*0.9)+"px";
				dialogBox.style.height = (window.innerHeight*0.3)+"px";
				dialogBox.style.marginTop = (window.innerHeight - (window.innerHeight*0.3))+"px";
				dialogBox.style.marginLeft = ((window.innerWidth/2) - (window.innerWidth*0.45))+"px";
				dialogBox.style.fontSize = "120%";
				
				nomElement.style.width = (window.innerWidth*0.3)+"px";
				nomElement.style.height = (window.innerHeight*0.05)+"px";
				nomElement.style.marginTop = (window.innerHeight - (window.innerHeight*0.3) - (window.innerHeight*0.05))+"px";
				nomElement.style.marginLeft = ((window.innerWidth/2) - (window.innerWidth*0.45))+"px";
				nomElement.style.fontSize = ((window.innerHeight*0.04))+"px";
				
				textElement.style.paddingLeft = "5%";
				
				characterElement.style.height = (window.innerHeight*0.8)+"px";
				characterElement.style.width = ((window.innerHeight*0.8)* (451/999))+"px";
				characterElement.style.marginLeft = ((window.innerWidth/2) - ((window.innerHeight*0.8)* (451/999)*0.5))+"px";
				characterElement.style.marginTop = (window.innerHeight - (window.innerHeight*0.8))+"px";
				
				menu1.style.width = (window.innerWidth/2)+"px";
				menu2.style.width = (window.innerWidth/2)+"px";
				menu3.style.width = (window.innerWidth/2)+"px";
				menu4.style.width = (window.innerWidth/2)+"px";
				
				menu1.style.height = (window.innerHeight/20)+"px";
				menu2.style.height = (window.innerHeight/20)+"px";
				menu3.style.height = (window.innerHeight/20)+"px";
				menu4.style.height = (window.innerHeight/20)+"px";
				
				menu1.style.marginLeft = (window.innerWidth/4)+"px";
				menu2.style.marginLeft = (window.innerWidth/4)+"px";
				menu3.style.marginLeft = (window.innerWidth/4)+"px";
				menu4.style.marginLeft = (window.innerWidth/4)+"px";
				
				menu1.style.fontSize = ((window.innerHeight/20) * 0.45)+"px";
				menu2.style.fontSize = ((window.innerHeight/20) * 0.45)+"px";
				menu3.style.fontSize = ((window.innerHeight/20) * 0.45)+"px";
				menu4.style.fontSize = ((window.innerHeight/20) * 0.45)+"px";
				
				paragraph.style.paddingRight = "2%";
				paragraph.style.paddingLeft = "2%";
				paragraph.style.fontSize = "120%";
			};
			
			//Adjust the colors
			this.element.style.backgroundColor = "rgba(0,0,0,1)";
			this.textColor = "rgba(255,255,255,1)";
			this.boxColor = "rgba(105,105,105,0.7)";
			this.nom.style.backgroundColor = "rgba(128,128,128,0.7)";
			this.nom.style.color = "rgba(255,255,255,1)";
			this.menuPanel.style.backgroundColor = "rgba(0,0,0,0.7)";
			this.transitionPanel.style.backgroundColor = "rgba(0,0,0,1)";
			this.transitionPanel.style.color = "rgba(255,255,255,1)";
			
			//Z-index
			this.element.style.zIndex = "1";
			this.background.style.zIndex = "9"
			this.character.style.zIndex = "99";
			this.dialogBox.style.zIndex = "999";
			this.nom.style.zIndex = "999";
			this.menuPanel.style.zIndex = "9999";
			this.transitionPanel.style.zIndex = "99999";
			
			//Adjust background image
			this.element.style.backgroundRepeat = "no-repeat";
			this.element.style.backgroundSize = "100% 100%";
			
			//add it to the body
			this.dialogBox.appendChild(this.text);
			this.element.appendChild(this.dialogBox);
			this.element.appendChild(this.character);
			this.element.appendChild(this.nom);
			this.element.appendChild(this.background);
			this.menuPanel.appendChild(this.menu1);
			this.menuPanel.appendChild(this.menu2);
			this.menuPanel.appendChild(this.menu3);
			this.menuPanel.appendChild(this.menu4);
			this.element.appendChild(this.menuPanel);
			this.transitionPanel.appendChild(this.paragraph);
			this.element.appendChild(this.transitionPanel);
	}
	Object.assign(Reader.prototype, {
		
		setBook: function(book)
		{
			if(typeof(book) == "object" && book.type == "book")
			{
				this.Book = book;	
			}
		},
		
		startAt: function(chapter_name)
		{
			if(typeof(chapter_name) == "string")
			{
				this.currentChapter = chapter_name;
				this.startingChapter = chapter_name;
			}
		},
		
		next: function()
		{
			if(this.currentPage < (this.Book.chapters[this.currentChapter].length -1))
			{
				this.currentPage += 1;
				this.opa = 0;
				this.opa2 = 0;
			}
			else if((this.currentPage+1) >= (this.Book.chapters[this.currentChapter].length -1))
			{	
				if(this.Book.endGame[this.currentChapter] != null)
				{
					//This is the end chapter
					this.Book.endGame[this.currentChapter]();
					this.close();
				}
			}
		},
		
		jump: function(to)
		{
			this.currentChapter = this.Book.chapters[this.currentChapter][this.currentPage].choices[to].jump;
			this.currentPage = 0;
			this.character.style.display = "none";
		},
		
		reading: function(delta)
		{
			if(Object.keys(this.Book.chapters).length > 0)
			{
			
			if(this.dialogEvent == true)
			{
				const CLASS = this;
				this.dialogFunction = function()
				{
					CLASS.next();
				};
				
				this.dialogBox.addEventListener("click", this.dialogFunction);
				this.paragraph.addEventListener("click", this.dialogFunction);
				
				this.dialogEvent = false;
			}
			
			if(this.Book.chapters[this.currentChapter][this.currentPage].type == "dialogue")
			{
				//End the menu if used before
				this.menuPanel.style.display = "none";
				this.transitionPanel.style.display = "none";
				this.menu1.style.display = "none";
				this.menu2.style.display = "none";
				this.menu3.style.display = "none";
				this.menu4.style.display = "none";
				
				this.text.style.color = this.textColor;
				this.dialogBox.style.backgroundColor = this.boxColor;
				this.nom.style.backgroundColor = this.boxColor;
				
				this.nom.style.borderRadius = this.boxRadius;
				this.dialogBox.style.borderRadius = this.dialogRadius;
				
				var checkTruth = (this.text.innerHTML.length == this.Book.chapters[this.currentChapter][this.currentPage].dialog.text.length);
				
				var searchNull = (this.Book.chapters[this.currentChapter][this.currentPage].dialog.text.indexOf(this.text.innerHTML));
				
				if(this.Book.chapters[this.currentChapter][this.currentPage].wordByWordDisplay.value == true && checkTruth == false)
				{
					if(searchNull == -1)
					{
						this.text.innerHTML = "";
					}
					if(TIMER >= this.Book.chapters[this.currentChapter][this.currentPage].wordByWordDisplay.time)
					{
						var temporaryText = this.text.innerHTML;
						
						temporaryText += this.Book.chapters[this.currentChapter][this.currentPage].dialog.text.charAt(this.text.innerHTML.length);
						
						this.text.innerHTML = temporaryText;
						
						TIMER = 0;
					}
					else
					{
						TIMER += 0.02;
					}
				}
				else if(this.Book.chapters[this.currentChapter][this.currentPage].wordByWordDisplay.value == false)
				{
					this.text.innerHTML = this.Book.chapters[this.currentChapter][this.currentPage].dialog.text;
				}
				
				this.nom.innerHTML = "<center>"+this.Book.chapters[this.currentChapter][this.currentPage].dialog.character.name+"</center>";
				
				if(this.Book.chapters[this.currentChapter][this.currentPage].dialog.character.color != "")
				{
					this.nom.style.color = this.Book.chapters[this.currentChapter][this.currentPage].dialog.character.color;
				}
				if(this.Book.chapters[this.currentChapter][this.currentPage].background.image != null)
				{
					this.background.style.display = "block";
					this.background.src = this.Book.chapters[this.currentChapter][this.currentPage].background.image;
				}
				else
				{
					this.background.style.display = "none";
				}
				
				if(this.Book.chapters[this.currentChapter][this.currentPage].background.effect == "dissolve")
				{
					if(this.opa2 < 1)
					{
						this.opa2 += (1- this.opa2) * 0.02;
					}
					if(this.opa2 >= 0.999)
					{
						this.opa2 = 1;
					}
					this.background.style.opacity = this.opa2;
				}
				else
				{
					//To avoid first page bugs or after choices bugs
					if(this.currentPage > 0)
					{
						//check if after background dissolve
						var isAfterBackDissolve = ((this.Book.chapters[this.currentChapter][this.currentPage-1].background.image != null) && (this.Book.chapters[this.currentChapter][this.currentPage-1].background.effect == "dissolve")); 
						
						if(isAfterBackDissolve == true)
						{
							this.background.style.opacity = 1;
						}
					}
				}
				
				if(this.Book.chapters[this.currentChapter][this.currentPage].show.value == true)
				{
					if(this.Book.chapters[this.currentChapter][this.currentPage].show.character != null)
					{
						//SHOW
						this.character.style.display = "block";
						this.character.src = this.Book.chapters[this.currentChapter][this.currentPage].show.character;
						
						if(this.Book.chapters[this.currentChapter][this.currentPage].show.effect == "dissolve")
						{
							if(this.opa < 1)
							{
								this.opa += (1- this.opa) * 0.02;
							}
							if(this.opa >= 0.999)
							{
								this.opa = 1;
							}
							this.character.style.opacity = this.opa;
						}
					}
					else
					{
						//HIDE
						this.character.style.display = "none";
					}
				}
				else
				{
					//To avoid first page bugs or after choices bugs
					if(this.currentPage > 0)
					{
						//check if after show
						var isAfterShow = ((this.Book.chapters[this.currentChapter][this.currentPage-1].show.value == true) && (this.Book.chapters[this.currentChapter][this.currentPage-1].show.character != null) && (this.Book.chapters[this.currentChapter][this.currentPage-1].show.effect == "dissolve")); 
						
						if(isAfterShow == true)
						{
							this.character.style.opacity = 1;
						}
					}
				}
				
				if(this.character.src == "")
				{
					this.character.style.display = "none";
				}
				
				//SOUND
				if(this.Book.chapters[this.currentChapter][this.currentPage].music.sound != null)
				{
					this.audio = this.Book.chapters[this.currentChapter][this.currentPage].music.sound;
					this.audio.volume(this.Book.chapters[this.currentChapter][this.currentPage].music.volume);
					this.element.appendChild(this.audio.element);
					
					if(this.Book.chapters[this.currentChapter][this.currentPage].music.status == "pause")
					{
						this.audio.pause();
					}
					else if(this.Book.chapters[this.currentChapter][this.currentPage].music.status == "play")
					{
						this.audio.play();
						this.audio.loop();
					}
					else if(this.Book.chapters[this.currentChapter][this.currentPage].music.status == "stop")
					{
						this.audio.stop();
					}
					else if(this.Book.chapters[this.currentChapter][this.currentPage].music.status == "resume")
					{
						//continue after pause
						this.audio.play();
					}
				}
			}
			else if(this.Book.chapters[this.currentChapter][this.currentPage].type == "choice")
			{
				this.menuPanel.style.display = "block";
				this.transitionPanel.style.display = "none";
				
				if(this.Book.chapters[this.currentChapter][this.currentPage].choices.length == 2)
				{
					this.menu1.style.display = "block";
					this.menu2.style.display = "block";
					
					this.menu1.innerHTML = this.Book.chapters[this.currentChapter][this.currentPage].choices[0].menu;
					this.menu2.innerHTML = this.Book.chapters[this.currentChapter][this.currentPage].choices[1].menu;
					
					//Positionnez les menus
					this.menu1.style.marginTop = ((window.innerHeight/2) - (window.innerHeight/20) - (window.innerHeight/80))+"px";
					this.menu2.style.marginTop = ((window.innerHeight/2) + (window.innerHeight/80))+"px";
					
					//donner des couleurs
					if(this.lightOrDark(this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color) == "light")
					{
						this.menu1.style.backgroundColor = "rgba(0,0,0,1)";
						this.menu2.style.backgroundColor = "rgba(0,0,0,1)";
						
						if(this.currentPage > 0)
						{
							this.menu1.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu2.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
						}
						else
						{
							this.menu1.style.color = "rgba(255,255,255,1)";
							this.menu2.style.color = "rgba(255,255,255,1)";
						}
					}
					else if(this.lightOrDark(this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color) == "dark")
					{
						this.menu1.style.backgroundColor = "rgba(255,255,255,1)";
						this.menu2.style.backgroundColor = "rgba(255,255,255,1)";
						
						if(this.currentPage > 0)
						{
							this.menu1.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu2.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
						}
						else
						{
							this.menu1.style.color = "rgba(0,0,0,1)";
							this.menu2.style.color = "rgba(0,0,0,1)";
						}
					}
					
					//set the jump
					
					this.menu1.onclick = ()=> this.jump(0);
					
					this.menu2.onclick = () => this.jump(1);
					
				}
				else if(this.Book.chapters[this.currentChapter][this.currentPage].choices.length == 3)
				{
					this.menu1.style.display = "block";
					this.menu2.style.display = "block";
					this.menu3.style.display = "block";
					
					this.menu1.innerHTML = this.Book.chapters[this.currentChapter][this.currentPage].choices[0].menu;
					this.menu2.innerHTML = this.Book.chapters[this.currentChapter][this.currentPage].choices[1].menu;
					this.menu3.innerHTML = this.Book.chapters[this.currentChapter][this.currentPage].choices[2].menu;
					
					//Positionnez les menus
					this.menu1.style.marginTop = ((window.innerHeight/2) - (window.innerHeight/20) - (window.innerHeight/40) - (window.innerHeight/80))+"px";
					this.menu2.style.marginTop = ((window.innerHeight/2) - (window.innerHeight/40))+"px";
					this.menu3.style.marginTop = ((window.innerHeight/2) + (window.innerHeight/40) + (window.innerHeight/80))+"px";
					
					//donner des couleurs
					if(this.lightOrDark(this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color) == "light")
					{
						this.menu1.style.backgroundColor = "rgba(0,0,0,1)";
						this.menu2.style.backgroundColor = "rgba(0,0,0,1)";
						this.menu3.style.backgroundColor = "rgba(0,0,0,1)";
						
						if(this.currentPage > 0)
						{
							this.menu1.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu2.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu3.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
						}
						else
						{
							this.menu1.style.color = "rgba(255,255,255,1)";
							this.menu2.style.color = "rgba(255,255,255,1)";
							this.menu3.style.color = "rgba(255,255,255,1)";
						}
					}
					else if(this.lightOrDark(this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color) == "dark")
					{
						this.menu1.style.backgroundColor = "rgba(255,255,255,1)";
						this.menu2.style.backgroundColor = "rgba(255,255,255,1)";
						this.menu3.style.backgroundColor = "rgba(255,255,255,1)";
						
						if(this.currentPage > 0)
						{
							this.menu1.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu2.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu3.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
						}
						else
						{
							this.menu1.style.color = "rgba(0,0,0,1)";
							this.menu2.style.color = "rgba(0,0,0,1)";
							this.menu3.style.color = "rgba(0,0,0,1)";
						}
					}
					
					//set the jump
					
					this.menu1.onclick = ()=> this.jump(0);
					
					this.menu2.onclick = () => this.jump(1);
					
					this.menu3.onclick = () => this.jump(2);
				}
				else if(this.Book.chapters[this.currentChapter][this.currentPage].choices.length == 4)
				{
					this.menu1.style.display = "block";
					this.menu2.style.display = "block";
					this.menu3.style.display = "block";
					this.menu4.style.display = "block";
					
					this.menu1.innerHTML = this.Book.chapters[this.currentChapter][this.currentPage].choices[0].menu;
					this.menu2.innerHTML = this.Book.chapters[this.currentChapter][this.currentPage].choices[1].menu;
					this.menu3.innerHTML = this.Book.chapters[this.currentChapter][this.currentPage].choices[2].menu;
					this.menu4.innerHTML = this.Book.chapters[this.currentChapter][this.currentPage].choices[3].menu;
					
					//Positionnez les menus
					this.menu1.style.marginTop = ((window.innerHeight/2) - (window.innerHeight/10) - (window.innerHeight/80) - (window.innerHeight/160))+"px";
					this.menu2.style.marginTop = ((window.innerHeight/2) - (window.innerHeight/20) - (window.innerHeight/160))+"px";
					this.menu3.style.marginTop = ((window.innerHeight/2)+(window.innerHeight/160))+"px";
					this.menu4.style.marginTop = ((window.innerHeight/2)+ (window.innerHeight/20) + (window.innerHeight/80) + (window.innerHeight/160))+"px";
					
					//donner des couleurs
					if(this.lightOrDark(this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color) == "light")
					{
						this.menu1.style.backgroundColor = "rgba(0,0,0,1)";
						this.menu2.style.backgroundColor = "rgba(0,0,0,1)";
						this.menu3.style.backgroundColor = "rgba(0,0,0,1)";
						this.menu4.style.backgroundColor = "rgba(0,0,0,1)";
						
						if(this.currentPage > 0)
						{
							this.menu1.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu2.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu3.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu4.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
						}
						else
						{
							this.menu1.style.color = "rgba(255,255,255,1)";
							this.menu2.style.color = "rgba(255,255,255,1)";
							this.menu3.style.color = "rgba(255,255,255,1)";
							this.menu4.style.color = "rgba(255,255,255,1)";
						}
					}
					else if(this.lightOrDark(this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color) == "dark")
					{
						this.menu1.style.backgroundColor = "rgba(255,255,255,1)";
						this.menu2.style.backgroundColor = "rgba(255,255,255,1)";
						this.menu3.style.backgroundColor = "rgba(255,255,255,1)";
						this.menu4.style.backgroundColor = "rgba(255,255,255,1)";
						
						if(this.currentPage > 0)
						{
							this.menu1.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu2.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu3.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
							this.menu4.style.color = this.Book.chapters[this.currentChapter][this.currentPage-1].dialog.character.color;
						}
						else
						{
							this.menu1.style.color = "rgba(0,0,0,1)";
							this.menu2.style.color = "rgba(0,0,0,1)";
							this.menu3.style.color = "rgba(0,0,0,1)";
							this.menu4.style.color = "rgba(0,0,0,1)";
						}
					}
					
					//set the jump
					
					this.menu1.onclick = ()=> this.jump(0);
					
					this.menu2.onclick = ()=> this.jump(1);
					
					this.menu3.onclick = ()=> this.jump(2);
					
					this.menu4.onclick = ()=> this.jump(3);
				}
				
				
			}
			else if(this.Book.chapters[this.currentChapter][this.currentPage].type == "transition")
			{
				this.transitionPanel.style.display = "table";
				
				this.paragraph.innerHTML = this.Book.chapters[this.currentChapter][this.currentPage].dialog.text+"<br/> &#187;";
				
				//SOUND
				if(this.Book.chapters[this.currentChapter][this.currentPage].music.sound != null)
				{
					this.audio = this.Book.chapters[this.currentChapter][this.currentPage].music.sound;
					this.audio.volume(this.Book.chapters[this.currentChapter][this.currentPage].music.volume);
					this.element.appendChild(this.audio.element);
					
					if(this.Book.chapters[this.currentChapter][this.currentPage].music.status == "pause")
					{
						this.audio.pause();
					}
					else if(this.Book.chapters[this.currentChapter][this.currentPage].music.status == "play")
					{
						this.audio.play();
						this.audio.loop();
					}
					else if(this.Book.chapters[this.currentChapter][this.currentPage].music.status == "stop")
					{
						this.audio.stop();
					}
					else if(this.Book.chapters[this.currentChapter][this.currentPage].music.status == "resume")
					{
						//continue after pause
						this.audio.play();
					}
				}
			}
			
			//arrayOfChoices = [{menu: "blah?", jump: "chapter_name},{menu: "rah?", jump: "chapter_name2},...]
			
			if(delta >= 2)
			{
				delta = 0.02;
			}
	
			this.lire = requestAnimationFrame(()=>this.reading(delta + 0.02));
			}
		},
		
		read: function()
		{
			this.reading(0.02);
			this.dialogEvent = true;
		},
		
		close: function()
		{
			cancelAnimationFrame(this.lire);
			this.dialogBox.removeEventListener("click", this.dialogFunction);
			this.currentPage = 0;
			this.currentChapter = this.startingChapter;
		},
		
		roundedNameBox: function(degree)
		{
			//degree is between 0 and 10
			
			if(degree >= 0 && degree <= 10)
			{
				this.boxRadius = (window.innerWidth * 0.9 * (degree/100))+"px";
			}
		},
		
		roundedDialogBox: function(degree)
		{
			//degree is between 0 and 10
			
			if(degree >= 0 && degree <= 10)
			{
				this.dialogRadius = (window.innerWidth * 0.9 * (degree/100))+"px";
			}
		},
		
		setTextColor: function(r,g,b)
		{
			var R = r || 0;
			var G = g || 0;
			var B = b || 0;
			
			this.textColor = "rgba("+R+","+G+","+B+",1)";
		},
		
		setBoxColor: function(r,g,b)
		{
			var R = r || 0;
			var G = g || 0;
			var B = b || 0;
			
			this.boxColor = "rgba("+R+","+G+","+B+",0.7)";
		},
		
		lightOrDark: function(color) {

			// Variables for red, green, blue values
			var r, g, b, hsp;
			
			// Check the format of the color, HEX or RGB?
			if (color.match(/^rgb/)) {

				// If RGB --> store the red, green, blue values in separate variables
				color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
				
				r = color[1];
				g = color[2];
				b = color[3];
			} 
			else {
				
				// If hex --> Convert it to RGB: http://gist.github.com/983661
				color = +("0x" + color.slice(1).replace( 
				color.length < 5 && /./g, '$&$&'));

				r = color >> 16;
				g = color >> 8 & 255;
				b = color & 255;
			}
			
			// HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
			hsp = Math.sqrt(
			0.299 * (r * r) +
			0.587 * (g * g) +
			0.114 * (b * b)
			);

			// Using the HSP value, determine whether the color is light or dark
			if (hsp>127.5) {

				return 'light';
			} 
			else {

				return 'dark';
			}
		},
		
		saveJSON: function()
		{
			var writeSave = JSON.stringify({
				book : this.Book,
				page : this.currentPage,
				chapter : this.currentChapter
			});
			
			return readLoad;
		},
		
		loadJSON: function(json)
		{
			var readSave = JSON.parse(json);
			
			this.Book = readSave.book;
			this.currentPage = readSave.page;
			thia.currentChapter = readSave.chapter;
		}
	});
	
	//----------------------------------------------------------SCREEN
	
	function Screen()
	{
		this.type = "screen";
		this.element = document.createElement("DIV");
		this.element.style.width = window.innerWidth+"px";
		this.element.style.height = window.innerHeight+"px";
		this.element.style.backgroundColor = "black";
	
		this.element.style.backgroundSize = "100% 100%";
		this.element.style.backgroundRepeat = "no-repeat";
					
		this.element.style.position = "absolute";
		this.element.style.overflow = "hidden";
		
		document.body.style.margin = "0px";
		document.body.style.padding = "0px";
		document.body.style.overflow = "hidden";
		
		for(var no = 0; no< document.body.childNodes.length; no++)
		{
			document.body.removeChild(document.body.childNodes[no]);
		}
		
		document.body.appendChild(this.element);
		
		var sr = this.element;
		this.panels = [];
		this.layerFont = [];
		this.current = 0;
		
		window.addEventListener("resize", function()
		{
			sr.style.width = window.innerWidth+"px";
			sr.style.height = window.innerHeight+"px";
		});
	}
	
	Object.assign(Screen.prototype, {
		
		createLayer: function(name)
		{
			this.panels.push([name, []]);
			this.layerFont.push([name, new Image()]);
		},
		
		addToLayer: function(layer_name, object)
		{
			if((object.type) && (object.type == "image" || object.type == "button" || object.type == "audio" || object.type == "reader"))
			{
				for(var i = 0; i < this.panels.length; i++)
				{
					if(this.panels[i][0] == layer_name)
					{
						this.panels[i][1].push(object);
						break;
					}
				}
			}
		},
		
		addLayerView: function(layer_name, url)
		{
			if((isImageURL(url) == true) || (style.startsWith("data:image")))
			{
				//this.layerFont.push([name, new Image()]);
				for(var m = 0; m < this.layerFont.length; m++)
				{
					if(this.layerFont[m][0] == layer_name)
					{
						this.layerFont[m][1].src = url;
						break;
					}
				}
			}
		},
		
		changeView: function(layer_name)
		{
			var found = false;
			
			//Delete all elements within the previous view
			while (this.element.firstChild) 
			{
				this.element.removeChild(this.element.firstChild);
			}
			
			//Delete the previous layer's background
			this.element.style.backgroundImage = "url('')";
			
			//Search for the layer
			for(var j = 0; j < this.panels.length; j++)
			{
				if(this.panels[j][0] == layer_name)
				{
					this.current = j;
					found = true;
					break;
				}
			}
			
			//If the layer's name is found, we display all of its elements.
			if(found == true)
			{
				for(var k = 0; k < this.panels[this.current][1].length; k++)
				{
					if(this.panels[this.current][1][k].type != "audio")
					{
						this.panels[this.current][1][k].element.style.display = "block";
						
						if(this.panels[this.current][1][k].type == "reader")
						{
							if(this.panels[this.current][1][k].audio != null && this.panels[this.current][1][k].audio.type == "audio")
							{
								this.panels[this.current][1][k].audio.stop();
							}
						}
					}
					
					this.element.appendChild(this.panels[this.current][1][k].element);
				}
				
				//Add the new layer's background
				this.element.style.backgroundImage = "url('"+this.layerFont[this.current][1].src+"')";
			}
		},
		
		open: function()
		{
			for(var k = 0; k < this.panels[this.current][1].length; k++)
			{
				if(this.panels[this.current][1][k].type != "audio")
				{
					this.panels[this.current][1][k].element.style.display = "block";
				}
					
				this.element.appendChild(this.panels[this.current][1][k].element);
				
				//Add the new layer's background
				this.element.style.backgroundImage = "url('"+this.layerFont[this.current][1].src+"')";
			}
		},
		
		closeWindow: function()
		{
			window.close();
		},

		setPageIcon: function(ico)
		{
			if(typeof(ico) == "string")
			{
				var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			
				var extension = ico.substring((ico.lastIndexOf(".")+1));
				
				if(extension == "png")
				{
					link.type = "image/png";
				}
				else if(extension == "gif")
				{
					link.type = "image/gif";
				}
				else
				{
					link.type = 'image/x-icon';
				}
				link.rel = 'shortcut icon';
				link.href = ico;
				
				document.getElementsByTagName('head')[0].appendChild(link);
			}
		}
		
	});
	
	//-----------------------------------------------------TREENODE
	
	function TreeNode(value, genre)
	{
		//This is a binary tree node
		this.type = "treenode";
		this.value = value || "";
		this.genre = genre;
		
		if(genre.toLowerCase() == "scene")
		{
			this.child = null;
		}
		else if(genre.toLowerCase() == "menu")
		{
			this.child = [];
		}
	}
	
	Object.assign(TreeNode.prototype, {
		
		add: function(other)
		{
			if(this.genre.toLowerCase() == "menu")
			{
				this.child.push(other);
			}
			else if(this.genre.toLowerCase() == "scene")
			{
				this.child = other;
			}
		},
		
		getTree: function(level)
		{
			var tab = "";
			var string = this.value+"\n";
			
			for(var i = 0; i < level; i++)
			{
				tab += "\t";
			}
			for(var j= 0; j < this.child.length; j++)
			{
				string += tab+""+this.child[j].getTree(level+1);
			}
			return string;
		},
		
		followPath: function(array)
		{
			var code = "this.child[array[0]]";
			
			for(var b = 1; b < array.length; b++)
			{
				code += ".child["+array[b]+"]";
			}
			
			var IQ = eval(code);
			return IQ.value;
		}
	});
	
	function isImageURL(url) 
	{
		return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
	}
	
	
	//------------------------------------------------------------------
	
	exports.Audio = Audio;
	exports.Book = Book;
	exports.button = button;
	exports.Character = Character;
	exports.Key = Key;
	exports.image = image;
	exports.Reader = Reader;
	exports.Screen = Screen;
	

Object.defineProperty(exports, '__esModule', { value: true });
})));
