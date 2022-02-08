import React, { useContext, useState } from 'react';
import { Button, Modal, ModalBody, Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import ContextData from '../context/context';

function TableData(props) {
  const contextValue = useContext(ContextData)
  console.log(contextValue.storeData);
  console.log(contextValue);
  
    const editData=(daata, index)=>{
      console.log(contextValue.showEditModal);
    contextValue.setEditModal(true)
   // setShow(true)
    
    console.log('its commign');
    // const array=[...contextValue.storeData]
    contextValue.setSelectedEmployee(data);
    // array.splice()
    contextValue.setIndex(index)
        props.history.push("/EditEmployee")
    }

  const deleteData=()=>{
    const array = [...contextValue.storeData]
    array.splice(index, 1)
    contextValue.setStoreData(array)
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
  {contextValue.storeData && contextValue.storeData.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.fullName}</td>
        <td>{data.designation}</td>
        <td>{data.salary}</td>
        <td>{data.age}</td>
        <td><button onClick={() => { editData(data, index) }}>Edit</button></td>
        <td><button onClick={(index) => { deleteData(index) }}>Delete</button></td>
      </tr>
    )
  })}
  </tbody>
</Table>

  </div>

}

export default TableData;

