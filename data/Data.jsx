export function AllData(postid) {
  const postsData = [
    {
      id: 'First',
      title: 'First Post',
      description: 'This is the post to display',
    },
    {
      id: 'Second',
      title: 'Second Post',
      description: 'This is the post to display',
    },
    {
      id: 'Third',
      title: 'Third Post',
      description: 'This is the post to display',
    },
  ];

  if (postid) {
    return postsData.filter((post) => post.id == postid);
  }
  return postsData;
}
