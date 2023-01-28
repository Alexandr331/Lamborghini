const article = document.querySelectorAll('.blogs-part__article')

let state = false

article.forEach((elem) => {
  elem.childNodes[7].addEventListener('click', () => {
    state = state == false ? true : false
    elem.childNodes[5].style.height = state ? 'fit-content' : '100px'
  })
})