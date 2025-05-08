const USER_ID = 'ycbnej7QH72zg6TGT'
const SERVICE_ID = 'service_ajn9ixc'
const TEMPLATE_ID = 'template_rdgp2hf'
const TEMPLATE_CALL_ID = 'template_8e8q4bu'
const TO_NAME = 'Артур'
const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=994706501811'
const TOKEN = `2415|Qpvtp63R4wTi3NVUytIJLHK5Opk3OkJ6lADBGmSG`


const currentUrl = window.location.href;
let language = 'en';

if (currentUrl.includes('/russian/')) {
  language = 'ru';
} else if (currentUrl.includes('/az/')) {
  language = 'az';
}

const currentLocale = language === 'en' ?  {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'MM/dd/yyyy',
    firstDay: 0
} : language === 'ru' ? {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'dd.MM.yyyy',
    firstDay: 1
} : {
    days: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə'],
    daysShort: ['Baz', 'BzE', 'ÇAx', 'Çər', 'CAx', 'Cüm', 'Şən'],
    daysMin: ['Bz', 'BE', 'ÇA', 'Çə', 'CA', 'Cü', 'Şə'],
    months: [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun',
        'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
    ],
    monthsShort: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'İyn', 'İyl', 'Avq', 'Sen', 'Okt', 'Noy', 'Dek'],
    today: 'Bu gün',
    clear: 'Təmizlə',
    dateFormat: 'dd.MM.yyyy',
    firstDay: 1
}


const buttonText = language  === 'en' ? 'More details' : language === 'ru' ? 'Больше деталей' : 'More details'
const quizButtonText = language  === 'en' ? 'Choose' : language === 'ru' ? 'Выбрать' : 'Choose'
const quizButtonTextChoosen = language  === 'en' ? 'Choosen' : language === 'ru' ? 'Выбрано' : 'Choosen'
const rentNowButton = language  === 'en' ? 'Call us now' : language === 'ru' ? 'Позвонить  сейчас' : 'Call us now'

let objectToSend = null

document.addEventListener('DOMContentLoaded', () => {
  $('#submit_quiz_forms').on('click', function () {
    validateQuizForms()
  })

  setCarsFromDb()
  setCarFromUrl()
  setSelectValue()
  selectCategory()
  setCategoryFromUrl();
  sendEmail();
  checkBeforeCheckout();
  scrollAnchor();
  setBlogItems();
  setBlogFromUrl();
  divideCars();
  getCountryInfo()
 

  selectPriceCategory()
  const rateOptions = document.querySelectorAll(".rate_options div");
  if (rateOptions.length) {
    rateOptions.forEach(option => {
      option.addEventListener("click", function () {
        let selectedClass = this.getAttribute("data-value");
        let rateDropdown = document.querySelector("#rateDropdown span");
        let rateOptionsEl = document.getElementById("rateOptions");
  
        if (rateDropdown) rateDropdown.textContent = this.textContent;
        if (rateOptionsEl) rateOptionsEl.style.display = "none";
  
        const rateMultiplier = { economy: 1, business: 1.5, vip: 2 };
        document.querySelectorAll(".calc_bottom_item").forEach(item => {
          let basePrice = parseInt(item.getAttribute("data-price"));
          let newPrice = basePrice * rateMultiplier[selectedClass];
          let priceEl = item.querySelector(".price");
          if (priceEl) priceEl.textContent = newPrice + " AZN";
        });
      });
    });
  }
  
  document.addEventListener("click", function (event) {
    let rateDropdown = document.getElementById("rateDropdown");
    let rateOptionsEl = document.getElementById("rateOptions");
  
    if (rateDropdown && rateOptionsEl && !rateDropdown.contains(event.target)) {
      rateOptionsEl.style.display = "none";
    }
  });
  
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  if (accordionHeaders.length) {
    accordionHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
        const isActive = item.classList.contains("active");
  
        document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    });
  }
  
  if (document.querySelector(".reviews_swiper")) {
    new Swiper(".reviews_swiper", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 32,
      navigation: { prevEl: ".swiper-action" },
      breakpoints: {
        1200: { slidesPerView: 4 },
        0: { slidesPerView: 3 }
      }
    });
  }
  
  if (document.querySelector(".photos_swiper")) {
    new Swiper(".photos_swiper", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 32,
      navigation: { prevEl: ".swiper-next" },
      breakpoints: {
        1200: { slidesPerView: 3 },
        768: { slidesPerView: 2, spaceBetween: 12 },
        0: { slidesPerView: 1.5, spaceBetween: 12 }
      }
    });
  }
  
if (document.querySelector(".news_swiper")) {
  const swiperWrapper = document.querySelector('.news_swiper .swiper-wrapper');


  // Динамическое создание слайдов
  blog.forEach(blogItem => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `
      <a href="blog.html">
          <img src="${blogItem.image}" alt="">
          <div class="bottom">
              <div class="title">${blogItem.title}</div>
              <div class="date">News / ${blogItem.date}</div>
          </div>
          </a>
      `;
      swiperWrapper.appendChild(slide);
  });

  // Инициализация Swiper после добавления слайдов
  const swiper = new Swiper('.news_swiper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 32,
      navigation: { nextEl: ".news_swiper_next" },
      breakpoints: {
          1200: { slidesPerView: 3 },
          0: { slidesPerView: 1.2, spaceBetween: 16 }
      },
  });
}
 
  
  const seeAllBtn = document.querySelector(".see_all");
  if (seeAllBtn) {
    seeAllBtn.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".hide").forEach(element => element.classList.add("active"));
      this.classList.add("active");
    });
  }
  
  const openButton = document.querySelector(".open");
  const closeButton = document.querySelector(".close");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".menu-overlay");
  
  if (openButton && closeButton && overlay) {
    openButton.addEventListener("click", () => {
      document.body.classList.add("menu-open");
    });
  
    closeButton.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
    });
  
    overlay.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
    });
  }
  
  const rateDropdown = document.getElementById("rateDropdown");
  const rateOptionsEl = document.getElementById("rateOptions");
  
  if (rateDropdown && rateOptionsEl) {
    rateDropdown.addEventListener("click", function () {
      rateOptionsEl.style.display = "block";
    });
  }

  const swiperThumbs = new Swiper(".swiper-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      
      768: { slidesPerView: 4,  },
      0: { slidesPerView: 3, spaceBetween: 16 }
    }
  });
  
  const swiperMain = new Swiper(".swiper-main", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperThumbs,
    },
  });

  const rentNow = document.querySelector('.rent-now');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modal2 = document.querySelector('.modal');
  const closeBtn = document.querySelectorAll('.close-btn');

  if (rentNow) {
      rentNow.addEventListener('click', (e) => {
          e.preventDefault();
          modalOverlay.style.display = 'flex';
          setTimeout(() => {
            modal2.style.transform = 'scale(1)';
            modal2.style.opacity = '1';
          }, 0);
      });
  }

  if (closeBtn) {
    closeBtn.forEach((btn) => { 
      btn.addEventListener('click', () => {
        console.log('you want close modal')
        document.body.style.overflow = 'auto'
        const closestModalOverlay = btn.closest('.modal-overlay')
        closestModalOverlay.classList.remove('active')
      });
    })
     
  }

  if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
          if (e.target === modalOverlay) {
            modal2.classList.remove('active')
              /* setTimeout(() => {
                modalOverlay.style.opacity = '0';
              }, 300); */
          }
      });
  }

  document.querySelectorAll('.styled-datepicker').forEach((datepicker) => {
    const datepickerId = datepicker.getAttribute('id');

    datepickers[datepickerId] = new AirDatepicker('#' + datepickerId, {
        onSelect({ date, formattedDate, datepicker }) {
            if (datepicker.$el.getAttribute('id') === 'start_date') {
                const newStartDate = new Date(date);
                startDate = newStartDate;
                changeMinDate(date);
            }
            if (datepicker.$el.getAttribute('id') === 'end_date') {
                endDate = date;
            }
            checkAndCalculate();

            // Закрытие календаря после выбора даты
            datepicker.hide();
        },
        minDate: [new Date()], // Устанавливаем минимальную дату на сегодня
        selectedDates: [new Date()],
        dateFormat: 'MMMM dd, yyyy',
        locale: currentLocale
    });
});

