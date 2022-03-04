import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const  router= express.Router();

let users = [
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
    res.send(users);
})

router.post('/', (req, res)=>{
    const user = req.body;

    users.push({...user, id:uuidv4()});
    res.send(`User ${user.name} succesfully added!`);
});

// /users/2  req.params=>{id:2}
router.get('/:id', (req,res)=>{
    const {id} = req.params;
    const foundUser= users.find((user)=> user.id===id);
    res.send(foundUser);
})

router.delete('/:id', (req,res)=>{
    const {idd} = req.params;
    users = users.filter((user)=> user.id !== idd);
    res.send(`User with id ${user.id} succesfully deleted!`);
})

router.patch('/:id', (req,res)=>{
    const {id} = req.params;
    const {name, lastname, age}= req.body;
    const user = user.find((user)=> user.id=== id);

    if(name){
        user.name=name;
    }
    if(lastname){
        user.lastname=lastname;
    }
    if(age){
        user.age=age;
    }
    console.log(req.params);
    res.send(`User with id ${user.id} succesfully updated!`);
})

export default router;