function generateRandomTime() {
  return Math.floor(Math.random() * 21) + 10;
}

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
    var randomPeople1 = Math.floor(Math.random() * 30);
    var randomPeople2 = Math.floor(Math.random() * 30);

    var nonEmergencyWait = document.createTextNode("Non-emergency wait: " + randomHour1 + " hr " + randomMinute1 + " min");
    var emergencyWait = document.createTextNode("Emergency wait: " + randomHour2 + " hr " + randomMinute2 + " min");
    var peopleAheadNonEmergency = document.createTextNode("People ahead of you: " + randomPeople1);
    var peopleAheadEmergency = document.createTextNode("People ahead of you: " + randomPeople2);
    
    let setTime = randomHour1;
    let setMins = randomMinute1;
    let final;
    let nonEmergencyIncrButton = document.createElement('button');
    nonEmergencyIncrButton.innerText = '+';
    nonEmergencyIncrButton.classList.add('btn', 'btn-success', 'mx-1', 'py-0');
    nonEmergencyIncrButton.style.width = "50px";
    nonEmergencyIncrButton.addEventListener('click', function() {
      randomPeople1 += 1;
      // Use generateRandomNumber() to set num
      let num = generateRandomTime();
      final = setMins + num ;
      updateTime();
      peopleAheadNonEmergency.nodeValue = "People ahead of you: " + randomPeople1;
    });
    
    function updateTime() {
      if (final >= 60) {
        setTime += Math.floor(final / 60);
        setMins = final % 60;
      } else {
        setMins = final;
      }
      nonEmergencyWait.nodeValue = "Non-emergency wait: " + setTime + " hr " + setMins + " min";
    }

    // Emergency increase
    let setTimes = randomHour2;
    let setMinus = randomMinute2;
    let final_value;
    var emergencyIncrButton = document.createElement('button');
    emergencyIncrButton.innerText = '+';
    emergencyIncrButton.classList.add('btn', 'btn-success', 'mx-1', 'py-0');
    emergencyIncrButton.style.width = "50px";
    emergencyIncrButton.addEventListener('click', function() {
        randomPeople2 += 1;
        // Use generateRandomNumber() to set num
        let nums = generateRandomTime(); 
        final_value = setMinus + nums ;
        updateTimes();
        peopleAheadEmergency.nodeValue = "People ahead of you: " + randomPeople2;
        emergencyWait.nodeValue = "Emergency wait: " + setTimes+ " hr " + setMinus + " min";
      });
    
      
    function updateTimes() {  
      // Check the time by 60 if above then add one to the hrs
      if (final_value >= 60) {
        setTimes += Math.floor(final_value/60);
        setMinus = final_value % 60;
      } else {
        setMinus = final_value;
      }
      emergencyWait.nodeValue = "Emergency wait: " + setTimes+ " hr " + setMinus + " min";
    }
    
    // Non-emergency decrease
    let setTime1 = randomHour1;
    let setMins1= randomMinute1;
    let final2;
    var nonEmergencyDecButton = document.createElement('button');
    nonEmergencyDecButton.innerText = '-';
    nonEmergencyDecButton.classList.add('btn', 'btn-danger', 'mx-1', 'py-0');
    nonEmergencyDecButton.style.width = "50px";
    nonEmergencyDecButton.addEventListener('click', function() {
        randomPeople1 = Math.max(randomPeople1 - 1, 0);
        let num1 = generateRandomTime();
        final2 = setMins1 - num1;
        updateTime1();
        peopleAheadNonEmergency.nodeValue = "People ahead of you: " + randomPeople1;
    });
    
    function updateTime1() { // this statement ensure if people is 0, then it will stay at 0
      if (randomPeople1 === 0) {
        setTime1 = 0;
        setMins1 = 0;
        nonEmergencyWait.nodeValue = "Non-emergency wait: " + Math.max(setTime1, 0) + " hr " + setMins1 + " min";
        return;
      }
    
      if (final2 < 0) {
        const timePassed = Math.abs(final2) / 60;
        if (setTime1 > 0) {
          setTime1 = Math.max(Math.floor(setTime1 - timePassed), 0);
        } else {
          setTime1 = 0;
          setMins1 = 0;
        }
        setMins1 = Math.abs(final2) % 60;
        if (setMins1 < 0) {
          setTime1 -= 1;
          setMins1 += 60;
        }
      } else {
        setTime1 += Math.floor(final2 / 60);
        setMins1 = final2 % 60;
        setTime1 = Math.max(setTime1, 0);
        // Ensure setTime1 is never negative
        if (setTime1 === 0 && num1 > setMins1) {
          setMins1 = 0;
        }
      }
      // round down to nearest integer
      setTime1 = Math.floor(setTime1);
      setMins1 = Math.floor(setMins1);
      nonEmergencyWait.nodeValue = "Non-emergency wait: " + Math.max(setTime1, 0) + " hr " + setMins1 + " min";
    }
      
    //Emergency decrease
    let setTime2 = randomHour2;
    let setMins2= randomMinute2;
    let final3;
    var emergencyDecButton = document.createElement('button');
    emergencyDecButton.innerText = '-';
    emergencyDecButton.classList.add('btn', 'btn-danger', 'mx-1', 'py-0');
    emergencyDecButton.style.width = "50px";
    emergencyDecButton.addEventListener('click', function() {
        randomPeople2 = Math.max(randomPeople2 - 1, 0);
        let num2 = generateRandomTime();
        final3 = setMins2 - num2;
        updateTime2();
        peopleAheadEmergency.nodeValue = "People ahead of you: " + randomPeople2;
    });
   
    function updateTime2() {
      if (randomPeople2 === 0) {// this statement ensure if people is 0, then it will stay at 0
        setTime2 = 0;
        setMins2 = 0;
        emergencyWait.nodeValue = "Emergency wait: " + Math.max(setTime2, 0) + " hr " + setMins2 + " min";
        return;
      }
    
      if (final3 < 0) {
        const timePassed = Math.abs(final3) / 60;
        if (setTime2 > 0) {
          setTime2 = Math.max(Math.floor(setTime2 - timePassed), 0);
        } else {
          setTime2 = 0;
          setMins2 = 0;
        }
        setMins2 = Math.abs(final3) % 60;
        if (setMins2 < 0) {
          setTime2 -= 1;
          setMins2 += 60;
        }
      } else {
        setTime2 += Math.floor(final3 / 60);
        setMins2 = final3 % 60;
        setTime2 = Math.max(setTime2, 0);
        // Ensure setTime1 is never negative
        if (setTime2 === 0 && num2 > setMins1) {
          setMins2 = 0;
        }
      }
      // round down to nearest integer
      setTime2 = Math.floor(setTime1);
      setMins2 = Math.floor(setMins1);
      emergencyWait.nodeValue = "Emergency wait: " + Math.max(setTime2, 0) + " hr " + setMins2 + " min";
    }

    li2Element.appendChild(nonEmergencyWait);
    li2Element.appendChild(document.createElement("br"));
    li2Element.appendChild(peopleAheadNonEmergency);
    li2Element.appendChild(nonEmergencyIncrButton);
    li2Element.appendChild(nonEmergencyDecButton);
    li2Element.appendChild(document.createElement("br"));
    li2Element.appendChild(document.createElement("br"));
    li2Element.appendChild(emergencyWait);
    li2Element.appendChild(document.createElement("br"));
    li2Element.appendChild(peopleAheadEmergency);
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