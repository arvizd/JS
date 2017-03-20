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
function startMove(obj,attr,end){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var cur=0;
        if(attr=='opacity'){
            cur=parseInt(parseFloat(getStyle(obj,attr))*100);
        }
        else{
            cur=parseInt(getStyle(obj,attr));
        }
        var speed=(end-cur)/8;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //  document.title=cur+'----'+speed;
        if(end==cur){
            clearInterval(obj.timer);
        }
        else{
            //cur+=speed;
            if(attr=='opacity'){
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style[attr]=(cur+speed)/100;
            }
            else{
                obj.style[attr]=cur+speed+'px';
            }


        }
    },30);
}