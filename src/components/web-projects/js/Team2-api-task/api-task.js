let arrData = []
let myparent = document.querySelector(".parent")
const getData = function(link) {
    let request = new XMLHttpRequest()
    request.open("GET", link)
    request.send()
    request.onloadend = function() {
        if (this.status === 200) {
            arrData = (JSON.parse(this.responseText))

        } else {
            console.log("error")
        }

    }
}
getData('https://jsonplaceholder.typicode.com/posts')
    // console.log(arrData)

function showData() {
    let content = ""
    if (arrData.length > 30) {
        arrData.length = 30
    }
    for (let i = 0; i < arrData.length; i++) {
        content += `<div class="card">
        <h3>Id : ${arrData[i].id} </h3>
        <p>title : ${arrData[i].title}</p>
        </div>`
    }

    myparent.innerHTML = content
    console.log(myparent)


}

let mybtn = document.querySelector(".mybutton button")
let myResetBtn = document.querySelector(".closeBtn button")

mybtn.addEventListener("click", function() {
    showData()
    mybtn.style.display = "none"
    myResetBtn.style.display = "block"
    myparent.style.display = "grid"

})
myResetBtn.addEventListener("click", function() {
    myResetBtn.style.display = "none"
    mybtn.style.display = "block"
    myparent.style.display = "none"
})


// 'https://jsonplaceholder.typicode.com/posts'