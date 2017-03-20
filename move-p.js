/**
 * Created by arvin on 2017/2/7.
 */
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}
function startMove(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var bStop=true;
        for(var attr in json){
            var cur=0;
            if(attr=='opacity'){
                cur=parseInt(parseFloat(getStyle(obj,attr))*100);
            }
            else{
                cur=parseInt(getStyle(obj,attr));
            }
            var speed=(json[attr]-cur)/8;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //  document.title=cur+'----'+speed;
            if(json[attr]!=cur){
                bStop=false;
            }
            if(attr=='opacity'){
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style[attr]=(cur+speed)/100;
            }
            else{
                obj.style[attr]=cur+speed+'px';
            }
         }
        if(bStop){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },30);
}