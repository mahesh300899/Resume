var navanchortags=document.querySelectorAll('.transition-menu a');
var n=navanchortags.length;
for(let i=0;i<n;i++){
    navanchortags[i].addEventListener('click',function(event){
       event.preventDefault();
        var t=this.textContent.trim().toLowerCase();
        var c=document.getElementById(t);
          var interval=setInterval(function(){
            var targetcoordinate=c.getBoundingClientRect();
            if(targetcoordinate.top<=0)
           { clearInterval(interval);
            return;
           }
           window.scrollBy(0,50);
          },20);
     
    });
}
var progressBar=document.querySelectorAll('#skill-grey>div');

var skillsContainer=document.getElementById('skillfull');
window.addEventListener('scroll',checkscroll);
var animationcheck=false;

function initializebar(){
    for(let i of progressBar)
    {
        i.style.width=0+'%';
    }
}
initializebar();
function fillbar(){
    for(let i of progressBar){
        let finalwidth=i.getAttribute('data-bar-width');
        let currentwidth=0;
        let interval=setInterval(function(){
            if(currentwidth>finalwidth){
                clearInterval(interval);
                return;
            }
            currentwidth++;
            i.style.width=currentwidth+'%';
        },5);
    }
}

function checkscroll(){
    var coordinate=skillsContainer.getBoundingClientRect();
    if(!animationcheck&coordinate.top<=window.innerHeight){
        animationcheck=true;
        console.log("visible");
        fillbar();
    }
    else if(coordinate.top>window.innerHeight) {
        animationcheck=false;
        initializebar();

    }
}

/*anchorTags.forEach(function(anchorTag) {
    console.log(anchorTag.id);
  
    // Add event listener to each anchor tag
    anchorTag.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      console.log(anchorTag.textContent.trim().toLowerCase());
      console.log(anchorTag.hash); // Log the href value
    });
  });*/