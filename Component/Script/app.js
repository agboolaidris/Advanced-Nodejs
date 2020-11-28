const harmburger = document.querySelector('.harmburger')

  harmburger.addEventListener('click',()=>{
      const nav = document.querySelector('.nav')
    harmburger.classList.toggle('harmburger-times')
    nav.classList.toggle('nav-active')
    
  })






