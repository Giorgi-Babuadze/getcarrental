/* 

title - Название
price_max - Цена "2-7 дней"
price_mid - Цена "8-20 дней"
price_min - Цена "21+ дней"
currency - Валюта
volume - Объём двигателя
transmission - Коробка передач
button - Кнопка выбрать или подробнее
advantages - Преимущества
images - Картинки, добавляете строкой через запятую, как в примере
slug - Название, для урл
*/
const cars = [
  {
    id: 1,
    title: 'Kia Cerato 2016',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Kia Cerato 2016 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Kia Cerato 2016 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Kia Cerato 2016 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    
    slug: 'rent-kia-cerato-2016.html',
    price_max: 65,
    price_mid: 60,
    price_min: 45,
    currency: 'AZN',
    category: 'economy',
    button: 'Select',
    advantages: {
        volume: {
            key: {en: 'Engine capacity', ru: 'Объём двигателя'},
            value: '1.8L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: {en: 'Engine type', ru: 'Тип двигателя'},
            value: {en: 'Gasoline', ru: 'Газ'}
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Standart'
        },		
    },
    images: [
        '../assets/images/kia-cerato-2016-get-rent-a-car.png',
    ],
    

    similarCars : [2, 3, 4, 5, 6, 7, 8, 9]
},
{
    id: 2,
    title: 'Kia Forte 2018',
     description: {
            ru: `<p>Kia Forte 2018 &ndash; стильный, комфортный и надежный выбор для каждой поездки!</p>
<p>Kia Forte 2018 &mdash; идеальный автомобиль как для городских поездок, так и для дальних путешествий. Элегантный дизайн, экономичный расход топлива и комфортный салон делают его отличным вариантом для ежедневных маршрутов и деловых поездок.</p>
<p>Основные характеристики:<br />&ndash; Автоматическая коробка передач<br />&ndash; Экономичный двигатель<br />&ndash; Просторный салон с удобными сиденьями<br />&ndash; Bluetooth и мультимедийная система<br />&ndash; Камера заднего вида и современные системы безопасности</p>
<p>Арендуйте Kia Forte 2018 уже сейчас на GetCarRental.com по выгодной цене!<br />Бронируйте онлайн, экономьте время и наслаждайтесь комфортной поездкой в любом направлении.</p>`,
            en: `<p>Kia Forte 2018 &ndash; A Stylish, Comfortable, and Reliable Choice for Every Drive!</p>
<p></p>
<p>The 2018 Kia Forte is the perfect car for both city rides and long-distance journeys. With its sleek design, fuel efficiency, and comfortable interior, it&rsquo;s an excellent option for daily commutes or business travel.</p>
<p></p>
<p>Key Features:<br />&ndash; Automatic transmission<br />&ndash; Fuel-efficient engine<br />&ndash; Spacious cabin with comfortable seating<br />&ndash; Bluetooth and multimedia system<br />&ndash; Rearview camera and safety features</p>
<p></p>
<p>Rent the Kia Forte 2018 now on <a href="https://getcarrental.com/" title="GetCarRental">GetCarRental</a>.com at an affordable rate!<br /><br />Book online, save your time, and enjoy a smooth ride wherever you go.</p>`,
            az: `<p>Kia Forte 2018 &ndash; Hər Səfər &Uuml;&ccedil;&uuml;n Z&ouml;vql&uuml;, Rahat və Etibarlı Se&ccedil;im!</p>
<p>Kia Forte 2018 həm şəhərdaxili gəzintilər, həm də uzun məsafəli səfərlər &uuml;&ccedil;&uuml;n m&uuml;kəmməl avtomobildir. Zərif dizaynı, yanacağa qənaət edən m&uuml;hərriki və rahat salonu onu g&uuml;ndəlik istifadə və işg&uuml;zar səfərlər &uuml;&ccedil;&uuml;n ideal se&ccedil;im edir.</p>
<p>Əsas X&uuml;susiyyətlər:<br />&ndash; Avtomatik s&uuml;rətlər qutusu<br />&ndash; Yanacağa qənaət edən m&uuml;hərrik<br />&ndash; Geniş və rahat salon<br />&ndash; Bluetooth və multimedia sistemi<br />&ndash; Geri g&ouml;r&uuml;nt&uuml; kamerası və təhl&uuml;kəsizlik sistemləri</p>
<p>Kia Forte 2018-i indi GetCarRental.com saytından sərfəli qiymətlə icarəyə g&ouml;t&uuml;r&uuml;n!<br />Onlayn rezervasiya edin, vaxtınıza qənaət edin və rahat səfərinizin dadını &ccedil;ıxarın.</p>`
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Kia Forte 2018 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Kia Forte 2018 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Kia Forte 2018 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    youtube: 'https://www.youtube.com/watch?v=8eVTKOYJ6L4',
    slug: 'rent-kia-forte-2018.html',
    price_max: 70,
    price_mid: 65,
    price_min: 55,
    currency: 'AZN',
    category: 'economy',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Standart'
        },		
    },
	
    images: [
        '../assets/images/kia-forte-2018-get-rent-a-car.png',
    
    ],
    
    
    
    similarCars : [1, 3, 4, 5, 6, 7, 8, 9]    
},
{
    id: 3,
    title: 'Hyundai Elantra 2018',
     description: {
            ru: `<p>Hyundai Elantra 2018 &ndash; стильный, экономичный и идеальный для повседневных поездок!</p>
<br />
<p>Hyundai Elantra 2018 обеспечивает плавное вождение, элегантный дизайн и впечатляющую топливную экономичность, что делает его отличным выбором как для городских поездок, так и для дальних путешествий. Это идеальное сочетание комфорта, надежности и выгоды.</p>
<br />
<p>Основные характеристики:<br />&ndash; Автоматическая коробка передач<br />&ndash; Экономичный двигатель<br />&ndash; Просторный и комфортный салон<br />&ndash; Мультимедийная система с Bluetooth и USB<br />&ndash; Камера заднего вида и современные системы безопасности</p>
<br />
<p>Арендуйте Hyundai Elantra 2018 уже сегодня на <a href="https://getcarrental.com/" title="Get Car Rental">GetCarRental</a> и наслаждайтесь комфортом по доступной цене в каждой поездке!</p>
<br />
<p>Идеальный выбор для одиночных поездок, пар и деловых путешествий &ndash; ездите с умом, ездите на Elantra.</p>`,
            en: `<p>Hyundai Elantra 2018 &ndash; Sleek, Efficient &amp; Perfect for Daily Drives!</p>
<p></p>
<p>The 2018 Hyundai Elantra offers a smooth ride, stylish design, and impressive fuel efficiency &ndash; making it an excellent choice for city driving or long-distance trips. It&rsquo;s the perfect blend of comfort, reliability, and value.</p>
<p></p>
<p>Key Features:<br />&ndash; Automatic transmission<br />&ndash; Fuel-efficient engine<br />&ndash; Comfortable and spacious interior<br />&ndash; Bluetooth, USB &amp; infotainment system<br />&ndash; Rearview camera and safety features</p>
<p></p>
<p>Rent the Hyundai Elantra 2018 today on <a href="https://getcarrental.com/" title="Get Car Rental">GetCarRental</a> and enjoy affordable comfort on every journey!<br />Ideal for solo travelers, couples, or business trips &ndash; drive smart, drive Elantra.</p>`,
            az: `<p>Hyundai Elantra 2018 &ndash; Zərif, Sərfəli və G&uuml;ndəlik S&uuml;r&uuml;ş &Uuml;&ccedil;&uuml;n M&uuml;kəmməl!</p>
<p></p>
<p>Hyundai Elantra 2018 rahat s&uuml;r&uuml;ş, şıq dizayn və y&uuml;ksək yanacaq səmərəliliyi təklif edir. Şəhər i&ccedil;i s&uuml;r&uuml;şlər və uzun məsafəli səfərlər &uuml;&ccedil;&uuml;n ideal se&ccedil;imdir. Bu avtomobil rahatlıq, etibarlılıq və sərfəli qiymətin m&uuml;kəmməl birləşməsidir.</p>
<p></p>
<p>Əsas X&uuml;susiyyətlər:<br />&ndash; Avtomatik s&uuml;rətlər qutusu<br />&ndash; Yanacağa qənaətcil m&uuml;hərrik<br />&ndash; Geniş və rahat salon<br />&ndash; Bluetooth, USB və multimedia sistemi<br />&ndash; Geri g&ouml;r&uuml;nt&uuml; kamerası və təhl&uuml;kəsizlik sistemləri</p>
<p></p>
<p>Hyundai Elantra 2018-i bu g&uuml;n GetCarRental saytında icarəyə g&ouml;t&uuml;r&uuml;n və hər səfərdə sərfəli rahatlıqdan həzz alın!</p>
<p></p>
<p>Tək səyyahlar, c&uuml;tl&uuml;klər və işg&uuml;zar səfərlər &uuml;&ccedil;&uuml;n ideal se&ccedil;im &ndash; ağıllı s&uuml;r, Elantra s&uuml;r!</p>`
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Elantra 2018 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Elantra 2018 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Elantra 2018 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    youtube: 'https://www.youtube.com/watch?v=neurF2bH0f8',
    slug: 'rent-hyundai-elantra-2018.html',
    price_max: 70,
    price_mid: 65,
    price_min: 55,
    currency: 'AZN',
    category: 'economy',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Standart'
        },		
    },
    images: [
        '../assets/images/hyundai-elantra-2018-get-rent-a-car.png',
    ],
    
    similarCars : [1, 2, 4, 5, 6, 7, 8, 9]    
},
{
    id: 4,
    title: 'Kia Rio 2021',
     description: {
            ru: `<p>Kia Rio 2020 &ndash; умный, компактный и созданный для города!</p>
<p></p>
<p>Kia Rio 2020 &mdash; идеальный спутник для городской жизни: компактный, но удивительно просторный, экономичный и удобный в управлении. Будь то повседневные поездки по делам или выезд на выходные, Kia Rio обеспечит комфорт и уверенность на каждом километре.</p>
<p></p>
<p>Основные характеристики:<br />&ndash; Автоматическая коробка передач<br />&ndash; Отличная топливная экономичность<br />&ndash; Компактные размеры для удобной парковки в городе<br />&ndash; Сенсорный дисплей с Bluetooth<br />&ndash; Камера заднего вида и современные системы безопасности</p>
<p></p>
<p>Забронируйте Kia Rio 2020 прямо сейчас на <a href="https://getcarrental.com/" title="GetCarRental">GetCarRental</a> и получите незабываемый опыт аренды без лишних забот!<br /><br />Быстрое бронирование, выгодные цены и надежный сервис &ndash; все в одном месте.</p>`,
            en: `<p>Kia Rio 2020 &ndash; Smart, Compact, and Built for the City!</p>
<p></p>
<p>The 2020 Kia Rio is the ultimate urban companion &ndash; compact yet surprisingly spacious, fuel-efficient, and easy to drive. Whether you&rsquo;re running daily errands or heading out on a weekend getaway, the Kia Rio delivers comfort and confidence at every turn.</p>
<p></p>
<p>Key Features:<br />&ndash; Automatic transmission<br />&ndash; Excellent fuel economy<br />&ndash; Compact size for easy city parking<br />&ndash; Touchscreen display with Bluetooth<br />&ndash; Rearview camera and advanced safety features</p>
<p></p>
<p>Book the Kia Rio 2020 now at&nbsp;<a href="https://getcarrental.com/" title="GetCarRental">GetCarRental</a>&nbsp;and enjoy a stress-free rental experience!<br /><br /><br />Fast booking, great rates, and reliable service &ndash; all in one place.</p>`,
            az: `<p>Kia Rio 2020 &ndash; Ağıllı, Kompakt və Şəhər &Uuml;&ccedil;&uuml;n Yaradılmış!</p>
<p></p>
<p>Kia Rio 2020 şəhər həyatı &uuml;&ccedil;&uuml;n m&uuml;kəmməl tərəfdaşdır &ndash; kompakt, lakin g&ouml;zlənilmədən geniş, yanacağa qənaətcil və idarə edilməsi asandır. G&uuml;ndəlik işlərinizi həll etmək və ya həftəsonu səyahətinə &ccedil;ıxmaq &uuml;&ccedil;&uuml;n Kia Rio sizə rahatlıq və inam bəxş edəcək.</p>
<p></p>
<p>Əsas X&uuml;susiyyətlər:<br />&ndash; Avtomatik s&uuml;rətlər qutusu<br />&ndash; Y&uuml;ksək yanacaq səmərəliliyi<br />&ndash; Şəhərdə rahat parklanma &uuml;&ccedil;&uuml;n kompakt &ouml;l&ccedil;&uuml;<br />&ndash; Bluetooth funksiyalı sensor ekran<br />&ndash; Geri g&ouml;r&uuml;nt&uuml; kamerası və m&uuml;asir təhl&uuml;kəsizlik sistemləri</p>
<p></p>
<p>Kia Rio 2020-ni indi&nbsp;<a href="https://getcarrental.com/" title="GetCarRental">GetCarRental</a> saytında rezervasiya edin və problemsiz icarə təcr&uuml;bəsindən həzz alın!<br /><br />S&uuml;rətli rezervasiya, sərfəli qiymətlər və etibarlı xidmət &ndash; hamısı bir yerdə.</p>`
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Kia Rio 2021 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Kia Rio 2021 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Kia Rio 2021 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    youtube: 'https://www.youtube.com/watch?v=bwWE6Kpf8qw',     
    slug: 'rent-kia-rio-2021.html',
    price_max: 75,
    price_mid: 70,
    price_min: 55,
    currency: 'AZN',
    category: 'economy',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Standart'
        },		
    },
    images: [
        '../assets/images/kia-rio-2021-get-rent-a-car.png',
    ],
    
    similarCars : [1, 2, 3, 5, 6, 7, 8, 9]     
},
{
    id: 5,
    title: 'Hyundai Accent 2021',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Accent 2021 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Accent 2021 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Accent 2021 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-hyundai-accent-2021.html',
    price_max: 75,
    price_mid: 70,
    price_min: 55,
    currency: 'AZN',
    category: 'economy',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '1.5L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Standart'
        },		
    },
    images: [
        '../assets/images/hyundai-accent-2021-get-rent-a-car.png',
    ],
    
    similarCars : [1, 2, 3, 4, 6, 7, 8, 9]     
},
{
    id: 6,
    title: 'Hyundai Elantra 2020',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Elantra 2020 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Elantra 2020 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Elantra 2020 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-hyundai-elantra-2020.html',
    price_max: 80,
    price_mid: 75,
    price_min: 60,
    currency: 'AZN',
    category: 'economy',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '1.8L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Standart'
        },		
    },
    images: [
        '../assets/images/hyundai-elantra-2020-get-rent-a-car.png',
    ],
    
    similarCars : [1, 2, 3, 4, 5, 7, 8, 9]     
},
{
    id: 7,
    title: 'Hyundai Elantra 2023',
     description: {
            ru: ``,
            en: `<p>Hyundai Elantra 2023 &ndash; Bold Design, Smart Technology &amp; Smooth Performance!</p>
<br />
<p>The 2023 Hyundai Elantra stands out with its futuristic design, advanced safety features, and exceptional driving comfort. Perfect for both urban commutes and longer drives, this next-generation sedan offers a premium experience at an affordable price.</p>
<br />
<p>Key Features:<br />&ndash; Automatic transmission<br />&ndash; Striking exterior with LED lighting<br />&ndash; Digital dashboard and large touchscreen<br />&ndash; Apple CarPlay &amp; Android Auto<br />&ndash; Rearview camera and smart safety systems</p>
<br />
<p>Book the Hyundai Elantra 2023 now on <a href="https://getcarrental.com/" title="Get Car Rental ">GetCarRental</a> and drive with confidence, comfort, and style!</p>
<br />
<p>A great choice for professionals, couples, or anyone who values modern design and technology.</p>`,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Elantra 2023 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Elantra 2023 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Elantra 2023 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    youtube: 'https://www.youtube.com/watch?v=brLnAKPtQ-g',    
    slug: 'rent-hyundai-elantra-2023.html',
    price_max: 95,
    price_mid: 85,
    price_min: 75,
    currency: 'AZN',
    category: 'economy',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '1.6L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Standart'
        },		
    },
    images: [
        '../assets/images/hyundai-elantra-2023-get-rent-a-car.png',
    ],
    
    similarCars : [1, 2, 3, 4, 5, 6, 8, 9]     
},
{
    id: 8,
    title: 'Toyota Corolla 2018',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Toyota Corolla 2018 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Toyota Corolla 2018 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Toyota Corolla 2018 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-toyota-corolla-2018.html',
    price_max: 90,
    price_mid: 85,
    price_min: 75,
    currency: 'AZN',
    category: 'economy',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '1.6L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Standart'
        },		
    },
    images: [
        '../assets/images/toyota-corolla-2018-get-rent-a-car.png',
    ],
    
    similarCars : [1, 2, 3, 4, 5, 6, 7, 9]     
},
{
    id: 9,
    title: 'Toyota Corolla 2023',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Toyota Corolla 2023 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Toyota Corolla 2023 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Toyota Corolla 2023 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-toyota-corolla-2023.html',
    price_max: 110,
    price_mid: 100,
    price_min: 85,
    currency: 'AZN',
    category: 'economy',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '1.6L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Hybrid'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Standart'
        },		
    },
    images: [
        '../assets/images/toyota-corolla-2023-get-rent-a-car.png',
    ],
    
    similarCars : [1, 2, 3, 4, 5, 6, 7, 8]     
},
{
    id: 10,
    title: 'Hyundai Sonata 2017',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Sonata 2017 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Sonata 2017 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Sonata 2017 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-hyundai-sonata-2017.html',
    price_max: 80,
    price_mid: 75,
    price_min: 65,
    currency: 'AZN',
    category: 'business',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.4L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Business'
        },		
    },
    images: [
        '../assets/images/hyundai-sonata-2017-white-get-rent-a-car.png',
    ],
    
    similarCars : [11, 12, 13, 14]     
},
{
    id: 11,
    title: 'Kia Optima 2018',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Kia Optima 2018 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Kia Optima 2018 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Kia Optima 2018 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-kia-optima-2018.html',
    price_max: 90,
    price_mid: 85,
    price_min: 75,
    currency: 'AZN',
    category: 'business',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Business'
        },		
    },
    images: [
        '../assets/images/kia-optima-2018-get-rent-a-car.png',
    ],
    
    similarCars : [10, 12, 13, 14]      
},
{
    id: 12,
    title: 'Hyundai Sonata 2023',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Sonata 2023 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Sonata 2023 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Sonata 2023 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-hyundai-sonata-2023.html',
    price_max: 145,
    price_mid: 135,
    price_min: 95,
    currency: 'AZN',
    category: 'business',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Business'
        },		
    },
    images: [
        '../assets/images/hyundai-sonata-2022-get-rent-a-car.png',
    ],
    
    similarCars : [10, 11, 13, 14]      
},
{
    id: 13,
    title: 'Kia K5 2023',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Kia K5 2023 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Kia K5 2023 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Kia K5 2023 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-kia-k5-2023.html',
    price_max: 145,
    price_mid: 135,
    price_min: 95,
    currency: 'AZN',
    category: 'business',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '1.6L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Business'
        },		
    },
    images: [
        '../assets/images/kia-k5-2022-get-rent-a-car.png',
    ],
    
    similarCars : [10, 11, 12, 14]      
},
{
    id: 14,
    title: 'Toyota Camry 2022',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Toyota Camry 2022 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Toyota Camry 2022 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Toyota Camry 2022 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-toyota-camry-2022.html',
    price_max: 145,
    price_mid: 135,
    price_min: 100,
    currency: 'AZN',
    category: 'business',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.5L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Business'
        },		
    },
    images: [
        '../assets/images/toyota-camry-2021-get-rent-a-car.png',
    ],
    
    similarCars : [10, 11, 12, 13]      
},
{
    id: 15,
    title: 'Hyundai Staria 2024',
     description: {
            ru: ``,
            en: `<p>Hyundai Staria 2024 &ndash; Premium Space, Futuristic Design &amp; Ultimate Comfort!</p><br />
<p>The 2024 Hyundai Staria redefines the minivan experience with its spaceship-inspired design, luxurious interior, and advanced technology. Whether you&rsquo;re traveling with family, a group, or need extra space for business, Staria delivers first-class comfort and practicality.</p><br />
<p>Key Features:<br />&ndash; Automatic transmission &amp; powerful engine<br />&ndash; 7 to 9-seater spacious configuration<br />&ndash; Premium interior with leather seats<br />&ndash; Large touchscreen, Apple CarPlay &amp; Android Auto<br />&ndash; Sliding doors, rearview camera, and safety systems</p>
<br /><p>Rent the Hyundai Staria 2024 now on <a href="https://getcarrental.com/" title="Get Car Rental">GetCarRental</a> and elevate your journey with space, style, and smart features!<br /><br />Ideal for family trips, group tours, and executive travel.</p>`,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Staria 2024 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Staria 2024 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Staria 2024 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    youtube: 'https://www.youtube.com/watch?v=nNrsAPilJsI',    
    slug: 'rent-hyundai-staria-2024.html',
    price_max: 190,
    price_mid: 170,
    price_min: 150,
    currency: 'AZN',
    category: 'premium',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.5L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '8'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Premium'
        },		
    },
    images: [
        '../assets/images/hyundai-staria-2022-get-rent-a-car.png',
    ],
    
    similarCars : [16, 17, 18, 19, 20, 21, 22, 23]
},
{
    id: 16,
    title: 'Mercedes Benz V-class 2019',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Mercedes Benz V-class 2019 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Mercedes Benz V-class 2019 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Mercedes Benz V-class 2019 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-mercedes-v-class-2019.html',
    price_max: 250,
    price_mid: 230,
    price_min: 180,
    currency: 'AZN',
    category: 'premium',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '7'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Premium'
        },		
    },
    images: [
        '../assets/images/mercedes-v-class-2019-get-rent-a-car.png',
    ],
    
    similarCars : [15, 17, 18, 19, 20, 21, 22, 23]    
},
{
    id: 17,
    title: 'Ford Mustang 2020',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Ford Mustang 2020 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Ford Mustang 2020 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Ford Mustang 2020 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-ford-mustang-2020.html',
    price_max: 250,
    price_mid: 240,
    price_min: 160,
    currency: 'AZN',
    category: 'premium',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.3L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '2'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Premium'
        },		
    },
    images: [
        '../assets/images/ford-mustang-2020-get-rent-a-car.png',
    ],
    
    similarCars : [15, 16, 18, 19, 20, 21, 22, 23]    
},
{
    id: 18,
    title: 'BMW G30 5 series 2020',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля BMW G30 5 series 2020 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a BMW G30 5 series 2020 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq BMW G30 5 series 2020 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-bmw-g30-2020.html',
    price_max: 250,
    price_mid: 220,
    price_min: 150,
    currency: 'AZN',
    category: 'premium',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Premium'
        },		
    },
    images: [
        '../assets/images/bmw-g30-get-rent-a-car-2.png',
    ],
    
    similarCars : [15, 16, 17, 19, 20, 21, 22, 23]    
},
{
    id: 19,
    title: 'Range Rover Vogue 2017',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Range Rover Vogue 2017 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Range Rover Vogue 2017 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Range Rover Vogue 2017 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-range-rover-vogue-2017.html',
    price_max: 300,
    price_mid: 280,
    price_min: 210,
    currency: 'AZN',
    category: 'premium',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '3.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Premium'
        },		
    },
    images: [
        '../assets/images/range-rover-vogue-2017-get-rent-a-car.png',
    ],
    
    similarCars : [15, 16, 17, 18, 20, 21, 22, 23]    
},
{
    id: 20,
    title: 'BMW X5 2022',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля BMW X5 2022 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a BMW X5 2022 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq BMW X5 2022 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-bmw-x5-2022.html',
    price_max: 350,
    price_mid: 320,
    price_min: 250,
    currency: 'AZN',
    category: 'premium',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '3.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Premium'
        },		
    },
    images: [
        '../assets/images/bmw-x5-2022-get-rent-a-car-2.png',
    ],
    
    similarCars : [15, 16, 17, 18, 19, 21, 22, 23]    
},
{
    id: 21,
    title: 'Mercedes Benz S-class 2019',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Mercedes Benz S-class 2017 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Mercedes Benz S-class 2017 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Mercedes Benz S-class 2017 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-mercedes-s-class-2019.html',
    price_max: 350,
    price_mid: 330,
    price_min: 250,
    currency: 'AZN',
    category: 'premium',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '3.5L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Premium'
        },		
    },
    images: [
        '../assets/images/mercedes-s-class-2017-get-rent-a-car.png',
    ],
    
    similarCars : [15, 16, 17, 18, 19, 20, 22, 23]    
},
{
    id: 22,
    title: 'BMW X7 2022',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля BMW X7 2022 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a BMW X7 2022 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq BMW X7 2022 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-bmw-x7-2022.html',
    price_max: 450,
    price_mid: 400,
    price_min: 300,
    currency: 'AZN',
    category: 'premium',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '3.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Premium'
        },		
    },
    images: [
        '../assets/images/bmw-x7-get-rent-a-car-2.png',
    ],
    
    similarCars : [15, 16, 17, 18, 19, 20, 21, 23]    
},
{
    id: 23,
    title: 'Range Rover Vogue 2021',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Range Rover Vogue 2021 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Range Rover Vogue 2021 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Range Rover Vogue 2021 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-range-rover-vogue-2021.html',
    price_max: 450,
    price_mid: 420,
    price_min: 300,
    currency: 'AZN',
    category: 'premium',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '3.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Premium'
        },		
    },
    images: [
        '../assets/images/range-rover-vogue-2020-get-rent-a-car.png',
    ],
    
    similarCars : [15, 16, 17, 18, 19, 20, 21, 22]    
},
{
    id: 24,
    title: 'Hyundai Kona 2022',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Kona 2022 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Kona 2022 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Kona 2022 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-hyundai-kona-2022.html',
    price_max: 95,
    price_mid: 90,
    price_min: 80,
    currency: 'AZN',
    category: 'crossover',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Crossover'
        },		
    },
    images: [
        '../assets/images/hyundai-kona-2021-get-rent-a-car.png',
    ],
    
    similarCars : [25, 26, 27, 28, 29, 30]    
},
{
    id: 25,
    title: 'Hyundai Tucson 2021',
     description: {
            ru: `<p>Hyundai Tucson 2021 &ndash; современный, комфортный и готов к любой дороге!</p>
<p></p>
<p>Hyundai Tucson 2021 сочетает в себе смелый дизайн, передовые технологии и непревзойденный комфорт, что делает его отличным выбором как для городских поездок, так и для загородных путешествий. Просторный салон и плавное управление обеспечивают удовольствие от каждой поездки.</p>
<p></p>
<p>Основные характеристики:<br />&ndash; Автоматическая коробка передач и современные системы безопасности<br />&ndash; Светодиодные фары и стильный внешний вид<br />&ndash; Просторный салон с премиальными материалами<br />&ndash; Сенсорная мультимедиа-система с Bluetooth и USB<br />&ndash; Камера заднего вида и система помощи при парковке</p>
<p></p>
<p>Арендуйте Hyundai Tucson 2021 уже сейчас на <a href="https://getcarrental.com/" title="Get Car Rental">GetCarRental</a> и наслаждайтесь умным вождением с комфортом и стилем!</p>
<p></p>
<p>Идеальный выбор для семейных поездок, деловых встреч и повседневного использования &ndash; ваша дорога начинается здесь.</p>`,
            en: `<p>Hyundai Tucson 2021 &ndash; Modern, Comfortable &amp; Ready for Any Road!</p>
<br />
<p>The 2021 Hyundai Tucson combines bold design, advanced technology, and exceptional comfort &mdash; making it a top choice for both city drives and weekend getaways. With its spacious interior and smooth handling, Tucson is built to make every trip enjoyable.</p>
<br />
<p>Key Features:<br />&ndash; Automatic transmission &amp; modern safety systems<br />&ndash; LED headlights and stylish exterior<br />&ndash; Spacious interior with premium materials<br />&ndash; Touchscreen infotainment with Bluetooth &amp; USB<br />&ndash; Rearview camera and parking assistance</p>
<br />
<p>Rent the Hyundai Tucson 2021 now on <a href="https://getcarrental.com/" title="Get Car Rental">GetCarRental</a> and experience smart driving with comfort and class!</p>
<p><br />Perfect for family trips, business rides, or everyday use &ndash; your road starts here.</p>`,
            az: `<p>Hyundai Tucson 2021 &ndash; M&uuml;asir, Rahat və Hər Yola Hazır!</p>
<p></p>
<p>Hyundai Tucson 2021 cəsarətli dizaynı, qabaqcıl texnologiyaları və &uuml;st&uuml;n komfortu ilə şəhər gəzintiləri və uzun səfərlər &uuml;&ccedil;&uuml;n m&uuml;kəmməl se&ccedil;imdir. Geniş salonu və rahat idarəetməsi hər səfəri unudulmaz edir.</p>
<p></p>
<p>Əsas X&uuml;susiyyətlər:<br />&ndash; Avtomatik s&uuml;rətlər qutusu və m&uuml;asir təhl&uuml;kəsizlik sistemləri<br />&ndash; LED faralar və zərif eksteryer dizaynı<br />&ndash; Premium materiallarla geniş salon<br />&ndash; Bluetooth və USB bağlantılı sensor multimedia sistemi<br />&ndash; Geri g&ouml;r&uuml;nt&uuml; kamerası və parkinq k&ouml;mək&ccedil;i sistemi</p>
<p></p>
<p>Hyundai Tucson 2021-i indi <a href="https://getcarrental.com/" title="Get Car Rental">GetCarRental</a> saytında icarəyə g&ouml;t&uuml;r&uuml;n və komfort və z&ouml;vqlə ağıllı s&uuml;r&uuml;ş təcr&uuml;bəsini yaşayın!</p>
<p></p>
<p>Ailələr, işg&uuml;zar səfərlər və g&uuml;ndəlik istifadə &uuml;&ccedil;&uuml;n ideal se&ccedil;im &ndash; sizin yolunuz buradan başlayır.</p>`
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Tucson 2021 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Tucson 2021 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Tucson 2021 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    youtube: 'https://www.youtube.com/watch?v=XuFw1J1NiTg',     
    slug: 'rent-hyundai-tucson-2021.html',
    price_max: 100,
    price_mid: 90,
    price_min: 80,
    currency: 'AZN',
    category: 'crossover',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Crossover'
        },		
    },
    images: [
        '../assets/images/hyundai-tucson-2021-get-rent-a-car.png',
    ],
    
    similarCars : [24, 26, 27, 28, 29, 30]      
},
{
    id: 26,
    title: 'Kia Sportage 2021',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Kia Sportage 2021 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Kia Sportage 2021 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Kia Sportage 2021 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-kia-sportage-2021.html',
    price_max: 120,
    price_mid: 105,
    price_min: 90,
    currency: 'AZN',
    category: 'crossover',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Crossover'
        },		
    },
    images: [
        '../assets/images/kia-sportage-2021-get-rent-a-car.png',
    ],
    
    similarCars : [24, 25, 27, 28, 29, 30]      
},
{
    id: 27,
    title: 'Hyundai Tucson 2023',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Tucson 2023 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Tucson 2023 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Tucson 2023 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-hyundai-tucson-2023.html',
    price_max: 145,
    price_mid: 130,
    price_min: 100,
    currency: 'AZN',
    category: 'crossover',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Crossover'
        },		
    },
    images: [
        '../assets/images/hyundai-tucson-2023-get-rent-a-car.png',
    ],
    
    similarCars : [24, 25, 26, 28, 29, 30]      
},
{
    id: 28,
    title: 'Kia Sportage 2023',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Kia Sportage 2023 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Kia Sportage 2023 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Kia Sportage 2023 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-kia-sportage-2023.html',
    price_max: 145,
    price_mid: 130,
    price_min: 100,
    currency: 'AZN',
    category: 'crossover',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Crossover'
        },		
    },
    images: [
        '../assets/images/kia-sportage-2023-get-rent-a-car.png',
    ],
    
    similarCars : [24, 25, 26, 27, 29, 30]      
},
{
    id: 29,
    title: 'Hyundai Santa Fe 2022',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Santa Fe 2022 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Santa Fe 2022 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Santa Fe 2022 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-hyundai-santafe-2022.html',
    price_max: 150,
    price_mid: 130,
    price_min: 120,
    currency: 'AZN',
    category: 'crossover',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.5L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Crossover'
        },		
    },
    images: [
        '../assets/images/hyundai-santafe-2021-get-rent-a-car.png',
    ],
    
    similarCars : [24, 25, 26, 27, 28, 30]      
},
{
    id: 30,
    title: 'Kia Sorento 2023',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Kia Sorento 2023 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Kia Sorento 2023 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Kia Sorento 2023 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-kia-sorento-2023.html',
    price_max: 175,
    price_mid: 160,
    price_min: 130,
    currency: 'AZN',
    category: 'crossover',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.5L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '7'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Crossover'
        },		
    },
    images: [
        '../assets/images/kia-sorento-2023-get-rent-a-car.png',
    ],
    
    similarCars : [24, 25, 26, 27, 28, 29]      
},

