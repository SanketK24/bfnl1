const express = require('express');
const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.post('/', (req,res) => {
    const { userId, emailId, rollNumber, numbers, alphabets } = req.body;

    //logic  for highest alphabet
    let highestAlpha = 'A';
    for( let char of alphabets){
        if(char > highestAlpha){
            highestAlpha = char;
        }
    }
    let is_success = true;
    res.json({
        is_success,
        userId,
        rollNumber,
        numbers,
        alphabets,
        highestAlpha
    });
})

app.get(('/', (req,res) => {
    res.json({
        "operation_code" : 1
    })
}))
app.listen('3000', () => {
    console.log('Server listening on port 3000');
});