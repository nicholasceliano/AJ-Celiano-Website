var careers = new function () {
    this.init = function () {
        loadEvents();
    }
    
    function loadEvents() {
        $('.career, .career i').click(function (e) {
            var icon = $(e.target).prop('nodeName') == 'I' ? $(e.target) : $(e.target).find('i');
            var content = $(e.target).prop('nodeName') == 'I' ? $(e.target).parent() : $(e.target);
            var collapsed = $(icon).hasClass('fa-angle-down');

            if (collapsed) {
                $(icon).removeClass('fa-angle-down').addClass('fa-angle-right');
                $(content).next('div').hide();
            } else {
                $(icon).removeClass('fa-angle-right').addClass('fa-angle-down');
                $(content).next('div').show();
            }

            e.stopPropagation();
        });
    }
}