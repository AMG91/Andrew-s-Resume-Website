// Defining Variables

// Variables for nav bar

const navigation = document.getElementById("Moblie-Nav");

const barbtn = document.getElementById("Moblie-nav-bar-icon");

const closing = document.getElementById("Moblie-Nav-closebtn");

// All of this is for the MoblieNav to function

barbtn.addEventListener("click", openMoblieNav);

  function openMoblieNav() {
    navigation.style.width = "100%";
    }

closing.addEventListener("click", closeMoblieNav);

  function closeMoblieNav() {
    navigation.style.width = "0%";
    }