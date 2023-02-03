import { getEmployees, getComputers, getDepartments, getLocations, getCustomers, getEmployeeCustomers } from "./dataAccess.js"

export const EmployeeList = () => {
    const employees = getEmployees()
    const computers = getComputers()
    const departments = getDepartments()
    const locations = getLocations()
    const customers = getCustomers()
    const employeeCustomers = getEmployeeCustomers()

    return `
    ${employees
    .map(employee => {
        const employeeComputer = computers.find(computer => computer.id === employee.computerId)
        const employeeDepartment = departments.find(department => department.id === employee.departmentId)
        const employeeLocation = locations.find(location => location.id === employee.locationId)
        const relationships = employeeCustomers.filter(employeeCustomer => employeeCustomer.employeeId === employee.id)
        const assignedCustomers = relationships.map(rel => {
            return customers.find(customer => rel.customerId === customer.id)
        })

        return `
        <div class="employee">
            <header class="employee__name">
                <h3>${employee.firstName} ${employee.lastName}</h3>
            </header>
            <section class="employee__computer">
                Currently using a ${employeeComputer.year} ${employeeComputer.model}
            </section>
            <section class="employee__department">
                Works in the ${employeeDepartment.name} department
            </section>
            <section class="employee__location">
                Works at the ${employeeLocation.city} office
            </section>
            <section class="employee__customers">
                Has worked for the following customers:
                <ul>
                    ${assignedCustomers.map(customer => {
                        return `<li>${customer.name}</li>`
                    }).join("")}
                </ul>
            </section>
        </div>`
    })
    .join("")}`
}