changeMinDate(new Date());

  
  
  const dropdowns = document.querySelectorAll(".dropdown2");
  if (dropdowns.length) {
    dropdowns.forEach(dropdown => {
      const toggleButton = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");
  
      if (toggleButton && menu) {
        toggleButton.addEventListener("click", () => {
          dropdowns.forEach(item => {
            if (item !== dropdown) item.classList.remove("open");
          });
          dropdown.classList.toggle("open");
        });
      }
    });
  
    document.addEventListener("click", event => {
      if (!event.target.closest(".dropdown2")) {
        dropdowns.forEach(dropdown => dropdown.classList.remove("open"));
      }
    });
  }
  
  const seeElseBtn = document.querySelector(".see_else");
  if (seeElseBtn) {
    seeElseBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const hideElement = document.querySelector(".hide_element_item");
      if (hideElement) {
        hideElement.classList.remove("hide");
        this.classList.add("active");
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".date-droptown");
  
    if (dropdowns.length === 0) return; // Agar hech narsa bo‘lmasa, kodni bajarishni to‘xtatamiz.
  
    dropdowns.forEach(dateDroptown => {
      const btn = dateDroptown.querySelector(".date-droptown-btn");
      const textSpan = btn?.querySelector(".text"); // ? bilan xato chiqmasligiga ishonch hosil qilamiz
      const list = dateDroptown.querySelector(".date-droptown-list");
  
      if (!btn || !textSpan || !list) return; // Agar element topilmasa, davom etmaydi
  
      btn.addEventListener("click", () => {
        dropdowns.forEach(dropdown => {
          if (dropdown !== dateDroptown) dropdown.classList.remove("active");
        });
        dateDroptown.classList.toggle("active");
      });
  
      list.querySelectorAll("li").forEach(item => {
        item.addEventListener("click", () => {
          textSpan.innerHTML = item.innerHTML;
          dateDroptown.classList.remove("active");
        });
      });
    });
  
    document.addEventListener("click", (e) => {
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove("active");
        }
      });
    });
  });
  
  
  
  

  const dropdownContainer = document.querySelector(".custom-dropdown");

  if (dropdownContainer) {
    const dropdownHeader = dropdownContainer.querySelector(".dropdown-header");
    const dropdownMenu = dropdownContainer.querySelector(".dropdown-list");
    const selectedText = dropdownHeader.querySelector(".selected-option");

    if (dropdownHeader && dropdownMenu && selectedText) {
      dropdownHeader.addEventListener("click", function () {
        dropdownContainer.classList.toggle("active");
      });

      dropdownMenu.querySelectorAll(".dropdown-item").forEach((item) => {
        item.addEventListener("click", function () {
          selectedText.textContent = this.textContent;
          dropdownContainer.classList.remove("active");
        });
      });

      document.addEventListener("click", function (event) {
        if (!dropdownContainer.contains(event.target)) {
          dropdownContainer.classList.remove("active");
        }
      });
    }
  }



  const openBtns = document.querySelectorAll('.open_modal_btn');
  openBtns.forEach((open)=>{
    
    if(open) {
      const modalId = open.dataset.modal
    /*  const whatsappoverlay = document.querySelector('.whatsap_modal_overlay'); */
      const modalElement = document.getElementById(modalId)
     
    
      if (modalElement) {
      const modalClose = modalElement.querySelector('.modal-close');

        open.addEventListener('click', (e) => {
          e.preventDefault();
          if(!open.classList.contains('invalid')) {
              document.body.style.overflow = 'hidden'
              modalElement.classList.add('active');
            }
        });
        if(modalClose) {
  
        modalClose.addEventListener('click', () => {
          modalElement.classList.remove('active');
          document.body.style.overflow = 'auto'
  
        });
      }
  
        modalElement.addEventListener('click', (e) => {
            if (e.target === modalElement ) {
              modalElement.classList.remove('active');
            document.body.style.overflow = 'auto'
  
            }
        });
      
        
      }
    }
  })
  
  $('.start_time').on('input', function() {
    startInputHours = parseInt($(this).val().split(':')[0])
    startInputMinutes =  parseInt($(this).val().split(':')[1])
    checkAndCalculate()
  }) 
  $('.end_time').on('input', function() {
    endInputHours = parseInt($(this).val().split(':')[0])
    endInputMinutes =  parseInt($(this).val().split(':')[1])
    checkAndCalculate()
  }) 

});


