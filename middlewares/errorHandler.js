const errorHandler = (err,req,res,next) => {
    console.log(err);

    if(err.name === 'Not Found') {
        res.status(404).json({message : 'Error Not Found'});
    } else if(err.name === 'InvalidInput') {
        res.status(400).json({message : 'Invalid Input'});
    } else if(err.name === 'AlreadyExist') {
        res.status(400).json({message : 'Input is Already Exist'});
    }

    else {
        res.status(500).json({message : 'Internal Server Error'});
    }
}

module.exports = errorHandler;