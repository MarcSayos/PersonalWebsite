const url = "https://personalwebsite-production.up.railway.app/websites";
let websArray = [];


$(window).on("load",  async () => {
    try {
        websArray = (await axios.get(`${url}`)).data;
        console.log("loading...");
        websArray.forEach(element => {
            load( element );
        });
    } catch (error) {
        console.log(error)
    }
});


const load = webs => {
    if (!webs) return;

    var ids = webs.id;
    var imgs = webs.img_url;
    var names = webs.name;
    var prices = webs.price;
    let div = document.createElement('div'); 
    div.className = "col";
    div.innerHTML = 
        `<div class="card h-100">
            <img src="${imgs}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${names}</h5>
                <h5 class="card-title text-success">${prices} € (Rebajas)</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div id="idAux${ids}" style="display: none;">${ids}</div>
                <div class="col-12 px-2 position-sticky bottom-0">
                    <form id="ammountOfEachCard" class="row mx-0 px-0 justify-content-around" onsubmit="return handleSubmit(event)">
                    <div class="move d-flex justify-content-center"><button id="buttonMinus" type="button" class="btn btn-danger card-actions" onclick="return restItems(event)">-</button></div>
                    <input id="inputNum" type="number" min="0" class="item-count" value=0>
                    <div class="move d-flex justify-content-center"><button id="buttonPlus" type="button" class="btn btn-success card-actions" onclick="return addItems(event)">+</button></div>
                    <p></p>
                    <button id="addToCart" type="submit" class="btn btn-primary btn-block my-2"> ADD TO CART </button>
                    </form>
                </div>
            </div>
        </div>`
        document.getElementById("row-wrapper").insertBefore(div, document.getElementById("aux"));
};