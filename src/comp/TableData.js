import React from 'react';
import Table from 'react-bootstrap/Table'
import EditEmployee from './EditEmployee'

function TableData(props) {

    const editData=()=>{
        props.history.push("/EditEmployee")
    }

  const deleteData=()=>{
alert("Data will Deleted")

    }

  return <div className='col-lg-12 p-5  text-center'>
  <Table  bordered  className='bg-dark p-5 text-white mt-5'>
  <thead>
    <tr>
      <th><b>Name</b></th>
      <th><b>Age</b></th>
      <th><b>Job</b></th>
      <th><b>Salary</b></th>
      <th><b>Edit</b></th>
      <th><b>Delete</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><EditEmployee/></td>
      <td><button className='btn btn-info' onClick={ deleteData}>Delete</button></td>
    </tr>
    
   {/* {
        map
    }*/}
  </tbody>
</Table>

  </div>

}

export default TableData;
