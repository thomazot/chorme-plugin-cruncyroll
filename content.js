function ZotFullScreen() {
  const sessionFullScreen = sessionStorage.getItem("ZOT_FULL_SCREEN", "1")
  const FullScreen = document.querySelector("body")

  if (sessionFullScreen !== "1") {
    FullScreen.classList.add("zot-full-screen")
    sessionStorage.setItem("ZOT_FULL_SCREEN", "1")
  } else {
    FullScreen.classList.remove("zot-full-screen")
    sessionStorage.setItem("ZOT_FULL_SCREEN", "0")
  }
}

window.onload = function () {
  const sessionFullScreen = sessionStorage.getItem("ZOT_FULL_SCREEN", "1")
  const FullScreen = document.querySelector("body")

  if (sessionFullScreen === "1") {
    setTimeout(() => {
      FullScreen.classList.add("zot-full-screen")
    }, 4000)
  }
}
