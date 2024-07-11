const router = require("express").Router();
let Student = require("../models/student"); //to use student module in here


    //                                     (1)Create a new Student function

http://localhost:8070/student/add //function URL

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

        //create new Student object
    const newStudent = new Student({
        name,
        age,
        gender
    })


    //save object and if it is succesd pring successd message
    newStudent.save().then(()=>{  
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);

    })

})




     //                                 (2)Read student function

     
router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })

})





 //                                      (3)Update student function

http://Localhost:8070/student/update/

router.route("/update/:id").put(async (req,res)=> { //uda URL eken tmi ID ek galawl gnne
    let userId = req.params.id;
    const {name,age,gender} = req.body;

    const updateStuydent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(()=>{
        res.status(200).send({status: "User update"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})





 //                                      (4)Delete student function

 http://Localhost:8070/student/delete/
 router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "User Deleted" });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting User", error: err.message });
        });
});



module.exports = router; //Export studentadd module***