function setCarsIntoDOM(carsContainer, products) {
  console.log('products - ', products)  
  if(carsContainer) {
    if(products.length) {
      carsContainer.innerHTML = ''
      
      products.forEach((product)=>{
      let productHtml = `<div class="item ${product.category} ">
                          <div class="item_title">${product.title}</div>
                          <div class="product">
                              <img src="${product.images[0]}" alt="">
                          </div>
                          <div class="advantages">
                              <div class="advantages_item">
                                  <div class="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                          <g clip-path="url(#clip0_1_101)">
                                            <path d="M12 9.64352e-06C14.7773 -0.000784241 17.469 0.961504 19.6163 2.72289C21.7637 4.48428 23.2338 6.93578 23.7762 9.65963C24.3186 12.3835 23.8997 15.2111 22.5909 17.6607C21.2821 20.1103 19.1643 22.0303 16.5986 23.0935C14.0328 24.1567 11.1777 24.2972 8.51992 23.4912C5.86211 22.6853 3.56601 20.9826 2.02289 18.6734C0.479773 16.3642 -0.214875 13.5914 0.0573193 10.8275C0.329514 8.0635 1.55171 5.47945 3.51563 3.51563C4.6284 2.39946 5.95083 1.51425 7.40689 0.910914C8.86294 0.307576 10.4239 -0.00199184 12 9.64352e-06ZM12.7949 16.0332C13.0104 16.1992 13.1686 16.4284 13.2472 16.6888C13.3258 16.9492 13.3209 17.2277 13.2332 17.4852C13.1456 17.7427 12.9795 17.9662 12.7583 18.1246C12.5372 18.2829 12.272 18.368 12 18.368C11.728 18.368 11.4628 18.2829 11.2417 18.1246C11.0205 17.9662 10.8544 17.7427 10.7668 17.4852C10.6791 17.2277 10.6743 16.9492 10.7529 16.6888C10.8315 16.4284 10.9896 16.1992 11.2051 16.0332V13.4024H8.26368V16.0332C8.47917 16.1992 8.6373 16.4284 8.71591 16.6888C8.79451 16.9492 8.78964 17.2277 8.70198 17.4852C8.61431 17.7427 8.44825 17.9662 8.22709 18.1246C8.00593 18.2829 7.74075 18.368 7.46876 18.368C7.19676 18.368 6.93158 18.2829 6.71042 18.1246C6.48926 17.9662 6.3232 17.7427 6.23554 17.4852C6.14787 17.2277 6.143 16.9492 6.2216 16.6888C6.30021 16.4284 6.45834 16.1992 6.67383 16.0332V9.01759C6.45834 8.85162 6.30021 8.62236 6.2216 8.36197C6.143 8.10158 6.14787 7.82311 6.23554 7.56563C6.3232 7.30815 6.48926 7.08456 6.71042 6.92623C6.93158 6.7679 7.19676 6.68276 7.46876 6.68276C7.74075 6.68276 8.00593 6.7679 8.22709 6.92623C8.44825 7.08456 8.61431 7.30815 8.70198 7.56563C8.78964 7.82311 8.79451 8.10158 8.71591 8.36197C8.6373 8.62236 8.47917 8.85162 8.26368 9.01759V11.8125H11.2051V9.01759C10.9896 8.85162 10.8315 8.62236 10.7529 8.36197C10.6743 8.10158 10.6791 7.82311 10.7668 7.56563C10.8544 7.30815 11.0205 7.08456 11.2417 6.92623C11.4628 6.7679 11.728 6.68276 12 6.68276C12.272 6.68276 12.5372 6.7679 12.7583 6.92623C12.9795 7.08456 13.1456 7.30815 13.2332 7.56563C13.3209 7.82311 13.3258 8.10158 13.2472 8.36197C13.1686 8.62236 13.0104 8.85162 12.7949 9.01759V11.8125H15.7363V9.01759C15.5208 8.85162 15.3627 8.62236 15.2841 8.36197C15.2055 8.10158 15.2104 7.82311 15.298 7.56563C15.3857 7.30815 15.5518 7.08456 15.7729 6.92623C15.9941 6.7679 16.2593 6.68276 16.5313 6.68276C16.8033 6.68276 17.0684 6.7679 17.2896 6.92623C17.5108 7.08456 17.6768 7.30815 17.7645 7.56563C17.8521 7.82311 17.857 8.10158 17.7784 8.36197C17.6998 8.62236 17.5417 8.85162 17.3262 9.01759V12.5C17.3282 12.5338 17.3282 12.5677 17.3262 12.6016C17.3262 12.8124 17.2424 13.0146 17.0933 13.1637C16.9443 13.3127 16.7421 13.3965 16.5313 13.3965H12.7949V16.0332ZM19.2402 4.75196C17.5635 3.07657 15.3578 2.03434 12.9988 1.80283C10.6398 1.57132 8.27354 2.16486 6.30309 3.48232C4.33264 4.79978 2.87992 6.75966 2.19242 9.02808C1.50491 11.2965 1.62516 13.7331 2.53267 15.9228C3.44017 18.1125 5.0788 19.9198 7.16939 21.0369C9.25998 22.1539 11.6732 22.5116 13.9979 22.049C16.3226 21.5863 18.415 20.332 19.9187 18.4996C21.4223 16.6673 22.2441 14.3703 22.2441 12C22.247 10.654 21.9838 9.3208 21.4696 8.07692C20.9554 6.83304 20.2004 5.70307 19.2481 4.75196H19.2402Z" fill="#90A3BF"></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_1_101">
                                              <rect width="24" height="24" fill="white"></rect>
                                            </clipPath>
                                          </defs>
                                      </svg>
                                      
                                  </div>
                                  ${getLocalizedValue(product.advantages.transmission, language)}
                              </div>
                            
                              <div class="advantages_item">
                                  <div class="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                          <path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#90A3BF"></path>
                                      </svg>
                                      
                                  </div>
                                  ${getLocalizedValue(product.advantages.engine_type, language)}
                              </div>
                              <div class="advantages_item">
                                  <div class="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                          <path d="M24 10.5V16.5C24 16.6989 23.921 16.8897 23.7803 17.0303C23.6397 17.171 23.4489 17.25 23.25 17.25C23.0511 17.25 22.8603 17.171 22.7197 17.0303C22.579 16.8897 22.5 16.6989 22.5 16.5V14.25H21V15.75C21 16.1478 20.842 16.5294 20.5607 16.8107C20.2794 17.092 19.8978 17.25 19.5 17.25H18.3103L15 20.5603C14.8612 20.7002 14.696 20.8111 14.514 20.8866C14.332 20.9621 14.1367 21.0006 13.9397 21H7.81031C7.61326 21.0006 7.41804 20.9621 7.23602 20.8866C7.05399 20.8111 6.88878 20.7002 6.75 20.5603L3.43969 17.25C3.29979 17.1112 3.18888 16.946 3.1134 16.764C3.03792 16.582 2.99937 16.3867 3 16.1897V14.25H1.5V16.5C1.5 16.6989 1.42098 16.8897 1.28033 17.0303C1.13968 17.171 0.948912 17.25 0.75 17.25C0.551088 17.25 0.360322 17.171 0.21967 17.0303C0.0790176 16.8897 0 16.6989 0 16.5V10.5C0 10.3011 0.0790176 10.1103 0.21967 9.96967C0.360322 9.82902 0.551088 9.75 0.75 9.75C0.948912 9.75 1.13968 9.82902 1.28033 9.96967C1.42098 10.1103 1.5 10.3011 1.5 10.5V12.75H3V7.5C3 7.10218 3.15804 6.72064 3.43934 6.43934C3.72064 6.15804 4.10218 6 4.5 6H10.5V4.5H8.25C8.05109 4.5 7.86032 4.42098 7.71967 4.28033C7.57902 4.13968 7.5 3.94891 7.5 3.75C7.5 3.55109 7.57902 3.36032 7.71967 3.21967C7.86032 3.07902 8.05109 3 8.25 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75C15 3.94891 14.921 4.13968 14.7803 4.28033C14.6397 4.42098 14.4489 4.5 14.25 4.5H12V6H13.9397C14.1367 5.99937 14.332 6.03792 14.514 6.1134C14.696 6.18888 14.8612 6.29979 15 6.43969L18.3103 9.75H19.5C19.8978 9.75 20.2794 9.90804 20.5607 10.1893C20.842 10.4706 21 10.8522 21 11.25V12.75H22.5V10.5C22.5 10.3011 22.579 10.1103 22.7197 9.96967C22.8603 9.82902 23.0511 9.75 23.25 9.75C23.4489 9.75 23.6397 9.82902 23.7803 9.96967C23.921 10.1103 24 10.3011 24 10.5Z" fill="#90A3BF"></path>
                                      </svg>
                                    
                                  </div>
                                ${getLocalizedValue(product.advantages.volume, language)}
                              </div>
                          </div>
                          <div class="prices">
                              <div class="prices_item">
                                  <div class="day">2-7 ${language === 'en' ? 'daysы' : 'дни'} <span></span></div>
                                  <div class="price">${product.price_max} ${product.currency}</div>
                              </div>
                              <div class="prices_item">
                                  <div class="day">8-20 ${language === 'en' ? 'daysы' : 'дней'} <span></span> </div>
                                  <div class="price">${product.price_mid} ${product.currency}</div>
                              </div>
                              <div class="prices_item">
                                  <div class="day">21+ ${language === 'en' ? 'daysы' : 'дней'} <span></span></div>
                                  <div class="price">${product.price_min} ${product.currency}</div>
                              </div>
                          </div>
                          <div class="socilas_icons">
                              <a href="tel:+994706501811" class="socilas_icons_item">
                                  <img src="../assets/images/phone.svg" alt="">
                                  <div class="text">${language === 'en' ? 'Call' : 'Позвонить'}</div>
                              </a>
                              <a href="${WHATSAPP_LINK}" class="socilas_icons_item" target="_blank">
                                  <img src="../assets/images/whatsapp.svg" alt="">
                                  <div class="text">WhatsApp</div>
                              </a>
                          </div>
                      `
      if(carsContainer.closest('.quiz_sec')) {     
        productHtml += ` <div href="about-car.html?product=${product.slug}" data-car-id="${product.id}" class="more button quiz_button_car">${quizButtonText}</a></div>`
      } else {
        productHtml += ` <a href="about-car.html?product=${product.slug}" class="more">${buttonText}</a></div>`
      }
    carsContainer.innerHTML += productHtml
    
      })
    } else {
      carsContainer.innerHTML = ''
    }
}
}


