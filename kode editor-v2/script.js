function run() {
    let html = document.querySelector(".editor div #html").value;
    let css = document.querySelector(".editor div #css").value;
    let js = document.querySelector(".editor div #js").value;
    let output = document.querySelector(".output #output");

    output.contentDocument.body.innerHTML = html + "<style>"+css+"</style>";
}


document.querySelector(".editor div #html").addEventListener("keyup",run);
document.querySelector(".editor div #css").addEventListener("keyup",run);
document.querySelector(".editor div #js").addEventListener("keyup",run);