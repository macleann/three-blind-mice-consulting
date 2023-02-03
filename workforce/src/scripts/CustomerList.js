import { getEmployees, getCustomers, getEmployeeCustomers } from "./dataAccess.js"

export const CustomerList = () => {
    const employees = getEmployees()
    const customers = getCustomers()
    const employeeCustomers = getEmployeeCustomers()

    return `
    ${customers
    .map(customer => {
        const relationships = employeeCustomers.filter(employeeCustomer => employeeCustomer.customerId === customer.id)
        const assignedEmployees = relationships.map(rel => {
            return employees.find(employee => rel.employeeId === employee.id)
        })

        return `
        <div class="employee">
            <header class="customer__name">
                <h3>${customer.name}</h3>
            </header>
            <section class="employee__customers">
                Has worked with the following employees:
                <ul>
                    ${assignedEmployees.map(employee => {
                        return `<li>${employee.firstName} ${employee.lastName}</li>`
                    }).join("")}
                </ul>
            </section>
        </div>`
    })
    .join("")}`
}