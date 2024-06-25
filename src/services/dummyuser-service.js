const DummyuserRepository=require('../repository/dummyuser-repository');
const CrudService=require('../services/crud-service');

class DummyuserService extends CrudService{
    constructor(){
        const repo=new DummyuserRepository();
        super(repo);
    }
}

module.exports=DummyuserService