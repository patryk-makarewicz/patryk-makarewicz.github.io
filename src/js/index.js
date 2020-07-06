import "../scss/main.scss";

/* place your code below */

console.log("HELLO 🚀");

fetch("https://api.github.com/users/patryk-makarewicz/repos?sort=created")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, description, homepage, html_url } = repo;
      const repozytoryList = document.querySelector(".list--js");
      const myTemplate = `
      <div class="box__window">
        <div class="box__top">
          <svg class="box__circles" width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#464A4D"/>
            <circle cx="20" cy="4" r="4" fill="#464A4D"/>
            <circle cx="36" cy="4" r="4" fill="#464A4D"/>
          </svg>
        </div>
        <div class="box">
          <svg
            class="box__logo"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0013 1.00403e-06C5.37057 -0.00268026 0 5.36521 0 11.9906C0 17.2298 3.35962 21.6834 8.03843 23.319C8.66853 23.4772 8.572 23.0294 8.572 22.7237V20.6457C4.93353 21.0721 4.78606 18.6643 4.54206 18.2621C4.04871 17.4202 2.88236 17.2057 3.23092 16.8035C4.05943 16.3772 4.90403 16.9107 5.88269 18.3559C6.59055 19.4043 7.9714 19.2274 8.67121 19.0531C8.82404 18.423 9.15116 17.8599 9.60161 17.4229C5.83175 16.7472 4.26053 14.4467 4.26053 11.7118C4.26053 10.3845 4.69758 9.16457 5.55558 8.18054C5.0086 6.55838 5.60652 5.16948 5.68696 4.96302C7.24478 4.8236 8.86426 6.07843 8.99028 6.17764C9.8751 5.939 10.8859 5.81298 12.0174 5.81298C13.1543 5.81298 14.1678 5.94437 15.0607 6.18568C15.3636 5.95509 16.8652 4.87722 18.313 5.0086C18.3908 5.21506 18.9753 6.57178 18.4605 8.1725C19.3292 9.1592 19.7716 10.3899 19.7716 11.7198C19.7716 14.4601 18.1897 16.7633 14.4091 17.4282C14.7329 17.7467 14.99 18.1265 15.1654 18.5454C15.3408 18.9643 15.431 19.414 15.4307 19.8682V22.8846C15.4521 23.1259 15.4307 23.3645 15.8329 23.3645C20.5814 21.7638 24 17.2781 24 11.9933C24 5.36521 18.6267 1.00403e-06 12.0013 1.00403e-06Z"
              fill="#FFFFFF"
            />
          </svg>
          <div class="box__git">
        <p>project: <span class="repo__name">${name}</span> <br>
        description: <span class="repo__description">${description}</span> </p>
        <p>demo: &lt;<a href="${homepage}" title="link to live ${name}"><span class="repo__link">see here</span></a>&gt; <br>
        github: &lt;<a href="${html_url}" title="link to repozytory ${name} 
        on github"><span class="repo__link">sorce code</span></a>&gt;</p>
          </div>
        </div>
        </div>
        `;
      if (description) {
        repozytoryList.innerHTML += myTemplate;
      }
    }
  })
  .catch((error) => {
    console.log("Nie udało się pobrać repozytoriów.");
  });