// Функция для безопасного получения локализованного значения
function getLocalizedValue(obj, language, defaultLanguage = 'en') {
  // Проверяем, что obj существует и является объектом
  if (!obj || typeof obj !== 'object') {
    return obj || ''; // Возвращаем значение как есть или пустую строку
  }
  
  // Если это строка, а не объект с локализациями
  if (typeof obj === 'string') {
    return obj;
  }
  
  // Если это объект с локализованными значениями
  if (obj.value && typeof obj.value === 'object') {
    // Проверяем наличие запрошенного языка
    if (obj.value[language]) {
      return obj.value[language];
    }
    // Если запрошенного языка нет, используем язык по умолчанию
    else if (obj.value[defaultLanguage]) {
      return obj.value[defaultLanguage];
    }
    // Если нет и языка по умолчанию, берем первый доступный язык
    else {
      const firstAvailableLanguage = Object.keys(obj.value)[0];
      return firstAvailableLanguage ? obj.value[firstAvailableLanguage] : '';
    }
  }
  
  // В крайнем случае возвращаем само значение или пустую строку
  return obj.value || '';
}
function setCarsFromDb(selectedProducts = null, showAll = false) {
  let products = selectedProducts === null ? cars : selectedProducts;
  products = sortCarsByCategory(products)
  const carsContainer = document.querySelector('.cars-container');
  let limitProducts = false;
  let countLimit = 4
  
  // Check if screen width is less than or equal to 768px and we're not explicitly showing all
  if (window.innerWidth <= 768 && !showAll) {
    countLimit = 4
    limitProducts  = true;
  } else if(window.innerWidth >= 768 && !showAll){
    countLimit = 8
    limitProducts  = true;
  }



  if (carsContainer) {
    if (products.length) {
      carsContainer.innerHTML = '';
      // Only show first 4 products on mobile if limitProducts is true
      const displayProducts = limitProducts ? products.slice(0, countLimit) : products;
      let quizData = '';
      let quizClass = ''
      console.log('Квиз поблизости - ', carsContainer.closest('.quiz_sec'))
      if(carsContainer.closest('.quiz_sec')) {
        quizClass = 'quiz_item_car'
      }
      displayProducts.forEach((product) => {
        if(carsContainer.closest('.quiz_sec')) {
          quizData = `data-car-id="${product.id}"`
        }
        let productHtml = `<div class="item ${product.category} ${quizClass}" ${quizData}>
                          <div class="item_title">${product.title}</div>
                          <div class="product">
                              <img src="${product.images[0]}" alt="">
                          </div>
                          <div class="advantages">
                              <div class="advantages_item">
                                  <div class="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                          <g clip-path="url(#clip0_1_101)">
                                            <path d="M12 9.64352e-06C14.7773 -0.000784241 17.469 0.961504 19.6163 2.72289C21.7637 4.48428 23.2338 6.93578 23.7762 9.65963C24.3186 12.3835 23.8997 15.2111 22.5909 17.6607C21.2821 20.1103 19.1643 22.0303 16.5986 23.0935C14.0328 24.1567 11.1777 24.2972 8.51992 23.4912C5.86211 22.6853 3.56601 20.9826 2.02289 18.6734C0.479773 16.3642 -0.214875 13.5914 0.0573193 10.8275C0.329514 8.0635 1.55171 5.47945 3.51563 3.51563C4.6284 2.39946 5.95083 1.51425 7.40689 0.910914C8.86294 0.307576 10.4239 -0.00199184 12 9.64352e-06ZM12.7949 16.0332C13.0104 16.1992 13.1686 16.4284 13.2472 16.6888C13.3258 16.9492 13.3209 17.2277 13.2332 17.4852C13.1456 17.7427 12.9795 17.9662 12.7583 18.1246C12.5372 18.2829 12.272 18.368 12 18.368C11.728 18.368 11.4628 18.2829 11.2417 18.1246C11.0205 17.9662 10.8544 17.7427 10.7668 17.4852C10.6791 17.2277 10.6743 16.9492 10.7529 16.6888C10.8315 16.4284 10.9896 16.1992 11.2051 16.0332V13.4024H8.26368V16.0332C8.47917 16.1992 8.6373 16.4284 8.71591 16.6888C8.79451 16.9492 8.78964 17.2277 8.70198 17.4852C8.61431 17.7427 8.44825 17.9662 8.22709 18.1246C8.00593 18.2829 7.74075 18.368 7.46876 18.368C7.19676 18.368 6.93158 18.2829 6.71042 18.1246C6.48926 17.9662 6.3232 17.7427 6.23554 17.4852C6.14787 17.2277 6.143 16.9492 6.2216 16.6888C6.30021 16.4284 6.45834 16.1992 6.67383 16.0332V9.01759C6.45834 8.85162 6.30021 8.62236 6.2216 8.36197C6.143 8.10158 6.14787 7.82311 6.23554 7.56563C6.3232 7.30815 6.48926 7.08456 6.71042 6.92623C6.93158 6.7679 7.19676 6.68276 7.46876 6.68276C7.74075 6.68276 8.00593 6.7679 8.22709 6.92623C8.44825 7.08456 8.61431 7.30815 8.70198 7.56563C8.78964 7.82311 8.79451 8.10158 8.71591 8.36197C8.6373 8.62236 8.47917 8.85162 8.26368 9.01759V11.8125H11.2051V9.01759C10.9896 8.85162 10.8315 8.62236 10.7529 8.36197C10.6743 8.10158 10.6791 7.82311 10.7668 7.56563C10.8544 7.30815 11.0205 7.08456 11.2417 6.92623C11.4628 6.7679 11.728 6.68276 12 6.68276C12.272 6.68276 12.5372 6.7679 12.7583 6.92623C12.9795 7.08456 13.1456 7.30815 13.2332 7.56563C13.3209 7.82311 13.3258 8.10158 13.2472 8.36197C13.1686 8.62236 13.0104 8.85162 12.7949 9.01759V11.8125H15.7363V9.01759C15.5208 8.85162 15.3627 8.62236 15.2841 8.36197C15.2055 8.10158 15.2104 7.82311 15.298 7.56563C15.3857 7.30815 15.5518 7.08456 15.7729 6.92623C15.9941 6.7679 16.2593 6.68276 16.5313 6.68276C16.8033 6.68276 17.0684 6.7679 17.2896 6.92623C17.5108 7.08456 17.6768 7.30815 17.7645 7.56563C17.8521 7.82311 17.857 8.10158 17.7784 8.36197C17.6998 8.62236 17.5417 8.85162 17.3262 9.01759V12.5C17.3282 12.5338 17.3282 12.5677 17.3262 12.6016C17.3262 12.8124 17.2424 13.0146 17.0933 13.1637C16.9443 13.3127 16.7421 13.3965 16.5313 13.3965H12.7949V16.0332ZM19.2402 4.75196C17.5635 3.07657 15.3578 2.03434 12.9988 1.80283C10.6398 1.57132 8.27354 2.16486 6.30309 3.48232C4.33264 4.79978 2.87992 6.75966 2.19242 9.02808C1.50491 11.2965 1.62516 13.7331 2.53267 15.9228C3.44017 18.1125 5.0788 19.9198 7.16939 21.0369C9.25998 22.1539 11.6732 22.5116 13.9979 22.049C16.3226 21.5863 18.415 20.332 19.9187 18.4996C21.4223 16.6673 22.2441 14.3703 22.2441 12C22.247 10.654 21.9838 9.3208 21.4696 8.07692C20.9554 6.83304 20.2004 5.70307 19.2481 4.75196H19.2402Z" fill="#90A3BF"></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_1_101">
                                              <rect width="24" height="24" fill="white"></rect>
                                            </clipPath>
                                          </defs>
                                      </svg>
                                      
                                  </div>
                                  ${product.advantages.transmission.value}
                              </div>
                            
                              <div class="advantages_item">
                                  <div class="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                          <path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#90A3BF"></path>
                                      </svg>
                                      
                                  </div>
                                  ${product.advantages.engine_type.value}
                              </div>
                              <div class="advantages_item">
                                  <div class="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                          <path d="M24 10.5V16.5C24 16.6989 23.921 16.8897 23.7803 17.0303C23.6397 17.171 23.4489 17.25 23.25 17.25C23.0511 17.25 22.8603 17.171 22.7197 17.0303C22.579 16.8897 22.5 16.6989 22.5 16.5V14.25H21V15.75C21 16.1478 20.842 16.5294 20.5607 16.8107C20.2794 17.092 19.8978 17.25 19.5 17.25H18.3103L15 20.5603C14.8612 20.7002 14.696 20.8111 14.514 20.8866C14.332 20.9621 14.1367 21.0006 13.9397 21H7.81031C7.61326 21.0006 7.41804 20.9621 7.23602 20.8866C7.05399 20.8111 6.88878 20.7002 6.75 20.5603L3.43969 17.25C3.29979 17.1112 3.18888 16.946 3.1134 16.764C3.03792 16.582 2.99937 16.3867 3 16.1897V14.25H1.5V16.5C1.5 16.6989 1.42098 16.8897 1.28033 17.0303C1.13968 17.171 0.948912 17.25 0.75 17.25C0.551088 17.25 0.360322 17.171 0.21967 17.0303C0.0790176 16.8897 0 16.6989 0 16.5V10.5C0 10.3011 0.0790176 10.1103 0.21967 9.96967C0.360322 9.82902 0.551088 9.75 0.75 9.75C0.948912 9.75 1.13968 9.82902 1.28033 9.96967C1.42098 10.1103 1.5 10.3011 1.5 10.5V12.75H3V7.5C3 7.10218 3.15804 6.72064 3.43934 6.43934C3.72064 6.15804 4.10218 6 4.5 6H10.5V4.5H8.25C8.05109 4.5 7.86032 4.42098 7.71967 4.28033C7.57902 4.13968 7.5 3.94891 7.5 3.75C7.5 3.55109 7.57902 3.36032 7.71967 3.21967C7.86032 3.07902 8.05109 3 8.25 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75C15 3.94891 14.921 4.13968 14.7803 4.28033C14.6397 4.42098 14.4489 4.5 14.25 4.5H12V6H13.9397C14.1367 5.99937 14.332 6.03792 14.514 6.1134C14.696 6.18888 14.8612 6.29979 15 6.43969L18.3103 9.75H19.5C19.8978 9.75 20.2794 9.90804 20.5607 10.1893C20.842 10.4706 21 10.8522 21 11.25V12.75H22.5V10.5C22.5 10.3011 22.579 10.1103 22.7197 9.96967C22.8603 9.82902 23.0511 9.75 23.25 9.75C23.4489 9.75 23.6397 9.82902 23.7803 9.96967C23.921 10.1103 24 10.3011 24 10.5Z" fill="#90A3BF"></path>
                                      </svg>
                                    
                                  </div>
                                ${product.advantages.volume.value}
                              </div>
                          </div>
                          <div class="prices">
                              <div class="prices_item">
                                  <div class="day">2-7 ${language === 'en' ? 'daysы' : 'дней'}  <span></span></div>
                                  <div class="price">${product.price_max} ${product.currency}</div>
                              </div>
                              <div class="prices_item">
                                  <div class="day">8-20 ${language === 'en' ? 'daysы' : 'дней'} <span></span> </div>
                                  <div class="price">${product.price_mid} ${product.currency}</div>
                              </div>
                              <div class="prices_item">
                                  <div class="day">21+ ${language === 'en' ? 'daysы' : 'дней'} <span></span></div>
                                  <div class="price">${product.price_min} ${product.currency}</div>
                              </div>
                          </div>
                          <div class="socilas_icons">
                              <a href="tel:+994706501811" class="socilas_icons_item">
                                  <img src="../assets/images/phone.svg" alt="">
                                  <div class="text">${language === 'en' ? 'Call' : 'Позвонить'}</div>
                              </a>
                              <a href="${WHATSAPP_LINK}" target="_blank" class="socilas_icons_item">
                                  <img src="../assets/images/whatsapp.svg" alt="">
                                  <div class="text">WhatsApp</div>
                              </a>
                          </div>`;
                      
        if (carsContainer.closest('.quiz_sec')) {     
          productHtml += `<div href="about-car.html?product=${product.slug}" data-car-id="${product.id}" class="more button quiz_button_car">${quizButtonText}</div></div>`;
        } else {
          productHtml += `<a href="about-car.html?product=${product.slug}" class="more">${buttonText}</a></div>`;
        }
        carsContainer.innerHTML += productHtml;
      });
      
      // Show or hide the see_all button based on screen size and number of products
      const seeAllButton = document.querySelector('.see_all');
      if (seeAllButton) {
        if (products.length > countLimit && !showAll) {
          seeAllButton.style.display = 'block'; // Show the button
        } else {
          seeAllButton.style.display = 'none'; // Hide the button
        }
      }
    } else {
      carsContainer.innerHTML = '';
    }
  }
}

