import React from 'react';
import { Table } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
       <Table striped>
        <thead>
          <tr>
            <th>ID #</th>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ivelisse Cintron</td>
            <td>Web Development</td>
            <td>Checked Out</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ryan Sotto</td>
            <td>Project Management</td>
            <td>Checked In</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Alex Calle</td>
            <td>Web Development</td>
            <td>Checked Out</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Jenny Won</td>
            <td>Web Development</td>
            <td>Checked In</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Nikolai Gorguts</td>
            <td>Software Development</td>
            <td>Checked Out</td>
          </tr>
        </tbody>
      </Table>
      );
  }
}