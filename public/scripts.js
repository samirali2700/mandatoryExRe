function toggle(str){
    const dd = document.getElementById(str)

    if(dd.classList.contains('w3-hide')){
        dd.classList.remove('w3-hide');
        dd.parentElement.classList.remove('w3-hover-green');
    }
    else{
        dd.classList.add('w3-hide');
        dd.parentElement.classList.add('w3-hover-green');
    }

}