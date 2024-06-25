const CrudRepository = require('./crud-repository');
const {Dummyuser}=require('../models/index');

class DummyuserRepository extends CrudRepository{
    constructor(){
        super(Dummyuser);
    }
}

module.exports=DummyuserRepository;