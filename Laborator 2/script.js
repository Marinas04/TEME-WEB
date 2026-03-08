let resources = [];

fetch("data/resources.json")
.then(response => response.json())
.then(data => {

    resources = data;

    displayResources(resources);
    displayTags(resources);

});


function displayResources(list){

    const ul = document.getElementById("resourceList");
    ul.innerHTML = "";

    list.forEach(r => {

        const li = document.createElement("li");

        li.textContent =
        r.name + " - " + r.location + " (" + r.program + ")";

        ul.appendChild(li);

    });

}


function filterStudy(){

    const filtered = resources.filter(r => r.type === "study");

    displayResources(filtered);

}


function displayTags(list){

    const tagSet = new Set();

    list.forEach(r => {

        r.tags.forEach(t => tagSet.add(t));

    });

    const tagList = document.getElementById("tags");

    tagSet.forEach(tag => {

        const li = document.createElement("li");
        li.textContent = tag;
        tagList.appendChild(li);

    });

}