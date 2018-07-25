window.onload = function() {        
    window.form = {
        idLabel : document.getElementById("label-id"),
        pwdLabel : document.getElementById("label-pwd"),
        userId : document.getElementById("user-id"),
        userPwd : document.getElementById("user-pwd"),
        idPanel : document.getElementById("id-panel"),
        pwdPanel : document.getElementById("pwd-panel"),
    }
}


function onFocus(event) {       
    switch(event.target){
		//�û��������
        case form.idPanel : 
        case form.userId :
        {
            removeClass(form.userId, "close-input");
            removeClass(form.idLabel, "close-label");
            addClass(form.idLabel,"open-label");
            addClass(form.userId,"open-id");
            form.userId.focus();
        };break;
        //���������
        case form.pwdPanel :     
        case form.userPwd :
        {
            removeClass(form.userPwd, "close-input");
            removeClass(form.pwdLabel, "close-label");
            addClass(form.pwdLabel,"open-label");
            addClass(form.userPwd,"open-pwd");
            form.userPwd.focus();
        };break;
    }
}
function onBlur(event) {   
    switch(event.target){
		//�û��������
        case form.userId :
        {
            if(event.target.value.length === 0) {
                removeClass(form.idLabel, "open-label");
                removeClass(form.userId, "open-id");
                addClass(form.userId, "close-input");
                addClass(form.idLabel, "close-label");
            }
        };break;
        //���������
        case form.userPwd :
        {
            if(event.target.value.length === 0) {
                removeClass(form.pwdLabel, "open-label");
                removeClass(form.userPwd, "open-pwd");
                addClass(form.userPwd, "close-input");
                addClass(form.pwdLabel, "close-label");
            }
        };break;
    }
}
//�������
function addClass(ele,newClass){
    if (ele.className.indexOf(" "+newClass) === -1) {  //������������
        ele.className += " "+newClass;
    }
}
//�Ƴ�����
function removeClass(ele,oldClass){
    if (ele.className.indexOf(" "+oldClass) !== -1) {    //����������
        ele.className =  ele.className.replace(" "+oldClass,"");
    }
}
function enter(event) { 
    if(event.keyCode === 13) {
        checkForm();
    }
}
