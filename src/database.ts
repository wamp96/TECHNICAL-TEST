import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/technical-test', { 
    //useCreateIndex: boolean,
    //useNewUrlParser: true, 
    //useFindAndModgify: false 
})
    .then((db: any) => 
        console.log('DB is connected')
    )
    .catch((err: any) => 
        console.error(err)
    );    