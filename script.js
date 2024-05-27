function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#fotoperfil img")

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/Avatar_light.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }

}
