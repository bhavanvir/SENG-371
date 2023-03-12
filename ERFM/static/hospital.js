function hospitalPopUpFunction(hospital) {
    var divElement = document.createElement('div')
    var container = document.createElement("span")
    var texthere = document.createTextNode(hospital)
    var texthere1 = document.createTextNode("Non-emergency wait: 1 hr 35 min")
    var texthere2 = document.createTextNode("People ahead of you: 15    ?")
    container.appendChild(texthere)
    container.appendChild(document.createElement("br"))
    container.appendChild(texthere1)
    container.appendChild(document.createElement("br"))
    container.appendChild(texthere2)
    container.style.color = "black"
    divElement.appendChild(container)
    divElement.style.width = "600px"
    divElement.style.height = "90px"
    divElement.style.background = "white"
    divElement.style.position = "fixed"
    divElement.style.left = "40%"
    divElement.style.right = "50%"
    divElement.style.bottom = "20px"
    divElement.style.margin = "0 auto"
    divElement.style.padding = "10px 50px 5px 10px"
    document.body.appendChild(divElement)
}