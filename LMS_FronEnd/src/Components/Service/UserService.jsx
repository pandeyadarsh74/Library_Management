import axios from 'axios';

const API_URL = "http://localhost:8080/api";


class UserService{
deleteUser(id){
return axios.delete(API_URL + "/users/" + id)
}

editUser(id,user){
    return axios.put(API_URL + "/" + id,user)
}

}

export default  new UserService;