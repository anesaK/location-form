import { FieldError, useFormContext } from "react-hook-form"

interface IInputFieldProps {
    key: string
    name: string
    title: string
    defaultValue?: string
    errorMessage: FieldError | undefined
    className: string
}

export default function InputField(props: IInputFieldProps) {
    const { register } = useFormContext()

    return (
        <>
            <label className="block mb-2 font-medium" htmlFor={props.key}>
                {props.title}
            </label>
            <input
                id={props.key}
                {...register(props.name)}
                defaultValue={props.defaultValue}
                className={`${props.className} ${props.errorMessage
                        ? "border-red-600 focus:ring-red-400"
                        : "border-gray-300 focus:ring-blue-400"
                    }`}
            />
            {props.errorMessage && (
                <p className="text-red-600 mt-1 text-sm">
                    {props.errorMessage.message}
                </p>
            )}
        </>
    )
}