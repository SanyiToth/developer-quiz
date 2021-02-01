let form = document.querySelector("form")
let resultBox = document.getElementById("result-box")
let resultBoxTitle = document.getElementById("result-box--title")
let resultBoxContent = document.getElementById("result-box--content")
let inputRadio = document.querySelectorAll('.radio')

form.addEventListener("submit", event => {
    event.preventDefault()
    if (isEverythingChecked(inputRadio)) {
        changeResultBox()
        form.sendBtn.disabled = true
    }
})

function getResult() {
    let result = 0
    inputRadio.forEach(item => {
        if (item.checked && item.value === 'B') {
            result = result + 25
        }
    })
    return result
}

function changeResultBox() {
    resultBox.style.border = "3px solid red"
    resultBoxTitle.style.display = "block"
    resultBoxTitle.style.color = "red"
    resultBoxContent.innerText = "Te " + getResult(inputRadio) + "%-ban vagy programozó!"
    resultBoxContent.style.color = "red"
}

function isEverythingChecked() {
    let count = 0
    inputRadio.forEach(item => {
        if (item.checked) {
            count++
        }
    })
    if (count < 4) {
        window.alert("Kérlek az összes kérdésre válaszolj!")
        return false
    } else {
        return true
    }
}

