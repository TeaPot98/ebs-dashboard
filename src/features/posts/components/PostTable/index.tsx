const PostTable = () => {
  return (
    <table cellSpacing="0" className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Date added</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(Array(10).keys()).map((post) => (
          <tr key={post}>
            <td>{post}</td>
            <td>Example Title</td>
            <td>April 15th</td>
            <td>John Doe</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
