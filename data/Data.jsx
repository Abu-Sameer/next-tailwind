export function AllData(postid) {
  const postsData = [
    { id: 1, title: 'First Post', description: 'This is the post to display' },
    { id: 2, title: 'Second Post', description: 'This is the post to display' },
    { id: 3, title: 'Third Post', description: 'This is the post to display' },
  ];

  if (postid) {
    return postsData.filter((post) => post.id == postid);
  }
  return postsData;
}