// Add a resize event listener to handle responsive behavior
window.addEventListener('resize', function() {
  // Re-render with appropriate limits based on screen size
  setCarsFromDb();
});

// Setup click handler for the see_all button
document.addEventListener('DOMContentLoaded', function() {
  const seeAllButton = document.querySelector('.see_all');
  if (seeAllButton) {
    seeAllButton.addEventListener('click', function() {
      // When see_all is clicked, show all products
      setCarsFromDb(null, true);
    });
  }
});

const params = new URLSearchParams(window.location.search)

function getCarFromUrl() {
  const productSlug = params.get('product')
  if(productSlug) {
    let product = null;

    cars.forEach((car)=>{
      if (car.slug == productSlug) {
        product = car
      }
    })
    return product
  }
}

function setCarFromUrl() {
  const product = getCarFromUrl();
  if (product) {
    const advantagesHtml = [];
    const swiperMain = document.querySelector('.swiper-main .swiper-wrapper');
    const swiperThumbs = document.querySelector('.swiper-thumbs .swiper-wrapper');
    const productContainer = document.querySelector('.all_information');
    const productDescriptionContent = document.querySelector('.description_content');
    const simialrCarsContainer = document.querySelector('.car_types .types')
    const carTypes = document.querySelector('.car_types')
    let productDescriptionEl = null;
    
    if (productDescriptionContent) {
      productDescriptionEl = productDescriptionContent.querySelector('.description_text');
    }

 /*    // Determine current language from URL
    const currentUrl = window.location.href;
    let language = 'en';
    
    if (currentUrl.includes('/russian/')) {
      language = 'ru';
    } else if (currentUrl.includes('/az/')) {
      language = 'az';
    } */
    
    // Handle multilingual title
    let titleText = product.title;
   
    // Handle multilingual meta_title
    let metaTitleText = '';
    if (product.meta_title) {
      if (typeof product.meta_title === 'object' && product.meta_title !== null) {
        metaTitleText = product.meta_title[language] || product.meta_title.en || product.meta_title;
      } else {
        metaTitleText = product.meta_title;
      }
    }
    
    // Set document title
    document.title = titleText + metaTitleText;
    
    // Handle multilingual meta_description
    if (product.meta_description) {
      let descriptionText;
      
      if (typeof product.meta_description === 'object' && product.meta_description !== null) {
        descriptionText = product.meta_description[language] || 
                        product.meta_description.en || 
                        Object.values(product.meta_description)[0];
      } else {
        descriptionText = product.meta_description;
      }
      
      let metaDescription = document.querySelector('meta[name="description"]');
      
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      
      metaDescription.setAttribute('content', descriptionText);        
    }

    if( product.similarCars && product.similarCars.length ) {
      const similarProducts = []

      product.similarCars.forEach((productId)=>{
        let product = cars.filter((car)=>car.id===productId)
        similarProducts.push(product[0])
      })
      setCarsIntoDOM(simialrCarsContainer, similarProducts)
      
      console.log(similarProducts)
    } else {
      carTypes.style.display = 'none'
    }
    
    // Handle multilingual description
    if (productDescriptionEl) {
      if (product.description) {
        let descriptionContent = product.description;
        
        if (typeof product.description === 'object' && product.description !== null) {
          descriptionContent = product.description[language] || 
                             product.description.en || 
                             Object.values(product.description)[0];
        }
        
        productDescriptionEl.innerHTML = descriptionContent;
      } else {
        productDescriptionContent.style.display = 'none';
      }
    }

    // Add car images to swiper
    if (swiperMain && swiperThumbs) {
      for (let img of product.images) {
        const swiperSlide = `
          <div class="swiper-slide">
              <img src="${img}" alt="${titleText}">
          </div>`;

        swiperMain.innerHTML += swiperSlide;
        swiperThumbs.innerHTML += swiperSlide;
      }
      if(product.youtube) {
        const thumb = getThumbnailUrl(product.youtube)
        const video = getEmbeddedVideoUrl(product.youtube)
        const swiperSlide = `
          <div class="swiper-slide">
              <img src="${thumb}" alt="${titleText}">
          </div>`;

          const swiperYoutube = `
          <div class="swiper-slide">  
              <iframe width="100%" height="100%" src="${video}" frameborder="0" allowfullscreen></iframe>
          </div>`;
          swiperMain.innerHTML += swiperYoutube;
          swiperThumbs.innerHTML += swiperSlide;
      }
    }

    // Build advantages HTML
    for (let advantageIndex in product.advantages) {
      // Check if advantages keys/values could be multilingual objects
      let advantageKey = product.advantages[advantageIndex].key;
      let advantageValue = product.advantages[advantageIndex].value;

      
      if (typeof advantageKey === 'object' && advantageKey !== null) {
        advantageKey = advantageKey[language] || advantageKey.en || Object.values(advantageKey)[0];
      }
      
      if (typeof advantageValue === 'object' && advantageValue !== null) {
        advantageValue = advantageValue[language] || advantageValue.en || Object.values(advantageValue)[0];
      }
      
      const advantageHtml = `
      <div class="inside_elements row">
          <div class="inside_left">${advantageKey}</div>
          <div class="bold">${advantageValue}</div>
      </div>`;
      advantagesHtml.push(advantageHtml);
    }
    let additionalyText = language === 'en' ? 'or similar cars' : 'или похожие машины'
    // Build product HTML with all translated content
    const productHtml = `
      <div class="model_name selected_product_title">${titleText} <span>${additionalyText}</span></div>
      <div class="row side_row">
          <div class="side">
             ${advantagesHtml.join(' ')}
              <div class="inside_elements row">
                  <div class="inside_left"></div>
                  <div class="bold"></div>
              </div>
              <div class="inside_elements row">
                  <div class="inside_left"></div>
                  <div class="bold"></div>
              </div>
              <div class="inside_elements row">
                  <div class="inside_left"></div>
                  <div class="bold"></div>
              </div>
          </div>
         
      </div>
      <div class="bottom row">
          <div class="prices">
              <div class="prices_item">
                  <div class="day">2-7 ${language === 'en' ? 'daysы' : 'дней'} <span></span></div>
                  <div class="price">${product.price_max} ${product.currency}</div>
              </div>
              <div class="prices_item">
                  <div class="day">8-20 ${language === 'en' ? 'daysы' : 'дней'} <span></span> </div>
                  <div class="price">${product.price_mid} ${product.currency}</div>
              </div>
              <div class="prices_item">
                  <div class="day">21+ ${language === 'en' ? 'daysы' : 'дней'} <span></span></div>
                  <div class="price">${product.price_min} ${product.currency}</div>
              </div>
          </div>
            <a href="tel:994706501811" class="rent_now checkout"">${rentNowButton}</a>
      </div>
    `;
    
    
    if (productContainer) {
      productContainer.innerHTML = productHtml;
    }
  }
  return;
}

