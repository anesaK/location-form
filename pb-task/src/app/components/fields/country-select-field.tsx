import countryCodeToFlagEmoji from "country-code-to-flag-emoji"
import { ICountry } from "country-state-city"
import { FieldError, useFormContext } from "react-hook-form"


interface ICountrySelectFieldProps {
    fieldId: string
    name: string
    defaultValue?: string
    errorMessage?: FieldError
    countriesList: ICountry[]
    index: number

}
export default function CountrySelectField(props: ICountrySelectFieldProps) {
    const { register } = useFormContext()

    return (
        <>
            <label
                className="block mb-2 font-medium"
                htmlFor={props.fieldId}
            >
                Country
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
                <option value="">Select country</option>
                {props.countriesList.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                        {countryCodeToFlagEmoji(country.isoCode)} {country.name}
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