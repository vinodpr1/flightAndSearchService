class CrudService{
    constructor(repository){
        this.repository =repository;
    }

    async createEntry(data){
        try {
            const response=await this.repository.createEntry(data);
            return response;
        } catch (error) {
            console.log("Some error has occured from service layer");
            throw {error};
        }
    }
}

module.exports=CrudService;