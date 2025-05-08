let selectedCarId =  null;
let formIsValid = false;
let formObjectToSend = null;
let quizProgress = 0

let startLocationPrice = 0;
let endLocationPrice = 0;

$(document).ready(function() {
    console.log('В квизе')
    $('.confirm').on('click', function() {
        sendEmail(true)
    })
    selectCar()
    selectCategoryCheck()
    if (window.innerWidth > 768) {
        return; 
    }

    $('.change_quiz').on('click', (e)=>{
        e.preventDefault();
        quizProgress = 0
        window.location.reload(true)
    })

    const $quizSections = $('.quiz_sec');
    const $continueButton = $('.quiz_continue');
    
    if (!$continueButton.length || !$quizSections.length) return;

    // Получаем сохранённый индекс
    let counter = quizProgress;
    counter = Math.min(counter, $quizSections.length - 1); // Защита от выхода за границы

    // Показываем сохранённую секцию, скрываем остальные
    $quizSections.each(function(index) {
        $(this).css('display', index === counter ? 'block' : 'none');
    });

    scrollToSection($quizSections.eq(counter).attr('id')); // Плавный переход к сохранённому месту
    let changeSection = false;
    $continueButton.on('click', function() {
        if ($($quizSections[counter]).hasClass('whatsapp')) {
            if (getSelectedCategories()) {
                changeSection = true;
            } else {
                alert('Выберите категорию!')
                return
            }
        }  if ($($quizSections[counter]).hasClass('forms_car_types')) {
            if(!selectedCarId) {
                alert('Выберите машину !')
                return
            }
        }   if ($($quizSections[counter]).hasClass('pick_up')) {
            $continueButton.addClass('car-types-continue')
            if(!validateQuizForms(true)) {
                return
            }
        }   if ($($quizSections[counter+1]).hasClass('result')) {
                $continueButton.addClass('hidden')
                formObjectToSend['car_id'] = selectedCarId
                objectToSend = formObjectToSend
              /*  */
        } 
        if (counter < $quizSections.length - 1) {
            const $currentSection = $quizSections.eq(counter);
            counter++;
            const $nextSection = $quizSections.eq(counter);
    
            // Плавно скрываем текущую секцию
            $currentSection.css({
                transition: 'opacity 0.3s, transform 0.3s',
                opacity: 0,
                transform: 'scale(0.95)' // Немного уменьшаем для эффекта исчезновения
            });
    
            setTimeout(() => {
                $currentSection.css({ display: 'none' });
                // Показываем новую секцию
                $nextSection.css({
                    display: 'block',
                    opacity: 0,
                    transform: 'scale(1.05)' // Немного увеличено для эффекта появления
                });
    
                setTimeout(() => {
                    $nextSection.css({
                        transition: 'opacity 0.3s, transform 0.3s',
                        opacity: 1,
                        transform: 'scale(1)'
                    });
                }, 50);
                
              
            }, 300);
    
           quizProgress = counter
        } else if (counter == $quizSections.length - 1) {
            quizProgress = 0
        }
    });
    
    
});
function selectCategoryCheck() {
    const checks = document.querySelectorAll('.quiz_sec .checks .check');

    checks.forEach((checkItem) => {
        checkItem.addEventListener('click', function () {
            const isAlreadyChecked = checkItem.classList.contains('checked');

            // Сначала снимаем класс "checked" со всех
            checks.forEach(item => item.classList.remove('checked'));

            // Если ранее не был выбран — добавляем, иначе оставляем все снятыми
            if (!isAlreadyChecked) {
                checkItem.classList.add('checked');
            }

            // Собираем выбранную категорию
            const selectedCategory = document.querySelector('.quiz_sec .check.checked')?.dataset.category;

            if (!selectedCategory) {
                setCarsFromDb(null);
                return;
            }

            const selectedProducts = findCarsWhitCategory(selectedCategory);
            const uniqueProducts = Array.from(new Set(selectedProducts));

            setCarsFromDb(uniqueProducts);
        });
    });
}




function findCarsWhitCategory(category) {
    console.log(category, cars)
    return cars.filter(car=> car.category === category)
}

