const applicationState = {}
const API = "http://localhost:8088"

export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
        .then(res => res.json())
        .then(data => {
            applicationState.employees = data
        })
}

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
        .then(res => res.json())
        .then(data => {
            applicationState.computers = data
        })
}

export const fetchDepartments = () => {
    return fetch(`${API}/departments`)
        .then(res => res.json())
        .then(data => {
            applicationState.departments = data
        })
}

export const fetchLocations = () => {
    return fetch(`${API}/locations`)
        .then(res => res.json())
        .then(data => {
            applicationState.locations = data
        })
}

export const fetchCustomers = () => {
    return fetch(`${API}/customers`)
        .then(res => res.json())
        .then(data => {
            applicationState.customers = data
        })
}

export const fetchEmployeeCustomers = () => {
    return fetch(`${API}/employeeCustomers`)
        .then(res => res.json())
        .then(data => {
            applicationState.employeeCustomers = data
        })
}

export const getEmployees = () => applicationState.employees.map(employee => ({...employee}))
export const getComputers = () => applicationState.computers.map(computer => ({...computer}))
export const getDepartments = () => applicationState.departments.map(department => ({...department}))
export const getLocations = () => applicationState.locations.map(location => ({...location}))
export const getCustomers = () => applicationState.customers.map(customer => ({...customer}))
export const getEmployeeCustomers = () => applicationState.employeeCustomers.map(employeeCustomer => ({...employeeCustomer}))