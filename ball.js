function Ball(radius,color){
	if(radius==undefined){radius=40}
	if(color==undefined){color="#FF0000";}
	//x轴坐标：X
	//y轴坐标：Y
	this.x=0;
	this.y=0;
	//圆的半径：R=>radius
	this.radius=radius;
	
	//速度单位：V=>velocity
	this.vx=0;
	this.vy=0;
	
	//质量单位：M=>mass
	this.mass=1;
	
	this.rotation=0;
	this.rotationLine=0;
	//缩放属性
	this.scaleX=1;
	this.scaleY=1;
	
	//绘图填充颜色
	this.color=utils.parseColor(color);
	//设置线宽
	this.lineWidth=1;
}

Ball.prototype.draw=function(context){
	//保存canvas当前路径
	context.save();
	//平移坐标系（居中、居左、居右）
	context.translate(this.x,this.y);
	//旋转坐标系
	context.rotate(this.rotation);
	//缩放坐标系
	context.scale(this.scaleX,this.scaleY);
	//设置线条宽度（属性）
	context.lineWidth=this.lineWidth;
	//设置填充颜色风格（属性）
	context.fillStyle=this.color;
	
	//开始定义路径
	context.beginPath();
	//向canvas路径上添加一段弧
	context.arc(0,0,this.radius,0,(Math.PI*2),true);
	//结束路径
	context.closePath();
	
	
	//开始填充
	context.fill();
	if(this.lineWidht>0){
		//沿着canvas当前路径绘制边框
		context.stroke();
	}
	//回复之前保存的绘图状态
	context.restore();
};
Ball.prototype.timeNumber=function (context){
	//保存canvas当前路径
	context.save();
	//平移坐标系（居中、居左、居右）
	context.translate(this.x,this.y);
	
	//设置字体样式
    context.font = "15px Courier New";
    //设置字体填充颜色
    context.fillStyle = "#000000";
    //从坐标点(50,50)开始绘制文字
    context.fillText("12", -10, -75);
	context.fillText("6", -5, 83);
	context.fillText("3", 75, 5);
	context.fillText("9", -85, 5);
	
	//回复之前保存的绘图状态
	context.restore();
};
Ball.prototype.getBounds=function (){
	//构造函数
	return{
		x:this.x-this.radius,
		y:this.y-this.radius,
		widht:this.radius*2,
		height:this.radius*2
	};
};

function ScaleS(radius){
	this.radius= radius == undefined ? 100 : radius;
	this.x=0;
	this.y=0;
	this.rotation=0;
	this.lineWidth=1;
	this.color="#000000";
	this.scaleLength=10;
}
ScaleS.prototype.timeScale=function(context){
	//保存canvas当前路径
	context.save();
	//平移坐标系（居中、居左、居右）
	context.translate(this.x,this.y);
	
	context.rotate(this.rotation);
	
	context.lineWidth = this.lineWidth;
	
	//线条颜色（支持颜色编码与rgb()函数）
	context.strokeStyle = this.color;
	
	//开始定义路径
	context.beginPath();
	context.moveTo(this.radius-this.scaleLength, 0);
	context.lineTo(this.radius-5, 0);
	context.stroke();
	//结束路径
	context.closePath();
	
	//回复之前保存的绘图状态
	context.restore();
}
function Line(radius,color,angle,point){
	if(radius==undefined){radius=95}
	if(color==undefined){color="#000000";}
	if(point===undefined){point=0;}
	//x轴坐标：X
	//y轴坐标：Y
	this.x=0;
	this.y=0;
	//圆的半径：R=>radius
	this.radius=radius;
	
	//速度单位：V=>velocity
	this.vx=0;
	this.vy=0;
	
	//质量单位：M=>mass
	this.mass=1;
	
	this.rotation=0;
	//缩放属性
	this.scaleX=1;
	this.scaleY=1;
	
	//绘图填充颜色
	this.color=color;
	//设置线宽
	this.lineWidth=1;
	
	this.angle=angle;
	this.timePoint=point;
	this.name=null;
}
//原始针
Line.prototype.anima=function (context){
	context.save();
	
	//设置指针原点
	context.translate(this.x,this.y);
	//旋转坐标系
	context.rotate(this.rotation);
	//线条宽度
	context.lineWidth = this.lineWidth;
	
	//线条颜色（支持颜色编码与rgb()函数）
	context.strokeStyle = this.color;

	//开始定义路径
	context.beginPath();
	
	context.moveTo(0, 0);
	context.lineTo(this.radius, 0);
	context.stroke();
	//结束路径
	context.closePath();
	
	context.restore();
}
//特写秒针
Line.prototype.animaSecondHand=function (context){
	context.save();
	//设置指针原点
	context.translate(this.x,this.y);
	//旋转坐标系
	context.rotate(this.rotation);
	//线条颜色（支持颜色编码与rgb()函数）
	context.strokeStyle = this.color;
	
	//开始定义路径
	context.beginPath();
	context.lineWidth = 1;
	context.arc(0,0,5,0,(Math.PI*2),true);
	context.fillStyle=this.color;
	context.fill();
	context.stroke();
	//结束路径
	context.closePath();
	
	context.beginPath();
	context.lineWidth = 3;
	context.moveTo(0, 0);
	context.lineTo(this.radius-80, 0);
	context.arc(this.radius-70,0,6,0,(Math.PI*2),true);
	context.fillStyle=this.color;
	context.fill();
	context.stroke();
	context.closePath();
	
	context.beginPath();
	context.lineWidth = 1;
	context.moveTo(0, 0);
	context.lineTo(this.radius, 0);
	context.stroke();
	context.closePath();
	
	context.beginPath();
	context.lineWidth = 1;
	context.moveTo(this.radius, 0);
	context.bezierCurveTo(40,5,40,5,this.radius-65,0);
	context.bezierCurveTo(40,-5,40,-5,this.radius,0);
	context.fillStyle=this.color;
	context.fill();
	context.stroke();
	context.closePath();
	
	context.restore();
}
//特写时针分针（未完成）
Line.prototype.animaHands=function (context){
	context.save();
	//设置指针原点
	context.translate(this.x,this.y);
	//旋转坐标系
	context.rotate(this.rotation);
	//线条颜色（支持颜色编码与rgb()函数）
	context.strokeStyle = this.color;
	
	
	
	context.restore();
}

