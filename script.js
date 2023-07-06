function changeMode() {
  const html = document.documentElement
  const image = document.querySelector("#profile img")
  const button = document.querySelector("#switch button")

  var right = window.getComputedStyle(button).getPropertyValue("right")
  var num = 0

  var lightMode = html.classList.toggle("light-mode")

  if (lightMode) {
    image.setAttribute("src", "./images/avatar-light.png")
    image.setAttribute("alt", "Minha foto no jockey")

    while(num < 51){
      num +=  0.02
      right = num + "%"
    }
  } else {
    image.setAttribute("src", "./images/avatar-dark.png")
    image.setAttribute("alt", "Minha foto no btg")

    while (num > -1) {
      num -= 2
      right = num + "%"
    }
  }
}
