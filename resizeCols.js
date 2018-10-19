<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8">
    <title>FleetdevNew</title>
    <link href="style_bt.css" rel="stylesheet">
    <link href="jquery-ui.min.css" rel="stylesheet">
    <link href="jstree.css" rel="stylesheet">
    <link href="jquery.mCustomScrollbar.css" rel="styleSheet">
    <!--[if IE 9]><link href="ie9.css" rel="stylesheet" type="text/css" /><![endif]-->
    <script src="js/jquery.min.js"></script>

    <!--<link href="bootstrap3/css/bootstrap.min.css" rel="styleSheet"/>
    <script src="bootstrap3/js/bootstrap.min.js"></script>-->

    <script src="js/jquery-ui.min.js"></script>
    <script src="js/tablesorter.min.js"></script>
    <script src="js/script_bt.js"></script>
    <script src="js/jstree.js"></script>
    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/resizeCols.js"></script>
    <script src="js/tablesort.js"></script>
    <script src="js/init.js"></script>
    <script>
        //block scrolling
        $(document).ready(function() {
            var sHeight = $('#table1').height();
            var wHeight = $(window).height();
            //var dHeight = $('#block_with_table').height();
           // console.log('sHeight:'+sHeight);
           // console.log('dHeight:'+dHeight);
           // console.log('wHeight:'+wHeight);
            $('#block_with_table').css({
                'height': '500px',
                'width': '100%',
                'overflow-y': 'hidden',
                'overflow-x': 'visible'
            });
           // if (sHeight>wHeight) {
                var pos = $('#block_with_table').offset();
                var top = pos.top;
                $('#block_with_table').after('<div id="block_without_table"></div>');
                var bwtHeight = (sHeight>wHeight)?sHeight:'600px';
                $('#block_without_table').css({'height': '600px', 'position': 'relative'});
                $(window).scroll(function () {
                    wsc = $(window).scrollTop();
                    if (wsc > 100) {
                        //document.title=  'h:'+$('.footer').position().top;
                        var posTop = $('.footer').position().top;
                        if (posTop < 500) {
                            $('#footer-in').css('paddingTop', '45px');
                        }
                        var top = '40px';
                        $('#block_with_table').css({
                            'position': 'fixed',
                            'top': top,
                            'left': '0px',
                            'z-index': '100'
                        }).addClass("fixed");
                        $('.table-menu').addClass('table-menu_fixed');
                        $('#block_with_table').scrollTop(wsc);
                    } else {
                        $('#block_with_table').css({'position': 'relative', 'top': '0px'}).removeClass("fixed");
                        $('#block_with_table').scrollTop(0);
                    }
                });
            //}
        });
    </script>
