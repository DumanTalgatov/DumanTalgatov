$(document).ready(function(){
    
	$(".up").hide(); 
	$("#PLACES").click(function(){
   
    $(".visibleMenu").toggle(500);
      
    	$(".up").toggle(); 
    	$(".down").toggle();
	});  
});
function popup(){
    var btn = document.getElementById("CONTACT").innerHTML;
    if(btn == "CONTACTS US"){
        document.querySelector(".popup").style.display = "flex";
        $(".popup").animate({opacity: "1"}, "slow");
        document.body.style.overflow = "hidden";
        document.querySelector(".carouseltxt").style.display = "none";
    }
    else{
        logout();
    }
}
function close_popup(){
    $(".popup").animate({opacity: "0"}, "slow");
    document.querySelector(".popup").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("username").value = "";
    document.getElementById("pass").value = "";
    document.querySelector(".carouseltxt").style.display = "flex";

}
function login(name){
    document.querySelector(".user_profile").style.display = "inline";
    document.getElementById("user_name").innerHTML = name;
    
    close_popup();
}
function logout(){
    document.querySelector(".user_profile").style.display = "none";
    
}
function mapap(){
    var btn = document.getElementById("DESTINATIONS").innerHTML;
    if(btn == "DESTINATIONS"){
        document.querySelector("#map").style.display = "flex";
        document.querySelector("#maptxt").style.display = "flex";
        $("#map").animate({opacity: "1"}, "slow");
        $("#maptxt").animate({opacity: "1"}, "slow");
        document.querySelector(".main").style.display = "none";
        document.querySelector(".carouseltxt").style.display = "none";
        document.querySelector(".row").style.display = "none";
        document.querySelector(".inspiration").style.display = "none";
    }
}
function region(){
    document.querySelector(".east").style.display = "block";   
    document.querySelector(".west").style.display = "none";   
    document.querySelector(".north").style.display = "none";   
    document.querySelector(".south").style.display = "none";   
    document.querySelector(".carouseltxt").style.display = "none";
    document.querySelector(".main").style.display = "none";
    document.querySelector(".row").style.display = "none";
    document.querySelector(".inspiration").style.display = "none";

}
function region1(){
    document.querySelector(".east").style.display = "none";   
    document.querySelector(".west").style.display = "block";   
    document.querySelector(".north").style.display = "none";   
    document.querySelector(".south").style.display = "none"; 
    document.querySelector(".carouseltxt").style.display = "none";
    document.querySelector(".main").style.display = "none";
    document.querySelector(".row").style.display = "none"; 
    document.querySelector(".inspiration").style.display = "none";
    
}
function region2(){
    document.querySelector(".east").style.display = "none";   
    document.querySelector(".west").style.display = "none";   
    document.querySelector(".north").style.display = "block";   
    document.querySelector(".south").style.display = "none";   
    document.querySelector(".carouseltxt").style.display = "none";
    document.querySelector(".main").style.display = "none";
    document.querySelector(".row").style.display = "none"; 
    document.querySelector(".inspiration").style.display = "none";

}
function region3(){
    document.querySelector(".east").style.display = "none";   
    document.querySelector(".west").style.display = "none";   
    document.querySelector(".north").style.display = "none";   
    document.querySelector(".south").style.display = "block";    
    document.querySelector(".carouseltxt").style.display = "none";
    document.querySelector(".main").style.display = "none";
    document.querySelector(".row").style.display = "none";
    document.querySelector(".inspiration").style.display = "none";
 
}
function inspiration(){
    document.querySelector(".main").style.display = "none";
    document.querySelector(".carouseltxt").style.display = "none";
    document.querySelector(".row").style.display = "none";
    document.querySelector(".inspiration").style.display = "block";
    document.querySelector("#map").style.display = "none";
    document.querySelector("#maptxt").style.display = "none";
}