document.querySelectorAll("a").forEach(element => element.addEventListener('click', (evento) => {
    evento.preventDefault();
    document.getElementsByTagName('img')[5].setAttribute("src", evento.target.src);
    document.getElementsByTagName('img')[5].setAttribute("title", evento.target.title);
    document.getElementById('enlaceA').setAttribute("href", evento.target.getAttribute("href"));
    document.getElementById('enlaceA').addEventListener('click', ()=>{
        window.open(evento.target.getAttribute("href"));
        document.getElementsByTagName('img')[5].setAttribute("src", evento.target.src);
        document.getElementsByTagName('img')[5].setAttribute("title", evento.target.title);
    });
}));