const datepickers = {};
let prices = 0;
let startDate = new Date();
let endDate = null;
let endDatePicker = null;

let s1 = 0 //это место получение офис и т.д(1)
let s2 = 0 // это место получение офис и т.д(2)
const totalPrice = document.querySelector('.total_price .price')
let CommonPrice = 0
if(totalPrice && totalPrice.innerText) {
 CommonPrice = Number(totalPrice?.innerText.split(' ')[0])
}
let priceMax = 0
let priceMid = 0
let priceMin = 0


let startInputHours = 0;
let startInputMinutes = 0;

let endInputHours = 0;
let endInputMinutes = 0;


function checkAndCalculate () {
  if(startDate && endDate) {
    const product = getCarFromUrl()
    if(product) {
      priceMax = product.price_max
      priceMid = product.price_mid
      priceMin = product.price_min
      console.log('Данные проверены успешно')
      const differenceInDays = calculate(startDate, endDate)
      calculateRentalCost(differenceInDays)
    } 
  
  
  }
}



function calculate(start_date, end_date) {
  endDate = new Date(end_date)
  startDate = new Date(start_date)

  // Количество дней аренды
  let differenceInTime = endDate.getTime() - startDate.getTime();
  let differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // округляем вверх
  // Учитываем, если время начала меньше времени окончания
  if ((startInputHours <= (endInputHours-1) && startInputMinutes <= (endInputMinutes-1)) || startInputHours < (endInputHours-1)) {
      differenceInDays++;
  }
  return differenceInDays
}


function calculateRentalCost(days, sum1=null, sum2=null, pmax=null, pmid=null, pmin=null ) {
  console.log('Полученные данные:', days, sum1, sum2, pmax, pmid, pmin)

  if(sum1 !== null && sum2 !== null) {
    s1 = sum1;
    s2 = sum2;
    priceMax = pmax;
    priceMid = pmid
    priceMin = pmin
    CommonPrice = 0
  }
  let totalPriceCount = 0;
  console.log('Полученные данные:', days, sum1, sum2, pmax, pmid, pmin)
  if (days >= 2 && days <= 7) {
      prices = priceMax * days

      CommonPrice += s1

      CommonPrice += s2

      CommonPrice += prices
      totalPriceCount = CommonPrice;
      console.log(priceMax, days)


      CommonPrice -= s1
      CommonPrice -= s2
      CommonPrice -= prices
  } else if (days >= 8 && days <= 20) {
      console.log(days);
      prices = priceMid * days
      CommonPrice += s2
      CommonPrice += s1

      CommonPrice += prices
      totalPriceCount = CommonPrice;

      CommonPrice -= s2
      CommonPrice -= s1
      CommonPrice -= prices
  } else {
      console.log(days);
      prices = priceMin * days
      CommonPrice += s2
      CommonPrice += s1
     
      CommonPrice += prices
      totalPriceCount= CommonPrice;
    
      CommonPrice -= s1
      CommonPrice -= s2
      CommonPrice -= prices
  }
  if(totalPrice) {
    totalPrice.innerText = totalPriceCount
  }

  return totalPriceCount
  
}


function setSelectValue() {
  const selectStart = document.querySelector('.start_location')
  const selectEnd = document.querySelector('.end_location')
  if(selectStart && selectEnd) {
    selectStart.addEventListener('change', function() {
      s1 = parseInt(selectStart.value)
      checkAndCalculate()
    })
    selectEnd.addEventListener('change', function() {
      s2 = parseInt(selectEnd.value)
      checkAndCalculate()

    })
  }
}

function changeMinDate (changedDate) {
  const newDate = changedDate
  newDate.setDate(newDate.getDate()+2)
  if(endDate) {
    endDate = ''
    totalPrice.innerText = 0
  }

  if(datepickers['end_date']) {
    datepickers['end_date'].update({
      minDate: newDate,
      selectedDates: [],
    })
  }
}