</head>
<body>
<div class="add-filter-form">
    <div class="add-filter-form__col">
        <label data-filter="filter-id" for="sp" class="item bordered">ID<span class="right"><input id="sp" class="toggle round" type="checkbox"><label for="sp"></label></span></label>
        <label for="sp1" class="item bordered">Клиент<span class="right"><input id="sp1" class="toggle round" type="checkbox"><label for="sp1"></label></span></label>
        <label for="sp2" class="item bordered">Тип заявки<span class="right"><input id="sp2" class="toggle round" type="checkbox"><label for="sp2"></label></span></label>
        <label for="sp3" class="item bordered">Заявка получена<span class="right"><input id="sp3" class="toggle round" type="checkbox"><label for="sp3"></label></span></label>
        <label for="sp4" class="item bordered">Заявка принята<span class="right"><input id="sp4" class="toggle round" type="checkbox"><label for="sp4"></label></span></label>
        <label for="sp5" class="item bordered">Заявка исполнена<span class="right"><input id="sp5" class="toggle round" type="checkbox"><label for="sp5"></label></span></label>
        <label for="sp6" class="item bordered">Год выпуска<span class="right"><input id="sp6" class="toggle round" type="checkbox"><label for="sp6"></label></span></label>
        <label for="sp7" class="item bordered">Гос номер<span class="right"><input id="sp7" class="toggle round" type="checkbox"><label for="sp7"></label></span></label>
        <label for="sp8" class="item bordered">VIN<span class="right"><input id="sp8" class="toggle round" type="checkbox"><label for="sp8"></label></span></label>
        <label for="sp9" class="item bordered">Категория ТС<span class="right"><input id="sp9" class="toggle round" type="checkbox"><label for="sp9"></label></span></label>
        <label for="sp10" class="item bordered">Город<span class="right"><input id="sp10" class="toggle round" type="checkbox"><label for="sp10"></label></span></label>
        <label for="sp11" class="item bordered">Автомобиль<span class="right"><input id="sp11" class="toggle round" type="checkbox"><label for="sp11"></label></span></label>
        <label for="sp12" class="item bordered">Тип НДС<span class="right"><input id="sp12" class="toggle round" type="checkbox"><label for="sp12"></label></span></label>
        <label for="sp13" class="item bordered">ФИО<span class="right"><input id="sp13" class="toggle round" type="checkbox"><label for="sp13"></label></span></label>
    </div>
    <div class="add-filter-form__col">
        <label for="sp14" class="item bordered">Город<span class="right"><input id="sp14" class="toggle round" type="checkbox"><label for="sp14"></label></span></label>
        <label for="sp15" class="item bordered">Пробег заявленный<span class="right"><input id="sp15" class="toggle round" type="checkbox"><label for="sp15"></label></span></label>
        <label for="sp16" class="item bordered">Заявленные работы<span class="right"><input id="sp16" class="toggle round" type="checkbox"><label for="sp16"></label></span></label>
        <label for="sp17" class="item bordered">Дата<span class="right"><input id="sp17" class="toggle round" type="checkbox"><label for="sp17"></label></span></label>
        <label for="sp18" class="item bordered">Фактический пробег<span class="right"><input id="sp18" class="toggle round" type="checkbox"><label for="sp18"></label></span></label>
        <label for="sp19" class="item bordered">Контроль исполнения<span class="right"><input id="sp19" class="toggle round" type="checkbox"><label for="sp19"></label></span></label>
        <label for="sp20" class="item bordered">СТО<span class="right"><input id="sp20" class="toggle round" type="checkbox"><label for="sp20"></label></span></label>
        <label for="sp21" class="item bordered">Выполненные работы<span class="right"><input id="sp21" class="toggle round" type="checkbox"><label for="sp21"></label></span></label>
        <label for="sp22" class="item bordered">Комментарии<span class="right"><input id="sp22" class="toggle round" type="checkbox"><label for="sp22"></label></span></label>
        <label for="sp23" class="item bordered">Сумма ТС<span class="right"><input id="sp23" class="toggle round" type="checkbox"><label for="sp23"></label></span></label>
        <label for="sp24" class="item bordered">Доплата<span class="right"><input id="sp24" class="toggle round" type="checkbox"><label for="sp24"></label></span></label>
        <label for="sp25" class="item bordered">Сумма НДС<span class="right"><input id="sp25" class="toggle round" type="checkbox"><label for="sp25"></label></span></label>
        <label for="sp26" class="item bordered">№ счета<span class="right"><input id="sp26" class="toggle round" type="checkbox"><label for="sp26"></label></span></label>
        <label for="sp27" class="item bordered">Дата счета<span class="right"><input id="sp27" class="toggle round" type="checkbox"><label for="sp27"></label></span></label>
    </div>
    <div class="add-filter-form__col">
        <label for="sp28" class="item bordered">Дата закрывающих документов<span class="right"><input id="sp28" class="toggle round" type="checkbox"><label for="sp28"></label></span></label>
        <label for="sp29" class="item bordered">Прикрепленные файлы<span class="right"><input id="sp29" class="toggle round" type="checkbox"><label for="sp29"></label></span></label>
        <label for="sp30" class="item bordered">Дата регистрации документов<span class="right"><input id="sp30" class="toggle round" type="checkbox"><label for="sp30"></label></span></label>
        <label for="sp31" class="item bordered">Дата передачи копий документов в бухгалтерию<span class="right"><input id="sp31" class="toggle round" type="checkbox"><label for="sp31"></label></span></label>
        <label for="sp32" class="item bordered">Дата передачи оригиналов документов в бухгалтерию<span class="right"><input id="sp32" class="toggle round" type="checkbox"><label for="sp32"></label></span></label>
        <label for="sp33" class="item bordered">Дата оплаты сервису<span class="right"><input id="sp33" class="toggle round" type="checkbox"><label for="sp33"></label></span></label>
        <label for="sp34" class="item bordered">Дата перевыставления<span class="right"><input id="sp34" class="toggle round" type="checkbox"><label for="sp34"></label></span></label>
        <label for="sp35" class="item bordered">Дата оплаты от клиента<span class="right"><input id="sp35" class="toggle round" type="checkbox"><label for="sp35"></label></span></label>
        <label for="sp36" class="item bordered">Дата проверки заявки<span class="right"><input id="sp36" class="toggle round" type="checkbox"><label for="sp36"></label></span></label>
        <label for="sp37" class="item bordered">Заявка утвержена<span class="right"><input id="sp37" class="toggle round" type="checkbox"><label for="sp37"></label></span></label>
        <label for="sp38" class="item bordered">Комментарии к закрытию<span class="right"><input id="sp38" class="toggle round" type="checkbox"><label for="sp38"></label></span></label>
        <label for="sp39" class="item bordered">Дата зыкрытия заявки<span class="right"><input id="sp39" class="toggle round" type="checkbox"><label for="sp39"></label></span></label>
    </div>
