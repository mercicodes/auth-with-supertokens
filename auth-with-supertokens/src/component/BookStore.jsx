export default function BookStore() {
  const BookList = [
    {
      SID: 1,
      name: "Python for Beginners",
      author: "Mercy Ben",
      coppies: 10,
      publishedAt: "2022-04-03",
    },
    {
      SID: 2,
      name: "Python for Dummies",
      author: "Nelson Fos",
      coppies: 20,
      publishedAt: "2022-01-03",
    },
    {
      SID: 3,
      name: "Blockchain master course",
      author: "Gilt John",
      coppies: 12,
      publishedAt: "2022-03-03",
    },
  ];

  return (
    <div className="book">
      <ul>
        {BookList.map((book) => (
          <li>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}
