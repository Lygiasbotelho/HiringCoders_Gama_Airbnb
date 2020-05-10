function SiteController($) {
    const self = this;
    const view = new ImoveisView($);
    const service = new SiteService();
    let listImoveis = [];

    self.Init = function () {
        getAllImoveis();
    }

    function getAllImoveis() {
        service.getAllImoveis().then(response => {
            listImoveis = response.data;

            view.listImoveis(listImoveis);
        })
            .catch(error => {
                console.log(error)
            })
    }

}