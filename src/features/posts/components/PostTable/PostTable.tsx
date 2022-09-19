import { Link } from "react-router-dom";
import { Table, Button } from "components";

export const PostTable = () => {
  return (
    <>
      <Table cellSpacing="0">
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
      </Table>
    </>
  );
};
