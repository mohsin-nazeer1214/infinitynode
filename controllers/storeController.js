// UserController.js

// const User = require('../models/InfoForm');
const User = require('../models/User');


exports.store = async (req, res) => {
 
try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password
    });

    await user.save();

    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
    
  exports.store_info_form =async(req,res)=>{

    try {
        const { name, email, password } = req.body;
    
        const user = new User({
          name,
          email,
          password
        });
    
        await user.save();
    
        res.status(201).json(user);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
  }
   
};
