const head = document.getElementsByTagName("section");
const explore = document.getElementsByClassName("explore");
const login = document.getElementsByClassName("login");
const main_logo = document.getElementsByClassName("main_logo");
const home = document.getElementsByClassName("home");
const trending = document.getElementsByClassName("trending");
const doc_body = document.getElementsByTagName("body")
const latest = document.getElementsByClassName("latest");
const collections = document.getElementsByClassName("collections");
const container1 = document.getElementsByClassName("container1");
const container2 = document.getElementsByClassName("container2");
const container3 = document.getElementsByClassName("container3");
const container4 = document.getElementsByClassName("container4");
const login_menu = document.getElementsByClassName("login_menu");
const register = document.getElementsByClassName("register");
const main_login = document.getElementsByClassName("main_login");
const main_container = document.getElementsByClassName("main_container");
const support1 = document.getElementsByClassName("support1");


this.onscroll = function () {
    const scroll = window.scrollY
    // console.log(scroll);

    if (scroll > 2) {
        head[0].style.backgroundColor = "#fff"
        explore[0].style.color = "black"
        main_logo[0].style.color = "black"
        login[0].style.backgroundColor = "rgb(255, 140, 0)"
        login[0].style.color = "#fff"
    }
    if (scroll < 2) {
        head[0].style.backgroundColor = "transparent"
        explore[0].style.color = "#fff"
        main_logo[0].style.color = "#fff"
        login[0].style.backgroundColor = "#fff"
        login[0].style.color = "#000000"
    }
}

