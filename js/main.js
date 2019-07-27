
window.onload = () => {
   document.body.classList.remove('preload')

   const menu = document.querySelector('.menu')
   const main = document.querySelector('main')
   const line1 = document.querySelector('.line:nth-child(1)')
   const line2 = document.querySelector('.line:nth-child(2)')
   const line3 = document.querySelector('.line:nth-child(3)')
   const nav = document.querySelector('nav')
   const links = document.querySelectorAll('nav ul li a')
   const logo = nav.querySelector('.logo')

   const checkWindowWidth = () => {
      if (window.innerWidth < 768)
         logo.style.display = "none"
      else
         logo.style.display = "block"
   }

   const toggleNavClasses = () => {
      line1.classList.toggle('rotatefirst')
      line2.classList.toggle('hide')
      line3.classList.toggle('rotatesecond')
      nav.classList.toggle('show')
      main.classList.toggle('overflowYhidden')
   }

   checkWindowWidth()

   menu.addEventListener('click', () => {
      toggleNavClasses()
   })

   links.forEach(link => {
      link.addEventListener('click', () => {
         toggleNavClasses()
      })
   })

   main.onscroll = () => {
      if (main.scrollTop)
         nav.classList.add('background-transparent-black')
      else
         nav.classList.remove('background-transparent-black')
   }

   window.onresize = () => {
      checkWindowWidth()
   }
}
