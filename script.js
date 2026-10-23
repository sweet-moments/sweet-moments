
// 1. Current date on the home page
var d=document.getElementById("today-date");
if(d){d.textContent=new Date().toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"});}

// 2. Thank-you message after form submission
var f=document.getElementById("order-form");
if(f){f.addEventListener("submit",function(e){
  e.preventDefault();
  var n=f.elements["name"].value;
  var t=document.getElementById("thanks");
  t.textContent="Thank you, "+n+"! Your order request was received. We will contact you soon.";
  t.hidden=false; f.reset();
});}

// 3. Enlarge image on hover
document.querySelectorAll(".hover-zoom").forEach(function(img){
  img.addEventListener("mouseover",function(){img.classList.add("enlarged");});
  img.addEventListener("mouseout",function(){img.classList.remove("enlarged");});
});
