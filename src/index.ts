import { User } from './models/User';

const user = new User({ id: 1, name: 'Pasta', age: 9 });

user.on('save', () => {
  console.log(user);
});

user.save();
