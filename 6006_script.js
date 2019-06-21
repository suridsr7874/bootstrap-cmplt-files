let inputField=document.querySelector('#inputfield');
let checkBox=document.querySelector('#checkbox');
checkBox.addEventListener('change',function () {
    let textEntered=checkBox.value.length;
    let theAttribute=formControli.getAttribute('type');
    if(theAttribute==='password'){
        formControli.setAttribute('type','text');
    }
    else {
        formControli.setAttribute('type','password');
    }
});

