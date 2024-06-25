class CrudRepository{
    
    constructor(model){
        this.model=model
    }

    async createEntry(data){
        try {
            const response=await this.model.create(data);
            return response;
        } catch (error) {
            
        }
     }

     async getData(id) {
        try {
            const response=await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log("Error Has occured", error);
        }
    }

    async updateData(id,data) {
        try {
            const response=await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response;
        } catch (error) {
            console.log("Error Has occured", error);
        }
    }


    async deleteData(id) {
        try {
            await this.model.destroy({
                where : {
                    id : id
                }
            });
            return true;
        } catch (error) {
            console.log("Error Has occured", error);
            throw {error};
        }
    }

}

module.exports=CrudRepository