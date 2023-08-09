export default function UserData(req, res) {
  res.status(200).json([
    { id: 1, name: 'Adesoye Yusuf' },
    { id: 2, name: 'Adesoye Ibrahim' },
    { id: 3, name: 'Adesoye Taofeek' },
  ]);
}
