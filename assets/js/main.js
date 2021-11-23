let cut = () => {
    let input = document.getElementById("zeichenkette")
    let position = document.getElementById("trennungsposition")
    let davor = document.getElementById("davor")
    let danach = document.getElementById("danach")

    let cutThat = () => {
        let num1 = input.value.indexOf(position.value)
        if (davor.checked) {
            let teil1 = input.value.slice(0, num1 - 1)
            let teil2 = input.value.slice(num1)
            document.getElementById("vorderer").innerHTML = teil1
            document.getElementById("hinterer").innerHTML = teil2
        } else if (danach.checked) {
            let teil1 = input.value.slice(0, num1 + position.value.length)
            let teil2 = input.value.slice(num1 + position.value.length + 1)
            document.getElementById("vorderer").innerHTML = teil1
            document.getElementById("hinterer").innerHTML = teil2
        }
    }

    if (input.value == "" || position.value == "" || davor.checked == false && danach.checked == false) {
        document.getElementById("nope").innerHTML = "fehlt was"
    } else {
        document.getElementById("nope").innerHTML = ""
        cutThat()
    }
}