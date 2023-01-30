import './App.css';
import { Table } from 'reactstrap';
import Parent from './Components/Class/Parent';

function App() {
  return (
    <div className='container'>
      <Parent />
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>lorem</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
