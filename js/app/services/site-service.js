function SiteService() {
    let self = this;
    self.getAllImoveis = function () {
        return axios.get('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', {});
    }
}