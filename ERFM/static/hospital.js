function hospitalPopUpFunction(hospital) {
    var cardElement = document.createElement('div');
    cardElement.classList.add('card');

    var container = document.createElement("span");

    // Create first list item with bold hospital name
    var li1Element = document.createElement('li');
    li1Element.classList.add('list-group-item');
    var boldElement = document.createElement('b');
    var texthere = document.createTextNode(hospital);
    boldElement.appendChild(texthere);
    li1Element.appendChild(boldElement);

    // Create second list item with non-emergency wait, emergency wait, and people ahead of you
    var li2Element = document.createElement('li');
    li2Element.classList.add('list-group-item');

    var randomHour1 = Math.floor(Math.random() * 4);
    var randomHour2 = Math.floor(Math.random() * 4);
    var randomMinute1 = Math.floor(Math.random() * 60);
    var randomMinute2 = Math.floor(Math.random() * 60);
    var randomPeople1 = Math.floor(Math.random() * 50);
    var randomPeople2 = Math.floor(Math.random() * 50);

    var nonEmergencyWait = document.createTextNode("Non-emergency wait: " + randomHour1 + " hr " + randomMinute1 + " min");
    var emergencyWait = document.createTextNode("Emergency wait: " + randomHour2 + " hr " + randomMinute2 + " min");
    var peopleAheadNonEmergency = document.createTextNode("People ahead of you: " + randomPeople1);
    var peopleAheadEmergency = document.createTextNode("People ahead of you: " + randomPeople2);

    var nonEmergencyIncrButton = document.createElement('button');
   
    nonEmergencyIncrButton.innerText = '+';
    nonEmergencyIncrButton.classList.add('btn', 'btn-success', 'mx-1', 'py-0');
    nonEmergencyIncrButton.style.width = "50px";
    nonEmergencyIncrButton.addEventListener('click', function() {
        randomPeople1 += 1;
        peopleAheadNonEmergency.nodeValue = "People ahead of you: " + randomPeople1;
       
    });

    var nonEmergencyIncrButton2 = document.createElement('button');
    let setTime = randomHour1;
    let setMins = randomMinute1;
    let num =0;
    var final;
    nonEmergencyIncrButton.innerText = '+';
    nonEmergencyIncrButton.classList.add('btn', 'btn-success', 'mx-1', 'py-0');
    nonEmergencyIncrButton.style.width = "50px";
    nonEmergencyIncrButton.addEventListener('click', function() {
        num += 1;
        if(final< 60){
           final= setMins+num*10;
        }
        if(final>60){
            setTime +=1;
        }
        nonEmergencyWait.nodeValue = "Non-emergency wait: " + setTime + " hr " + final + " min";
       
    });
    

    var emergencyIncrButton = document.createElement('button');
    emergencyIncrButton.innerText = '+';
    emergencyIncrButton.classList.add('btn', 'btn-success', 'mx-1', 'py-0');
    emergencyIncrButton.style.width = "50px";
    emergencyIncrButton.addEventListener('click', function() {
        randomPeople2 += 1;
        peopleAheadEmergency.nodeValue = "People ahead of you: " + randomPeople2;
    });
    
    var nonEmergencyDecButton = document.createElement('button');
    nonEmergencyDecButton.innerText = '-';
    nonEmergencyDecButton.classList.add('btn', 'btn-danger', 'mx-1', 'py-0');
    nonEmergencyDecButton.style.width = "50px";
    nonEmergencyDecButton.addEventListener('click', function() {
        randomPeople1 = Math.max(randomPeople1 - 1, 0);
        peopleAheadNonEmergency.nodeValue = "People ahead of you: " + randomPeople1;
    });
    
    var emergencyDecButton = document.createElement('button');
    emergencyDecButton.innerText = '-';
    emergencyDecButton.classList.add('btn', 'btn-danger', 'mx-1', 'py-0');
    emergencyDecButton.style.width = "50px";
    emergencyDecButton.addEventListener('click', function() {
        randomPeople2 = Math.max(randomPeople2 - 1, 0);
        peopleAheadEmergency.nodeValue = "People ahead of you: " + randomPeople2;
    });

    li2Element.appendChild(nonEmergencyWait);
    li2Element.appendChild(document.createElement("br"));
    li2Element.appendChild(peopleAheadNonEmergency);
    li2Element.appendChild(nonEmergencyIncrButton);
    li2Element.appendChild(nonEmergencyIncrButton2);
    li2Element.appendChild(nonEmergencyDecButton);
    li2Element.appendChild(document.createElement("br"));
    li2Element.appendChild(document.createElement("br"));
    li2Element.appendChild(emergencyWait);
    li2Element.appendChild(document.createElement("br"));
    li2Element.appendChild(peopleAheadEmergency);
    li2Element.appendChild(nonEmergencyIncrButton2);
    li2Element.appendChild(emergencyIncrButton);
    li2Element.appendChild(emergencyDecButton);
    
    // Append both list items to the list
    var ulElement = document.createElement('ul');
    ulElement.classList.add('list-group', 'list-group-flush');
    ulElement.appendChild(li1Element);
    ulElement.appendChild(li2Element);

    container.appendChild(ulElement);
    cardElement.appendChild(container);

    var width = 400;
    var algin = (screen.width-width)/2;
    cardElement.style.width = width + "px";
    cardElement.style.position = "fixed";
    cardElement.style.right = algin + "px";
    cardElement.style.bottom = "5px";

    document.body.appendChild(cardElement);
}