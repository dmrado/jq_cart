/* JavaScript */
	
	/*<div class="col-sm-6 col-md-4 text-center animated zoomIn">
		<div class="block">
			<a href="#"><img src="images/image.png" alt="" class="img-responsive"></a>
			<h3><a href="#">Название товара 1</a></h3>
			<h4><span>2490</span> <i class="fa fa-rub" aria-hidden="true"></i></h4>
			<button class="btn btn-warning btn-lg"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Купить</button>
		</div>
	</div>*/
	for(var i = 1; i<=6; i++) {
        $('<div/>', {
            id: 'col-' + i,
            class: 'col-sm-6 col-md-4 text-center animated zoomIn',
        }).appendTo('.row');

        $('<div/>', {
            id: 'block-' + i,
            class: 'block',
        }).appendTo('#col-' +i);

        $('<a>', {
            id: 'a-' + i,
            //href: 'images/image.png',
            target: '_blank',
        }).appendTo('#block-' +i);

        $('<img>', {
            id: 'img-' +i,
            src: 'images/image.png',
            alt: '',
            class: 'img-responsive',
        }).appendTo('#a -' +i);

        $('<h3>', {
            id: 'h3-' +i,
        }).appendTo('#block-' +i);

        $('<a>', {
            href: '#',
            html: 'Товар ' +i,
        }).appendTo('#h3-' +i);

        $('<h4>', {
            id: 'h4-' +i,
        }).appendTo('#block-' +i);
        //а можно цену принять
        //39 минтута
        var price = prompt('Введите цену', '0.00');

        $('<span>', {
          // html: i + '000 ',
            html: price,
        }).appendTo('#h4-' +i);

        $('<i>', {
            class: 'fa fa-rub'
        }).appendTo('#h4-' +i);

        $('<button>', {
            class: 'btn btn-warning btn-lg',
            html: '<i class="fa fa-shopping-cart"></i> Купить',
            click: function () {
                //1. Прочитать текущую сумму в корзине
             // alert( $('#cart-total-sum').find('span').html() );
              var totalSum = $('#cart-total-sum').find('span').html();
                //2. Прочитать текущее количество в вкорзине
                 var count = $('#cart-total-count').find('span').html();

                //3. Прочитать цену у текущего блока, к котором кнопка: выход на уровень выше и поиск там заголовка h4 и в нем тега span и прочитали ео содержимое
                var thisSum = $(this.parentNode).find('h4 span').html();
                //alert (thisSum);

                //4. Добавить к текущей сумме текущую цену (использовать приведение типов к числу или Number, или parceInt, или +. Каждый проход увеличивает totalSum на сумму товара из переменной thisSum
                totalSum = Number(totalSum) + Number(thisSum);

                //5. Добавить к текущему количеству 1 (единицу). Потому что за один клик добавляется только что-то одно товар
                count++;

                //6. Вывести в блок span новую сумму
                $('#cart-total-sum').find('span').html(totalSum);
                //7. Вывести в блок span новое количество
                $('#cart-total-count').find('span').html(count);
            },
        }).appendTo('#block-' +i);
    }
	
	
