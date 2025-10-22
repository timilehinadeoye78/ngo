  // Mobile menu functionality
   const mobileMenu = document.getElementById('nav-bar');
    document.getElementById('mobile-menu-button').addEventListener('click', function () {
    //  alert("jkhdhkksj")
    //   mobileMenu.classList.toggle('hidden');
   if( mobileMenu.classList.contains("hidden")){

       mobileMenu.classList.replace("hidden","flex")
   }else{
    mobileMenu.classList.replace("flex","hidden")
   }
    });

    // Close mobile menu when clicking outside
    // document.addEventListener('click', function (event) {
    //   const mobileMenu = document.getElementById('mobile-menu');
    //   const mobileButton = document.getElementById('mobile-menu-button');

    //   if (mobileMenu && mobileButton) {
    //     if (!mobileMenu.contains(event.target) && !mobileButton.contains(event.target)) {
    //       mobileMenu.classList.add('hidden');
    //     }
    //   }
    // });