function selectCategory() {
  const buttons = document.querySelectorAll('.types_btn')
  const containers = document.querySelectorAll('.cars-container');

  buttons.forEach((button)=>{
    button.addEventListener('click', function(e) {
      // Only prevent default if it's not an anchor tag or has no href
      if (!button.href || button.getAttribute('href') === '#') {
        e.preventDefault();
      }

      let indexPath = window.location.pathname.split('/')[1]
      if(indexPath !== 'russian' && indexPath !== 'az') {
        indexPath = ''
      }
      
      buttons.forEach((btn)=>{
        btn.classList.remove('active')
      })
      button.classList.add('active')
      const productCategory = button.dataset.category
      
      if(button.classList.contains('no-filter')) {
        window.location.href = button.href
        return
      }
      
      if(!button.classList.contains('filter-category')) {
        // Use replaceState instead of directly changing location to avoid scroll
        const newUrl = window.location.origin + `/${indexPath}?category=${productCategory}`;
        window.history.replaceState({}, document.title, newUrl);
        
        // Filter products without forcing scroll
        let productsToAdd = cars;
        if(productCategory !== 'all') {
          productsToAdd = cars.filter((car)=> car.category === productCategory)
        }
        setCarsFromDb(productsToAdd)
      } else {
        window.history.replaceState({}, document.title, `/${indexPath}`);
        let productsToAdd = cars;
        if(productCategory !== 'all') {
          productsToAdd = cars.filter((car)=> car.category === productCategory)
        }
        setCarsFromDb(productsToAdd)
      }
    })
  })
}

function setCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const container = document.querySelector('.cars-container');
  const category = params.get('category')
  if (category) {
    const buttons = document.querySelectorAll(`.types_btn[data-category="${category}"]`)
    console.log(buttons, category)
    buttons.forEach((button)=>{
      button.classList.add('active')
    })
    let productsToAdd = cars
    if(category != 'all') {
       productsToAdd = cars.filter(product => product.category === category)
    }
      setCarsIntoDOM(container, productsToAdd)
  }
}

$(document).ready(function () {
  // Функция для генерации списка часов и минут
  function generateTimeList($list, range, dataAttr) {
    for (let i = 0; i < range; i++) {
      const formattedValue = i.toString().padStart(2, "0");
      $list.append(`<li data-${dataAttr}="${formattedValue}">${formattedValue}</li>`);
    }
  }

  // Генерация списков для всех таймпикеров
  $(".timepicker-wrapper").each(function () {
    const $wrapper = $(this);
    const $hoursList = $wrapper.find(".hours-list");
    const $minutesList = $wrapper.find(".minutes-list");

    generateTimeList($hoursList, 24, "hour");
    generateTimeList($minutesList, 60, "minute");
  });

  // Логика работы таймпикера
  $(".timepicker-wrapper").each(function () {
    const $wrapper = $(this);
    const $input = $wrapper.find(".timepicker-input");
    const $content = $wrapper.find(".timepicker-content");
    const $dropdown = $wrapper.find(".timepicker-dropdown");
    let selectedHour = "00";
    let selectedMinute = "00";


    // Открытие/закрытие дропдауна
    $content.on("click", function (e) {
      e.preventDefault()
      $dropdown.toggle();
    });

    $input.closest('.timepicker-container').find('.timepicker-toggler').on('click', function (e) {
      $dropdown.toggle();
    });

    // Закрытие при клике вне дропдауна
    $(document).on("click", function (e) {
      if (!$(e.target).closest($wrapper).length) {
        if(e.target.className.startsWith("time")) {
          e.preventDefault()
        }
        $dropdown.hide();
      }
    });

   // Выбор часа
    $wrapper.find(".hours-list").on("click", "li", function (e) {
      e.preventDefault();  // Предотвращаем стандартное поведение
      $wrapper.find(".hours-list li").removeClass("active");
      $(this).addClass("active");
      selectedHour = $(this).data("hour");
      updateInput();
    });

    // Выбор минуты
    $wrapper.find(".minutes-list").on("click", "li", function (e) {
      e.preventDefault();  // Предотвращаем стандартное поведение
      $wrapper.find(".minutes-list li").removeClass("active");
      $(this).addClass("active");
      selectedMinute = $(this).data("minute");
      updateInput();
      $dropdown.hide()
    });

    // Обновление значения инпута
    function updateInput() {
      $input.val(`${selectedHour}:${selectedMinute}`);
      $input.trigger('input');
    }
  });
});

function checkBeforeCheckout() {
  const checkoutBtn = document.querySelector('.open_modal_btn.checkout');
  if(checkoutBtn && !checkoutBtn.classList.contains('rent_now')) {
  checkoutBtn.addEventListener('click', function() {
    if(!(startDate && endDate)) {
      alert('Fill in the end time')
      checkoutBtn.classList.add('invalid')
    }  else {
      checkoutBtn.classList.remove('invalid')
    }
  })
}
}
function sendEmail(noCheckout = false) {
  const modals = document.querySelectorAll('.modal-overlay');

  const formObject = { rental_data: {} };
  
  if(noCheckout) {
    const rentalData = getRentalData()
    formObject['rental_data'] = rentalData
    // Генерация WhatsApp-сообщения
  let message = '';

  if (formObject.from_user_name) {
    message += `*Order for:* ${formObject.from_user_name}%0A`;
    message += `*Phone number:* ${formObject.country_code}${formObject.from_number}%0A`;
    message += `*Email:* ${formObject.email}%0A`;
    message += `*Comment:* ${formObject.comment}%0A`;
  }

  if (formObject.rental_data?.end_date) {
    message += `*Total price:* ${$('.checkout_price').first().text()}%0A`;
    message += `Title:* ${$('.selected_product_title').first().text()}%0A`;
    message += `*Start location:* ${formObject.rental_data.start_location}%0A`;
    message += `*End location:* ${formObject.rental_data.end_location}%0A`;
    message += `*Start date:* ${formObject.rental_data.start_date}%0A`;
    message += `*End date:* ${formObject.rental_data.end_date}%0A`;
    message += `*Start time:* ${formObject.rental_data.start_time}%0A`;
    message += `*End time:* ${formObject.rental_data.end_time}%0A`;
  }

    const phoneNumber = '994706501811';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, '_blank');
    window.location.reload();
    return
  }

  if (modals) {
    modals.forEach((modal) => {
      const checkoutForm = modal.querySelector('#checkout-form');
      if (checkoutForm) {
        checkoutForm.addEventListener('submit', function (e) {
          e.preventDefault();
          // rental_data только если даты заданы
          if (typeof endDate !== 'undefined') {
            formObject['rental_data'] = getRentalData();
          }

          const formData = new FormData(checkoutForm);
          const countryCode = checkoutForm.querySelector('.country-code')?.innerText || '';

          formData.forEach((value, key) => {
            formObject[key] = value;
          });

          formObject['country_code'] = countryCode;
          formObject['to_name'] = 'Артур';
          formObject['product_title'] = $('.selected_product_title').first().text();
          formObject['total_price'] = $('.checkout_price').first().text();

          setEmailRequest(formObject);

        }); // Конец submit
      }
    });
     
  }
}

function getRentalData() {
  const startLocationSelect = document.querySelector('.start_location');
  const endLocationSelect = document.querySelector('.end_location');
  const startLocationCheckbox = document.querySelector('input[name="start_location"]:checked');
  const endLocationCheckbox = document.querySelector('input[name="end_location"]:checked');

  let startLocationText = '';
  let endLocationText = '';

  if (startLocationSelect && endLocationSelect) {
    startLocationText = startLocationSelect.options[startLocationSelect.selectedIndex].text;
    endLocationText = endLocationSelect.options[endLocationSelect.selectedIndex].text;
  } else if (startLocationCheckbox && endLocationCheckbox) {
    startLocationText = startLocationCheckbox.value;
    endLocationText = endLocationCheckbox.value;
    }

  const rentalData = {}
  rentalData['start_date'] = startDate?.toISOString().split('T')[0];
  rentalData['end_date'] = endDate?.toISOString().split('T')[0];
  rentalData['start_time'] = `${String(startInputHours).padStart(2, '0')}:${String(startInputMinutes).padStart(2, '0')}`;
  rentalData['end_time'] = `${String(endInputHours).padStart(2, '0')}:${String(endInputMinutes).padStart(2, '0')}`;
  rentalData['start_location'] = startLocationText;
  rentalData['end_location'] = endLocationText;

  return rentalData
}