{
    id: 31,
    title: 'Toyota Prado 2015-2018',
     description: {
            ru: `<p>Toyota Prado 2015-2018 &ndash; мощь, роскошь и комфорт в одном внедорожнике!</p>
<p></p>
<p>Toyota Prado 2015-2018 &mdash; это идеальное сочетание производительности, элегантности и надежности. Будь то поездка в горы или передвижение по городу, этот премиальный внедорожник обеспечит плавное и мощное вождение для любого приключения.</p>
<p></p>
<p>Основные характеристики:<br />&ndash; Автоматическая коробка передач и полный привод (4x4)<br />&ndash; Роскошный кожаный салон<br />&ndash; Просторные сиденья для 7 пассажиров<br />&ndash; Двухзонный климат-контроль<br />&ndash; Камера заднего вида, парковочные датчики и системы безопасности</p>
<p></p>
<p>Арендуйте Toyota Prado 2015-2018 уже сейчас на <a href="https://getcarrental.com/" title="Get Car Rental">GetCarRental</a> и насладитесь премиальным вождением!</p>
<p></p>
<p>Идеальный выбор для семейных поездок, деловых встреч и внедорожных путешествий &ndash; бронируйте сегодня и путешествуйте с комфортом.</p>`,
            en: `<p>Toyota Prado 2015-2018 &ndash; Power, Luxury, and Ultimate Comfort in One SUV!</p>
<br />
<p>The 2015-2018 Toyota Prado is the perfect blend of performance, elegance, and reliability. Whether you&rsquo;re heading into the mountains or cruising through the city, this premium SUV ensures a smooth and powerful drive for every adventure.</p>
<br />
<p>Key Features:<br />&ndash; Automatic transmission &amp; 4x4 capability<br />&ndash; Luxurious leather interior<br />&ndash; Spacious seating for up to 7 passengers<br />&ndash; Dual-zone climate control<br />&ndash; Rearview camera, parking sensors, and safety systems</p>
<br />
<p>Rent the Toyota Prado 2015-2018 now on <a href="https://getcarrental.com/" title="Get Car Rental">GetCarRental</a> for a premium driving experience!</p>
<p><br />Ideal for families, business trips, and off-road escapes &ndash; book today and travel in style.</p>`,
            az: `<p>Toyota Prado 2015-2018&ndash; G&uuml;c, L&uuml;ks və Komfort Bir SUV-də!</p>
<p></p>
<p>Toyota Prado 2015-2018performans, zəriflik və etibarlılığın m&uuml;kəmməl birləşməsidir. İstər dağlara səyahət edin, istər şəhər k&uuml;&ccedil;ələrində hərəkət edin, bu premium SUV sizə hər macəra &uuml;&ccedil;&uuml;n g&uuml;cl&uuml; və rahat s&uuml;r&uuml;ş təmin edəcək.</p>
<p></p>
<p>Əsas X&uuml;susiyyətlər:<br />&ndash; Avtomatik s&uuml;rətlər qutusu və 4x4 &ouml;t&uuml;r&uuml;c&uuml; sistemi<br />&ndash; L&uuml;ks dəri salon<br />&ndash; 7 sərnişin &uuml;&ccedil;&uuml;n geniş oturacaqlar<br />&ndash; İki zonalı iqlim nəzarəti<br />&ndash; Geri g&ouml;r&uuml;nt&uuml; kamerası, parkinq sensorları və təhl&uuml;kəsizlik sistemləri</p>
<p></p>
<p>Toyota Prado 2015-2018-ni indi <a href="https://getcarrental.com/" title="Get Car Rental">GetCarRental</a> saytında icarəyə g&ouml;t&uuml;r&uuml;n və premium s&uuml;r&uuml;ş təcr&uuml;bəsindən həzz alın!</p>
<p></p>
<p>Ailələr, işg&uuml;zar səfərlər və off-road macəraları &uuml;&ccedil;&uuml;n ideal se&ccedil;im &ndash; bu g&uuml;n rezervasiya edin və rahat səyahət edin.</p>`
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Toyota Prado 2015-2018 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Toyota Prado 2015-2018 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Toyota Prado 2015-2018 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    youtube: 'https://www.youtube.com/watch?v=XtWn1lxfUZI',     
    slug: 'rent-toyota-prado-2015.html',
    price_max: 125,
    price_mid: 120,
    price_min: 110,
    currency: 'AZN',
    category: 'suv',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.7L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '7'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'SUV'
        },		
    },
    images: [
        '../assets/images/toyota-prado-2015-get-rent-a-car.png',
    ],
    
    similarCars : [32, 33, 34]
},
{
    id: 32,
    title: 'Toyota Land Cruiser 2015',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Toyota Land Cruiser 2015 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Toyota Land Cruiser 2015 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Toyota Land Cruiser 2015 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-land-crusier-2015.html',
    price_max: 150,
    price_mid: 140,
    price_min: 125,
    currency: 'AZN',
    category: 'suv',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '4.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '7'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'SUV'
        },		
    },
    images: [
        '../assets/images/land-crusier-2015-get-rent-a-car.png',
    ],
    
    similarCars : [31, 33, 34]    
},
{
    id: 33,
    title: 'Mitsubishi Pajero Sport 2022',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Mitsubishi Pajero Sport 2022 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Mitsubishi Pajero Sport 2022 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Mitsubishi Pajero Sport 2022 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-pajero-sport-2022.html',
    price_max: 170,
    price_mid: 160,
    price_min: 130,
    currency: 'AZN',
    category: 'suv',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '3.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '7'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Crossover'
        },		
    },
    images: [
        '../assets/images/pajero-sport-2022-get-rent-a-car.png',
    ],
    
    similarCars : [31, 32, 34]    
},
{
    id: 34,
    title: 'Toyota Prado 2020',
     description: {
            ru: ``,
            en: ``,
            az: ``
        },
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Toyota Prado 2020 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Toyota Prado 2020 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Toyota Prado 2020 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-toyota-prado-2020.html',
    price_max: 220,
    price_mid: 200,
    price_min: 170,
    currency: 'AZN',
    category: 'suv',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.7L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '7'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'SUV'
        },		
    },
    images: [
        '../assets/images/toyota-prado-2020-get-rent-a-car.png',
    ],
    
    similarCars : [31, 32, 33]    
},

