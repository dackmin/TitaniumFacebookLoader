function FacebookLoader(options){
	
	//Options
	this.width = options.width || "100%";
	this.height = options.height || 25;
	this.top = options.top || "not";
	this.bottom = options.bottom || "not";
	this.font = options.font || "not";
	this.zIndex = options.zIndex || 0;
	this.visible = options.visible || false;
	this.loadingText = options.loadingText || "Loading";
	this.errorText = options.errorText || "Error";
	this.loadingColor = options.loadingColor || "#4bcc1f";
	this.loadingTextColor = options.loadingTextColor || "#FFF";
	this.errorColor = options.errorColor || "#ff9b30";
	this.errorTextColor = options.errorTextColor || "#FFF";
	this.state = "loading";
	
	//Internal
	this.loaderView = Ti.UI.createView({
		backgroundColor : this.loadingColor,
		zIndex : this.zIndex,
		width : this.width,
		height : this.height,
		visible : this.visible
	});
	
	if(this.top != "not") this.loaderView.top = this.top;
	if(this.bottom != "not") this.loaderView.bottom = this.bottom;
	
	this.loaderLabel = Ti.UI.createLabel({
		text : this.loadingText,
		textAlign : "center",
		color : this.loadingTextColor
	});
	this.loaderView.add(this.loaderLabel);
	
	if(this.font != "not") this.loaderLabel.font = this.font;
	
};

FacebookLoader.prototype.createLoader = function(){
	return this.loaderView;
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

FacebookLoader.prototype.setFont = function(font){
	this.font = font;
	this.loaderLabel.font = font;
};

FacebookLoader.prototype.toggle = function(){
	if(this.state == "loading") this.error();
	else this.load();
};

FacebookLoader.prototype.load = function(){
	this.state = "loading";
	this.loaderView.backgroundColor = this.loadingColor;
	this.loaderLabel.text = this.loadingText;
	this.loaderLabel.color = this.loadingTextColor;
};

FacebookLoader.prototype.error = function(){
	this.state = "error";
	this.loaderView.backgroundColor = this.errorColor;
	this.loaderLabel.text = this.errorText;
	this.loaderLabel.color = this.errorTextColor;
};

FacebookLoader.prototype.show = function(){
	this.visible = true;
	this.loaderView.show();
};

FacebookLoader.prototype.hide = function(){
	this.visible = false;
	this.loaderView.hide();
};

exports.FacebookLoader = FacebookLoader;