</div>


<!--
    DROP-DOWN(COLUMNS)
-->
<div id="columns">
    <form>
        <label for="msp" class="item bordered main-switch">
            <span class="right"><input id="msp" class="toggle round" type="checkbox"><label for="msp"></label></span>
        </label>
        <label for="spa" class="item bordered">
            <span class="left" title="СпециалистСпециалистСпециалистСпециалистСпециалист">СпециалистСпециалистСпециалистСпециалистСпециалист</span>
            <span class="right"><input id="spa" class="toggle round" type="checkbox"><label for="spa"></label></span>
        </label>
        <label for="sp1a" class="item bordered">Клиент
            <span class="right"><input id="sp1a" class="toggle round" type="checkbox"><label for="sp1a"></label></span>
        </label>
        <label for="sp2a" class="item bordered">Тип заявки
            <span class="right"><input id="sp2a" class="toggle round" type="checkbox"><label for="sp2a"></label></span>
        </label>
        <label for="sp3a" class="item bordered">Заявка получена
            <span class="right"><input id="sp3a" class="toggle round" type="checkbox"><label for="sp3a"></label></span>
        </label>
        <label for="sp4a" class="item bordered">Заявка принята
            <span class="right"><input id="sp4a" class="toggle round" type="checkbox" checked><label for="sp4a"></label></span>
        </label>
        <label for="sp5a" class="item bordered">Заявка исполнена
            <span class="right"><input id="sp5a" class="toggle round" type="checkbox" checked><label for="sp5a"></label></span>
        </label>
        <label for="sp6a" class="item bordered">Год выпуска
            <span class="right"><input id="sp6a" class="toggle round" type="checkbox"><label for="sp6a"></label></span>
        </label>
        <label for="sp7a" class="item bordered">Госномер
            <span class="right"><input id="sp7a" class="toggle round" type="checkbox" checked><label for="sp7a"></label></span>
        </label>
        <label for="sp8a" class="item bordered">VIN
            <span class="right"><input id="sp8a" class="toggle round" type="checkbox" checked><label for="sp8a"></label></span>
        </label>
        <label for="sp9a" class="item bordered">Категория ТС
            <span class="right"><input id="sp9a" class="toggle round" type="checkbox" checked><label for="sp9a"></label></span>
        </label>
        <label for="sp10a" class="item bordered">Город(справочник)
            <span class="right"><input id="sp10a" class="toggle round" type="checkbox" checked><label for="sp10a"></label></span>
        </label>
        <label for="sp11a" class="item bordered">Автомобиль
            <span class="right"><input id="sp11a" class="toggle round" type="checkbox" checked><label for="sp11a"></label></span>
        </label>
        <label for="sp12a" class="item bordered">Тип НДС
            <span class="right"><input id="sp12a" class="toggle round" type="checkbox"><label for="sp12a"></label></span>
        </label>
        <label for="sp13a" class="item bordered">ФИО
            <span class="right"><input id="sp13a" class="toggle round" type="checkbox"><label for="sp13a"></label></span>
        </label>
        <label for="sp14a" class="item bordered">Город
            <span class="right"><input id="sp14a" class="toggle round" type="checkbox"><label for="sp14a"></label></span>
        </label>
        <label for="sp15a" class="item bordered">Пробег заявленный
            <span class="right"><input id="sp15a" class="toggle round" type="checkbox" checked><label for="sp15a"></label></span>
        </label>
        <label for="sp16a" class="item bordered">Заявленные работы
            <span class="right"><input id="sp16a" class="toggle round" type="checkbox"><label for="sp16a"></label></span>
        </label>
        <label for="sp17a" class="item bordered">Дата
            <span class="right"><input id="sp17a" class="toggle round" type="checkbox"><label for="sp17a"></label></span>
        </label>
        <label for="sp18a" class="item bordered">Фактический пробег
            <span class="right"><input id="sp18a" class="toggle round" type="checkbox" checked><label for="sp18a"></label></span>
        </label>
        <label for="sp19a" class="item bordered">Контроль исполнения
            <span class="right"><input id="sp19a" class="toggle round" type="checkbox" checked><label for="sp19a"></label></span>
        </label>
    </form>
