//signup
router.post('/signup', (req,res) => {
    const sign = new signup({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    })
    sign.save().then(sign => {
        console.log("signup successfully")
        alert('SUCCESSFUL!');
        try{
            res.status(200).send({
                message: 'sign up succesfully',
                data: sign
            })
        }catch(err){
            res.status(502).send({
                message: 'Error!',
                error: err 
            })
        }
    })
})

//login
router.post('/login',(req,res) => {
    signup.findOne({
       email: req.body.email,
       password: req.body.password,
    }).then(admin => {
        if(admin) {
            res.send({
                message: 'Successfully logged in',
                data: admin,
                messageCode: "1000"
            })
        }else{
            console.log("not found")
        res.send({
            message: 'Invalid credetials',
            data: admin,
            messageCode: "1001"
        })

       }

    })
})