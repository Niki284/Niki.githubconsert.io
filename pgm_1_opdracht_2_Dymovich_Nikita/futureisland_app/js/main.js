(() => {
    const app = {
        init() {
            // genereer query selectie
            console.log("1. Aplicatie inlaise");
            // Call the function cacheElement
            this.cacheElement();
            this.generateUi();
            this.subscribe();
        },
        cacheElement() {
            console.log("2. case Element");
            // Get the node or element via querySelector with certain selectors
            this.navigationElement = document.querySelector(".menu");
            console.log(this.navigationElement);

            this.linupElement = document.querySelector(".linup");
            console.log(this.linupElement);

            this.digitalClockElement = document.querySelector(".digital-clock");
            console.log(this.digitalClockElement);

            this.socialElement = document.querySelector(".footer");
            console.log(this.socialElement);

            this.buttonElement = document.querySelector(".modal__close-btn");
            console.log(this.buttonElement);

            this.popupElement = document.querySelector('.modal')
            console.log(this.popupElement);
        },
        generateUi() {
            console.log("3. Generate User interface!");

            this.navigationElement.innerHTML = navigation
                .map((nav) => {
                    return `<li class="navigatie"><a href="${nav.link}">${nav.name}</a></li>`;
                })
                .join("");
            //Maak een functie sosiaal forlup return  om die terug geven .

            this.linupElement.innerHTML = linup
                .map((content) => {
                    return `
            
                
                <div class="content" id="${content.id}"> 
                    <h1>${content.artist.name}</h1>
                    <img src="${content.picture.small}">
                </div>
           
            `;
                })
                .join("");

            this.socialElement.innerHTML = sociale
                .map((footer) => {
                    return `<li class="Einde"><a href="${footer.link}"><img src='${footer.image}''></a></li>`;
                })
                .join("");
        },
        subscribe() {
            let popup = document.querySelectorAll(".content");
            popup.forEach((element) => {
                element.addEventListener("click", (e) => {
                    //this.openModal();
                    e.preventDefault();
                    const element = e.currentTarget;
                    const elementData = linup.find((e) => e.id === element.id)

                    let modal = document.querySelector(".modal");
                    modal.classList.add("active");

                   

                   console.log("hi"+JSON.stringify(elementData));
                   this.popupElement.innerHTML = 
                   `
                    <div class="content1">
                    <h1 >${elementData.artist.name}</h1>
                      <img src="${elementData.picture.large}">
                    <p >${elementData.artist.synopsis}</p>
                    <video src="${elementData.media.sourceId}"  frameborder="0" controls allowfullscreen>${elementData.media.sourceId}</video>
                    <p><a href="${elementData.social.website}">${elementData.social.website}</a></p>
                    <p><a href="${elementData.social.facebook}">${elementData.social.facebook}</a></p>
                    <p><a href="${elementData.social.twitter}">${elementData.social.twitter}</a></p>
                    <p><a href="${elementData.social.instagram}">${elementData.social.instagram}"</a></p>
                    </div>
                    `;
                    
                });
                this.buttonElement.addEventListener("click", (e) => {
                    e.preventDefault();
                    let modal = document.querySelector(".modal");
                    modal.classList.remove("active");
                });
            });
            console.log(this.buttonElement);
        },
    };

    // Call the init function (method) from the app object
    app.init();
})();