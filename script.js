      /*Menu */


      const btnMobile = document.getElementById('btn-mobile');

      function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
        if (active) {
          event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
          event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
      }
      
      btnMobile.addEventListener('click', toggleMenu);
      btnMobile.addEventListener('touchstart', toggleMenu);
      
       /*Adaptacao de texto */
      
       const result = document.querySelector('#result');
       const h1 = document.querySelector('h1');
       const p = document.querySelector('p');
      
       const checkSizes = ()=>{
          const h1Styles = window.getComputedStyle(h1);
          const pStyles = window.getComputedStyle(p);
      
          const h1FontSize = h1Styles.getPropertyPriority('font-size');
          const pFontSize = pStyles.getPropertyPriority('font-size');
          
      
          result.innerText = `O tamanho de fonte do H1 é ${h1FontSize} e o p é ${pFontSize}`;
       };
       setInterval(checkSizes, 500)
      
       /* navegacao do site */
      
       