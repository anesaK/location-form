import { IState } from "country-state-city"
import { FieldError, useFormContext } from "react-hook-form"

interface IStateSelectFieldProps {
    fieldId: string
    name: string
    defaultValue?: string
    errorMessage?: FieldError
    statesList: IState[][]
    index: number

}

export default function StateSelectField(props: IStateSelectFieldProps) {
    const { register } = useFormContext()

    return (
        <>
            <label
                className="block mb-2 font-medium"
                htmlFor={props.fieldId}
            >
                State
            </label>
            <select
                key={props.fieldId}
                id={props.fieldId}
                {...register(props.name)}
                defaultValue={props.defaultValue}
                className={`w-full border rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 ${props.errorMessage
                    ? "border-red-600 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                    }`}
            >
                <option value="">Select state</option>
                {props.statesList[props.index]?.map((state) => (
                    <option key={state.name} value={state.name}>
                        {state.name}
                    </option>
                ))}
            </select>
            {props.errorMessage && (
                <p className="text-red-600 mt-1 text-sm">
                    {props.errorMessage?.message}
                </p>
            )}
        </>
    )
}