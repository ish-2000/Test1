//Modules like class in oop

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({ //like new object in oop
    name : {
        type : String,
        required : true //name ekt value ekk awe nttm database eke update wen na
    },
    age : {
        type : Number,
        required : true 
    },
    gender : {
        type : String,
        required : true
    }
})

const Student = mongoose.model("Student",studentSchema); //1st parameter as table name

module.exports = Student;