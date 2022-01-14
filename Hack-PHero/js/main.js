const milestoneData = JSON.parse(data).data;
// console.log(milestoneData);

function loadMilestone() {
    const milestones = document.querySelector('.milestones');
    milestones.innerHTML = `${milestoneData.map(function (milestone) {
        return `<div class="milestone border-b" id=${milestone._id}>
        <div class="flex" >
          <div class="checkbox"><input type="checkbox" onclick="markMilestone(this,${milestone._id})" /></div>
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
        }).join('')}
        </div>
      </div>`
    }).join('')}`
};

loadMilestone();


function openMilestone(thisElement,id) {
    //onclick for show module list
    const currentElement = thisElement.parentNode.nextElementSibling;
    const shownPanel=document.querySelector('.show');
    if(!currentElement.classList.contains('show') && shownPanel){
        shownPanel.classList.remove("show");
    }
    currentElement.classList.toggle('show');

    //active milestone
    const activePanel=document.querySelector('.active');
    if(!thisElement.classList.contains('active') && activePanel){
        activePanel.classList.remove('active');
    }
    thisElement.classList.toggle('active');

    // show image title and description on left side
    const milestoneImage=document.querySelector('.milestoneImage');
    const title=document.querySelector('.title');
    const details=document.querySelector('.details');

    milestoneImage.style.opacity="0";
    milestoneImage.src=milestoneData[id].image;
    title.innerText=milestoneData[id].name;
    details.innerText=milestoneData[id].description;
}

// show image after load 
const milestoneImage=document.querySelector('.milestoneImage');
milestoneImage.onload=function(){
    milestoneImage.style.opacity="1";
}

// checkbox click
function markMilestone(thisElement,id){
    const milestoneList=document.querySelector('.milestones');
    const doneList=document.querySelector('.doneList');
    const item=document.getElementById(id);

    if(thisElement.checked){
        milestoneList.removeChild(item)
        doneList.appendChild(item)
    }else{
        milestoneList.appendChild(item)
        doneList.removeChild(item)
    }
};