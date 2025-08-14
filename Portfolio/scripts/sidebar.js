      
      export function toggleBar(){
        
        document.addEventListener("DOMContentLoaded", () => {
          const menuToggle = document.getElementById("menu-toggle");
          const sidebar = document.querySelector(".sidebar");
          const overlay = document.getElementById("overlay");
      
         function toggleSidebar() {
            sidebar.classList.toggle("active");
            overlay.classList.toggle("active");
          }
          
          menuToggle.addEventListener("click", toggleSidebar);
          overlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
          });
        });
      }
