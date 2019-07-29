
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
   const elemsAnimation = document.querySelectorAll('.on-delay-animation')

   const widthBreakpoint = 910

   const isInViewport = (elem) => {
      var bounding = elem.getBoundingClientRect();
      const offset = 600

      return bounding.top < offset
   };

   const checkWindowWidth = () => {
      if (window.innerWidth < widthBreakpoint)
         logo.style.display = "none"
      else
         logo.style.display = "block"
   }

   const toggleNavClasses = () => {
      if (window.innerWidth < widthBreakpoint) {
         line1.classList.toggle('rotatefirst')
         line2.classList.toggle('maincss_hide')
         line3.classList.toggle('rotatesecond')
         nav.classList.toggle('maincss_show')
         main.classList.toggle('overflowYhidden')
      }
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

      elemsAnimation.forEach(elem => {
         if (isInViewport(elem))
            elem.classList.add('animate')
      })
   }

   window.onresize = () => {
      checkWindowWidth()
   }
}
