function togglemode() {
  const html = document.documentElement

  html.classList.toggle("anime")

  const img = document.querySelector("#perfil img")

  if (html.classList.contains("anime")) {
    img.setAttribute("src", "./assets/subaru.var.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
