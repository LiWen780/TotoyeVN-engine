(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.TotoyeVN = {}));
}(this, (function (exports) { 'use strict';

	var dpi = window.devicePixelRatio;
	var CURRENT, WINNER, MAX, coordsArray;
	
	const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
								  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
								  
	const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
								  
	//-----------------------AUDIO-------------------------------------------------
	function Audio(url){
		
		this.type = "audio";
		this.audio = document.createElement("AUDIO");
		this.audio.style.display = "none";
		this.url = url;
		
		if (this.audio.canPlayType("audio/mpeg")) 
		{
			this.audio.setAttribute("src",url);
		}
		else 
		{
			this.audio.setAttribute("src",url);
		}

		this.audio.setAttribute("controls", "controls");
	}
	Object.assign(Audio.prototype, {
		src: function(url) {
			
			  if (this.audio.canPlayType("audio/mpeg")) {
				this.audio.setAttribute("src",url);
			  } else {
				this.audio.setAttribute("src",url);
			  }

			  this.audio.setAttribute("controls", "controls");
		},
		play: function(){
			this.audio.play();
		},
		setTime: function(time){
			this.audio.currentTime = time;
		},
		loop: function(){
			this.audio.setAttribute("loop", "loop");
		},
		pause: function(){
			this.audio.pause();
		},
		stop: function() {
			this.audio.pause();
			this.audio.currentTime = 0;		
		},
		volume: function(v){
			this.audio.volume = v/100;
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
	
	//------------------------DISTANCE-----------------------------------------------------
		
	function distance(point1, point2) {
		
		return Math.sqrt((Math.pow((point2.x - point1.x),2)+Math.pow((point2.y - point1.y),2)));
	}
	
	//----------------------------AREA-------------------------------------------------------
	
	function Area(s1,s2,s3) {
		
		var S1 = Math.abs(s1);
		var S2 = Math.abs(s2);
		var S3 = Math.abs(s3);
		
		var half = (S1+S2+S3)/2;
		return Math.sqrt(half*(half-S1)*(half-S2)*(half-S3));
	}

	//------------------------------Onclick--------------------------------------------------
	function Onclick(ob, pt)
	{
		var belong;
		var Surface = Math.round(ob.width * ob.height);
		
		//The four sides of rectangle el1
		var a = {x: ob.x, y: ob.y};
		var b = {x: (ob.x + ob.width), y: ob.y};
		var c = {x: ob.x, y:(ob.y+ob.height)};
		var d = {x: (ob.x+ob.width), y: (ob.y+ob.height)};
		
		var point = {x: pt.x, y: pt.y};
		
		var face1 = distance(a, point);
		var face2 = distance(c, point);
		var face3 = distance(b, point);
		var face4 = distance(d, point);
			
		var face5 = ob.height;
		var face6 = ob.width;
			
		var A1 = Area(face1, face2, face5);
		var A2 = Area(face1, face3, face6);
		var A3 = Area(face2, face4, face6);
		var A4 = Area(face3, face4, face5);
			
		var Sum = Math.round(A1 + A2 + A3 + A4);
			
		if(Sum == Surface)
		{		
			belong = true;
		}
		else
		{
			belong = false;	
		}
		
		return belong;
	}
	
	//----------------------------------------BACKGROUND----------------------------------------
	
	function Background(src)
	{
		this.type = "background";
		this.src = src;
		this.show = "normal";
	}
	
	//----------------------------------------CHARACTER-----------------------------------------
	
	function Character(name, src, color)
	{
		this.type = "character"
		this.name = name;
		this.src = src || "none";
		this.color = color;
	}
	
	//------------------------------------------CHECK-------------------------------------------
	
	function Check(obj, num)
	{
	
		var answer = -1;
		
		for(var i = 0; i < obj.length; i++)
		{	
			if(parseInt(obj[i].id) == parseInt(num))
			{
				answer = i;
				break;
			}
		}
		
		return answer;
	}
	
	//-----------------------------------------CHECKCURRENT---------------------------------------
	function CheckCurrent(obj, num)
	{
		var answer = -1;
		var previous;
		
		for(var i = 0; i < obj.length; i++)
		{	
			if(parseInt(obj[i].id) == parseInt(num))
			{
				answer = i;
				break;
			}
		}
		
		if(answer == -1)
		{
			for(var i = 0; i < obj.length; i++)
			{
				if((i+1) != obj.length)
				{
					if(parseInt(obj[i].id) < parseInt(num) && parseInt(obj[i+1].id) > parseInt(num))
					{
						previous = i;
						break;
					}
				}
				else
				{
					if(parseInt(obj[i].id) < parseInt(num))
					{
						previous = i;
					}
				}
			}
			return previous;
		}
		else
		{
			return answer;
		}
	}
	
	//-----------------------------------------SCENE--------------------------------------------
	var choiceEnabled = null, CONTINU = null, REALMAX = null, CLEANING = null, DISSOLVE = 0.0, BGDISSOLVE = 0.4, ENDING = null, ENDID = 0, soundBand = null, CANCEL = null, Replay = false, staticNodes = [], staticSoundtracks = [], staticLinklist = [];
	var SceneNoire = "data:image/png;base64,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";
	
	function Scene()
	{
		this.type = "scene";
		this.endid = 0;
		this.setUpCode = null;
		document.body.style.margin = "0px";
		document.body.style.padding = "0px";
		this.element = document.createElement("CANVAS");
		this.element.height = window.innerHeight;
		this.element.width = window.innerWidth;
		this.element.style.backgroundColor = "#000000";
		this.element.style.position = "absolute";
		this.ctx = this.element.getContext("2d");
		
		var el = this.element;
		
		window.onresize = function()
		{
			el.style.height = (window.innerHeight*dpi)+"px";
			el.style.width = (window.innerWidth*dpi)+"px";
		};
		
		//ELEMENTS
		this.Nodes = [];
		this.back = null;
		this.currentCharacter = new Image(); 
		this.soundtracks = [];
		this.linkList = [];
		this.storage = [];
		this.current = 0;
		this.currentAudio = null;	
		this.clickAudio = null;
		this.onTime = false;
		this.SET = false;
		
		this.choiceStart = null;
		
		this.Tfont = "20px Times New Roman";
		this.Tcolor = "#FFFFFF";
		this.Bcolor = "#000000";
		gameIcon("https://cdn.jsdelivr.net/gh/LiWen780/TotoyeVN-engine/TVN_logo.png");
	}
	Object.assign(Scene.prototype, {
		
		add : function(charac, texts, bg, effec)
		{
			
			if((typeof(charac) == "object" && charac.type == "character") && typeof(texts) == "string")
			{
				let theCharac = new Character(charac.name, charac.src, charac.color);
				
				if((bg != null) && typeof(bg) == "object" && bg.type == "background")
				{
					if((!effec) || (effec == null))
					{
						if((charac.src == "none" || charac.src == null) && (this.Nodes.length > 0))
						{
							if(this.Nodes[this.Nodes.length-1].type == "blackscreen")
							{
								theCharac.src = "none";
							}
							else
							{
								theCharac.src = this.Nodes[this.Nodes.length-1].character.src;
							}
						}
						this.Nodes.push({type: "dialogue", character: theCharac, background: bg, effect: null, text: texts});
					}
					else
					{
						if((charac.src == "none" || charac.src == null) && (this.Nodes.length > 0))
						{
							if(this.Nodes[this.Nodes.length-1].type == "blackscreen")
							{
								theCharac.src = this.Nodes[this.Nodes.length-2].character.src;
							}
							else
							{
								theCharac.src = this.Nodes[this.Nodes.length-1].character.src;
							}
						}
						this.Nodes.push({type: "dialogue", character: theCharac, background: bg, effect: effec, text: texts});
					}
				}
				else if((bg == null) || (!bg))
				{
					if(this.Nodes.length > 0)
					{
						let bac = this.Nodes[this.Nodes.length-1].background;
						
						if((!effec) || (effec == null))
						{
							if((charac.src == "none" || charac.src == null))
							{
								if(this.Nodes[this.Nodes.length-1].type == "blackscreen")
								{
									theCharac.src = this.Nodes[this.Nodes.length-2].character.src;
								}
								else
								{
									theCharac.src = this.Nodes[this.Nodes.length-1].character.src;
								}
							}
							this.Nodes.push({type: "dialogue", character: theCharac, background: bac, effect: null, text: texts});
						}
						else
						{
							if((charac.src == "none" || charac.src == null) )
							{
								if(this.Nodes[this.Nodes.length-1].type == "blackscreen")
								{
									theCharac.src = this.Nodes[this.Nodes.length-2].character.src;
								}
								else
								{
									theCharac.src = this.Nodes[this.Nodes.length-1].character.src;
								}
							}
							this.Nodes.push({type: "dialogue", character: theCharac, background: bac, effect: effec, text: texts});
						}
					}
					else
					{
						if((!effec) || (effec == null))
						{
							var bac = new Background("none");
							this.Nodes.push({type: "dialogue", character: charac, background: bac, effect: null, text: texts});
						}
						else
						{
							this.Nodes.push({type: "dialogue", character: charac, background: bac, effect: effec, text: texts});
						}
					}
				}
			}
			else if((typeof(charac) == "string") && charac == "blackscreen" && (!effec))
			{
				if(texts == true)
				{
					if((bg) && typeof(bg) == "string")
					{
						this.Nodes.push({type: "blackscreen", sound: true, title: bg});
					}
					else
					{
						this.Nodes.push({type: "blackscreen", sound: true, title: ""});
					}
				}
				else
				{
					if((bg) && typeof(bg) == "string")
					{
						this.Nodes.push({type: "blackscreen", sound: false, title: bg});
					}
					else
					{
						this.Nodes.push({type: "blackscreen", sound: false, title:""});
					}
				}
			}
		},
		
		addChoice : function(choice1, choice2, meth1, meth2)
		{
			
			if(typeof(choice1) == "string" && typeof(choice2) == "string")
			{
				let bac = this.Nodes[this.Nodes.length-1].background;
				let ch = this.Nodes[this.Nodes.length-1].character;
				this.Nodes.push({type: "choice", character: ch, background: bac, effect: null, text: null, ch1: choice1, ch2: choice2});
				
				if(typeof(meth1) == "function" && typeof(meth2) == "function")
				{
					this.linkList.push({id: this.Nodes.length-1, first: meth1.toString(), second: meth2.toString()});
				}
			}
		},
		
		addSound : function(sound)
		{
			
			if(typeof(sound) == "string")
			{
				let snd = Audio(sound);
				this.soundtracks.push({id: this.Nodes.length, audio: snd});
			}
			else if(typeof(sound) == "object" && sound.type == "audio")
			{
				this.soundtracks.push({id: this.Nodes.length, audio: sound});
			}
		},
		
		bgDissolveEffect: function()
		{
			if(this.Nodes.length!= 0)
			{
				var bgNew = new Background(this.Nodes[this.Nodes.length-1].background.src);
				bgNew.show = "dissolve";
				this.Nodes[this.Nodes.length-1].background = bgNew;
			}
		},
		
		setTextFont: function(font)
		{
			this.Tfont = font;
		},
		
		setTextColor: function(color)
		{
			this.Tcolor = color;
		},
		
		clickSound: function(sd)
		{
			if(typeof(sd) == "string")
			{
				this.clickAudio = new Audio(sd);
			}
			else if(typeof(sd) == "object" && sd.type == "audio")
			{
				this.clickAudio = sd;
			}
		},
		
		wrapText : function(context, text, x, y, maxWidth, lineHeight)
		{
			var words = text.split(' ');
			var line = '';
			
			for(var n = 0; n < words.length; n++) {
			  var testLine = line + words[n] + ' ';
			  var metrics = context.measureText(testLine);
			  var testWidth = metrics.width;
			  if (testWidth > maxWidth && n > 0) {
				context.fillText(line, x, y);
				line = words[n] + ' ';
				y += lineHeight;
			  }
			  else {
				line = testLine;
			  }
			}
			context.fillText(line, x, y);
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
		roundRect: function(x, y, w, h, radius)
		{
		  var r = x + w;
		  var b = y + h;
		  this.ctx.strokeStyle = this.ctx.fillStyle;
		  this.ctx.beginPath();
		  this.ctx.lineWidth="4";
		  this.ctx.moveTo(x+radius, y);
		  this.ctx.lineTo(r-radius, y);
		  this.ctx.quadraticCurveTo(r, y, r, y+radius);
		  this.ctx.lineTo(r, y+h-radius);
		  this.ctx.quadraticCurveTo(r, b, r-radius, b);
		  this.ctx.lineTo(x+radius, b);
		  this.ctx.quadraticCurveTo(x, b, x, b-radius);
		  this.ctx.lineTo(x, y+radius);
		  this.ctx.quadraticCurveTo(x, y, x+radius, y);
		  this.ctx.stroke();
		  this.ctx.fill();
		},
		
		volume: function(magnitude)
		{
			if(this.currentAudio != null)
			{
				this.currentAudio.volume(magnitude);
			}
		},
		
		Loop : function()
		{
			
			this.ctx.clearRect(0,0, this.element.width, this.element.height);
			
			this.element.setAttribute('width', window.innerWidth * dpi);
			this.element.setAttribute('height', window.innerHeight * dpi);
			if(this.Nodes.length > 0)
			{
				
			if(this.current != CURRENT)
			{
				this.current = parseInt(CURRENT);
			}
			
			this.endid = ENDID;
			
			//Manage the audio:
			
			if(Check(this.soundtracks, this.current) != -1)
			{
				if((this.currentAudio!= null) && (this.currentAudio.url != this.soundtracks[Check(this.soundtracks, this.current)].audio.url))
				{
					this.currentAudio.stop();
					this.currentAudio.remove();
				}
				
				if(this.currentAudio == null)
				{
					this.currentAudio = new Audio(this.soundtracks[Check(this.soundtracks, this.current)].audio.url);
				}
				
				this.currentAudio = new Audio(this.soundtracks[Check(this.soundtracks, this.current)].audio.url);
				this.currentAudio.play();
				this.currentAudio.loop();
				
				soundBand = this.currentAudio;
			}
			else
			{
				if(this.currentAudio == null)
				{
					this.currentAudio = new Audio(this.soundtracks[CheckCurrent(this.soundtracks, this.current)].audio.url);
					this.currentAudio.play();
					this.currentAudio.loop();
				}
			}
			
			if(this.Nodes[this.current].type != "blackscreen")
			{				
				//Manage background
				if((this.Nodes[this.current].background.src != "none") && (this.Nodes[this.current].background.src != null))
				{	
					var BackgroundImage = new Image();
					BackgroundImage.src = this.Nodes[this.current].background.src;
					
					if(this.Nodes[this.current].background.show == "dissolve")
					{
						if(this.back != BackgroundImage.src)
						{
							this.back = BackgroundImage.src;
							BGDISSOLVE = 0.4;
						}
						
						if(BGDISSOLVE<= 1.6)
						{
							this.ctx.globalAlpha = BGDISSOLVE;
							BGDISSOLVE += 0.02;
						}
						else
						{
							this.ctx.globalAlpha = 1.0;
						}
					}
					
					this.ctx.drawImage(BackgroundImage, 0, 0, this.element.width, this.element.height);
					
					this.ctx.globalCompositeOperation = "source-over";
				}
				
				if(this.Nodes[this.current].background.show == "dissolve" && BGDISSOLVE < 1.6)
				{
					this.SET = false;
				}
				else
				{
					this.SET = true;
				}

				//Manage Character
				if((this.Nodes[this.current].character.src != "none") && (this.Nodes[this.current].character.src != null))
				{			
					if(this.SET == true)
					{
						var image = new Image();
						image.src = this.Nodes[this.current].character.src;
						var ratio = image.width/ image.height; 
						
						if(this.Nodes[this.current].effect == "dissolve")
						{
							if(this.currentCharacter.src != image.src)
							{
								this.currentCharacter = image;
								DISSOLVE = 0.0;
							}
							
							if(DISSOLVE<= 1.0)
							{
								this.ctx.globalAlpha = DISSOLVE;
								DISSOLVE += 0.02;
							}
						}
						
						this.ctx.drawImage(image, ((this.element.width/2)-(this.element.height*0.3*ratio)), (this.element.height-(this.element.height*0.6)), (this.element.height*0.6*ratio), (this.element.height*0.6));
						
						this.ctx.globalAlpha = 1.0;
						this.ctx.globalCompositeOperation = "source-over";
					}
				}
				this.Bcolor = this.Nodes[this.current].character.color;
				var eventList = null;
			}
			else if(this.Nodes[this.current].type == "blackscreen")
			{
				this.back = "blackscreen";
				if((this.currentAudio != null) && this.Nodes[this.current].sound == false)
				{
					this.currentAudio.stop();
					this.currentAudio.remove();
				}
				this.ctx.beginPath();
				this.ctx.rect(0,0, this.element.width, this.element.height);
				this.ctx.fillStyle = "#000000";
				this.ctx.fill();
				
				this.ctx.fillStyle = "#FFFFFF";
				this.ctx.font = this.Tfont;
				this.textH = parseInt(this.ctx.font.match(/\d+/), 10);
				
				this.ctx.fillText(this.Nodes[this.current].title, (((this.element.width/2)-(this.element.width*0.3)+(this.element.width*0.3)))-(this.ctx.measureText(this.Nodes[this.current].title).width/2), ((this.element.height/3) + (this.element.height/20)) - (3*this.element.height/40)+(this.textH)+3);
			}
			
				//CREATE DIALOGUE			
			if(this.Nodes[this.current].type == "dialogue")
			{
				if(this.SET == true)
				{
					//Dialogue box
					this.ctx.globalAlpha = 0.7;
					this.ctx.fillStyle = this.Bcolor;
					this.ctx.font = this.Tfont;
					this.textH = parseInt(this.ctx.font.match(/\d+/), 10);
					
					this.ctx.fillRect(((this.element.width/2)-(this.element.width*0.4)), this.element.height - (this.element.height/4.25), (this.element.width*0.8), this.element.height/4.25);
					
						//Box text
					this.ctx.globalAlpha = 1.0;
					this.ctx.shadowBlur = 20;
					
					if(this.lightOrDark(this.Bcolor) == "light")
					{
						this.ctx.shadowColor = "black";
					}
					else if(this.lightOrDark(this.Bcolor) == "dark")
					{
						this.ctx.shadowColor = "white";
					}
					this.ctx.fillStyle = this.Tcolor;
					this.wrapText(this.ctx, this.Nodes[this.current].text, (this.element.width/2)-(this.element.width*0.4)+8, this.element.height-(this.element.height/4.25)+this.textH, (this.element.width*0.8), this.textH);
					
					//Name box
					this.ctx.globalAlpha = 0.7;
					this.ctx.fillStyle = this.Bcolor;
					this.ctx.font = this.Tfont;
					this.textH = parseInt(this.ctx.font.match(/\d+/), 10);
					
					this.roundRect(((this.element.width/2)-(this.element.width*0.4)), (this.element.height - (this.element.height/4.25)) - (3*this.element.height/40), (this.element.width*0.2), this.element.height/20, 20);
					
					this.ctx.globalAlpha = 1.0;
					
						//Name text
						
					this.ctx.fillStyle = this.Tcolor;
					
					this.ctx.fillText(this.Nodes[this.current].character.name, (((this.element.width/2)-(this.element.width*0.4)+(this.element.width*0.1)))-(this.ctx.measureText(this.Nodes[this.current].character.name).width/2), (this.element.height - (this.element.height/4.25)) - (3*this.element.height/40)+(this.textH)+3); 
					
					this.ctx.shadowBlur = 0.0;
				}
			}
			
			else if(this.Nodes[this.current].type == "choice")
			{
				this.element.removeEventListener("mousedown", this.next);
				this.onTime = false;
				//----------------------------------------Dark panel----------------------------------------------------
				this.ctx.globalAlpha = 0.7;
				this.ctx.fillRect(0,0, this.element.width, this.element.height);
				this.ctx.globalAlpha = 1.0;
				
				//----------------------------------------Choice #1 box-------------------------------------------------
				this.ctx.globalAlpha = 0.7;
				this.ctx.fillStyle = this.Bcolor;
				this.ctx.font = this.Tfont;
				this.textH = parseInt(this.ctx.font.match(/\d+/), 10);
				
				this.roundRect(((this.element.width/2)-(this.element.width*0.3)), ((this.element.height/3) + (this.element.height/20)) - (3*this.element.height/40), (this.element.width*0.6), this.element.height/20, 20);
				
				this.ctx.globalAlpha = 1.0;
				
					//Choice #1 text
					
				this.ctx.fillStyle = this.Tcolor;
				
				this.ctx.fillText(this.Nodes[this.current].ch1, (((this.element.width/2)-(this.element.width*0.3)+(this.element.width*0.3)))-(this.ctx.measureText(this.Nodes[this.current].ch1).width/2), ((this.element.height/3) + (this.element.height/20)) - (3*this.element.height/40)+(this.textH)+3); 
				
				//----------------------------------------Choice #2 box-------------------------------------------------
				this.ctx.globalAlpha = 0.7;
				this.ctx.fillStyle = this.Bcolor;
				this.ctx.font = this.Tfont;
				this.textH = parseInt(this.ctx.font.match(/\d+/), 10);
				
				this.roundRect(((this.element.width/2)-(this.element.width*0.3)), ((this.element.height/3) + (5*this.element.height/40)) - (3*this.element.height/40), (this.element.width*0.6), this.element.height/20, 20);
				
				this.ctx.globalAlpha = 1.0;
				
					//Choice #2 text
					
				this.ctx.fillStyle = this.Tcolor;
				
				this.ctx.fillText(this.Nodes[this.current].ch2, (((this.element.width/2)-(this.element.width*0.3)+(this.element.width*0.3)))-(this.ctx.measureText(this.Nodes[this.current].ch1).width/2), ((this.element.height/3) + (5*this.element.height/40)) - (3*this.element.height/40)+(this.textH)+3);
				
				
				var eleme = this.element;
				
				eventList = function(e)
				{
					var obj2 = {x: ((eleme.width/2)-(eleme.width*0.3)), y: ((eleme.height/3) + (5*eleme.height/40)) - (3*eleme.height/40), width: (eleme.width*0.6), height: eleme.height/20};
					
					var obj1 = {x: ((eleme.width/2)-(eleme.width*0.3)),y: ((eleme.height/3) + (eleme.height/20)) - (3*eleme.height/40),width: (eleme.width*0.6),height: eleme.height/20};
					
					var pt = { x: Number(e.offsetX), y: Number(e.offsetY)};
					
					if(Onclick(obj1, pt))
					{
						WINNER = 1;
					}
					if(Onclick(obj2, pt))
					{
						WINNER = 2;
					}
					
				}; this.element.addEventListener("mousedown", ()=>eventList(event), {once: true});
			}
			
			//Manage choices
			
			if(WINNER == 1)
			{
				this.element.addEventListener("mousedown", this.next);
				if(Check(this.linkList, this.current) != -1)
				{
					if(!this.onTime)
					{	
						var maximum = this.Nodes.length;
						var temporary = [];
						
						for(var te = (this.current+1); te< maximum; te++)
						{
							temporary.push(this.Nodes[te]);
						}
						
						this.Nodes.splice(this.current+1, (this.Nodes.length-1));
						
						eval("var re = "+this.linkList[Check(this.linkList, this.current)].first+"; re(this);");
						
						for(var ne = 0; ne< temporary.length; ne++)
						{
							this.Nodes.push(temporary[ne]);
						}
						
						CURRENT += 1;
						MAX = this.Nodes.length;
						
						if(ENDING != null)
						{
							ENDING.max = this.Nodes.length;
						}
						
						this.onTime = true;
					}
				}
				else
				{
					this.onTime = false;
				}
				WINNER = null;
			}
			else if(WINNER == 2)
			{
				this.element.addEventListener("mousedown", this.next);
				
				if(Check(this.linkList, this.current) != -1)
				{
					if(!this.onTime)
					{	
						var maximum = this.Nodes.length;
						var temporary = [];
						
						for(var te = (this.current+1); te< maximum; te++)
						{
							temporary.push(this.Nodes[te]);
						}
						
						this.Nodes.splice(this.current+1, (this.Nodes.length-1));
										
						this.linkList[Check(this.linkList, this.current)].second(this);
						eval("var dre = "+this.linkList[Check(this.linkList, this.current)].second+"; dre(this);");
						
						for(var ze = 0; ze< temporary.length; ze++)
						{
							this.Nodes.push(temporary[ze]);
						}
						
						CURRENT +=1;
						MAX = this.Nodes.length;
						
						if(ENDING != null)
						{
							ENDING.max = this.Nodes.length;
						}
						
						this.onTime = true;
					}
				}
				else
				{
					this.onTime = false;
				}
				WINNER = null;
			}

			}
			CANCEL = requestAnimationFrame(()=>this.Loop());
		},
		
		start: function(Ark)
		{
			if(!Ark)
			{			
				//document.body.appendChild(this.element);
			}
			
			MAX = this.Nodes.length;
			CURRENT = this.current;
			var click = this.clickAudio;
			const CANVAS = this.element;
			
			var func = function(){
				
				if((CURRENT+1) < MAX)
				{
					CURRENT += 1;
				}
				
				if(ENDID < (MAX))
				{
					ENDID += 1;
				}
				
				if((ENDING != null) && (ENDING.max == (ENDID+1)) && (ENDING.max == (CURRENT+1)))
				{
					click.stop();
					soundBand.stop();
					//cancelAnimationFrame(CANCEL);
					CURRENT = 0;
					ENDID = 0;
					CANVAS.removeEventListener("mousedown", func);
					ENDING.func();
				}
				else
				{
					click.volume(30);
					click.play();
				}
			};
			
			this.next = func;
			
			this.element.addEventListener("mousedown", func);
			
			if(Replay == false)
			{
				staticNodes = this.Nodes.slice(0);
				staticSoundtracks = this.soundtracks.slice(0);
				staticLinklist = this.linkList.slice(0);
				Replay = true;	
			}
			else if(Replay == true)
			{
				this.Nodes = staticNodes.slice(0);
				this.soundtracks = staticSoundtracks.slice(0);
				this.linkList = staticLinklist.slice(0);
			}
			
			this.Loop();
		},
		
		end: function(method)
		{
			if((method) && (typeof(method) == "function"))
			{
				ENDING = {func: method, max: this.Nodes.length};
			}
			else
			{
				ENDING = {func: function(){window.close();}, max: this.Nodes.length};
			}
		},
		
		gameStorage: function(name, element)
		{
			for(var y=0; y< this.storage.length; y++)
			{
				if(this.storage[y][0] != name)
				{
					this.storage.push([name, element]);
				}
				else if(this.storage[y][0] == name)
				{
					this.storage[y][0] = element;
				}
			}
		},
		
		save: function(code)
		{
			if(((code) || (code == 0)) && (typeof(code) == "string" || typeof(code) == "number"))
			{
				var setUpCode = code+"-"+(new Date().getTime());
				
				if(this.setUpCode == null)
				{
					this.setUpCode = setUpCode;
					
					if(JSON.parse(localStorage.getItem(code)))
					{
						var game = JSON.parse(localStorage.getItem(code));
						if(this.Nodes[this.current].background == null)
						{
							game.push({id: setUpCode, value: this, storage: this.storage, image: SceneNoire});
						}
						else
						{
							game.push({id: setUpCode, value: this, storage: this.storage, image: this.Nodes[this.current].background.src});
						}
						
						localStorage.setItem(code, JSON.stringify(game));
					}
					else
					{
						var game = [];
						
						if(this.Nodes[this.current].background == null)
						{
							game.push({id: setUpCode, value: this, storage: this.storage, image: SceneNoire});
						}
						else
						{
							game.push({id: setUpCode, value: this, storage: this.storage, image: this.Nodes[this.current].background.src});
						}
			
						localStorage.setItem(code, JSON.stringify(game));
					}
				}
				else
				{
					if(JSON.parse(localStorage.getItem(code)))
					{
						var ALL = JSON.parse(localStorage.getItem(code));
						var found = false;
						
						for(var s=0; s< ALL.length; s++)
						{
							if(this.setUpCode == ALL[s].id)
							{
								ALL[s].value = this;
								ALL[s].storage = this.storage;
								ALL[s].image = this.Nodes[this.current].background.src;
								found = true;
								break;
							}
							
						}
						
						if(found == false)
						{
							if(this.Nodes[this.current].background == null)
							{
								ALL.push({id: this.setUpCode, value: this, storage: this.storage, image: SceneNoire});
							}
							else
							{
								ALL.push({id: this.setUpCode, value: this, storage: this.storage, image: this.Nodes[this.current].background.src});
							}
						}
						
						localStorage.setItem(code, JSON.stringify(ALL));
					}
					else
					{
						var ALL = [];
						
						if(this.Nodes[this.current].background == null)
						{
							ALL.push({id: this.setUpCode, value: this, storage: this.storage, image: SceneNoire});
						}
						else
						{
							ALL.push({id: this.setUpCode, value: this, storage: this.storage, image: this.Nodes[this.current].background.src});
						}
						
						localStorage.setItem(code, JSON.stringify(ALL));
					}
				}
			}
		},
		
		getSaving: function(code)
		{
			if(JSON.parse(localStorage.getItem(code)))
			{
				return JSON.parse(localStorage.getItem(code));			
			}
			else
			{
				return false;
			}
		},
		
		addSaving: function(saved)
		{
			this.element.removeEventListener("mousedown", this.next);
			this.Bcolor = saved.value.Bcolor;
			this.Nodes = saved.value.Nodes; 
			this.SET = saved.value.SET;
			this.TColor = saved.value.Tcolor;
			this.Tfont = saved.value.Tfont;
			this.back = saved.value.back; //no need
			this.clickAudio.url = saved.value.clickAudio.url;
			this.current = saved.value.current;
			CURRENT = this.current;
			ENDID = saved.value.endid;
			this.currentCharacter = saved.value.currentCharacter;
			this.linkList = saved.value.linkList;
			this.onTime = saved.value.onTime;
			this.soundtracks = saved.value.soundtracks;
			
			this.textH = saved.value.textH;
			this.storage = saved.storage;
			this.setUpCode = saved.value.setUpCode;
		}
	});
	
	//---------------------------------------GAMEICON--------------------------------------------
	
	function gameIcon(ico) 
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
	
		//-----------------------GAME-------------------------------------
	function Game()
	{
		document.body.style.margin = "0px";
		document.body.style.padding = "0px";
		this.element = document.createElement("DIV");
		this.element.style.width = window.innerWidth+"px";
		this.element.style.height = window.innerHeight+"px";
		document.body.appendChild(this.element);
		this.children = [];
		this.now = 0;
		this.viewEnabled = false;
		var dr = this.element;
		
		window.addEventListener("resize", function()
		{
			dr.style.width = window.innerWidth+"px";
			dr.style.height = window.innerHeight+"px";
		});
	}
	Object.assign(Game.prototype, {
		add: function(el)
		{
			if(el.type == "panel")
			{
				this.children.push(el);
				this.element.appendChild(el.element);
				
				el.element.style.display = "none";
			}
		},
		
		view: function(panel)
		{
			if(panel.type=="panel")
			{
				var panelID = this.children.indexOf(panel); 
				for(var i=0; i< this.element.childElementCount; i++)
				{
					this.element.childNodes[i].style.display = "none";
				}
				
				this.element.childNodes[panelID].style.display = "block";
				this.now = panelID;
				this.viewEnabled = true;
				
				/*for(var r = 0; r< panel.children.length; r++)
				{
					
					if(panel.children[r].type == "scene")
					{
						panel.children[r].start(true);
					}
				}*/
			}			
		},
		
		next: function()
		{
			var max = this.element.childElementCount-1;
			
			if(this.now < max)
			{
				if(this.viewEnabled == true)
				{
					this.now += 1;
				}
				else if(this.viewEnabled == false)
				{
					this.now = 0;
				}
				this.view(this.children[this.now]);
			}			
		},
		
		previous: function()
		{
			if(this.now > 0)
			{
				if(this.viewEnabled == true)
				{
					this.now -= 1;
					this.view(this.children[this.now]);
				}
			}
		},
		
		closeWindow: function()
		{
			window.close();
		}
	});
	
	//------------------------PANEL-------------------------------------
	function Panel()
	{
		this.type = "panel";
		this.element = document.createElement("DIV");
		this.element.style.width = window.innerWidth+"px";
		this.element.style.height = window.innerHeight+"px";
		this.element.style.backgroundColor = "darkgreen";
		this.element.style.position = "absolute";
		//this.element.style.overflow = "scroll";
		var sr = this.element;
		this.children = [];
		
		window.addEventListener("resize", function()
		{
			sr.style.width = window.innerWidth+"px";
			sr.style.height = window.innerHeight+"px";
		});
	}
	Object.assign(Panel.prototype, {
		add: function(el, priority)
		{
			var elem;
			if((el.type) && (el.type == "image" || el.type == "button" || el.type == "scene"))
			{
				if( priority != null && typeof(priority) == "number")
				{
					el.element.style.position = "absolute";
					el.element.style.zIndex = priority;
				}
				this.element.appendChild(el.element);
				this.children.push(el);
			}
			else
			{
				if((priority) && typeof(priority) == "number")
				{
					el.style.zIndex = priority;
				}
				this.element.appendChild(el);
			}
		},
		
		background: function(style)
		{
			if(typeof(style) == "string")
			{
				if(style.lastIndexOf('.') != (-1))
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
		}
	});
	
	//------------------------BUTTON--------------------------------------
	var BW = [], BH = [], BX = [], BY = [], GR = [];
	var BD_TVN = 0;
	
	function button(title)
	{
		this.id = BD_TVN;
		this.type = "button";
		this.element = document.createElement("BUTTON");
		this.element.style.backgroundColor = "transparent";
		this.element.style.color = "white";
		this.element.style.cursor = "pointer";
		this.element.style.border = "none";
		this.element.style.fontSize = "107%";
		this.element.style.marginRight = "2%";
		this.element.style.borderRadius = "5%";
		this.element.style.position = "absolute";
		
		this.h = 0, this.w = 0;
		
		if((title) || (title != null))
		{
			var t = document.createTextNode(title);
			this.element.appendChild(t)
		}

		GR[BD_TVN] = this.element;
		
		BW[BD_TVN] = 0;
		BH[BD_TVN] = 0, BX[BD_TVN] = 0, BY[BD_TVN] = 0;
		BD_TVN += 1;
		
		window.addEventListener("resize", function()
		{
			var unitW = window.innerWidth/100;
			var unitH = window.innerHeight/100;
			
			for(var j = 0; j< BD_TVN; j++)
			{
				
				GR[j].style.width = (BW[j]*unitW)+"px";
				GR[j].style.height = (BH[j]*unitH)+"px";
				
				//Align X
				if(typeof(BX[j]) == "string")
				{
					if(BX[j].toLowerCase() == "left")
					{
						GR[j].style.marginLeft = "0px";
					}
					else if(BX[j].toLowerCase() == "center")
					{
						GR[j].style.marginLeft = ((window.innerWidth/2)-((BW[j]*unitW)/2))+"px";
					}
					else if(BX[j].toLowerCase() == "right")
					{
						GR[j].style.marginLeft = (window.innerWidth-(BW[j]*unitW))+"px";
					}
				}
				else if(typeof(BX[j]) == "number")
				{
					GR[j].style.marginLeft = (BX[j]*unitW)+"px";
				}
				
				//AlignY
				if(typeof(BY[j]) == "string")
				{
					if(BY[j].toLowerCase() == "top")
					{
						GR[j].style.marginTop = "0px";
					}
					else if(BY[j].toLowerCase() == "center")
					{
						GR[j].style.marginTop = ((window.innerHeight/2)-((BH[j]*unitH)/2))+"px";
					}
					else if(BY[j].toLowerCase() == "bottom")
					{
						GR[j].style.marginTop = (window.innerHeight-(BH[j]*unitH))+"px";
					}
				}
				else if(typeof(BY[j]) == "number")
				{
					GR[j].style.marginTop = (BY[j]*unitH)+"px";
				}
			}
		});
	}
	Object.assign(button.prototype, {
		
		fontColor: function(c)
		{
			this.element.style.color = c;
		},
		
		background: function(style)
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
		
		title: function(t)
		{
			if(typeof(t) == "string")
			{
				var RE = document.createTextNode(t);
				this.element.appendChild(RE);
				
				var ind = (this.element.style.fontSize).lastIndexOf('%');
				var size = Number((this.element.style.fontSize).substring(0, (this.element.style.fontSize).length-1));
				var width = ((t.length*16)*(size))/window.innerWidth;
				
				if(this.w < width)
				{
					this.width(width);
				}
			}
		},
		
		width: function(w)
		{
			//w is between 0 to 100
			var unit = window.innerWidth/100;
			this.element.style.width = (w*unit)+"px"; 
			this.w = w;
			BW[this.id] = w;
		},
		
		height: function(h)
		{
			//h is between 0 to 100
			var unit = window.innerHeight/100;
			this.element.style.height = (h*unit)+"px";
			this.h = h;
			BH[this.id] = h;
		},
		
		alignX: function(par)
		{
			if(this.element.style.position != "absolute")
			{
				this.element.style.position = "absolute";
			}
			
			var unit = window.innerWidth/100;
			
			if(typeof(par) == "string")
			{
				if(par.toLowerCase() == "left")
				{
					BX[this.id] = "left";
					this.element.style.marginLeft = "0px";
				}
				else if(par.toLowerCase() == "center")
				{
					BX[this.id] = "center";
					this.element.style.marginLeft = ((window.innerWidth/2)-((this.w*unit)/2))+"px";
				}
				else if(par.toLowerCase() == "right")
				{
					BX[this.id] = "right";
					this.element.style.marginLeft = (window.innerWidth-(this.w*unit))+"px";
				}
			}
			else if(typeof(par) == "number")
			{
				BX[this.id] = par;
				this.element.style.marginLeft = (par*unit)+"px";
			}
		},
		
		alignY: function(par)
		{
			if(this.element.style.position != "absolute")
			{
				this.element.style.position = "absolute";
			}
			
			var unit = window.innerHeight/100;
			
			if(typeof(par) == "string")
			{
				if(par.toLowerCase() == "top")
				{
					BY[this.id] = "top";
					this.element.style.marginTop = "0px";
				}
				else if(par.toLowerCase() == "center")
				{
					BY[this.id] = "center";
					this.element.style.marginTop = ((window.innerHeight/2)-((this.h*unit)/2))+"px";
				}
				else if(par.toLowerCase() == "bottom")
				{
					BY[this.id] = "bottom";
					this.element.style.marginTop = (window.innerHeight-(this.h*unit))+"px";
				}
			}
			else if(typeof(par) == "number")
			{
				BY[this.id] = par;
				this.element.style.marginTop = (par*unit)+"px";
			}
		},
		
		eventListener: function(event, method)
		{
			this.element.addEventListener(event, method);
		},
		
		check: function(other)
		{		
			if((this.element == other) || ((other.type == "button") && (other.element == this.element)))
			{
				return true;
			}
			else
			{
				return false;
			}
		}

	});
	
	//------------------------IMAGE-------------------------------------
	var IW = [], IH = [], IX = [], IY = [], FR = [];
	var ID_TVN = 0;
	
	function image(src)
	{
		this.id = ID_TVN;
		this.type = "image";
		this.element = new Image();
		this.element.src = src || "none";
		this.element.style.position = "absolute";
		this.w = 0, this.h = 0;
		FR[ID_TVN] = this.element;
		
		IW[ID_TVN] = 0, IH[ID_TVN] = 0, IX[ID_TVN] = 0, IY[ID_TVN] = 0;
		ID_TVN += 1;
		
		window.addEventListener("resize", function()
		{
			var unitW = window.innerWidth/100;
			var unitH = window.innerHeight/100;
			
			for(var i = 0; i< ID_TVN; i++)
			{
				FR[i].style.width = (IW[i]*unitW)+"px";
				FR[i].style.height = (IH[i]*unitH)+"px";
				
				//Align X
				if(typeof(IX[i]) == "string")
				{
					if(IX[i].toLowerCase() == "left")
					{
						FR[i].style.marginLeft = "0px";
					}
					else if(IX[i].toLowerCase() == "center")
					{
						FR[i].style.marginLeft = ((window.innerWidth/2)-((IW[i]*unitW)/2))+"px";
					}
					else if(IX[i].toLowerCase() == "right")
					{
						FR[i].style.marginLeft = (window.innerWidth-(IW[i]*unitW))+"px";
					}
				}
				else if(typeof(IX[i]) == "number")
				{
					FR[i].style.marginLeft = (IX[i]*unitW)+"px";
				}
				
				//AlignY
				if(typeof(IY[i]) == "string")
				{
					if(IY[i].toLowerCase() == "top")
					{
						FR[i].style.marginTop = "0px";
					}
					else if(IY[i].toLowerCase() == "center")
					{
						FR[i].style.marginTop = ((window.innerHeight/2)-((IH[i]*unitH)/2))+"px";
					}
					else if(IY[i].toLowerCase() == "bottom")
					{
						FR[i].style.marginTop = (window.innerHeight-(IH[i]*unitH))+"px";
					}
				}
				else if(typeof(IY[i]) == "number")
				{
					FR[i].style.marginTop = (IY[i]*unitH)+"px";
				}
			}
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
		
		width: function(w)
		{
			//w is between 0 to 100
			var unit = window.innerWidth/100;
			this.element.style.width = (w*unit)+"px"; 
			this.w = w;
			IW[this.id] = w;
		},
		
		height: function(h)
		{
			//h is between 0 to 100
			var unit = window.innerHeight/100;
			this.element.style.height = (h*unit)+"px";
			this.h = h;
			IH[this.id] = h;
		},
		
		alignX: function(text)
		{
			if(this.element.style.position != "absolute")
			{
				this.element.style.position = "absolute";
			}
			
			var unit = window.innerWidth/100;
			
			if(typeof(text) == "string")
			{
				if(text.toLowerCase() == "left")
				{
					IX[this.id] = "left";
					this.element.style.marginLeft = "0px";
				}
				else if(text.toLowerCase() == "center")
				{
					IX[this.id] = "center";
					this.element.style.marginLeft = ((window.innerWidth/2)-((this.w*unit)/2))+"px";
				}
				else if(text.toLowerCase() == "right")
				{
					IX[this.id] = "right";
					this.element.style.marginLeft = (window.innerWidth-(this.w*unit))+"px";
				}
			}
			else if(typeof(text) == "number")
			{
				IX[this.id] = text
				this.element.style.marginLeft = (text*unit)+"px";
			}
		},
		
		alignY: function(text)
		{
			if(this.element.style.position != "absolute")
			{
				this.element.style.position = "absolute";
			}
			
			var unit = window.innerHeight/100;
			
			if(typeof(text) == "string")
			{
				if(text.toLowerCase() == "top")
				{
					IY[this.id] = "top";
					this.element.style.marginTop = "0px";
				}
				else if(text.toLowerCase() == "center")
				{
					IY[this.id] = "center";
					this.element.style.marginTop = ((window.innerHeight/2)-((this.h*unit)/2))+"px";
				}
				else if(text.toLowerCase() == "bottom")
				{
					IY[this.id] = "bottom";
					this.element.style.marginTop = (window.innerHeight-(this.h*unit))+"px";
				}
			}
			else if(typeof(text) == "number")
			{
				IY[this.id] = text;
				this.element.style.marginTop = (text*unit)+"px";
			}
		}
	});
	
	//------------------------------------------------------------------

	exports.Panel = Panel;
	exports.Audio = Audio;
	exports.Background = Background;
	exports.button = button;
	exports.Character = Character;
	exports.Game = Game;
	exports.gameIcon = gameIcon;
	exports.image = image;
	exports.Scene = Scene;
	

Object.defineProperty(exports, '__esModule', { value: true });
})));