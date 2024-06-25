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

}

module.exports=CrudRepository