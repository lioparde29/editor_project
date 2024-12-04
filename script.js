var codes=document.getElementById(`codes`);
var edit=document.getElementById(`edit`);
var remove=document.getElementById(`remove`);
var result=document.getElementById(`result`);

edit.onclick=()=>{
    result.innerHTML=codes.value;
    localStorage.setItem(`RESULT`,codes.value);
}

remove.onclick=()=>{
    result.innerHTML=``;
    codes.value=``;
}

onload=()=>{
    codes.value=localStorage.getItem(`RESULT`);
    result.innerHTML=codes.value;
}



