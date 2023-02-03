import { CustomerList } from "./CustomerList.js"
import { EmployeeList } from "./EmployeeList.js"

export const TBMConsulting = () => {
    return `
    <h1>Three Blind Mice Consulting Workforce Management</h1>
    <section>
        <h2>Employees</h2>
        ${EmployeeList()}
    </section>
    <section>
        <h2>Customers</h2>
        ${CustomerList()}
    </section>`
}