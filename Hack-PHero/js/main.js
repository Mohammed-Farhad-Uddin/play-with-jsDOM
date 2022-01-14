const milestoneData = JSON.parse(data).data//jehetu data object er bitore data gula ace.

// load milestones
function loadMilestones() {
    const milestones = document.querySelector('.milestones');
    milestones.innerHTML = `${milestoneData.map(function (milestone) {
        return ` <div class="milestone border-b" id=${milestone._id}>
        <div class="flex">
          <div class="checkbox"><input type="checkbox" 
          onclick="markMileStone(this,${milestone._id})" /></div>

          <div onclick="openMilestone(this,${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          ${milestone.modules.map(function (module) {
            return `<div class="module border-b">
              <p>${module.name}</p>
            </div>`
        }).join("")}
        </div>
      </div>`
    }).join('')}`;//milestoneData.join("") dile object,object,object comma ta ute jabe,jei ta diye join kora oi ta ute jabe
};

loadMilestones();

function openMilestone(thisElement,id){
 const currentPanel=thisElement.parentNode.nextElementSibling;//thisElement diye oi this dewa div ta k niye .parentNode diye div tar parent ta k niye tarpor parent tar sibling ta k dora hoice jate sibling ta te class add kora jai jkn this dewa div ta te click kora hobe.

 const shownPanel=document.querySelector('.show');//start point e shownPanel null takbe krn tkn kothao show class add takbe na.
 if(!currentPanel.classList.contains('show') && shownPanel){//sumit js V-100 /// !currentPanel.classList.contains('show') means current panel e jodi show class takhe tahole current panel chara and shownPanel jodi null na hoi mane shownPanel jodi takhe tahole currentPanel chara baki son kane show class ta k remove kore dibe
    shownPanel.classList.remove('show');
 }
 currentPanel.classList.toggle("show")//toggle mane jkn class ta takbe div e tkn onlick e oi ta remove kore dibe,abr jkn onclick e class ta takbe na tkn add kore dibe.mane toggle hobe remove and add 2 tai takle remove na takle add.
//show class css e max-height:400px; means max 400px nibe dorkar hole aro nibe kintu max 400 tekhe kom hobe na


// for module active
const activePanel=document.querySelector('.active');
if(!thisElement.classList.contains('active') && activePanel){
    activePanel.classList.remove('active')
}
thisElement.classList.toggle('active');

showMilestone(id);
};

function showMilestone(id){
    const milestoneImage=document.querySelector('.milestoneImage');
    const title=document.querySelector('.title');
    const details=document.querySelector('.details');

    milestoneImage.style.opacity="0";  
    milestoneImage.src = milestoneData[id].image;
    title.innerText = milestoneData[id].name;
    details.innerText = milestoneData[id].description;
}

//listen for hero image load
const milestoneImage=document.querySelector('.milestoneImage');
milestoneImage.onload=function (){
    this.style.opacity="1";
    // milestoneImage.style.opacity="1";
}

function markMileStone(checkbox,id){
   const milestoneList=document.querySelector('.milestones');
   const doneList=document.querySelector('.doneList');
   const item=document.getElementById(id);

   if(checkbox.checked){
       //mark as done
       milestoneList.removeChild(item);
       doneList.appendChild(item);
   }else{
       //back to main list
    milestoneList.appendChild(item);
    doneList.removeChild(item);
   }
    
//    function sort
}
