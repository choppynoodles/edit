document.addEventListener("DOMContentLoaded", async () => {

    let queryParams = new URLSearchParams(window.location.search);
    let id = queryParams.get("id"); 

    console.log(id);

    fetch(`/api/getProduct?productId=${id}`)
                .then(response => response.json())
                .then(json => {
                    console.log(json)

                    document.getElementById("name").innerText = json.name;
                    document.getElementById("brand").innerText = json.brand;
                    document.getElementById("description").innerText = json.description;
                    document.getElementById("madeIn").innerText = json.madeIn;
                    document.getElementById("partnership").innerText = json.partnership;
                    document.getElementById("price").innerText = json.price;
                    document.getElementById("score").innerText =  "Score of " + Math.round(json.score);
                    document.getElementsByClassName("icn-star").innerText = json.score;
                    document.getElementsByClassName("primary").innerText = json.score;
                    document.getElementById("image").src = json.image;
                });

                
})

