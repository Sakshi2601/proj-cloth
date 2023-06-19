

let filterarray = [];

let galleryarray = [
    {
        id:1,
        name: "Black belt",
        src: "images/noimage/wbag5.jpg",
        desc: "Gucci Unisex Black Belt.",
        price: "Rs. 1599"
    },
    {
        id:2,
        name: "Adidas socks",
        src: "images/noimage/wbag7.jpg",
        desc: "Adidas Comfy 3 PAIR Socks.",
        price: "Rs. 749"
    },
    {
        id:3,
        name: "Lavie bag",
        src: "images/noimage/wbag1.jpg",
        desc: "Women's Branded Red Handbag .",
        price: "Rs. 499"
    },
    {
        id:4,
        name: "Bata shoe",
        src: "images/noimage/wbag10.jpg",
        desc: "Shining Black Formal Shoes.",
        price: "Rs. 899"
    },
    {
        id:5,
        name: "Sports bag",
        src: "images/noimage/wbag4.jpg",
        desc: "Adidas Black Fav Sports Bag.",
        price: "Rs. 439"
    },
    {
        id:6,
        name: "Nike shoes",
        src: "images/noimage/wbag9.jpg",
        desc: "Nike Designer Sports Shoes.",
        price: "Rs. 1099"
    },
    {
        id:7,
        name: "Lyra bag",
        src: "images/noimage/wbag2.jpg",
        desc: "Women's Casual Style Handbag.",
        price: "Rs. 849"
    },
    {
        id:8,
        name: "Sudan bag",
        src: "images/noimage/wbag3.jpg",
        desc: "Sudan Men's Black Office Bag.",
        price: "Rs. 799"
    }
]

showgallery(galleryarray);

function showgallery(currarray){

    document.getElementById("card").innerHTML = "";

    for(var i=0; i<currarray.length; i++){
        document.getElementById("card").innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3 mb-3">
            <div class="card p-3 ps-5 pe-5">
                <img src="${currarray[i].src}" width="100%" height="auto" />
                <h6 class="mt-2"> ${currarray[i].name} </h6>
                <p class="mt-1">${currarray[i].desc}</p>
                <h6 class="mt-0">${currarray[i].price}</h6>
                <button class="btn w-100 mx-auto">Buy</button>
            </div>
        </div>
    `
    }
}

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray = galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
        }
    });
    if(this.value == "") {
        showgallery(galleryarray);
    }
    else{
        if(filterarray == ""){
            document.getElementById("para").style.display ='block';
            document.getElementById("card").innerHTML = "";
        }
        else{
            showgallery(filterarray);
            document.getElementById("para").style.display='none';
        }
    }
})