

let filterarray = [];

let galleryarray = [
    {
        id:1,
        name: "Pink top",
        src: "images/noimage/kid1.jpg",
        desc: "DJ&C Plain Pink Floral Top.",
        price: "Rs. 699"
    },
    {
        id:2,
        name: "Zara frock",
        src: "images/noimage/kid6.jpg",
        desc: "Sweet Multi colour Frock.",
        price: "Rs. 749"
    },
    {
        id:3,
        name: "Princess frock",
        src: "images/noimage/kid7.jpg",
        desc: "Zara Maroon Pricess Frock.",
        price: "Rs. 499"
    },
    {
        id:4,
        name: "Floral frock",
        src: "images/noimage/kid5.jpg",
        desc: "Manyawar Floral Frock & Cap.",
        price: "Rs. 899"
    },
    {
        id:5,
        name: "Black bottomwear",
        src: "images/noimage/kid12.jpg",
        desc: "Girl Kid Black Loose Pants.",
        price: "Rs. 439"
    },
    {
        id:6,
        name: "Denim frock",
        src: "images/noimage/kid10.jpg",
        desc: "Denim Girl Peter Neck Frock.",
        price: "Rs. 1099"
    },
    {
        id:7,
        name: "Winter top",
        src: "images/noimage/kid2.jpg",
        desc: "Erica Winter Fashion Cloth.",
        price: "Rs. 849"
    },
    {
        id:8,
        name: "Trouser bottomwear",
        src: "images/noimage/kid11.jpg",
        desc: "Adidas Pink Trouser with Pockets.",
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