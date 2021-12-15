import {LoginDto} from "models/dto/loginDto";
import {Login, Registration} from "../methods/user";

module.exports = {
    login: (data: LoginDto) => Login(data),
    registration: (data: LoginDto) => Registration(data)
}