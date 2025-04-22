import { useState, useEffect, InputHTMLAttributes } from 'react';
import './Input.css';
import { TextField } from "@mui/material";
import { FieldPath, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues = FieldValues> {
    variant?: 'outlined' | 'filled' | 'standard'
    required?: boolean
    disabled?: boolean
    helperText?: string
    type?: string
    label: string
    margin?: 'none' | 'dense' | 'normal'
    fullwidth?: boolean
    name: FieldPath<T>
    register?: UseFormRegister<T>;
}

const Input = <T extends FieldValues = FieldValues>
    (
        {
            variant = 'outlined',
            required,
            disabled = false,
            helperText = '',
            type = 'text',
            label,
            margin = 'normal',
            fullwidth = true,
            name,
            register,
        }:  InputProps<T> & InputHTMLAttributes<HTMLInputElement>
    ) => {

        const [typeInput, setTypeInput] = useState(type);

        useEffect(() => {
            setTypeInput(type);
        }, [type]);

        /*const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event?.target?.value);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            props.onChange && props.onChange(event);
        };*/

        return (
            <div className={`suite-input-container `}>
                <TextField
                    fullWidth={fullwidth}
                    type={typeInput}
                    label={label}
                    required={required}
                    disabled={disabled}
                    error={!!helperText}
                    helperText={helperText}
                    variant={variant}
                    margin={margin}
                    {...(register ? register(name) : {})}
                />
            </div>
        );
    };

export default Input;