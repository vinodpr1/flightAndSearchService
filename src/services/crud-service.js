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

    async getData(id){
        try {
            const response=await this.repository.getData(id);
            return response;
        } catch (error) {
            console.log("Some error has occured from service layer");
            throw {error};
        }
    }

    async updateData(id,data){
        try {
            const response=await this.repository.updateData(id,data);
            return response;
        } catch (error) {
            console.log("Some error has occured from service layer");
            throw {error};
        }
    }

    async deleteData(id){
        try {
            const response = await this.repository.deleteData(id);
            return response;
        } catch (error) {
            console.log("Some error has occured from service layer");
            throw {error};
        }
    }


}

module.exports=CrudService;