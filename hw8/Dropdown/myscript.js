function SetEvents(dropN,dropdownN){
    var toggle = document.getElementsByClassName(dropN),
        dropdown_menu = document.getElementsByClassName(dropdownN);
 
        toggle[0].onmouseover = function(){
            dropdown_menu[0].style.display="block";
        };
        toggle[0].onmouseout = function(){
                dropdown_menu[0].style.display="none";
        };
}
for(var i = 1; i < 6; i++)
    SetEvents("drop" + i, "dropdown" + i);