function setEmailRequest(dataToSend) {
  emailjs.init(USER_ID); // Замените на ваш User ID из EmailJS
  dataToSend['to_name'] = TO_NAME
  dataToSend['from_name'] = "Car Rental Service"
  emailjs.send(SERVICE_ID, TEMPLATE_ID, dataToSend)
      .then(function(response) {
          console.log('The email was sent successfully', response.status, response.text);
          redirectToradutude()
        /*  window.location.reload(true) */
      })
      .catch(function(error) {
          console.error('An error occurred when sending an email', error);
          alert('An error occurred when sending an email')
      }); 

}

function redirectToradutude() {
  if(language === 'ru') {
    window.location.href = '/russian/graditude.html'
  } else if(language === 'en') {
    window.location.href = '/graditude.html'
  } else if (language === 'az') {
    window.location.href = '/az/graditude.html'
  }
}

function scrollAnchor() {
  const anchorLinks = document.querySelectorAll('.anchor-link');
  anchorLinks.forEach((link)=>{
    link.addEventListener('click', function(e) {
      e.preventDefault()
      const sectionId = link.dataset.section
      if(sectionId) {
        $('#burger').removeClass('active')
        $('body').css('overflow', 'auto')
        scrollToSection(sectionId)
      }
    })
   
  })
}
function scrollToSection(id) {
  const $section = $('#' + id);
  if ($section.length) {
    // Скроллим к нужной секции
    $('html, body').animate({ scrollTop: $section.offset().top }, 500, function () {
      // Добавляем id в URL
      history.pushState(null, null, '#' + id);
    });
  }
}


function setBlogItems() {
  const blogContainer = document.querySelector('.blog__row');

  if(blogContainer) {
    
    blogContainer.innerHTML = ''
    blog.forEach((blogItem)=>{
      const blogItemHTML = `
                        <div class="blog__item">
                              <a href="blog-item.html?blog_id=${blogItem.id}">
                                  <div class="top">
                                      <div class="top_item">
                                          <div class="blog__title title">
                                            ${blogItem.title}
                                          </div>
                                          
                                      </div>
                                      <div class="blog__description subtitle">
                                        ${blogItem.short_description}
                                      </div>
                                  </div>
                                  <div class="bottom blog__image">
                                      <img src="${blogItem.image}" alt="">
                                  </div>
                              </a>
                          </div>
      `
      blogContainer.innerHTML += blogItemHTML
    })
  } /* else {
    blogSwiper.innerHTML = ''
    blog.forEach((blogItem)=>{
      const blogItemHTML = `
                          <div class="swiper-slide">
                                <img src="${blogItem.image}" alt="">
                                <div class="bottom">
                                    <div class="title">${blogItem.title}</div>
                                    <div class="date">News / ${blogItem.date}</div>
                                </div>
                            </div>
      `
      blogContainer.innerHTML += blogItemHTML
    })
  } */
}

function setBlogFromUrl() {
  const queryParams = new URLSearchParams(window.location.search)
  const blogId = queryParams.get('blog_id');

  if(blogId) {
    const selectedBlogItem = blog.filter((blogItem) => blogItem.id == blogId)[0]
    const blogItemContainer = document.querySelector('.blog-item__row')
    const selectedBlogitemHTML = `
                          <div class="blog-item__container">
                            <a href="blog-item.html">
                                <div class="top">
                                    <div class="top_item">
                                        <div class="blog-item__title title">
                                            ${selectedBlogItem.title}
                                        </div>
                                        
                                    </div>
                                    <div class="blog-item__description subtitle">
                                       ${selectedBlogItem.description}
                                    </div>
                                </div>
                                <div class="bottom blog-item__image">
                                    <img src=" ${selectedBlogItem.image}" alt="">
                                </div>
                            </a>
                        </div>
    `
    blogItemContainer.innerHTML = selectedBlogitemHTML
  }
}

function selectPriceCategory( ){
  const selectitems = document.querySelectorAll('.price_dropdown .dropdown-item')
  const calBottomContainer =  document.querySelectorAll(`.calc_bottom`)
  if(calBottomContainer.length) {

  calBottomContainer[0].style.display = 'block'
  if(selectitems.length) {
    selectitems.forEach((selectitem)=>{
      
      selectitem.addEventListener('click', function () {
      const category = selectitem.dataset.category

      const container = document.querySelector(`.calc_bottom[data-category=${category}]`)



      calBottomContainer.forEach((calcBottomContainer)=>{
        calcBottomContainer.style.display = 'none'
      })

      

      if(container) {
        container.style.display = 'block'
      }
    })
  })

  }
  }

}

function divideCars() {

} 

function sortCarsByCategory(cars) {
  return cars.sort((a, b) => {
      return (b.category === 'crossover') - (a.category === 'crossover');
  });
}function toggleStyledDropdown() {
  // Открытие и закрытие выпадающего списка
  $('.styled-dropdown__toggle').on('click', function(event) {
    event.stopPropagation(); // Prevent document click from immediately closing
    const dropDownContainer = $(this).closest('.styled-dropdown');
    dropDownContainer.toggleClass('active');
  });
  
  // Обработка кликов по элементам списка
  $('.styled-dropdown__list-item').on('click', function() {
    console.log('clicked');
    const dropDownContainer = $(this).closest('.styled-dropdown');
    const toggleElement = dropDownContainer.find('.styled-dropdown__toggle');
    
    // Обновление контента в toggle
    toggleElement.html($(this).html());
    
    // Закрытие меню
    dropDownContainer.removeClass('active');
  });
  
  // Закрытие меню при клике вне его
  $(document).on('click', function(event) {
    // Проверка, что клик был не внутри выпадающего меню
    if (!$(event.target).closest('.styled-dropdown').length) {
      $('.styled-dropdown.active').removeClass('active');
    }
  });
  
  // Предотвращение всплытия событий на самой dropdown
  $('.styled-dropdown').on('click', function(event) {
    event.stopPropagation();
  });
}

toggleStyledDropdown();


function getCountryInfo() {
  const countries = JSON.parse(localStorage.getItem('countries'))
  if(countries) {
    setCountriesInfo(countries);
  } else {
   

  fetch("https://restfulcountries.com/api/v1/countries", {
      method: "GET",
      headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${TOKEN}`
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      let countries = [];


      // Проверяем, существует ли data и является ли это массивом
      if (data && Array.isArray(data.data)) {
          data.data.forEach(country => {
              
                  countries.push({
                      name: country.name,
                      code: country.phone_code ? `+${country.phone_code.replace('+', '')}` : '',
                      flag: country.href.flag
                 
              })
          });
      }

      localStorage.setItem('countries', JSON.stringify(countries))
      setCountriesInfo(countries);
  })
  .catch(error => console.error("Ошибка:", error));
}

}

getCountryInfo();

function setCountriesInfo(countries) {
  let countriesHTML = ``;
  countries.forEach((country)=>{
    countriesHTML += `
    <li class="styled-dropdown__list-item">
      <img src="${country.flag}" alt="${country.name}"/>
      ${country.code}
    </li>
    `
  })

  $('.countries-dropdown').each((index, dropdown) => {
    const dropdownList = $(dropdown).find('.styled-dropdown__list');
    if (dropdownList.length) {
        dropdownList.html(countriesHTML);
    }
});

  toggleStyledDropdown();
}

function getVideoId(link) {
  const url = link
  if (url) {
    if (url.includes('youtu.be')) {
      return url.split('youtu.be/')[1]
    } else if (url.includes('watch?v=')) {
      const params = new URLSearchParams(new URL(url).search)
      return params.get('v')
    }
  }
  return null // Если ID не найден
}

function getThumbnailUrl(link) {
  const videoId = getVideoId(link)
  console.log(link, videoId)
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/default.jpg`
  }
  return null
}

function getEmbeddedVideoUrl(link) {
  if (link) {
    // Регулярное выражение для извлечения ID видео из ссылки
    const videoIdMatch = link.match(
      /(?:youtu.be\/|youtube.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=))([^"&?/ ]{11})/
    )

    if (videoIdMatch) {
      const videoId = videoIdMatch[1] // ID видео
      return `https://www.youtube.com/embed/${videoId}`
    }
  }
  return null
}