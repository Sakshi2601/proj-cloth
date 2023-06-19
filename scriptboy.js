

let filterarray = [];

let galleryarray = [
    {
        id:1,
        name: "Jack shirt",
        src: "images/noimage/bkid10.jpg",
        desc: "Jack & Jill Checked Shirt.",
        price: "Rs. 699"
    },
    {
        id:2,
        name: "Levi's tshirt",
        src: "images/noimage/bkid11.jpg",
        desc: "Levi's Multi colour Tshirt.",
        price: "Rs. 749"
    },
    {
        id:3,
        name: "Denim blazer",
        src: "images/noimage/bkid2.jpg",
        desc: "Raymond Boys Blazer & Pant.",
        price: "Rs. 999"
    },
    {
        id:4,
        name: "Long bottom",
        src: "images/noimage/bkid3.jpg",
        desc: "DJ & C Trouser with Pockets.",
        price: "Rs. 899"
    },
    {
        id:5,
        name: "Long shirt",
        src: "images/noimage/bkid9.jpg",
        desc: "DJ & C Printed Party Shirt.",
        price: "Rs. 899"
    },
    {
        id:6,
        name: "Jack tshirt",
        src: "images/noimage/bkid7.jpg",
        desc: "Jack & Jill Tshirt & Jacket.",
        price: "Rs. 849"
    },
    {
        id:7,
        name: "Denim bottomwear",
        src: "images/noimage/bkid1.jpg",
        desc: "Denim Comfort Black Pant.",
        price: "Rs. 1099"
    },
    {
        id:8,
        name: "Manyawar blazer",
        src: "images/noimage/bkid6.jpg",
        desc: "Manyawar Kurta with Blazer.",
        price: "Rs. 1299"
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