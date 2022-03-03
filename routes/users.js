import express from 'express';

const  router= express.Router();

const users = [
    {
        name: "john",
        lastName: "Doe",
        age: 25
    },
    {
        name: "jellen",
        lastName: "sock",
        age: 27
    }
]

// all routes in here are starting with users
router.get('/', (req, res)=>{
    console.log(users)
    res.send('users');
})

router.post('/', (req, res)=>{

});

export default router;