var suites = document.querySelectorAll('.suites');

var overview =document.getElementById('pic');

var bar = document.querySelectorAll('.bar');

var reservepic1 = document.getElementById('reservepic1');

var reservepic2 = document.getElementById('reservepic2');

var selection = document.getElementById("select");
var contacts = document.querySelectorAll('.contact');
var menulist = document.querySelectorAll('.menulist');
var i=0;
var j =0;
var s=0;
var next=0;
var num = 0;
bar[0].classList.add('showbar');
menulist[0].classList.add('showmenu');
contacts[0].classList.add('showi');
suites[0].classList.add('show'); 

setInterval(changebg,3000);

//this code of blocks is for contacts functionality
function nextinfo(){
    if(next>=contacts.length-1){
        next =0;
    }else{
        next++;
    }
   for(var d=0;d<contacts.length;d++){
    if(next == d){
       continue;
    }else{
        contacts[d].classList.remove('showi');
    }
    contacts[next].classList.add('showi');
   }
}
function previnfo(){
    if(next<=0){
        next =contacts.length-1;
    }else{
        next--;
    }
   for(var d=0;d<contacts.length;d++){
    
    if(next == d){
       continue;
    }else{
        contacts[d].classList.remove('showi');
    }
    contacts[next].classList.add('showi');
   }
}

// code for changing bar background
function changebg(){
  
    if(j>=bar.length-1){
        j=0;
    }else{
        j++;
    }
    for(var d=0;d<bar.length;d++){
    
        if(j == d){
           continue;
        }else{
            bar[d].classList.remove('showbar');
        }
       }
       bar[j].classList.add('showbar');
       
}
/* Codes for Dropdown Room List*/
var dropdown = document.querySelector('.dropdown');
function hidelist(){
    dropdown.classList.remove('showlist');
}
function showlist(){
        dropdown.classList.add('showlist');

}

/* Codes for Menu*/
var t = 0;
function showmenu(){
    if(t>=menulist.length-1){
        t=0;
    }else{
        t++; 
    }
    console.log(t);
    for(var r=0;r<menulist.length;r++){
        if(r==t){
            continue;
        }else{
            menulist[r].classList.remove('showmenu');
        }
        }
        menulist[t].classList.add('showmenu');   
}
/* Codes for Reservation*/
document.getElementById('room1').addEventListener('click',()=>{
    reservepic1.style.backgroundImage = "url('Standard\ \(3\).jpeg')";
    reservepic2.style.backgroundImage = "url('Standard\ \(1\).jpeg')";
    selection.innerHTML="Standard AC Room";
    dropdown.classList.remove('showlist');
});
document.getElementById('room2').addEventListener('click',()=>{
    reservepic1.style.backgroundImage = "url('Suites\ \(1\).jpeg')";
    reservepic2.style.backgroundImage = "url('Suites\ \(4\).jpeg')";
    selection.innerHTML="Callapao 1";
    dropdown.classList.remove('showlist');
});
document.getElementById('room3').addEventListener('click',()=>{
    reservepic1.style.backgroundImage = "url('Suites\ \(3\).jpeg')";
    reservepic2.style.backgroundImage = "url('Room2.jpeg')";
    selection.innerHTML="Callapao 2";
    dropdown.classList.remove('showlist');
});
document.getElementById('room4').addEventListener('click',()=>{
    reservepic1.style.backgroundImage = "url('Suites\ \(5\).jpeg')";
    reservepic2.style.backgroundImage = "url('Room2\ \(2\).jpeg')";
    selection.innerHTML="Family Room";
    dropdown.classList.remove('showlist');
});
/*code for suites*/
function increase(){
    if(i>=suites.length-1){
        i=i;
    }else{
        i++; 
    }
   
    for(var j=0;j<suites.length;j++){
        if(j==i){
            continue;
        }else{
            suites[j].classList.remove('show');
        }
        }
        suites[i].classList.add('show'); 
}

function decrease(){
    if(i<=0){
        i=0;
    }else{
        i--; 
    }
    for(var j=0;j<suites.length;j++){
        if(j==i){
            continue;
        }else{
            suites[j].classList.remove('show');
        }
        }
        suites[i].classList.add('show');     
}
// code for book
var selected = document.querySelector('.booking');
var showbookf = document.querySelector('.bookform');
function book(){

    var gname = document.getElementById('name').value;
    var departure = document.getElementById('departure').value;
    var arrival = document.getElementById('arrival').value;
    

    if(gname && departure&& arrival){
        if(selection.innerText == "Select Room"){
            alert("select Room");
        }else{
            document.querySelector('.fname').innerText += gname;
            document.querySelector('.arrive').innerText += arrival;
            document.querySelector('.depart').innerText += departure;
            document.querySelector('.room').innerText += selection.innerText;
            showbookf.classList.add('showform');
        }
    }else{
        alert("Please Fill up all the form");
    }

}
function closebook(){
    selected.classList.remove('showbook')
}
function confirm(){
    selected.classList.add('showbook');
    showbookf.classList.remove('showform');
}
function cancel(){
    showbookf.classList.remove('showform');
    document.querySelector('.fname').innerText ="Fullname: ";
            document.querySelector('.arrive').innerText = "Arrival: ";
            document.querySelector('.depart').innerText = "Departure ";
            document.querySelector('.room').innerText = "Room: ";
}



