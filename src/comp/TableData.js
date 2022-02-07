import React from 'react';
import Table from 'react-bootstrap/Table'

function TableData(props) {

    const editData=()=>{
        props.history.push("/login")
    }

  const deleteData=()=>{
alert("Data will Deleted")

    }
  return <div className='container'>
    <div className='col-lg-10/ text-center'>
    <div className='row'>
    <div className='col-lg-1'></div>
  <Table   className='bg-dark  text-white '>
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
      <td><button className='btn btn-warning text-white'  onClick={editData}>Edit</button></td>
      <td><button className='btn btn-primary' onClick={ deleteData}>Delete</button></td>
    </tr>
    
   {/* {
        map
    }*/}
  </tbody>

</Table>
    <div className='col-lg-1'></div>
  </div>
  </div>

  </div>
}

export default TableData;
