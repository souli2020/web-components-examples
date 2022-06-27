const wcParent = document.getElementById('parent')
    const word = document.getElementById("word-count")
    
       //count words in element's parent element
        function countWords(node){
        const text = node.innerText || node.textContent;
        return text.trim().split(/\s+/g).filter(a => a.trim().length > 0).length;
        }
       
        const count = `Words:${countWords(wcParent)}`;

        // Create a shadow root
        const shadow = word.attachShadow({mode: 'open'});

        // Create text node and add word count to it
        const text = document.createElement('span');
        text.setAttribute('class', "text")
        text.innerHTML = count;
    
        //create external css for the shadow
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'style.css');

        // Append the external css style to the shadow 
        shadow.appendChild(linkElem);
        // Append the text element to the shadow root
        shadow.appendChild(text);
    

        // Update count when element content changes
        setInterval(function() {
        const count = `Words: ${countWords(wcParent)}`;
        text.textContent = count;
        }, 200);
