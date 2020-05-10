function ImoveisView($) {
    const self = this;
    let pageSize = 5;
    let page = getParameters("page");
    const host = window.location.host;
    console.log(host);

    self.listImoveis = function (list) {
        if (list == null || list == undefined) return;
        let $div = $("#div-imoveis");

        const paginateArray = list.slice(page * pageSize, page * pageSize + pageSize);
        paginateArray.forEach(element => {
            let $card = "<div class=\"card\">"
                + "<div class=\"card-body\">"
                + "<span>" + element.name + "</span>"
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
                + "<a href=http://" + window.location.host + "/imoveis.html?page=" + index + ">" + index + "</a>"
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