let filterarray = [];

let galleryarray = [
    {
        id:1,
        name: "Zara top",
        src: "images/noimage/lady4.jpg",
        desc: "Women's Casual Full Sleeves Collar Top.",
        price: "Rs. 699"
    },
    {
        id:2,
        name: "Taneira saree",
        src: "images/noimage/tlady3.jpg",
        desc: "Grey and Red Floral Embroidary Saree.",
        price: "Rs. 749"
    },
    {
        id:3,
        name: "Denim bottomwear",
        src: "images/noimage/wpants5.jpg",
        desc: "Women's Fashion Plain Blue Trouser.",
        price: "Rs. 899"
    },
    {
        id:4,
        name: "Urban tshirt",
        src: "images/noimage/wtshirt3.jpg",
        desc: "Urban Women's Fav Long Sleeves Tshirt.",
        price: "Rs. 499"
    },
    {
        id:5,
        name: "Urban tshirt",
        src: "images/noimage/wtshirt2.jpg",
        desc: "Urban Plain Long-Arm Blue Tshirt.",
        price: "Rs. 439"
    },
    {
        id:6,
        name: "Zara top",
        src: "images/noimage/lady2.jpg",
        desc: "Women's Stylist Party Wear Top.",
        price: "Rs. 1099"
    },
    {
        id:7,
        name: "Wedani kurti",
        src: "images/noimage/tlady7.jpg",
        desc: "Wedani Plain Long Sleeves Kurti.",
        price: "Rs. 849"
    },
    {
        id:7,
        name: "Taneira saree",
        src: "images/noimage/tlady4.jpg",
        desc: "Red & Gold Party Design Saree.",
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

document.getElementById("wmyinput").addEventListener("keyup",function(){
    let text = document.getElementById("wmyinput").value;

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