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
    var iframes = webs.link;
    var names = webs.name;
    let div = document.createElement('div'); 
    div.className = "col";
    div.innerHTML = 
        `<div class="card h-100">
            <iframe src="${iframes}"></iframe>
            <div class="card-body">
                <h5 class="card-title">${names}</h5>
                <div id="idAux${ids}" style="display: none;">${ids}</div>
            </div>
        </div>`
        document.getElementById("row-wrapper").insertBefore(div, document.getElementById("aux"));
};