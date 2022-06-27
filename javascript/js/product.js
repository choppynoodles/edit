document.addEventListener("DOMContentLoaded", async () => {

    let queryParams = new URLSearchParams(window.location.search);
    let id = queryParams.get("id");

    console.log(id);

    fetch(`/api/getProduct?productId=${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)

            //Alteração de dados de ID
            document.getElementById("name").innerText = json.name;
            document.getElementById("brand").innerText = json.brand;
            document.getElementById("description").innerText = json.description;
            document.getElementById("madeIn").innerText = json.madeIn;
            document.getElementById("partnership").innerText = json.partnership;
            document.getElementById("price").innerText = json.price;
            document.getElementById("image").src = json.image;

            //Pontuação com as estrelas
            let score = Math.round(json.score);

            document.querySelector("#score span").innerText = score + " of 5";

            let stars = document.querySelectorAll("#score > .icn-star");

            for (let index = 0; index < stars.length; index++) {
                if (index < score) {
                    let element = stars[index];
                    element.classList.add("primary");
                }
            }

            //Tamanhos

            let sizesBtns = document.querySelectorAll(".sizebtns button");

            console.log(sizesBtns)

            console.log(json.sizes)

            sizesBtns.forEach(function (button) {
                if(Object.keys(json.sizes).includes(button.innerText)){
                    button.disabled = false
                }
            })
        });

});