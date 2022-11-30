const img = document.querySelector(".product-img");
const title = document.querySelector(".product-name");
const description = document.querySelector(".product-desc");
const price = document.querySelector(".price");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const btnScroll = document.getElementById("btnscroll");
const valuePix = 50;

//data products

const dataProducts = [
    {
        name: "Unicolor",
        info: "This shirt unicolor is fitting you every winter. Perfect for all style. Put with unicolor  shoes bring you look a gentle.",
        price: "20$",
        image: "/images/collections/bvcoat.jpg",
    },
    {
        name: "Multicolor",
        info: "This is perfect for the fan of color . It's suits better with clothes jeans. ",
        price: "30$",
        image: "/images/collections/scoat.jpg",
    },
    {
        name: "Women Casual Parka Winter",
        info: "New cotton thicken warm winter jacket coat.",
        price: "50$",
        image: "/images/collections/wcoat.jpg",
    },
    {
        name: "Boy Winter Coat",
        info: "Coton ,long and very warm. ",
        price: "80$",
        image: "/images/collections/gentle.jpg",
    },
    {
        name: "Special Promotion Girl",
        info: "Warm and perfect for girl and have 20% discount.",
        price: "70$",
        image: "/images/collections/gcoat.jpg",
    }
]

//set initial item
let currentItem = 0;



//initial item on load

window.addEventListener("DOMContentLoaded", function() {
    showPerson();
})


//click next button

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > dataProducts.length -1) {
        currentItem = 0;
    }
    showPerson();
})

//click prev button

prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = dataProducts.length -1;
    }
    showPerson();
})

function showPerson() {
    let item = dataProducts[currentItem];
    title.textContent = item.name;
    description.textContent = item.info;
    img.src = item.image;
    price.textContent = item.price;
}

//scroll to top 

window.addEventListener("scroll" , function() {
    if (this.document.body.scrollTop > valuePix || this.document.documentElement.scrollTop > valuePix ) {
        btnScroll.style.display = "block"
    } else {
        btnScroll.style.display = "none"
    }
})

//click scroll button

btnScroll.addEventListener("click", function() {
    document.body.scrollIntoView(
        {
            behavior: "smooth",
        }
    )
})
