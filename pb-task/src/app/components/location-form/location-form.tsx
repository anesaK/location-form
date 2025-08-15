"use client";
import React, { useEffect, useState } from "react";
import {useForm, useFieldArray, Controller,FormProvider} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocationsData } from "./location-types";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Switch from "@mui/material/Switch";
import InfoOutlineIcon from "@mui/icons-material/InfoOutlined";
import InputField from "../fields/input-field";
import { locationValidationSchema } from "./location-validation-schema";
import {Country, State,ICountry,IState} from "country-state-city";
import StateSelectField from "../fields/state-select-field";
import CountrySelectField from "../fields/country-select-field";
import { locationInitialValues } from "./location-utils";

export default function LocationForm() {
  const form = useForm<LocationsData>({
    resolver: zodResolver(locationValidationSchema),
    defaultValues: {
      locations: [
        locationInitialValues
      ]
    }
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch
  } = form;

  const { fields, append, insert } = useFieldArray({
    control,
    name: "locations"
  });

  const [countries, setCountries] = useState<ICountry[]>([]);
  const [statesList, setStatesList] = useState<IState[][]>([]);

  const onSubmit = (data: LocationsData) => {
    console.log("Podaci o lokacijama:", data);
  };

 /*
  const onSubmit = async (data: LocationsData) => {
    try{
      const response = await fetch ("https://example.com/api/locations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok){
        throw new Error (`Greska prilikom slanja: ${response.status}`);
      }

      const result = await response.json();
      console.log("Result:", result);

    } catch (error){
      console.error("Error:", error);
    }
  };

  */


  const handleCopy = (index: number) => {
    const values = getValues(`locations.${index}`);
    insert(index + 1, { ...values });
  
  };

  const addEmptyFormValues = () => {
    append(locationInitialValues);
  };

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  const countriesWatched = watch("locations")?.map(loc => loc.country) || [];

  useEffect(() => {
    if (!countriesWatched.length) return;

    setStatesList(prev => {
      const updatedStates = countriesWatched.map((countryCode, index) => {
        if (!countryCode) return [];

        const states = State.getStatesOfCountry(countryCode);

        if (JSON.stringify(prev[index]) === JSON.stringify(states)) {
          return prev[index];
        }
        return states;
      });

      return updatedStates;
    });

    countriesWatched.forEach((countryCode, index) => {
      if (countryCode) {
        setValue(`locations.${index}.state`, "");
      }
    });
  }, [JSON.stringify(countriesWatched), setValue]);


  const handleCancel = () => {
    form.reset()
  }

  return (
    <FormProvider {...form}>
      <div className="flex flex-col justify-center items-center min-h-screen p-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center"
        >
          <div className="flex justify-between items-center w-full max-w-3xl mb-6">
            <div className="flex items-center space-x-2">
              <p className="font-bold text-lg">Locations</p>
              <InfoOutlineIcon className="text-gray-800" />
            </div>
            <button
              type="button"
              onClick={addEmptyFormValues}
              className="cursor-pointer border border-gray-400 bg-white font-bold text-black-700 px-3 py-1.5 rounded text-xs hover:bg-gray-200 transition"
            >
              + Add New Location
            </button>
          </div>

          {fields.map((field, index) => (
            <div
              key={field.id}
              className="w-full max-w-3xl bg-white p-6 rounded-lg mb-8 border border-gray-200"
            >
              <div className="mb-6">
                <button
                  type="button"
                  onClick={() => handleCopy(index)}
                  className="flex cursor-pointer items-center space-x-1 text-sm text-black font-bold hover:text-gray-900 border border-gray-300 rounded px-4 py-2"
                >
                  <ContentCopyIcon fontSize="small" />
                  <span>Copy</span>
                </button>
              </div>

              <div className="mb-6">
                <InputField
                  fieldId={`venue-${index}`}
                  name={`locations.${index}.venue`}
                  title={"Venue Title"}
                  defaultValue={field.venue}
                  errorMessage={errors.locations?.[index]?.venue}
                  className={
                    "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2"
                  }
                />
              </div>

              <div className="mb-6">
                <InputField
                  fieldId={`altName-${index}`}
                  name={`locations.${index}.altName`}
                  title={"Alt Name"}
                  defaultValue={field.altName}
                  errorMessage={errors.locations?.[index]?.altName}
                  className={
                    "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  }
                />
                <p className="text-gray-400 text-sm mt-2">
                  Example: Gym 1, Gym 2, Gym 3. Leave blank if not using.
                </p>
              </div>

              <hr className="border-t border-gray-200 my-6" />

              <div className="flex space-x-4 mb-6">
                <div className="flex-1">
                  <InputField
                    fieldId={`address-${index}`}
                    name={`locations.${index}.address`}
                    title={"Address"}
                    defaultValue={field.address}
                    errorMessage={errors.locations?.[index]?.address}
                    className={
                      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2"
                    }
                  />
                </div>
                <div className="flex-1">
                  <InputField
                    fieldId={`city-${index}`}
                    name={`locations.${index}.city`}
                    title={"City"}
                    defaultValue={field.city}
                    errorMessage={errors.locations?.[index]?.city}
                    className={
                      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2"
                    }
                  />
                </div>
              </div>

              <div className="mb-6">
                <CountrySelectField
                  fieldId={`country-${index}`}
                  name={`locations.${index}.country`}
                  countriesList={countries}
                  errorMessage={errors?.locations?.[index]?.country}
                  index={index} />
              </div>
              <div className="flex space-x-4 mb-6">
                <div className="flex-1">
                  <StateSelectField
                    fieldId={`state-${index}`}
                    name={`locations.${index}.state`}
                    statesList={statesList}
                    errorMessage={errors?.locations?.[index]?.state}
                    index={index} />

                </div>
                <div className="flex-1">
                  <InputField
                    fieldId={`zip-${index}`}
                    name={`locations.${index}.zip`}
                    title={"Zip/Postal"}
                    defaultValue={field.zip}
                    errorMessage={errors.locations?.[index]?.zip}
                    className={
                      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2"
                    }
                  />
                </div>
              </div>
              <hr className="border-t border-gray-200 my-6" />
              <div className="flex items-center space-x-2 mb-6">
                <Controller
                  name={`locations.${index}.isParkingFee`}
                  control={control}
                  defaultValue={field.isParkingFee}
                  render={({ field }) => (
                    <Switch
                      checked={!!field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )}
                />
                <label
                  htmlFor={`locations.${index}.isParkingFee`}
                  className="font-medium"
                >
                  Parking Fee
                </label>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 font-medium"
                  htmlFor={`parkingInfo-${index}`}
                >
                  Parking Info
                </label>
                <textarea
                  key={`parkingInfo-${index}`}
                  id={`parkingInfo-${index}`}
                  {...register(`locations.${index}.parkingInfo`)}
                  defaultValue={field.parkingInfo}
                  placeholder="Parking info goes here"
                  className={`w-full border rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 ${errors.locations?.[index]?.parkingInfo
                    ? "border-red-600 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                    }`}
                />
                {errors.locations?.[index]?.parkingInfo && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.locations[index].parkingInfo?.message}
                  </p>
                )}
              </div>
            </div>
          ))}
          <div className="w-full max-w-3xl flex justify-end space-x-4 mt-6">
            <button
              type="button"
              className="px-16 py-1.5 border border-gray-300 rounded-lg bg-white font-semibold text-gray-700 hover:bg-gray-50 transition cursor-pointer"
              onClick={() => handleCancel()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-16 py-1.5 rounded-lg bg-purple-500 text-white font-semibold hover:bg-blue-400 transition cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
