import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';


function Edit(props) {
    const [show, setShow] = useState(false);
    const [employeeData, setEmployeeData] = useState([]);
    const [employeeDetails, setEmployeeDetails] = useState({
        fullName:'',
        designation:'',
        salary:'',
        age:''
    });
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [designationErrorMessage,setdesignationErrorMessage] = useState('');
    const [ageErrorMessage, setAgeErrorMessage] = useState('');
    const [salaryErrorMessage, setSalaryErrorMessage] = useState('');

    const [nameError, setnameError] = useState(false);
    const [designationError, setdesignationError] = useState(false);
    const [salaryError, setSalaryError] = useState(false);
    const [ageError, setAgeError] = useState(false);

    const handleSubmit=(event)=>{
        event.preventDefault()
        const isNameValid=validateName(employeeDetails.fullName)
        const isDesignationValid=validateDesignation(employeeDetails.designation)
        const isSalaryValid=validateSalary(employeeDetails.salary)
        const isAgeValid=validateAge(employeeDetails.age)

        if (isNameValid && isDesignationValid && isSalaryValid && isAgeValid){
            setEmployeeData([
                ...employeeData,
                employeeDetails
            ])
            console.log(employeeData);
            setEmployeeDetails({
                fullName:'',
                designation:'',
                salary:'',
                age:''
            })
            alert('Details Added Successfully')
        }else {
            console.error('invalid data');
        }
    }
// ===========================================================================
const validateName=(name)=>{
    const nameFormat= /[a-zA-Z]+/
    if (name===''){
        setnameError(true)
        setNameErrorMessage('Please enter username')
        return false
    }else if (nameFormat.test(name)){
        setnameError(false)
        setNameErrorMessage(' ')
        return true
    } else{
        setnameError(true)
        setNameErrorMessage('Please enter valid username')
        return false
    }
}

const validateDesignation=(designation)=>{
    const nameFormat= /[a-zA-Z]+/
    if (designation===''){
        setdesignationError(true)
        setdesignationErrorMessage('Plaese enter designation')
        return false
    }else if(nameFormat.test(designation)){
        setdesignationError(false)
        setdesignationErrorMessage('')
        return true
    }else{
        setdesignationError(true)
        setdesignationErrorMessage('Please enter valid designation')
    }
}

const validateSalary=(salary)=>{
    if (salary===''){
        setSalaryError(true)
        setSalaryErrorMessage('please enter salary')
        return false
    }
    if (salary>0){
        setSalaryError(false)
        setSalaryErrorMessage(' ')
        return true
    }else{
        setSalaryError(true)
        setSalaryErrorMessage('salary not valid')
        return false
    }
}

const validateAge=(age)=>{
    if (age===''){
        setAgeError(true)
        setAgeErrorMessage('Please Enter Age')
        return false
    }else if (age>18){
        setAgeError(false)
        setAgeErrorMessage('')
        return true
    }else{
        setAgeError(true)
        setAgeErrorMessage('Age not valid')
        return false
    }
}
// ====================================================

const handleData=(event)=>{
    setEmployeeDetails({
        ...employeeDetails,
        [event.target.name]:event.target.value
    })
    console.log(event.target.name);
}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useEffect(() => {
    //     setShow(props.showEditForm)
    // }, [props.showEditForm])
    
    // useEffect(() => {
    //     setEmployeeDetails(props.selectedDetails)
    // }, [props.selectedDetails])

    // const editForm = async () => {
    //     let url = ''
    //     const editUrl = ``
    //     try {
    //         if (props.modalType === 'edit') {
    //             url = editUrl
    //             const response = await.put(url,Formdetails)
    //             console.log(response.data);
    //             if (response.data.error === false) {
    //                 handleClose()
    //                 props.fetchFormdetails()
    //             } else {
    //                 alert(response.data.message)
    //             }
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
  return <div> 
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='header'>
         
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body><div>
          <form class="row g-2 form" onSubmit={(event)=>{handleSubmit(event)}}>

            <div class="form-div">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" placeholder='Enter full name' onChange={(e)=>{handleData(e)}} value={employeeDetails.fullName}   name='fullName' style={{height:'50px'}}/>
                {nameError ? <div class="error-message" style={{color:'red'}}>{nameErrorMessage}</div> : null}
            </div>

            <div class="">
                <label class="form-label">Designation</label>
                <input type="text" class="form-control" placeholder='Enter designation' onChange={(e)=>{handleData(e)}} value={employeeDetails.designation}  name='designation' style={{height:'50px'}}/>
                {designationError ? <span class="error-message" style={{color:'red'}}>{designationErrorMessage}</span> : null }
                
            </div>

            <div class="">
                <label class="form-label">Salary</label>
                <input type="number" class="form-control" placeholder='salary per year' onChange={(e)=>{handleData(e)}} value={employeeDetails.salary}  name='salary' style={{height:'50px'}}/>
                {salaryError ? <span class="error-message" style={{color:'red'}}>{salaryErrorMessage}</span> : null }
            </div>

            <div class="">
                <label class="form-label">Age</label>
                <input type="number" class="form-control" placeholder='Enter age' onChange={(e)=>{handleData(e)}} value={employeeDetails.age} name='age' style={{height:'50px'}}/>
                {ageError ? <span class="error-message" style={{color:'red'}}>{ageErrorMessage}</span> : null }
            </div>

            <div class="button">
                <button class="btn btn-primary" type="submit" style={{marginLeft:'350px'}}>Submit</button>
            </div>
        </form>
           </div>
        
        </Modal.Body>
        </Modal>
      </>

</div>;
}

export default Edit;