import * as yup from 'yup';
import {EMPTY_FIELD, INVALID_EMAIL_FORMAT} from "../../../../shared/application/constants/errorMessages.tsx";
import {LoginFormValues} from "../types/login.tsx";

export const loginValidation: yup.ObjectSchema<LoginFormValues> = yup.object().shape({
    email: yup.string().email(INVALID_EMAIL_FORMAT).required(EMPTY_FIELD),
    password: yup.string().required(EMPTY_FIELD)
})

export const loginSchema = loginValidation;