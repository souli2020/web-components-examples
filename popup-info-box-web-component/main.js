 const popUpInfo = document.getElementById('popUpInfo')  
         
       //create a shadow root
       const shadow = popUpInfo.attachShadow({mode:"open"})
          //create spans
          const wrapper = document.createElement('span')
         wrapper.setAttribute('class', 'wrapper')
         
         const info = document.createElement('span')
         info.setAttribute('class', 'info')
         
         const icon = document.createElement('span')
         icon.setAttribute('class','icon')
          icon.setAttribute('tabindex', 0);
        
         //get the attribute text and insert it to info
         
         const text = popUpInfo.getAttribute('data-text')
         info.textContent = text
          //insert icon*
           let imgUrl 
          if(popUpInfo.hasAttribute("img")){
              imgUrl = popUpInfo.getAttribute('img')
          }
         else{imgUrl = "defaultpng.png"}
     
         //create the img 
         const img = document.createElement('img')
         img.src = imgUrl
         
         //appenf img to the icon span
         icon.appendChild(img)
         
         
        // create the css style
        const style = document.createElement('style')
         style.textContent = `
                                .wrapper {
                                position: relative;
                            }

                            .info {
                                font-size: 0.8rem;
                                width: 200px;
                                display: inline-block;
                                border: 1px solid black;
                                padding: 10px;
                                background: grey;
                                border-radius: 10px;
                                opacity: 0;
                                transition: 0.6s all;
                                position: absolute;
                                bottom: 20px;
                                left: 10px;
                                z-index: 3;
                                color: white;
                            }

                            img {
                                width: 1.2rem;
                            }

                            .icon:hover + .info, .icon:focus + .info {
                                opacity: 1;
                            }
        
        
        `
         
         
         shadow.appendChild(style)
         shadow.appendChild(wrapper)
         wrapper.appendChild(icon)
         wrapper.appendChild(info)
