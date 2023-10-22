//Открытые переменные
let container = document.getElementById('lol');
let p = document.createElement('p');
let btn_1, btn_2, btn_3 , btn_4
// Служебные функции 
function del(){
    container.removeChild(btn_1);
    container.removeChild(btn_2);
    container.removeChild(btn_3);
    container.removeChild(btn_4);
    container.removeChild(p);
}

function fail (){
    alert ('Спробуйту ще раз!')
}

//вопросы

function variant1 (){

    p.textContent = "Скільки у вас занять з групою КС-21.1 на тиждень ?"
    

    btn_1 = document.createElement('button')
    btn_1.className = 'floating-button'
    btn_1.textContent = "Два"
   
    btn_2 = document.createElement('button')
   
    btn_2.textContent = "П'ять"
    btn_2.className = 'floating-button'
    
    btn_3 = document.createElement('button')

    btn_3.textContent = "Три"
    btn_3.className = 'floating-button'
    
    

    container.appendChild(p)

    container.appendChild(btn_1)
   
    container.appendChild(btn_2)

    container.appendChild(btn_3)

    btn_1.addEventListener("click", fail )
    btn_2.addEventListener("click", fail )
    btn_3.addEventListener("click", del )
    btn_3.addEventListener("click", variant2 )
}



function variant2(){

    alert ("Так тримати!")

    p.textContent = "Скільки балів ви мені поставите?"

    btn_1 = document.createElement('button')
    btn_1.className = 'floating-button' 
    btn_1.textContent = "Нуль?"
   

    btn_2 = document.createElement('button')
    
    btn_2.className = 'floating-button'
    btn_2.textContent = "П'ять?"
    

    btn_3 = document.createElement('button')

    btn_3.className = 'floating-button'
    btn_3.textContent = "Тридцяць? "
   

    btn_4 = document.createElement('button')

    btn_4.className = 'floating-button'
    btn_4.textContent = "ДЕСЯТЬ ?!?! "
    
    
    

    container.appendChild(p)

    container.appendChild(btn_1)

    container.appendChild(btn_4)
   
    container.appendChild(btn_2)

    container.appendChild(btn_3)

    
    btn_1.addEventListener("click", fail )
    btn_4.addEventListener('click', del )
    btn_4.addEventListener('click', variant3)
    btn_2.addEventListener("click", fail )
    btn_3.addEventListener("click", fail )
}

function  variant3 (){
    alert ("ВУМНИЧКА!")

    p.textContent = "Тімофєє Данііл Євгенійович , буде писати модульну роботу ??!?!?!???!?"

    btn_1 = document.createElement('button')
    btn_1.className = 'floating-button' 
    btn_1.textContent = "Ні"
   

    btn_2 = document.createElement('button')
    
    btn_2.className = 'floating-button'
    btn_2.textContent = "Так"
    
    
    
    

    container.appendChild(p)

    container.appendChild(btn_1)

   
    container.appendChild(btn_2)


    
    btn_1.addEventListener('click', del )
    btn_1.addEventListener("click", variant4 )
    btn_2.addEventListener('click', function(){
        alert (`Чому?(((((((((\nПодумайте ще раз!`)
    })
    
    
}

function variant4(){
    alert ("ЩЕ ТРОХИ")

    p.textContent = "Останнье питання , матриця це ???????"

    btn_1 = document.createElement('button')
    btn_1.className = 'gradient-button' 
    btn_1.textContent = "Таблиця?"
   

    btn_2 = document.createElement('button')
    
    btn_2.className = 'gradient-button'
    btn_2.textContent = "Числа?"
    

    btn_3 = document.createElement('button')

    btn_3.className = 'gradient-button'
    btn_3.textContent = "Декілька чисел? "
   

    btn_4 = document.createElement('button')

    btn_4.className = 'gradient-button'
    btn_4.textContent = "Таблиця чисел "
    
    
    

    container.appendChild(p)

    container.appendChild(btn_1)

    container.appendChild(btn_4)
   
    container.appendChild(btn_2)

    container.appendChild(btn_3)

    
    btn_1.addEventListener("click", fail )
    btn_4.addEventListener('click', del )
    btn_4.addEventListener('click', learningapp)
    btn_2.addEventListener("click", fail )
    btn_3.addEventListener("click", fail )
}


//Лернинг абс 

function learningapp(){

    alert ('СУПЕР ТА ОСТАННЯ ВПРАВА!')

        // Создаем элемент iframe
    let iframe = document.createElement('iframe');

    // Устанавливаем атрибуты iframe
    iframe.id = 'exercise';
    iframe.src = 'https://learningapps.org/watch?v=pjfmsw1s323';
    iframe.style.border = '0';
    iframe.style.width = '100%';
    iframe.style.height = '500px';
    iframe.allowFullscreen = true;
    iframe.webkitallowfullscreen = true;
    iframe.mozallowfullscreen = true;


    // Вставляем iframe в контейнер
    container.appendChild(iframe);

    //остання кнопка
    btn_1 = document.createElement('button')

    btn_1.className = 'gradient-button' 
    btn_1.textContent = "Ще раз?"

    container.appendChild(btn_1)

    btn_1.addEventListener("click", function(){
        location.reload()
    } )
}