const data = [
    {
        imgUrl1: 'https://images.pexels.com/photos/12656616/pexels-photo-12656616.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl2: 'https://images.pexels.com/photos/12169821/pexels-photo-12169821.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl3: 'https://images.pexels.com/photos/12416757/pexels-photo-12416757.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl4: 'https://images.pexels.com/photos/10345617/pexels-photo-10345617.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl5: 'https://images.pexels.com/photos/11377550/pexels-photo-11377550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imgUrl6: 'https://images.pexels.com/photos/2907247/pexels-photo-2907247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imgUrl7: 'https://images.pexels.com/photos/2499777/pexels-photo-2499777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imgUrl8: 'https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imgUrl9: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imgUrl10: 'https://images.pexels.com/photos/2440079/pexels-photo-2440079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        vidUrl: 'https://static.pexels.com/lib/videos/free-videos.mp4',
        vidUrl2: 'https://static.pexels.com/lib/videos/free-videos.webm',
        imgUrl11: 'https://images.pexels.com/photos/8336658/pexels-photo-8336658.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgUrl12: 'https://images.pexels.com/photos/7148032/pexels-photo-7148032.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgUrl13: 'https://images.pexels.com/photos/5582420/pexels-photo-5582420.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgUrl14: 'https://images.pexels.com/photos/1469496/pexels-photo-1469496.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgUrl15: 'https://images.pexels.com/photos/6995863/pexels-photo-6995863.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgUrl16: 'https://images.pexels.com/photos/5582664/pexels-photo-5582664.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgUrl17: 'https://images.pexels.com/photos/6995871/pexels-photo-6995871.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgUrl18: 'https://images.pexels.com/photos/7691402/pexels-photo-7691402.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgUrl19: 'https://images.pexels.com/photos/3849551/pexels-photo-3849551.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgUrl20: 'https://images.pexels.com/photos/6311314/pexels-photo-6311314.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgUrl21: 'https://images.pexels.com/photos/4198928/pexels-photo-4198928.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgUrl22: 'https://images.pexels.com/photos/7913028/pexels-photo-7913028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl23: 'https://images.pexels.com/photos/3876441/pexels-photo-3876441.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl24: 'https://images.pexels.com/photos/12373451/pexels-photo-12373451.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl25: 'https://images.pexels.com/photos/11847042/pexels-photo-11847042.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl26: 'https://images.pexels.com/photos/10970424/pexels-photo-10970424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl27: 'https://images.pexels.com/photos/12365122/pexels-photo-12365122.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl28: 'https://images.pexels.com/photos/12317767/pexels-photo-12317767.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl29: 'https://images.pexels.com/photos/12448506/pexels-photo-12448506.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl31: 'https://images.pexels.com/photos/12241468/pexels-photo-12241468.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl32: 'https://images.pexels.com/photos/12333179/pexels-photo-12333179.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl33: 'https://images.pexels.com/photos/12051365/pexels-photo-12051365.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl34: 'https://images.pexels.com/photos/12325904/pexels-photo-12325904.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl35: 'https://images.pexels.com/photos/12310319/pexels-photo-12310319.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl36: 'https://images.pexels.com/photos/12128687/pexels-photo-12128687.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl37: 'https://images.pexels.com/photos/11735092/pexels-photo-11735092.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl38: 'https://images.pexels.com/photos/11588694/pexels-photo-11588694.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        imgUrl39: 'https://images.pexels.com/photos/9277357/pexels-photo-9277357.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
]


function homepage() {
    data.map((e) => {
        img1.innerHTML = `<img src="${e.imgUrl3}" >`
        img2.innerHTML = `<img src="${e.imgUrl2}" >`
        img3.innerHTML = `<img src="${e.imgUrl1}" >`
        img4.innerHTML = `<img src="${e.imgUrl4}" >`
        img5.innerHTML = `<img src="${e.imgUrl5}" >`
        img6.innerHTML = `<img src="${e.imgUrl6}" >`
        img7.innerHTML = `<img src="${e.imgUrl7}" >`
        img8.innerHTML = `<img src="${e.imgUrl8}" >`
        img9.innerHTML = `<img src="${e.imgUrl9}" >`
        img10.innerHTML = `<img src="${e.imgUrl10}" >`
    })
    console.log("homepage");
}
homepage()

const homes = () => {
    container2[0].style.display = "none"
    container4[0].style.display = "none"
    container3[0].style.display = "none"
    container1[0].style.display = "flex"
    data.map((e) => {
        img1.innerHTML = `<img src="${e.imgUrl3}" >`
        img2.innerHTML = `<img src="${e.imgUrl2}" >`
        img3.innerHTML = `<img src="${e.imgUrl1}" >`
        img4.innerHTML = `<img src="${e.imgUrl4}" >`
        img5.innerHTML = `<img src="${e.imgUrl5}" >`
        img6.innerHTML = `<img src="${e.imgUrl6}" >`
        img7.innerHTML = `<img src="${e.imgUrl7}" >`
        img8.innerHTML = `<img src="${e.imgUrl8}" >`
        img9.innerHTML = `<img src="${e.imgUrl9}" >`
        img10.innerHTML = `<img src="${e.imgUrl10}" >`
    })
    collections[0].style.backgroundColor = "#fff"
    collections[0].style.color = "#000"
    trending[0].style.backgroundColor = "#fff"
    trending[0].style.color = "#000"
    latest[0].style.backgroundColor = "#fff"
    latest[0].style.color = "#000"
    console.log("homes");
    home[0].style.backgroundColor = "#000"
    home[0].style.color = "#fff"
}


const trend = () => {
    container2[0].style.display = "flex"
    container4[0].style.display = "none"
    container3[0].style.display = "none"
    container1[0].style.display = "none"
    data.map((e) => {
        img11.innerHTML = `<img src="${e.imgUrl13}" >`
        img12.innerHTML = `<img src="${e.imgUrl12}" >`
        img13.innerHTML = `<img src="${e.imgUrl14}" >`
        img14.innerHTML = `<img src="${e.imgUrl14}" >`
        img15.innerHTML = `<img src="${e.imgUrl15}" >`
        // img16.innerHTML = `<img src="${e.imgUrl16}" >`
        img19.innerHTML = `<img src="${e.imgUrl17}" >`
        img18.innerHTML = `<img src="${e.imgUrl18}" >`
        img17.innerHTML = `<img src="${e.imgUrl19}" >`
        img20.innerHTML = `<img src="${e.imgUrl20}" >`
    })
    home[0].style.backgroundColor = "#fff"
    home[0].style.color = "#000"
    collections[0].style.backgroundColor = "#fff"
    collections[0].style.color = "#000"
    latest[0].style.backgroundColor = "#fff"
    latest[0].style.color = "#000"
    console.log("trends");
    trending[0].style.backgroundColor = "#000"
    trending[0].style.color = "#fff"
}

const latests = () => {
    container2[0].style.display = "none"
    container4[0].style.display = "none"
    container3[0].style.display = "flex"
    container1[0].style.display = "none"
    data.map((e) => {
        img21.innerHTML = `<img src="${e.imgUrl23}" >`
        img22.innerHTML = `<img src="${e.imgUrl22}" >`
        img23.innerHTML = `<img src="${e.imgUrl21}" >`
        img24.innerHTML = `<img src="${e.imgUrl24}" >`
        img25.innerHTML = `<img src="${e.imgUrl25}" >`
        img26.innerHTML = `<img src="${e.imgUrl26}" >`
        img27.innerHTML = `<img src="${e.imgUrl27}" >`
        img28.innerHTML = `<img src="${e.imgUrl28}" >`
        img29.innerHTML = `<img src="${e.imgUrl29}" >`
    })
    home[0].style.backgroundColor = "#fff"
    home[0].style.color = "#000"
    collections[0].style.backgroundColor = "#fff"
    collections[0].style.color = "#000"
    trending[0].style.backgroundColor = "#fff"
    trending[0].style.color = "#000"
    console.log("latests");
    latest[0].style.backgroundColor = "#000"
    latest[0].style.color = "#fff"
}

const collection = () => {
    container2[0].style.display = "none"
    container4[0].style.display = "flex"
    container3[0].style.display = "none"
    container1[0].style.display = "none"
    data.map((e) => {
        img31.innerHTML = `<img src="${e.imgUrl33}" >`
        img32.innerHTML = `<img src="${e.imgUrl32}" >`
        img33.innerHTML = `<img src="${e.imgUrl31}" >`
        img34.innerHTML = `<img src="${e.imgUrl34}" >`
        img35.innerHTML = `<img src="${e.imgUrl35}" >`
        img36.innerHTML = `<img src="${e.imgUrl36}" >`
        img37.innerHTML = `<img src="${e.imgUrl37}" >`
        img38.innerHTML = `<img src="${e.imgUrl38}" >`
        img39.innerHTML = `<img src="${e.imgUrl39}" >`
    })
    home[0].style.backgroundColor = "#fff"
    home[0].style.color = "#000"
    trending[0].style.backgroundColor = "#fff"
    trending[0].style.color = "#000"
    latest[0].style.backgroundColor = "#fff"
    latest[0].style.color = "#000"
    console.log("collection");
    collections[0].style.backgroundColor = "#000"
    collections[0].style.color = "#fff"
}



/* login functionality */


function log_in() {
    console.log("signup");
    login_menu[0].style.display = "block"
    register[0].style.display = "none"
}
function log_out() {
    console.log("login");
    login_menu[0].style.display = "none"
    register[0].style.display = "block"
}

const sec = document.querySelector("section");

function submit_form() {
    main_container[0].style.filter = 'blur(0)'
    doc_body[0].style.overflow = "auto"
    main_login[0].style.display = "none"
}

sec.style.position = "fixed"
function log() {
    main_login[0].style.display = "block"
    login_menu[0].style.display = "block"
    doc_body[0].style.overflow = "hidden"
    // main_container[0].style.filter = 'brightness(0.5)'
    main_container[0].style.filter = 'blur(5px)'
}


/* support icon  */

function supportMe() {
    support1[0].classList.toggle("spport-on")
}