</div>

<!--
    NEW BID
-->
<div id="new-bid-form" class="big-form">
    <div class="big-form__head">
        <h1>Настройка пути документооборота</h1>
    </div>
    <div class="big-form__content">
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td width="21%">
                    <h4>Основное</h4>
                </td>
                <td width="79%">
                    <div class="big-form-left">
                        <select class="select1">
                            <option>СпециалистСпециалистСпециалистСпециалистСпециалистСпециалистСпециалистСпециалист</option>
                            <option>Специалист1</option>
                            <option>Специалист2</option>
                            <option>Специалист</option>
                            <option>Специалист1</option>
                            <option>Специалист2</option>
                            <option>Специалист</option>
                            <option>Специалист1</option>
                            <option>Специалист2</option>
                            <option>Специалист</option>
                            <option>Специалист1</option>
                            <option>Специалист2</option>
                            <option>Специалист</option>
                            <option>Специалист1</option>
                            <option>Специалист2</option>
                            <option>Специалист</option>
                            <option>Специалист1</option>
                            <option>Специалист2</option>
                            <option>Специалист</option>
                            <option>Специалист1</option>
                            <option>Специалист2</option>
                            <option>Специалист</option>
                            <option>Специалист1</option>
                            <option>Специалист2</option>
                            <option>Специалист</option>
                            <option>Специалист1</option>
                            <option>Специалист2</option>
                            <option>Специалист</option>
                            <option>Специалист1</option>
                            <option>Специалист2</option>
                        </select>
                        <p></p>
                        <select class="select1">
                            <option>Клиент</option>
                            <option>Клиент1</option>
                            <option>Клиент2</option>
                        </select>
                    </div>
                    <div class="big-form-right">
                        <form>
                            Тип заявки:
                            <p style="margin-bottom: 28px;"></p>
                            <input id="rb1" class="radio" type="radio" name="type-of-bid-rb" value="Стандартная" checked />
                            <label for="rb1">Стандартная</label>

                            <input id="rb2" class="radio radio-imp" type="radio" name="type-of-bid-rb" value="Экстренная" />
                            <label for="rb2">Экстренная</label>
                        </form>
                    </div>
                </td>
            </tr>
            <tr>
                <td></td>
                <td style="padding-top: 0">
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x33">
                            Заявка получена:
                            <input class="calendar" type="text">
                        <li class="li-x33">
                            Заявка принята:
                            <input class="calendar" type="text">
                        <li class="li-x33">
                            Заявка исполнена:
                            <input class="calendar" type="text">
                    </ul>
                </td>
            </tr>
        </table>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td width="21%">
                    <h4>Автомобиль</h4>
                </td>
                <td width="79%">
                    <div class="big-form-cell1">
                        <select class="select1">
                            <option>Автомобиль</option>
                            <option>Автомобиль1</option>
                            <option>Автомобиль2</option>
                        </select>
                    </div>
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x33">
                            Год выпуска:
                            <input class="input" type="text" title="Это год, в который был выпущен автомобиль">
                        <li class="li-x33">
                            Гос номер:
                            <input class="input" type="text">
                        <li class="li-x33">
                            VIN:
                            <input class="input" type="text">
                    </ul>
                    <div class="big-form-cell2">
                        <select class="select1">
                            <option>Город</option>
                            <option>Город1</option>
                            <option>Город2</option>
                        </select>
                    </div>
                </td>
            </tr>
        </table>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td width="21%">
                    <h4>Заявленные работы</h4>
                </td>
                <td width="79%">
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x66" style="vertical-align: top;">
                            Заявленные работы:
                            <textarea></textarea>
                        <li class="li-x33">
                            Заявленный пробег:
                            <input class="input" type="text">
                    </ul>
                </td>
            </tr>
        </table>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td width="21%">
                    <h4>Временные работы</h4>
                </td>
                <td width="79%">
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x66" style="vertical-align: top;">
                            Выполненные работы:
                            <textarea></textarea>
                            <p></p>
                            Комментарии:
                            <textarea></textarea>
                        <li class="li-x33">
                            Дата:
                            <input class="input" type="text">
                            <p></p>
                            СТО:
                            <input class="input" type="text">
                            <p></p>
                            Фактический пробег:
                            <input class="input" type="text">
                            <p></p>
                            Контроль исполнения:
                            <input class="calendar" type="text">
                    </ul>
                </td>
            </tr>
        </table>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td width="21%">
                    <h4>Сумма</h4>
                </td>
                <td width="79%">
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x33">
                            Сумма:
                            <input class="input" type="text">
                        <li class="li-x66">
                            Тип НДС:
                            <br>
                            <input id="rb4" class="radio" type="radio" name="type-of-bid-rb" value="18">
                            <label for="rb4">18%</label>
                            <input id="rb5" class="radio" type="radio" name="type-of-bid-rb" value="Без НДС" checked>
                            <label for="rb5">Без НДС</label>
                            <input id="rb6" class="radio" type="radio" name="type-of-bid-rb" value="Другое">
                            <label for="rb6">Другое</label>
                    </ul>
                </td>
            </tr>
        </table>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td width="21%">
                    <h4>Документы</h4>
                </td>
                <td width="79%">
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x33">
                            № счета:
                            <input class="input" type="text">
                            <p></p>
                            Регистрация документов
                            <input class="calendar" type="text">
                            <p></p>
                            Передачи копий в бухгалтерию
                            <input class="calendar" type="text">
                        <li class="li-x33">
                            Дата счета:
                            <input class="calendar" type="text">
                            <p></p>
                            Закрывающие документы
                            <input class="calendar" type="text">
                            <p></p>
                            Передача оригиналов в бухгалтерию
                            <input class="calendar" type="text">
                    </ul>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="big-form__content__table__td-border">
                    <hr>
                </td>
            </tr>
            <tr class="big-form-attached-files">
                <td width="21%">
                    <h4>Прикрепленные файлы</h4>
                </td>
                <td width="79%">
                    <div class="big-form-cell1" style="padding-bottom: 10px;">
                        <a class="big-form-h-btn" href="/">
                            <h4>Документы от сервиса</h4>
                            <span class="plus31-round"></span>
                        </a>
                    </div>
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x50">
                            <a class="big-form-h-file" href="/">
                                <span class="file-format file-format_txt"></span>
                                <h5>Комментарии к закрытию.doc</h5>
                            </a>
                            <p></p>
                            <a class="big-form-h-file" href="/">
                                <span class="file-format file-format_doc"></span>
                                <h5>Комментарии к закрытию.doc</h5>
                            </a>
                            <p></p>
                            <a class="big-form-h-file" href="/">
                                <span class="file-format file-format_xls"></span>
                                <h5>Комментарии к закрытию.doc</h5>
                            </a>
                        <li class="li-x50">
                            <a class="big-form-h-file" href="/">
                                <span class="file-format file-format_txt"></span>
                                <h5>Комментарии к закрытию.doc</h5>
                            </a>
                            <p></p>
                            <a class="big-form-h-file" href="/">
                                <span class="file-format file-format_doc"></span>
                                <h5>Комментарии к закрытию.doc</h5>
                            </a>
                            <p></p>
                            <a class="big-form-h-file" href="/">
                                <span class="file-format file-format_xls"></span>
                                <h5>Комментарии к закрытию.doc</h5>
                            </a>
                    </ul>
                    <div class="big-form-ul-sepr"></div>
                    <div class="big-form-cell1" style="padding-bottom: 10px;">
                        <a class="big-form-h-btn" href="/">
                            <h4>Документы пользователя</h4>
                            <span class="plus31-round"></span>
                        </a>
                    </div>
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x50">
                            <a class="big-form-h-file" href="/">
                                <span class="file-format file-format_txt"></span>
                                <h5>Комментарии к закрытию.doc</h5>
                            </a>
                    </ul>
                    <div class="big-form-ul-sepr"></div>
                    <div class="big-form-cell1" style="padding-bottom: 10px;">
                        <a class="big-form-h-btn" href="/">
                            <h4>Прочие</h4>
                            <span class="plus31-round"></span>
                        </a>
                    </div>
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x50">
                            <a class="big-form-h-file" href="/">
                                <span class="file-format file-format_txt"></span>
                                <h5>Комментарии к закрытию.doc</h5>
                            </a>
                        <li class="li-x50">
                            <a class="big-form-h-file" href="/">
                                <span class="file-format file-format_txt"></span>
                                <h5>Комментарии к закрытию.doc</h5>
                            </a>
                    </ul>
                </td>
            </tr>
        </table>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td width="21%">
                    <h4>Оплата</h4>
                </td>
                <td width="79%">
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x33">
                            Дата перевыставления:
                            <input class="calendar" type="text">
                        <li class="li-x33">
                            Дата оплаты от клиента:
                            <input class="calendar" type="text">
                    </ul>
                </td>
            </tr>
        </table>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td width="21%">
                    <h4>Закрытие заявки</h4>
                </td>
                <td width="79%">
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x33">
                            Дата проверки:
                            <input class="calendar" type="text">
                        <li class="li-x33">
                            Заявка утверждена:
                            <input class="calendar" type="text">
                        <li class="li-x33">
                            Дата зыкрытия:
                            <input class="calendar" type="text">
                    </ul>
                    <p></p>
                    <ul class="ul2 ul-x100 big-form-ul">
                        <li class="li-x33">
                            Комментарии к закрытию:
                            <textarea></textarea>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
    <div class="big-form__footer">
        <input value="Сохранить" type="submit" class="blue-btn blue-btn_big blue-btn_active">
    </div>
