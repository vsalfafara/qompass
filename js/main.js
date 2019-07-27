
window.onload = () => {
   document.body.classList.remove('preload')

   const menu = document.querySelector('.menu')
   const line1 = document.querySelector('.line:nth-child(1)')
   const line2 = document.querySelector('.line:nth-child(2)')
   const line3 = document.querySelector('.line:nth-child(3)')
   const nav = document.querySelector('nav')
   const logo = nav.querySelector('.logo')

   const checkWindowWidth = () => {
      if (window.innerWidth < 768)
         logo.style.display = "none"
      else
         logo.style.display = "block"

      console.log('checking width')
   }

   checkWindowWidth()

   menu.addEventListener('click', () => {
      line1.classList.toggle('rotatefirst')
      line2.classList.toggle('hide')
      line3.classList.toggle('rotatesecond')
      nav.classList.toggle('show')
      document.body.classList.toggle('overflowYhidden')
   })

   window.onscroll = () => {
      if (document.documentElement.scrollTop)
         nav.classList.add('background-transparent-black')
      else
         nav.classList.remove('background-transparent-black')
   }

   window.onresize = () => {
      checkWindowWidth()
   }
}
