/**
 * Created by arvin on 2017/2/9.
 */
function  getByClass(oParent,oClass) {
    var aEle=document.getElementsByTagName('*');
    var aResult=[];
    for (var i=0;i<aEle.length;i++){
        if(aEle.className==oClass){
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}