</div>


<!--
    HEADER
-->
<div class="header">
    <a href="/" class="header__logo"></a>
    <a href="/" class="header__link">Помощь</a>
    <a href="/" class="header__link">Онлайн-поддержка</a>
</div>

<!--
    MENU
-->
<div class="menu">
    <div class="menu__menu-icon">
        <table class="menu__menu-icon__table" cellpadding="0" cellspacing="0">
            <tr>
                <th>Автомобили</th>
                <th>Ремонт и ТО</th>
                <th>Шины и диски</th>
                <th>Платежи</th>
            </tr>
            <tr>
                <td>
                    <a href="/">Общие данные</a>
                    <a href="/">Владельцы/водители</a>
                    <a href="/">Приобретение</a>
                    <a href="/">Действия</a>
                    <a href="/">Права</a>
                </td>
                <td>
                    <a href="/">Реестр</a>
                    <a href="/">Накопитель</a>
                    <a href="/">События</a>
                </td>
                <td>
                    <a href="/">Инвентаризация</a>
                    <a href="/">Новый шиномонтаж</a>
                    <a href="/">Добавить шины</a>
                    <a href="/">Архив</a>
                    <a href="/">Печать актов</a>
                </td>
                <td>
                    <a href="/">Реестр</a>
                    <a href="/">Планы</a>
                </td>
            </tr>
        </table>
        <div class="menu__menu-icon__footer">
                <span class="menu__menu-icon__footer__item">
                    <span class="menu__menu-icon__item__plus">+</span>
                    <span class="menu__menu-icon__item__text">Заявка на ремонт</span>
                </span>
        </div>
    </div>
    <div class="s s_active s_menu" id="s1">
        <span class="s__title">Автомобили</span>
        <a href="/" class="s__item">Автомобили</a>
        <a href="/" class="s__item">Ремонт и ТО</a>
        <a href="/" class="s__item">Шины и диски</a>
        <a href="/" class="s__item">Платежи</a>
        <a href="/" class="s__item">Группы</a>
    </div>
    <div class="menu__separator"></div>
    <a href="/" class="menu__link_active">Общие данные</a>
    <a href="/" class="menu__link">Владельцы/водители</a>
    <a href="/" class="menu__link">Приобретение</a>
    <a href="/" class="menu__link">Действия</a>
    <a href="/" class="menu__link">Права</a>
    <a href="/" class="menu__icon-profile menu__icon-profile_active"></a>
    <a href="/" class="menu__icon-bell menu__icon-bell-botify menu__icon-bell-notify_active"></a>
    <a href="/" class="menu__icon-chat menu__icon-chat_active"></a>
    <a href="/" class="menu__icon-man menu__icon-man_active"></a>
