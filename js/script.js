console.log("JavaScript Loaded for Upcoming Movies Site");

// JS: Toggle Read More / Less on News Cards
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.previousElementSibling;
      const fullText = text.querySelector(".news-full");
      const dots = text.querySelector(".dots");

      if (fullText.style.display === "inline") {
        fullText.style.display = "none";
        dots.style.display = "inline";
        btn.textContent = "Read More";
      } else {
        fullText.style.display = "inline";
        dots.style.display = "none";
        btn.textContent = "Read Less";
      }
    });
  });
});

// JS: Filter Movies by Genre
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const movieCards = document.querySelectorAll(".movie-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // remove active from all buttons
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const genre = btn.getAttribute("data-genre");

      movieCards.forEach((card) => {
        if (genre === "all" || card.getAttribute("data-genre") === genre) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// 📽️ Show Movie Modal on card click (home page)
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("movieModal");
  const modalImg = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".movie-card").forEach(card => {
    card.addEventListener("click", () => {
      const img = card.getAttribute("data-image");
      const title = card.getAttribute("data-title");
      const genre = card.getAttribute("data-genre-info");
      const date = card.getAttribute("data-date");

      modalImg.src = img;
      modalTitle.textContent = title;
      modalDetails.textContent = `Genre: ${genre} | Release: ${date}`;

      modal.style.display = "block";
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const newsCards = document.querySelectorAll(".news-card");
  const modal = document.getElementById("newsModal");
  const modalImg = document.getElementById("modalNewsImg");
  const modalTitle = document.getElementById("modalNewsTitle");
  const modalText = document.getElementById("modalNewsText");
  const closeNews = document.querySelector(".close-news");

  newsCards.forEach(card => {
    card.querySelector(".read-more-btn").addEventListener("click", () => {
      const img = card.getAttribute("data-image");
      const title = card.getAttribute("data-title");
      const full = card.getAttribute("data-full");

      modalImg.src = img;
      modalTitle.textContent = title;
      modalText.textContent = full;

      modal.style.display = "flex";
    });
  });

  closeNews.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const roleModal = document.getElementById("roleModal");
  const roleImg = document.getElementById("modalRoleImg");
  const roleName = document.getElementById("modalRoleName");
  const roleDesc = document.getElementById("modalRoleDesc");
  const roleKnown = document.getElementById("modalRoleKnownFor");
  const closeRole = document.querySelector(".close-role");

  document.querySelectorAll(".role-card").forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img").src;
      const name = card.querySelector("h3").textContent;
      const desc = card.querySelector("p").textContent;
      const known = card.querySelector("span").textContent;

      roleImg.src = img;
      roleName.textContent = name;
      roleDesc.textContent = desc;
      roleKnown.textContent = `Known for: ${known}`;

      roleModal.style.display = "flex";
    });
  });

  closeRole.addEventListener("click", () => {
    roleModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === roleModal) {
      roleModal.style.display = "none";
    }
  });
});

