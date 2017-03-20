/**
 * Created by arvin on 2017/2/9.
 */
function setStyle(obj,json){
    var attr=' ';
    for(attr in json){
        obj.style[attr]=json[attr];
    }
}