</div>
<!--
   TABLE MENU
-->
<div class="table-menu">
    <a id="show-new-bid-form" class="table-menu__add-button"></a>
    <a href="/" class="icon trash-can"></a>
    <a href="/" class="icon pencil"></a>
    <a href="javascript: void(0)" class="icon menu_icon"></a>
    <div class="table-s">
        <span class="table-s__title">Связанные объекты</span>
    </div>
    <div class="table-s" id="cols">
        <span class="table-s__title">Колонки(12/20)</span>
    </div>
    <div class="table-s" id="filter_btn">
        <span class="table-s__title">Фильтры(7)</span>
    </div>
</div>

<!--
    FILTER
-->

<div class="filter">
    <form>
        <ul class="ul ul-x100">
            <li class="li li-x25 filter-body" >
                <ul class="ul ul-x100 ul-y100" id="filter-id">
                    <li class="li li-x100 li-y50 filter-name">ID</li>
                    <li class="li li-x100 li-y50 filter-field">
                        <button class="minus24 button-y32px" for="filter-id" type="button"></button>
                        <input class="input" type="text" value="172893712">
                    </li>
                </ul>
            </li>
            <li class="li li-x25 filter-body">
                <ul class="ul ul-x100 ul-y100" id="filter-type-of-bid">
                    <li class="li li-x100 li-y50 filter-name">Тип заявки</li>
                    <li class="li li-x100 li-y50 filter-field">
                        <button class="minus24 button-y32px" for="filter-type-of-bid" type="button"></button>
                        <select id="type-of-bid-select" style="width: 252px;">
                            <option selected="selected">Стандартная</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </li>
                </ul>
            </li>
            <li class="li li-x25 filter-body">
                <ul class="ul ul-x100 ul-y100" id="ss-filter">
                    <li class="li li-x100 li-y50 filter-name">СТО</li>
                    <li class="li li-x100 li-y50 filter-field">
                        <button class="minus24 button-y32px" for="ss-filter" type="button"></button>
                        <input class="input" type="text">
                    </li>
                </ul>
            </li>
            <li class="li li-x25 filter-body">
                <ul class="ul ul-x100 ul-y100" id="invoice-num-filter">
                    <li class="li li-x100 li-y50 filter-name">№ счета</li>
                    <li class="li li-x100 li-y50 filter-field">
                        <button class="minus24 button-y32px" for="invoice-num-filter" type="button"></button>
                        <input class="input" type="text">
                    </li>
                </ul>
            </li>
            <li class="li li-x25 filter-body">
                <ul class="ul ul-x100 ul-y100" id="spec-filter">
                    <li class="li li-x100 li-y50 filter-name">Специалист</li>
                    <li class="li li-x100 li-y50 filter-field">
                        <button class="minus24 button-y32px" for="spec-filter" type="button" onclick="$('#spec-select').selectmenu('refresh')"></button>
                        <select id="spec-select" style="width: 252px">
                            <option>Выбрать</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </li>
                </ul>
            </li>
            <li class="li li-x25 filter-body">
                <ul class="ul ul-x100 ul-y100" id="bid-date-filter">
                    <li class="li li-x100 li-y50 filter-name">Заявка получена с</li>
                    <li class="li li-x100 li-y50 filter-field">
                        <button class="minus24 button-y32px" for="bid-date-filter" type="button"></button>
                        <input class="calendar calendar-x113px" type="text" readonly="readonly">
                        по
                        <input class="calendar calendar-x113px" type="text" readonly="readonly">
                    </li>
                </ul>
            </li>
            <li class="li li-x25 filter-body">
                <ul class="ul ul-x100 ul-y100" id="price-filter">
                    <li class="li li-x100 li-y50 filter-name">Сумма</li>
                    <li class="li li-x100 li-y50 filter-field">
                        <button class="minus24 button-y32px" for="price-filter" type="button"></button>
                        <input class="input" type="text">
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="ul ul-x100 filter-footer">
            <li class="li li-x25">
                <button class="plus31" id="addFilter" type="button">Добавить фильтр</button>
            </li>
            <li class="li li-x50 li-ta-center">
                <input value="Отфильтровать" type="submit" class="blue-btn blue-btn_active">
                <input value="Сбросить все" type="reset" class="blue-btn">
            </li>
            <li class="li li-x25"></li>
        </ul>
    </form>