{
    id: 35,
    title: 'Hyundai Venue 2022',
    description: '',
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Hyundai Venue 2022 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Hyundai Venue 2022 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentaCar-dan Bakıda 2 gündən başlayaraq Hyundai Venue 2022 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-hyundai-venue-2022.html',
    price_max: 90,
    price_mid: 85,
    price_min: 70,
    currency: 'AZN',
    category: 'crossover',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '1.6L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '4'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Crossover'
        },		
    },
    images: [
        '../assets/images/hyundai-venue-2022.png',
    ],
    
    similarCars : [24, 25, 26, 27, 28, 29, 30]   
},

{
    id: 36,
    title: 'Land Rover Defender 2023',
    description: '',
    meta_title: {
            ru: ' - аренда в Баку недорого',
            en: ' - rent in Baku Azerbaijan',
            az: ' - avtomobilin Bakidə icarəsi'
        },
    meta_description: {
            ru: 'Заказать прокат автомобиля Land Rover Defender 2023 в Баку от 2 дней сможете в компании GetRentaCar. Акции и скидки. Звоните сейчас, проконсультируем и поможем с выбором!',
            en: 'You can order a Land Rover Defender 2023 car rental in Baku from GetRentaCar. Promotions and discounts. Call now, we will advise and help you with your choice!',
            az: 'Siz GetRentalCar-dan Bakıda 2 gündən başlayaraq Land Rover Defender 2023 avtomobil icarəsini sifariş edə bilərsiniz. İndi zəng edin, seçiminizdə sizə məsləhət və kömək edəcəyik!'
    },
    slug: 'rent-land-rover-defender-2023.html',
    price_max: 450,
    price_mid: 420,
    price_min: 350,
    currency: 'AZN',
    category: 'premium',
    button: 'Select',
    advantages: {
        volume: {
            key: 'Engine capacity',
            value: '2.0L',
        },
        transmission: {
            key: 'Transmission',
            value: 'Automatic'
        },
        engine_type: {
            key: 'Engine type',
            value: 'Gasoline'
        },
        places: {
            key: 'Places',
            value: '5'
        },
        air_conditioning: {
            key: 'Air conditioning',
            value: 'Yes'
        },
        classes: {
            key: 'Class',
            value: 'Premium'
        },		
    },
    images: [
        '../assets/images/land-rover-defender-2023.png',
    ],
    
    similarCars : [15, 16, 17, 18, 19, 20, 21, 22, 23]   
},

];

