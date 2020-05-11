function ImoveisView($) {
    const self = this;
    let pageSize = 5;
    let page = getParameters("page");
    const host = window.location.host;

    self.listImoveis = function (list) {
        if (list == null || list == undefined) return;
        let $div = $("#div-imoveis");

        const paginateArray = list.slice(page * pageSize, page * pageSize + pageSize);
        paginateArray.forEach(element => {
            console.log(element);
            let $card = "<div class=\"cardEstadia\">"
                + "<div class=\"col-md-5 carrouselEstadia\">"
                + "<img class=\"imgEstadia\" src=" + element.photo + "></div>"
                + "<div class=\"col-md-7 detalhesEstadia\">"
                + "<div class=\"descricao\">"
                + "<h6>" + element.property_type + "</h6>"
                + "<h5>" + element.name + "</h5>"
                + "<p></p>"
                + "</div>"
                + "<div class=\"preco\">"
                + "<strong>R$ " + element.price + "</strong> /mês</div>"
                + "</div>"
                + "</div>";
            $div.append($card);
        });
        paginations(list);
    }
    function paginations(listImoveis) {
        let $pagination = $("#ul-pagination");
        let totalPage = listImoveis.length / pageSize;
        for (let index = 0; index < totalPage; index++) {
            let $li = "<li class=\"page-item\">"
                + "<a class=\"page-link\" href=http://" + window.location.host + "/imoveis.html?page=" + index + ">" + index + "</a>"
                + "</li>";
            $pagination.append($li);
        }
    }
    function getParameters(parameter) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const value = urlParams.get(parameter);
        return value;
    }
}