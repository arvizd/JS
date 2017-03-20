/**
 * Created by arvin on 2017/2/7.
 * 用于获取非行间样式
 */
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}