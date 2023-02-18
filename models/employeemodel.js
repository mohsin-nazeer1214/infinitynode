const mongoose=require('mongoose');


const employees=mongoose.Schema({


    name:{

        type:String,
        require:true
        
    },
    email:{

        type:String,
        require:true
    },
    phone:{

        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

const Employee=mongoose.model('Employee',employees);
module.exports=Employee;