const blog = [
  {
    id: 1,
    title: 'Azerbaijan Blog',
    date: '11 January 2025',
    short_description: 'Discovering Azerbaijan: A Journey to the Land of Fire',
    description: `<p>Azerbaijan, often referred to as the &ldquo;Land of Fire,&rdquo; is a country that boasts a rich history, diverse landscapes, and a unique cultural blend. Located at the crossroads of Eastern Europe and Western Asia, Azerbaijan is a country that offers travelers an unforgettable experience. Whether you&rsquo;re drawn to its bustling cities, scenic countryside, or ancient heritage, Azerbaijan has something for every type of traveler.</p>
<p>&nbsp;</p>
<ol>
<li>Introduction to Azerbaijan: A Land of Contrasts</li>
</ol>
<p>&nbsp;</p>
<p>Azerbaijan is a place where tradition meets modernity. The capital city, Baku, is a cosmopolitan metropolis with futuristic skyscrapers, luxury shopping, and vibrant nightlife, while the countryside offers a tranquil escape with rolling hills, vast deserts, and picturesque mountain villages. Azerbaijan&rsquo;s rich heritage is visible in its UNESCO World Heritage Sites, ancient architecture, and distinct cuisine, all of which tell the story of a nation shaped by various civilizations over millennia.</p>
<p>&nbsp;</p>
<ol start="2">
<li>Why Visit Azerbaijan?</li>
</ol>
<p>&nbsp;</p>
<p>There are many reasons why Azerbaijan is becoming an increasingly popular tourist destination:</p>
<ul>
<li>Historical Significance: With its ancient ruins, forts, and mosques, Azerbaijan is a treasure trove for history enthusiasts. The Gobustan Rock Art Cultural Landscape, home to ancient petroglyphs, and the Maiden Tower in Baku are just a few examples of the country&rsquo;s long-standing history.</li>
<li>Natural Beauty: From the Caspian Sea coast to the stunning Caucasus Mountains, Azerbaijan&rsquo;s landscapes are diverse and awe-inspiring. Visitors can enjoy hiking, swimming, and exploring the country&rsquo;s lush forests, winding rivers, and volcanic mud pots.</li>
<li>Cultural Fusion: Azerbaijan&rsquo;s culture is an eclectic mix of Eastern and Western influences. The country is home to both Islamic traditions and ancient Christian landmarks, and its music, dance, and art reflect centuries of cultural exchange.</li>
</ul>
<p>&nbsp;</p>
<ol start="3">
<li>Top Places to Visit in Azerbaijan</li>
</ol>
<p>&nbsp;</p>
<p>Baku &ndash; The Jewel of the Caspian Sea</p>
<p>Baku, the capital of Azerbaijan, is an exciting blend of history, culture, and modernity. The city&rsquo;s skyline is dominated by the Flame Towers, which are especially striking at night when they illuminate the skyline. Must-see landmarks in Baku include:</p>
<ul>
<li>The Old City (Icherisheher): A UNESCO World Heritage Site with narrow streets, ancient mosques, and historic buildings.</li>
<li>Baku Boulevard: A beautiful promenade along the Caspian Sea, perfect for a relaxing evening stroll.</li>
<li>The Heydar Aliyev Center: A stunning modern building designed by renowned architect Zaha Hadid.</li>
</ul>
<p>&nbsp;</p>
<p>Gobustan National Park</p>
<p>Located just outside of Baku, Gobustan National Park is famous for its prehistoric rock carvings that date back over 5,000 years. The petroglyphs depict scenes of animals, hunting, and daily life, providing insight into ancient human history. The mud volcanoes here are also a unique natural phenomenon.</p>
<p>&nbsp;</p>
<p>Sheki</p>
<p>Nestled in the foothills of the Caucasus Mountains, Sheki is one of Azerbaijan&rsquo;s most beautiful cities. Known for its charming architecture, Sheki is home to the Sheki Khan&rsquo;s Palace, a stunning 18th-century structure with intricate stained glass windows and beautiful frescoes. Visitors can also explore the Karavansaray, a historic caravanserai.</p>
<p>&nbsp;</p>
<p>Gabala</p>
<p>For nature lovers, Gabala is a must-visit destination. This mountain resort town is perfect for hiking, skiing, and enjoying the picturesque landscapes. Gabala is also home to the Tufandag Mountain Resort, a popular ski resort in the winter months, and the Nohur Lake, which is a great spot for boating and picnicking.</p>
<p>&nbsp;</p>
<p>Lankaran</p>
<p>Located in the southern part of Azerbaijan, Lankaran is known for its subtropical climate, lush greenery, and tranquil beaches along the Caspian Sea. The region also boasts historical sites, such as the Lankaran Fortress, as well as natural wonders like the Hirkan National Park, home to unique plant species and diverse wildlife.</p>
<p>&nbsp;</p>
<ol start="4">
<li>Experiencing Azerbaijani Culture</li>
</ol>
<p>&nbsp;</p>
<p>Azerbaijan&rsquo;s culture is a reflection of its diverse history and influences from Persia, Russia, Turkey, and the Caucasus region. Here are a few ways to immerse yourself in the culture:</p>
<ul>
<li>Cuisine: Azerbaijani cuisine is rich in flavors and uses a variety of fresh herbs, vegetables, and meats. Don&rsquo;t miss trying plov (pilaf), kebab, and dolma (stuffed grape leaves). For dessert, indulge in baklava or shekerbura, a sweet pastry filled with nuts and sugar.</li>
<li>Music: Traditional Azerbaijani music is an important part of the country&rsquo;s cultural identity. The mugham music style, which blends folk and classical elements, is UNESCO-listed as an intangible cultural heritage.</li>
<li>Carpet Weaving: Azerbaijan has a centuries-old tradition of carpet weaving, and you can find beautiful handwoven carpets across the country. Visiting a carpet museum in Baku is an excellent way to learn more about this intricate art form.</li>
</ul>
<p>&nbsp;</p>
<ol start="5">
<li>Practical Tips for Traveling to Azerbaijan</li>
</ol>
<p>&nbsp;</p>
<ul>
<li>Visa: Citizens of many countries can apply for an e-visa to Azerbaijan. It&rsquo;s recommended to check the visa requirements before planning your trip.</li>
<li>Language: The official language is Azerbaijani, but Russian and English are widely understood, especially in major cities.</li>
<li>Currency: The currency used in Azerbaijan is the Azerbaijani manat (AZN).</li>
<li>Best Time to Visit: The ideal time to visit Azerbaijan is during the spring (April to June) or autumn (September to November), when the weather is mild and pleasant. Summer can be quite hot, especially in Baku.</li>
</ul>
<p>&nbsp;</p>
<ol start="6">
<li>Conclusion: Why Azerbaijan Should Be on Your Travel List</li>
</ol>
<p>&nbsp;</p>
<p>Azerbaijan offers an unforgettable journey filled with rich history, diverse landscapes, and vibrant culture. Whether you&rsquo;re exploring ancient ruins, hiking through stunning mountains, or simply relaxing by the Caspian Sea, Azerbaijan is a destination that promises to captivate your heart. So pack your bags, and get ready to explore this hidden gem at the crossroads of East and West!</p>`,
    image: '../assets/images/azerbaijan-blog.jpg'
  },
  {
    id: 2,
    title: 'Baku Blog',
    date: '29 January 2025',
    short_description: 'Explore Baku: A Comprehensive Guide to the City of Winds',
    description: `<p>Baku, the capital of Azerbaijan, is a city of striking contrasts where ancient history meets modern innovation. Situated on the shores of the Caspian Sea, Baku is a vibrant metropolis known for its unique blend of culture, architecture, and warm hospitality. Whether you&rsquo;re a history enthusiast, a foodie, or an architecture admirer, Baku has something special to offer.</p>
<p>&nbsp;</p>
<p>Why Visit Baku?</p>
<p>&nbsp;</p>
<ol>
<li>Rich History: Baku boasts a history that dates back thousands of years. Its Old City (Icherisheher) is a UNESCO World Heritage site filled with narrow alleyways, ancient mosques, and the iconic Maiden Tower.</li>
<li>Modern Marvels: The Flame Towers and the Heydar Aliyev Center, designed by Zaha Hadid, showcase Baku&rsquo;s futuristic aspirations.</li>
<li>Natural Beauty: Nestled by the Caspian Sea, Baku offers scenic seaside promenades and nearby natural wonders like Gobustan and the mud volcanoes.</li>
<li>Culinary Delights: Azerbaijani cuisine is a feast for the senses, with dishes like plov, dolma, and kebabs accompanied by aromatic teas and traditional sweets.</li>
</ol>
<p>&nbsp;</p>
<p>Top Attractions in Baku</p>
<p>&nbsp;</p>
<ol>
<li>Icherisheher (Old City):</li>
</ol>
<ul>
<li>Explore ancient walls, caravanserais, and the Palace of the Shirvanshahs.</li>
<li>Don&rsquo;t miss the Maiden Tower for panoramic views of the city.</li>
</ul>
<ol start="2">
<li>Flame Towers:</li>
</ol>
<ul>
<li>A trio of skyscrapers that light up the night sky with mesmerizing LED displays.</li>
</ul>
<ol start="3">
<li>Heydar Aliyev Center:</li>
</ol>
<ul>
<li>A stunning architectural masterpiece with fluid, futuristic lines. Inside, you&rsquo;ll find art exhibitions and cultural displays.</li>
</ul>
<ol start="4">
<li>Baku Boulevard:</li>
</ol>
<ul>
<li>Stroll along the Caspian Sea, enjoy entertainment centers, and dine at waterfront restaurants.</li>
</ul>
<ol start="5">
<li>Gobustan National Park:</li>
</ol>
<ul>
<li>Just outside the city, this park is home to prehistoric rock carvings and bubbling mud volcanoes.</li>
</ul>
<ol start="6">
<li>Bibi-Heybat Mosque:</li>
</ol>
<ul>
<li>A beautifully restored mosque overlooking the Caspian Sea.</li>
</ul>
<p>&nbsp;</p>
<p>Best Time to Visit Baku</p>
<p>&nbsp;</p>
<p>The ideal time to visit Baku is during spring (April to June) and autumn (September to November). The weather is pleasant, and outdoor activities are more enjoyable during these seasons.</p>
<p>&nbsp;</p>
<p>Baku Tour Ideas</p>
<p>&nbsp;</p>
<ol>
<li>Cultural Tour: Explore the Old City, visit museums like the Azerbaijan Carpet Museum, and experience traditional music performances.</li>
<li>Modern Baku Tour: Visit the Flame Towers, Heydar Aliyev Center, and Crystal Hall. End the day at a rooftop bar for stunning city views.</li>
<li>Day Trips:</li>
</ol>
<ul>
<li>Gobustan for ancient petroglyphs.</li>
<li>Ateshgah Fire Temple and Yanar Dag (Burning Mountain) for a glimpse into Azerbaijan&rsquo;s &ldquo;Land of Fire&rdquo; identity.</li>
</ul>
<p>&nbsp;</p>
<p>Local Tips for Tourists</p>
<p>&nbsp;</p>
<ul>
<li>Transportation: Use the Baku Metro or taxis (but agree on a price beforehand).</li>
<li>Currency: The Azerbaijani Manat (AZN) is the local currency. Most places accept credit cards, but having cash is handy.</li>
<li>Language: Azerbaijani is the official language, but English is spoken in many tourist areas.</li>
<li>Etiquette: Dress modestly, especially when visiting religious sites, and be respectful of local customs.</li>
</ul>
<p>&nbsp;</p>
<p>Baku&rsquo;s Culinary Highlights</p>
<p>&nbsp;</p>
<ol>
<li>Plov: A fragrant rice dish with saffron, dried fruits, and meat.</li>
<li>Piti: A slow-cooked lamb and chickpea stew.</li>
<li>Baklava: A sweet pastry layered with nuts and honey, perfect with tea.</li>
</ol>
<p>&nbsp;</p>
<p>Conclusion</p>
<p>&nbsp;</p>
<p>Baku is more than just a city; it&rsquo;s an experience. From its deep historical roots to its modern wonders, every corner of Baku tells a story. A visit here is a journey through time, culture, and innovation that leaves lasting memories.</p>
<p>&nbsp;</p>
<p>Plan your trip, pack your bags, and get ready to discover the magic of Baku!</p>`,
    image: '../assets/images/baku-blog.jpg'
  },
  {
    id: 3,
    title: 'Gabala Blog',
    date: '17 February 2025',
    short_description: 'Exploring Gabala: A Hidden Gem in Azerbaijan',
    description: `<p>Nestled in the heart of Azerbaijan, Gabala is a city that offers a rich blend of history, culture, and stunning natural landscapes. Known as one of the oldest cities in the Caucasus region, Gabala has transformed into a popular tourist destination while retaining its historical charm. Here&rsquo;s a guide to what makes Gabala special and why you should consider a Gabala tour for your next adventure.</p>
<p>&nbsp;</p>
<p>A Brief History of Gabala</p>
<p>&nbsp;</p>
<p>Gabala (Qəbələ in Azerbaijani) has roots dating back over 2,000 years. It was once the capital of the ancient Caucasian Albania and served as a key city along the Silk Road. Archaeological sites and ancient ruins, such as the Gabala Archaeological Center, provide a glimpse into its fascinating past, making it a paradise for history buffs.</p>
<p>&nbsp;</p>
<p>Top Attractions in Gabala</p>
<p>&nbsp;</p>
<ol>
<li>Tufandag Mountain Resort</li>
</ol>
<p>Gabala is home to one of the most picturesque mountain resorts in the Caucasus. Tufandag offers activities year-round, from skiing and snowboarding in winter to hiking and cable car rides in summer. The breathtaking views of the Caucasus Mountains make it a must-visit spot.</p>
<ol start="2">
<li>Nohur Lake</li>
</ol>
<p>Surrounded by lush forests and mountains, Nohur Lake is a tranquil retreat. Visitors can enjoy boating, picnicking, or simply relaxing by the crystal-clear waters. It&rsquo;s an ideal destination for nature lovers.</p>
<ol start="3">
<li>Gabaland Amusement Park</li>
</ol>
<p>Known as Azerbaijan&rsquo;s largest theme park, Gabaland offers entertainment for all ages. With roller coasters, water slides, and a variety of games, it&rsquo;s a hit among families and groups of friends.</p>
<ol start="4">
<li>Chukhur Gabala (Ancient Gabala)</li>
</ol>
<p>This archaeological site is a treasure trove of ancient relics and ruins, providing insight into the city&rsquo;s historical significance. It&rsquo;s a perfect spot for history enthusiasts.</p>
<ol start="5">
<li>Seven Beauties Waterfall (Yeddi G&ouml;zəl Şəlaləsi)</li>
</ol>
<p>Located a short drive from Gabala, this cascading waterfall is surrounded by dense forests. The hike to the waterfall is an adventure in itself, and the scenic beauty is worth the effort.</p>
<ol start="6">
<li>Gabala Shooting Club</li>
</ol>
<p>For those seeking an adrenaline rush, the Gabala Shooting Club offers a unique experience. Visitors can try their hand at shooting under professional guidance.</p>
<p>&nbsp;</p>
<p>Why Choose a Gabala Tour?</p>
<p>&nbsp;</p>
<ol>
<li>Rich Culture and History</li>
</ol>
<p>Gabala&rsquo;s historical sites and museums provide a deep dive into the region&rsquo;s past. A guided tour can help you uncover stories and legends that bring the city to life.</p>
<ol start="2">
<li>Stunning Natural Scenery</li>
</ol>
<p>With its mountains, forests, and lakes, Gabala is a haven for nature lovers. A tour can take you to hidden gems and panoramic viewpoints you might miss on your own.</p>
<ol start="3">
<li>Adventure Activities</li>
</ol>
<p>Whether you&rsquo;re skiing at Tufandag, hiking to waterfalls, or enjoying outdoor sports, Gabala offers plenty of adventures for thrill-seekers.</p>
<ol start="4">
<li>Family-Friendly Fun</li>
</ol>
<p>Gabaland and other attractions ensure there&rsquo;s something for everyone, making Gabala an excellent choice for families.</p>
<p>&nbsp;</p>
<p>Travel Tips for Gabala</p>
<p>&nbsp;</p>
<ul>
<li>Best Time to Visit: Spring (April to June) and autumn (September to November) are ideal for exploring Gabala due to the mild weather. Winter is great for snow sports.</li>
<li>Getting There: Gabala is about 220 km from Baku, the capital of Azerbaijan. You can reach it by car, bus, or private tour services.</li>
<li>Local Cuisine: Don&rsquo;t miss trying Azerbaijani dishes like kebabs, dolma, and plov. Gabala also has unique local flavors to explore.</li>
<li>Accommodation: From luxurious resorts to cozy guesthouses, Gabala offers a range of options to suit different budgets.</li>
</ul>
<p>&nbsp;</p>
<p>Final Thoughts</p>
<p>&nbsp;</p>
<p>Gabala is a city that offers something for everyone&mdash;history, adventure, natural beauty, and cultural richness. Whether you&rsquo;re looking for a relaxing getaway or an action-packed adventure, a Gabala tour promises memories that will last a lifetime.</p>
<p>Plan your trip today and experience the magic of Gabala firsthand!</p>`,
    image: '../assets/images/gabala-blog.jpg'
  },
  {
    id: 4,
    title: 'Sheki Blog',
    date: '02 March 2025',
    short_description: 'Discovering Sheki: A Hidden Gem of Azerbaijan',
    description: `<p>Nestled in the foothills of the majestic Caucasus Mountains, Sheki is one of Azerbaijan&rsquo;s most enchanting cities, offering visitors a perfect blend of rich history, natural beauty, and vibrant culture. Located in the northwest of the country, Sheki is often overlooked by the typical tourist crowds but is a destination that promises a unique and unforgettable experience.</p>
<p>&nbsp;</p>
<p>A Glimpse of Sheki&rsquo;s History</p>
<p>&nbsp;</p>
<p>Sheki has a storied past that dates back to ancient times. It was once an important city on the Silk Road, a trading hub that connected the East and West. Its history is evident in the architecture, monuments, and ruins that dot the city. The city has also been home to various empires, including the Persians, Arabs, and the Khanate of Sheki, which has left behind a diverse cultural legacy.</p>
<p>&nbsp;</p>
<p>One of the most striking features of Sheki is its mix of Azerbaijani, Persian, and Ottoman influences, seen in everything from its cuisine to its traditional buildings.</p>
<p>&nbsp;</p>
<p>Must-See Attractions in Sheki</p>
<p>&nbsp;</p>
<ol>
<li>Sheki Khan&rsquo;s Palace</li>
</ol>
<p>A visit to Sheki would not be complete without exploring the Sheki Khan&rsquo;s Palace, a breathtaking structure built in the 18th century. Known for its intricate stained-glass windows, called &ldquo;shebeke,&rdquo; the palace is a masterwork of Islamic architecture. The walls are adorned with detailed frescoes and ornamental designs that tell the story of Sheki&rsquo;s royal past. Set against a backdrop of lush green hills, the palace is a true architectural gem.</p>
<p>&nbsp;</p>
<ol start="2">
<li>The Fortress of Sheki</li>
</ol>
<p>Located on a hilltop, Sheki Fortress offers spectacular panoramic views of the city and surrounding mountains. Though the fortress itself is in ruins, it remains a significant landmark, offering a glimpse into Sheki&rsquo;s past as a fortified stronghold. The climb to the top is worth the effort, not only for the historical value but also for the views it provides.</p>
<p>&nbsp;</p>
<ol start="3">
<li>The Sheki Bazaar</li>
</ol>
<p>The Sheki Bazaar is an essential stop for anyone wanting to immerse themselves in local life. Here, visitors can find a variety of fresh produce, spices, handmade textiles, and traditional crafts. It&rsquo;s an excellent place to pick up souvenirs or simply experience the vibrant culture of the region.</p>
<p>&nbsp;</p>
<ol start="4">
<li>The Church of Kish</li>
</ol>
<p>A short drive from Sheki, the Church of Kish is one of the oldest Christian churches in Azerbaijan, dating back to the 1st century. This ancient structure, once a pagan temple, was later converted into a church, showcasing the religious history of the region. Set against the picturesque scenery of the Caucasus, it&rsquo;s a peaceful and spiritual place to visit.</p>
<p>&nbsp;</p>
<p>Sheki&rsquo;s Natural Beauty</p>
<p>&nbsp;</p>
<p>Beyond its historical sites, Sheki is renowned for its breathtaking natural landscapes. The surrounding mountains and forests are perfect for nature enthusiasts who enjoy hiking, bird watching, or simply relaxing in tranquil surroundings. The lush green hills, dotted with waterfalls and streams, offer a serene retreat from the hustle and bustle of city life.</p>
<p>&nbsp;</p>
<ol start="7">
<li>The Alinjagala Fortress</li>
</ol>
<p>If you&rsquo;re a history buff or an adventurer, hiking to the Alinjagala Fortress is a must. This ancient citadel, perched high on a mountain, offers stunning views of the surrounding valleys and plains. The journey to the fortress is a challenging hike, but it&rsquo;s rewarding with its sense of ancient grandeur.</p>
<p>&nbsp;</p>
<ol start="8">
<li>Local Cuisine and Sweets</li>
</ol>
<p>Sheki is also famous for its culinary offerings. The region is particularly known for its delicious local sweets like Sheki halva and piti, a hearty stew made with lamb and vegetables. You&rsquo;ll also find freshly baked breads, kebabs, and traditional Azerbaijani dishes that will delight your taste buds. Make sure to try Sheki&rsquo;s famous pastries, especially the badambura, a sweet almond-filled pastry that will make you want to come back for more.</p>
<p>&nbsp;</p>
<p>Best Time to Visit Sheki</p>
<p>&nbsp;</p>
<p>The best time to visit Sheki is during the spring (April to June) or fall (September to November), when the weather is mild, and the scenery is at its most beautiful. The lush greenery during these seasons, along with the crisp mountain air, make it ideal for outdoor activities like hiking and sightseeing. Summer can be quite hot, so it&rsquo;s recommended to visit during the cooler months.</p>
<p>&nbsp;</p>
<p>Getting to Sheki</p>
<p>&nbsp;</p>
<p>Sheki is located about 300 kilometers from Baku, the capital of Azerbaijan. Visitors can reach Sheki by car or bus from Baku, which takes approximately 5-6 hours. For those looking for a more leisurely experience, hiring a private car or joining a guided tour might be the best option.</p>
<p>&nbsp;</p>
<p>Sheki Tour Recommendations</p>
<p>&nbsp;</p>
<p>When planning your trip, consider joining a guided tour to get the most out of your visit. Local guides are knowledgeable about the history and culture of the city and can offer valuable insights that you might otherwise miss. If you&rsquo;re more independent, you can rent a car and explore the city at your own pace.</p>
<p>&nbsp;</p>
<p>Sheki is an excellent base for exploring the surrounding areas as well, so consider extending your visit to nearby attractions like the Gakh district, famous for its mountainous landscapes and quaint villages.</p>
<p>&nbsp;</p>
<p>Conclusion</p>
<p>&nbsp;</p>
<p>Sheki is a city that offers a perfect combination of history, culture, nature, and cuisine, making it a must-visit destination in Azerbaijan. Whether you&rsquo;re an adventurer looking for outdoor activities, a history enthusiast eager to explore ancient sites, or a food lover seeking new flavors, Sheki has something special for everyone. So, pack your bags and get ready to explore the hidden treasures of Sheki &ndash; a place where the past meets the present in the most stunning way.</p>`,
    image: '../assets/images/sheki-blog.jpg'
  },
]


const minivans = [
    {
        image: '../assets/images/hyundai-staria-2022-get-rent-a-car.png'
    },
    {
        image: '../assets/images/mercedes-v-class-2019-get-rent-a-car.png'
    },
   
]
