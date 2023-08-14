import mongoose from 'mongoose';

const main = async () => {
  await mongoose.connect(
    'mongodb+srv://Abu-Sameer:Adesoyee@sampro.6uifge0.mongodb.net/?retryWrites=true&w=majority'
  );
  console.log('Database Connected');
};

export default main;
