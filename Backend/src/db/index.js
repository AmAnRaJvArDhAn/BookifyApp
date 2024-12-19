import mongoose from 'mongoose';
import {DB_NAME} from '../constants';

const connectDb=async() => {
    try {
        await mongoose.connect(


        );
        console.log(  );
    } catch (error) {
        console.error( );
       
    }
}

