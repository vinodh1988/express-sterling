var connection=require('./connection');


var crud={
    selectAll: function(callback){
        connection.query("select * from student",callback);
    },

    selectPattern: function(pattern,callback){
        connection.query("select * from student where name REGEXP ?",[pattern],callback);
    }
}

module.exports=crud;