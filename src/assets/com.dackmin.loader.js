function FacebookLoader(options){
	
	//Options
	this.width = options.width || Ti.UI.SIZE;
	this.height = options.height || 50;
	this.top = options.top || false;
	this.bottom = options.bottom || false;
	this.loadingText = options.loadingText || "Loading";
	this.errorText = options.errorText || "Error";
	this.loadingColor = options.loadingColor || "#4bcc1f";
	this.errorColor = options.errorColor || "#ff9b30";
	this.state = "loading";
	
	//Internal
	this.loaderView = Ti.UI.createView({
		backgroundColor : this.loadingColor
	});
	if(this.top != false) this.loaderView.top = this.top;
	if(this.bottom != false) this.loaderView.bottom = this.bottom;
	
	this.loaderLabel = Ti.UI.createLabel({
		text : this.loadingText,
		textAlign : "center"
	});
	this.loaderView.add(this.loaderLabel);
	
};

FacebookLoader.prototype.setWidth = function(width){
	this.width = width;
	this.loaderView.width = width;
};

FacebookLoader.prototype.setHeight = function(height){
	this.height = height;
	this.loaderView.height = height;
};

FacebookLoader.prototype.setTop = function(top){
	this.top = top;
	this.loaderView.top = top;
};

FacebookLoader.prototype.setBottom = function(bottom){
	this.bottom = bottom;
	this.loaderView.bottom = bottom;
};

FacebookLoader.prototype.toggle = function(){
	if(this.state == "loading") this.error();
	else this.load();
};

FacebookLoader.prototype.load = function(){
	this.state = "loading";
	this.loaderView.backgroundColor = this.loadingColor;
};

FacebookLoader.prototype.error = function(){
	this.state = "error";
	this.loaderView.backgroundColor = this.errorColor;
};

exports.FacebookLoader = FacebookLoader;