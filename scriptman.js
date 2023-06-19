

let filterarray = [];

let galleryarray = [
    {
        id:1,
        name: "Pink shirt",
        src: "images/noimage/mshirt1.jpg",
        desc: "Raymond Plain Pink Formal Shirt.",
        price: "Rs. 699"
    },
    {
        id:2,
        name: "Grey bottomwear",
        src: "images/noimage/mpants3.jpg",
        desc: "Manq Folded Grey Casual Pant.",
        price: "Rs. 749"
    },
    {
        id:3,
        name: "Adidas tshirt",
        src: "images/mtshirt8.jpg",
        desc: "Adidas Plain Dark Grey Tshirt.",
        price: "Rs. 499"
    },
    {
        id:4,
        name: "Long shirt",
        src: "images/noimage/mshirt6.jpg",
        desc: "Manyawar Printed Magenta Kurta.",
        price: "Rs. 899"
    },
    {
        id:5,
        name: "Black tshirt",
        src: "images/mtshirt5.jpg",
        desc: "Adidas Plain Long-Arm Maroon Tshirt.",
        price: "Rs. 439"
    },
    {
        id:6,
        name: "Denim bottomwear",
        src: "images/noimage/mpants7.jpg",
        desc: "Denim Gents Comfort Blue Jeans.",
        price: "Rs. 1099"
    },
    {
        id:7,
        name: "White shirt",
        src: "images/noimage/mshirt4.jpg",
        desc: "Raymond Plain White Formal Shirt.",
        price: "Rs. 849"
    },
    {
        id:7,
        name: "Trouser bottomwear",
        src: "images/noimage/mpants5.jpg",
        desc: "Adidas Brown Trouser with Pockets.",
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