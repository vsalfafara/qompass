
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
   const form = document.querySelector('form')
   const overlay = document.querySelector('.overlay')
   const snackbars = document.querySelectorAll('.snackbar')
   const success = snackbars[0]
   const fail = snackbars[1]
   const prevent = snackbars[2]

   snackbars.forEach(snackbar => {
      snackbar.addEventListener('animationend', () => {
         snackbar.classList.toggle('animate')
      })
   })

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

   form.addEventListener('submit', (e) => {
      e.preventDefault()

      success.classList.remove('animate')
      fail.classList.remove('animate')
      prevent.classList.remove('animate')

      function toggleOverlay(snackbar = 0) {
         overlay.classList.toggle('show')
         console.log(snackbar)

         if (snackbar)
            snackbar.classList.toggle('animate')
      }

      toggleOverlay()

      let email = new FormData
      let name = `${e.target.querySelector('input[name=first-name]').value} ${e.target.querySelector('input[name=last-name]').value}`

      email.append('name', name)
      email.append('email', e.target.querySelector('input[name=email]').value)
      email.append('phone', e.target.querySelector('input[name=phone]').value)
      email.append('message', e.target.querySelector('textarea').value)

      if (!email.get('name').length ||
         !email.get('email').length ||
         !email.get('phone').length ||
         !email.get('message').length) {
         toggleOverlay(prevent)
         console.log('validating error...')
         return false;
      }

      fetch('https://jumprock.co/mail/qompass', {
         method: 'post',
         body: email
      }).then(res => {
         toggleOverlay(success)
         form.reset()
      }).catch(err => {
         toggleOverlay(fail)
      })
   })
}
