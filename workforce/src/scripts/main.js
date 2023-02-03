import { fetchComputers, fetchCustomers, fetchDepartments, fetchEmployeeCustomers, fetchEmployees, fetchLocations } from "./dataAccess.js"
import { TBMConsulting } from "./TBMConsulting.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchEmployees()
        .then(() => fetchComputers())
        .then(() => fetchDepartments())
        .then(() => fetchLocations())
        .then(() => fetchCustomers())
        .then(() => fetchEmployeeCustomers())
        .then(() => {
            mainContainer.innerHTML = TBMConsulting()
        })
}

render()