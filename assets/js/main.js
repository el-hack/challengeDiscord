var onglets = document.querySelectorAll("header nav li a") //tout les liens de la nav (les onglets)

      var info =  document.querySelectorAll(".info")

      var DiviconBar = document.querySelector(".hamberger") // conteneur de l'icon bar pour le responsible

      var iconBar = document.querySelector(".hamberger i") // icon bar pour le responsible

      var nav = document.querySelector("header nav") // la navBar

      var btn_plus = document.querySelectorAll(".img_btn_plus") // Bouton plus ( + ) pour afficher plus d'information

      var carousel = document.querySelector(".inner_carousel")

      var iconCloseInfo = document.querySelectorAll(".services  .service .info i")

      // changer le background de l'onglet selectioné
      onglets.forEach(onglet => {
        onglet.addEventListener("click" , ()=>{
          for (let i = 0; i < onglets.length; i++) {
            onglets[i].classList.remove("active")
          }
          onglet.classList.add("active")
        })
      });


      // faire derouler les onglets 
      DiviconBar.addEventListener("click" , ()=>{
        if(iconBar.getAttribute("class") === "fas fa-bars"){
          iconBar.setAttribute("class","fas fa-times")
        }else{
          iconBar.setAttribute("class","fas fa-bars")
        }
        nav.classList.toggle("heightNav")
      })
      

      // afficher les infos lorsqu'on clique sur l'image (+)
      btn_plus.forEach((btn)=>{
        btn.addEventListener("click" , ()=>{
        var inf = btn.parentElement.querySelector(".info")
        console.log(inf)
        inf.style.transform = "translateY(0%)"
      })
      })
      
      // ferme les infos lorqu'on clique sur l'icon (X)
      iconCloseInfo.forEach((iconCloseInf)=>{
        iconCloseInf.addEventListener("click" , ()=>{
          iconCloseInf.parentElement.style.transform = "translateY(100%)"
        })
      })
      
      
      // pour le carousel
      var translateValue = 0
      setInterval(() => {
        translateValue++
        if (translateValue === 3) {
          translateValue = 0
          console.log(carousel.style.transform)
        carousel.style.transform = "translateX(33.3%)"
      }
      carousel.style.transform += "translateX(-33.3%)"


      }, 2000);