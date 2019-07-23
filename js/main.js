
window.onload = function () {
   const menu = document.querySelector('.menu')
   const line1 = document.querySelector('.line:nth-child(1)')
   const line2 = document.querySelector('.line:nth-child(2)')
   const line3 = document.querySelector('.line:nth-child(3)')
   const nav = document.querySelector('nav')

   menu.addEventListener('click', () => {
      line1.classList.toggle('rotatefirst')
      line2.classList.toggle('hide')
      line3.classList.toggle('rotatesecond')
      nav.classList.toggle('show')
      document.body.classList.toggle('overflowYhidden')
   })
}
