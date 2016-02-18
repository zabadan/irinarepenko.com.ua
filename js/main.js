;(function() {

    function activMenu(){
        var ancherName = '';
        $('a.anchor[name]').each(function(){
            var scroll = $(window).scrollTop()
            var pos = $(this).position().top;
            var SHIFT = 130;
            //console.log('pos = ' + pos + '   scroll = ' + scroll);

            if (pos <= scroll + SHIFT){
                ancherName = $(this).attr('name');
            }
        })
        $('a[href="#' + ancherName + '"]').each(function(){
            var selector = 'nav ul.menuDots>li';
            $(selector).removeClass('active');
            $(this).parents(selector).addClass('active');
        });
    }
    window.activMenu = activMenu;

    /*----------------------------------------------------*/

    function form(elem) {
        this.required = function(el) {
            if (!el.value && el.hasAttribute('data-validate')) {
                this.showError('Это поле обязательно нужно заполнить', el);
            }
        };

        this.showError = function (messege, el) {
            this.hideError();
            el.insertAdjacentHTML('afterend', '<div class="error-message">'+ messege + '</div>');
        }

        this.hideError = function () {
            document.querySelector('.error-message').innerHTML = '';
        }

        this.hideAllError = function () {
           // debugger;
            var divError = document.querySelectorAll('.error-message');
            for(var i = 0; i < divError.length; i++) {
                divError[i].style.display = "none";
            }
        }

        var self = this;

        elem.onchange = function(e) {
            var target = e.target;
            var action = target.getAttribute('data-validate');
            if (action) {
                self[action](target);
            }
        };

        elem.onsubmit = function(e) {
            e.preventDefault();
            self.hideAllError();
            var formsElements = elem.elements;
            for(var i = 0; i < formsElements.length; i++) {
                self['required'](formsElements[i]);
            }
        };
    }


    window.form = form;

/*---------------------------------------------*/
    
    function rndTopImg() {
        var iRepenkoFoto = new Array('iRepenko_b1.jpg','iRepenko_b2.jpg','iRepenko_b3.jpg','iRepenko_b4.jpg');
        var count = iRepenkoFoto.length;
        var random = Math.floor(Math.random()*count);
        var placeholderFoto = document.querySelector('.topFoto');
        placeholderFoto.style.backgroundImage = 'url(img/' + iRepenkoFoto[random]+ ')';
        //placeholderFoto.innerHTML += '<img src="img/'+iRepenkoFoto[random]+'" alt="Ирина Репенко. Психолог-консультант" />';
    }

    window.rndTopImg = rndTopImg;

})();