function getSelectedCategories() {
    const $checkBoxes = $('.whatsapp .checks');
    const selectedCategories = [];
    $checkBoxes.each(function() {
        const $check = $(this).find('.check'); // Находим вложенные элементы с классом .check
        if ($check.hasClass('checked')) {
            const categoryName = $(this).find('.name').text(); // Получаем текстовое содержимое элемента с классом .name

            selectedCategories.push(categoryName);
        }
    });

    return selectedCategories.length > 0;
}
function selectCar() {
    $(document).on('click', '.quiz_item_car', function() {
        const button = $(this).find('.quiz_button_car');
        if (button.hasClass('selected')) {
            button.removeClass('selected').text(quizButtonText);
            selectedCarId = null;
        } else {
            $('.quiz_button_car').removeClass('selected').text(quizButtonText); // Сброс других кнопок
            button.addClass('selected').text(quizButtonTextChoosen);
            selectedCarId = button.data('carId');

            if ($(window).width() > 768) { // Скроллим только если экран больше 768px
                $('html, body').animate({
                    scrollTop: $("#pick_up").offset().top
                }, 500);
            }
        }
    });
}

function validateQuizForms(isMobileQuiz = false) {
   
    const $submitBtn = $('#submit_quiz_forms');

   
    
    if ($submitBtn.length === 0) return false; // Если кнопка не найдена

    $submitBtn.addClass('invalid');
    
    const $formStart = $('#start_data_form');
    const $formEnd = $('#end_data_form');

    if ($formStart.length === 0 || $formEnd.length === 0) return false;

    const startlocation =  $formStart.find('input[name="start_location"]:checked') 
    const endLocation = $formEnd.find('input[name="end_location"]:checked') 

   


    if(startlocation && endLocation) {
        startLocationPrice = startlocation.data('price')
        console.log('Начальная цена: ', startLocationPrice)
        endLocationPrice = endLocation.data('price')
    }

    const formObject = {
        start_date: $formStart.find('input[name="start_date"]').val() || null,
        end_date: $formEnd.find('input[name="end_date"]').val() || null,
        start_time: $formStart.find('input[name="start_time"]').val() || null,
        end_time: $formEnd.find('input[name="end_time"]').val() || null,
        start_location: startlocation.val() || null,
        end_location: endLocation.val() || null
    };


    console.log(formObject.end_time,  $formEnd.find('input[name="end_time"]').val())


    // Проверка на пустые поля
    if (Object.values(formObject).some(value => value === null || value === undefined)) {
        console.log(formObject);
        alert('Заполните все поля формы');
        return false;
    }
    if(!isMobileQuiz) {
  
        // Проверка, выбрана ли машина
        if (!selectedCarId) {
            alert('Выберите машину');
            return false;
        }
          
    }

    // Обновление состояния формы
    setCheckOutInfo(formObject);
    objectToSend = formObject
    formIsValid = true;
   
    $submitBtn.removeClass('invalid')

    return true; // Форма валидна
}
function setCheckOutInfo(formObject) {
    const selectedCar = cars.filter(car => car.id == selectedCarId)[0];

    if (selectedCar) {

        const differenceInDays = calculate(formObject['start_date'], formObject['end_date'])
        const totalPriceCount = calculateRentalCost(differenceInDays, startLocationPrice,  endLocationPrice, selectedCar.price_max, selectedCar.price_mid, selectedCar.price_min)
    
        // Обновляем элементы для различных характеристик машины
        $('.selected_product_title').each(function () {
            $(this).text(selectedCar.title)
        })
        $('.advantages_transmission').each(function() {
            $(this).text(selectedCar.advantages.transmission.value);
        });
        $('.advantages_engine_type').each(function() {
            $(this).text(selectedCar.advantages.engine_type.value);
        });
        $('.advantages_volume').each(function() {
            $(this).text(selectedCar.advantages.volume.value);
        });

        $('.price_min').each(function() {
            $(this).text(selectedCar.price_min + ' AZN');
        });
        $('.price_mid').each(function() {
            $(this).text(selectedCar.price_mid + ' AZN');
        });
        $('.price_max').each(function() {
            $(this).text(selectedCar.price_max + ' AZN');
        });
        $('.product_image img').each(function() {
            $(this).attr('src', selectedCar.images[0])
        });

        $('.checkout_price').each(function() {
            $(this).text(totalPriceCount);
        });
    }
  
  
    // Обновляем значения из formObject
    if (formObject) {
        for (let key in formObject) {
            $(`.selected_${key}`).each(function() {
                
                $(this).text(formObject[key]);
            });
        }
    }

    formObjectToSend = formObject
}