</div>

<!--
   TABLE
-->
<div id="block_with_table">
    <table id="table1" class="f_table JColResizer" style="width: 3814px;" cellspacing="0" cellpadding="0">
        <thead>
        <tr class="table__header-row">
            <th class="table__header-row__cell" style="width: 70px;">
                <input id="cb" class="checkbox" type="checkbox">
                <label for="cb"></label>
            </th>
            <th class="table__header-row__cell" style="width: 100px;">ID</th>
            <th class="table__header-row__cell" style="width: 150px;">Марка</th>
            <th class="table__header-row__cell" style="width: 150px;">Модель</th>
            <th class="table__header-row__cell" style="width: 150px;">Модификация</th>
            <th class="table__header-row__cell" style="width: 100px;">Год выпуска</th>
            <th class="table__header-row__cell" style="width: 100px;">Цвет кузова</th>
            <th class="table__header-row__cell" style="width: 100px;">VIN</th>
            <th class="table__header-row__cell" style="width: 100px;"> </th>
            <th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th>
            <th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th>
            <th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 150px;" class="table__header-row__cell curcol"><span></span>new column</th><th style="width: 50px;" class="table__header-row__cell curcol"><span></span>new column</th>

        </tr>
        </thead>
        <tbody>




        <tr class="table__content-row">
            <td class="table__content-row__cell" data-title="
            ">
                <input id="cb1" class="checkbox" type="checkbox">
                <label for="cb1"></label>
                <span class="table__content-row__cell__row-menu">
                    <div style="display: none">
                        <a href="http://ya.ru" class="item"><img src="img/pencil-small.png">Редактировать</a>
                        <a href="/" class="item"><img src="img/windows.png">Открыть в новой вкладке</a>
                        <a href="/" class="item"><img src="img/link.png">Скопировать ссылку</a>
                    </div>
                </span>
            </td>
            <td data-title="8604">8604</td>
            <td data-title="Lada4">Lada4</td>
            <td data-title="21094">21094</td>
            <td data-title="Седан4">Седан4</td>
            <td data-title="20104">20104</td>
            <td data-title="Баклажан4">Баклажан4</td>
            <td data-title="VIN93485793487594">VIN93485793487594</td>
            <td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title=""></td>
        </tr><tr class="table__content-row">
            <td class="table__content-row__cell" data-title="
            ">
                <input id="cb2" class="checkbox" type="checkbox">
                <label for="cb2"></label>
                <span class="table__content-row__cell__row-menu"></span>
            </td>
            <td data-title="8605">8605</td>
            <td data-title="Lada5">Lada5</td>
            <td data-title="21095">21095</td>
            <td data-title="Седан5">Седан5</td>
            <td data-title="20105">20105</td>
            <td data-title="Баклажан5">Баклажан5</td>
            <td data-title="VIN93485793487595">VIN93485793487595</td>
            <td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title="new column">new column</td><td data-title=""></td>
        </tr> </table>
