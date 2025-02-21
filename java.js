const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 4500,
    colors: [
      {
        code: "black",
        img: "airr.png",
      },
      {
        code: "darkblue",
        img: "air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 5500,
    colors: [
      {
        code: "lightgray",
        img: "jordan.png",
      },
      {
        code: "green",
        img: "jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 4700,
    colors: [
      {
        code: "lightgray",
        img: "blazer.png",
      },
      {
        code: "green",
        img: "blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 4000,
    colors: [
      {
        code: "black",
        img: "crater.png",
      },
      {
        code: "lightgray",
        img: "crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 3000,
    colors: [
      {
        code: "gray",
        img: "hippie.png",
      },
      {
        code: "black",
        img: "hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
}); 



// Örnek kayıtlı kullanıcılar
const registeredUsers = [];

function toggleForms() {
    const loginWrapper = document.getElementById('login-wrapper');
    const registerWrapper = document.getElementById('register-wrapper');
    if (loginWrapper.style.display === 'none') {
        loginWrapper.style.display = 'block';
        registerWrapper.style.display = 'none';
    } else {
        loginWrapper.style.display = 'none';
        registerWrapper.style.display = 'block';
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = registeredUsers.find(user => user.username === username && user.password === password);

    if (user) {
        // Giriş başarılı
        alert("Welcome, " + username + "!");
        document.getElementById("login-error-message").style.display = "none";
    } else {
        // Giriş başarısız
        document.getElementById("login-error-message").style.display = "block";
    }
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Kullanıcıyı kaydet
    registeredUsers.push({ username, password });

    // Kayıt başarılı mesajı göster
    document.getElementById("register-success-message").style.display = "block";

    // Kayıt formunu temizle
    document.getElementById("register-username").value = "";
    document.getElementById("register-password").value = "";

    // Kayıt başarılı olduktan sonra login formunu göster
    setTimeout(() => {
        toggleForms();
        document.getElementById("register-success-message").style.display = "none";
    }, 2000);
});
