// import main from '../database/connection';
// import kitten from '../database/schema';

export default function UserData(req, res) {
  // main().catch((error) => console.error(error));

  // const create = new kitten();
  // create.save().then(() => {
  //   res.status(200).json(create);
  // });
  res.status(200).json([
    { id: 1, name: 'Adesoye Yusuf' },
    { id: 2, name: 'Adesoye Ibrahim' },
    { id: 3, name: 'Adesoye Taofeek' },
  ]);
}
