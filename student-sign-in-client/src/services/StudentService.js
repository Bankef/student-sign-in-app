    //Axios is installed in the package.JSON file in this directory and import into this file
    import axios from 'axios'

    // All requests go into this url for update, delete....
    let base_url='/api/students'

    export default {

    // This is a request to get the student data
        getAllStudents() {
            return axios.get(base_url).then(response => {
                return response.data
            })
        },

        // Has the same effect as the curl command and axios sends it back as a response data
        addStudent(student) {
            return axios.post(base_url, student).then(response => {
                return response.data
            })
        },
        updateStudent(student) {
             // matches the patch in route/api to create url in the form of /api/students/1
            return axios.patch(`${base_url}/${student.id}`, student).then(response => {
                return response.data
            })
        },
        deleteStudent(id) {
            return axios.delete(`${base_url}/${id}`).then(response => {
                return response.data
            })
        }
    }