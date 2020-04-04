const starCounts = 900;
const distance = 800;
const rootnode = document.getElementById("stars_c");


for (let i = 0; i < starCounts; i++) {
    const elem = document.createElement("div")
    elem.setAttribute("class", "star");
    elem.setAttribute("ref", "star");
    elem.setAttribute("key", i);
    rootnode.appendChild(elem);
}


const stars = document.getElementsByClassName('star')

for(const star of stars){
    const speed = 0.2 + (Math.random() * 1);
    const star_distance = distance + (Math.random() * 300)
    star.style.transformOrigin = `0 0 ${star_distance}px`
    star.style.transform = `translate3d(0,0,-${star_distance}px) ` + `rotateY(${Math.random() * 360}deg) ` + `rotateX(${Math.random() * -50}deg) ` + `scale(${speed},${speed})`
}
