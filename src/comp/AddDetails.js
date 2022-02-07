import React, { useState } from 'react';
// import TableData from './TableData';

function AddDetails(props) {
    const [employeeData, setEmployeeData] = useState([]);
    const [employeeDetails, setEmployeeDetails] = useState({
        fullName: '',
        designation: '',
        salary: '',
        age: ''
    });

    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [ageErrorMessage, setAgeErrorMessage] = useState('');
    const [salaryErrorMessage, setSalaryErrorMessage] = useState('');

    const [nameError, setnameError] = useState(false);
    const [designationError, setdesignationError] = useState(false);
    const [salaryError, setSalaryError] = useState(false);
    const [ageError, setAgeError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        const isNameValid = validateName(employeeDetails.fullName)
        const isDesignationValid = validateDesignation(employeeDetails.designation)
        const isSalaryValid = validateSalary(employeeDetails.salary)
        const isAgeValid = validateAge(employeeDetails.age)

        if (isNameValid && isDesignationValid && isSalaryValid && isAgeValid) {
            setEmployeeData([
                ...employeeData,
                employeeDetails
            ])
            console.log(employeeData);
            setEmployeeDetails({
                fullName: '',
                designation: '',
                salary: '',
                age: ''
            })
            alert('Details Added Successfully')
        } else {
            console.error('invalid data');
        }
    }
    //===========================================================================
    const validateName = (name) => {
        const nameFormat = /[a-zA-Z]+/
        if (name === '') {
            setnameError(true)
            setNameErrorMessage('Please enter username')
            return false
        } else if (nameFormat.test(name)) {
            setnameError(false)
            setNameErrorMessage(' ')
            return true
        } else {
            setnameError(true)
            setNameErrorMessage('Please enter valid username')
            return false
        }
    }

    const validateDesignation = (designation) => {
        if (designation) {
            setdesignationError(false)
            return true
        } else {
            setdesignationError(true)
            return false
        }
    }

    const validateSalary = (salary) => {
        if (salary === '') {
            setSalaryError(true)
            setSalaryErrorMessage('please enter salary')
            return false
        }
        if (salary > 0) {
            setSalaryError(false)
            setSalaryErrorMessage(' ')
            return true
        } else {
            setSalaryError(true)
            setSalaryErrorMessage('salary not valid')
            return false
        }
    }

    const validateAge = (age) => {
        if (age === '') {
            setAgeError(true)
            setAgeErrorMessage('Please Enter Age')
            return false
        } else if (age > 18) {
            setAgeError(false)
            setAgeErrorMessage('')
            return true
        } else {
            setAgeError(true)
            setAgeErrorMessage('Age not valid')
            return false
        }
    }
    //=================================================================================
    const handleData = (event) => {
        setEmployeeDetails({
            ...employeeDetails,
            [event.target.name]: event.target.value

        })

    }

    return <div>
        <div className='container'></div>
        <div className='row'>
            <div className='col-lg-4 m-auto'>
                <form class="row g-2 form" onSubmit={(event) => { handleSubmit(event) }}>
                    <div class="form-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Employee Details</h5>
                    </div>
                    <div class="form-div">
                        <label class="form-label"><b>Full Name</b></label>
                        <input type="text" class="form-control" placeholder='Enter full name' onChange={(e) => { handleData(e) }} value={employeeDetails.fullName} name='fullName' />
                        {nameError ? <div class="error-message text-danger">{nameErrorMessage}</div> : null}
                    </div>

                    <div class="">
                        <label class="form-label"><b>Designation</b></label>
                        <input type="text" class="form-control" placeholder='Enter designation' onChange={(e) => { handleData(e) }} value={employeeDetails.designation} name='designation' />
                        {designationError ? <span class="error-message text-danger">Please choose a designation.</span> : null}

                    </div>

                    <div class="">
                        <label class="form-label"><b>Salary</b></label>
                        <input type="number" class="form-control" placeholder='salary per year' onChange={(e) => { handleData(e) }} value={employeeDetails.salary} name='salary' />
                        {salaryError ? <span class="error-message text-danger">{salaryErrorMessage}</span> : null}
                    </div>

                    <div class="">
                        <label class="form-label"><b>Age</b></label>
                        <input type="number" class="form-control" placeholder='Enter age' onChange={(e) => { handleData(e) }} value={employeeDetails.age} name='age' />
                        {ageError ? <span class="error-message text-danger">{ageErrorMessage}</span> : null}
                    </div>

                    <div class="button">
                        <button class="btn btn-primary" type="submit" >Submit</button>
                    </div>
                </form>
            </div>
            <div className='col-lg-4'></div>

        </div>
    </div>;
}

export default AddDetails;
