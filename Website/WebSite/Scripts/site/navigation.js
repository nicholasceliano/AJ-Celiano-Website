var navigation = new function () {
    this.init = function () {
        setActivePage();
        loadEvents();
    }

    function setActivePage() {
        var rootPath = window.location.pathname.split('/')[1];
        var navLink = $('header').find('a');

        $.each(navLink, function (i, e) {
            var linkItem = $(e).text().replace(' ', '');

            if (rootPath.toLowerCase() == linkItem.toLowerCase()) {
                $(e).addClass('active');
            } else if (rootPath.length == 0 && linkItem.toLowerCase() == 'home') {
                $(e).addClass('active');
            }
        });
    }

    function loadEvents() {
        $('header').find('a').mouseover(function (e) {
            var href = $(e.target).attr('href');
            
            if (href) {
                var linkPath = href.split('/')[1];
                
                var navHeader = $('header').find('a').not('[href]');

                $.each(navHeader, function (i, e) {
                    var linkItem = $(e).text().replace(' ', '');

                    if (linkPath.toLowerCase() == linkItem.toLowerCase()) {
                        $(e).addClass('active');
                    }
                });
            }
        });

        $('header').find('a').mouseout(function (e) {
            var href = $(e.target).attr('href');

            if (href) {
                var rootPath = window.location.pathname.split('/')[1];
                var linkPath = href.split('/')[1];

                var navHeader = $('header').find('a').not('[href]');

                if (rootPath.toLowerCase() != linkPath.toLowerCase()) {
                    $.each(navHeader, function (i, e) {
                        var linkItem = $(e).text().replace(' ', '');

                        if (linkPath.toLowerCase() == linkItem.toLowerCase()) {
                            $(e).removeClass('active');
                        }
                    });
                }
            }
        });
    }
}