</div>

</div>


<!--
    FOOTER
-->
<div style="height:150px; line-height:10px" class="footer">
    <!--
    PAGINATION
-->
    <div id="footer-in" style="height: 100px; padding-top: 20px; position: relative; line-height: 180%;">
        <div class="pagination pagination_float-right">
            <a href="/" class="pagination__title">Выводить</a>
            <a href="/" class="pagination__item">30</a>
            <a href="/" class="pagination__item">50</a>
            <a href="/" class="pagination__item">100</a>
            <a href="/" class="pagination__item pagination__item_active">Все</a>
        </div>
        <div class="pagination pagination_float-left">
            <a href="/" class="pagination__item pagination__item_little">&lt;</a>
            <a href="/" class="pagination__item pagination__item_little">1</a>
            <a href="/" class="pagination__item pagination__item_little">...</a>
            <a href="/" class="pagination__item pagination__item_little">10</a>
            <a href="/" class="pagination__item pagination__item_little pagination__item_active">11</a>
            <a href="/" class="pagination__item pagination__item_little">12</a>
            <a href="/" class="pagination__item pagination__item_little">...</a>
            <a href="/" class="pagination__item pagination__item_little">20</a>
            <a href="/" class="pagination__item pagination__item_little">&gt;</a>
        </div>
    </div>
    <span style="margin-top:0px; line-height:0"> Fleetcare 2014 </span>
 </div>
</body>
</html>