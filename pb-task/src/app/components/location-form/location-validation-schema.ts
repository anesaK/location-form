import * as z from "zod";

export const locationValidationRules= z.object({
    venue:z.string().trim().min(1,"Venue title is required"),
    altName:z.string().trim().optional(),
    address:z.string().trim().min(1,"Address is required"),
    city:z.string().trim().min(1,"City is required"),
    country:z.string().min(1,"Country is required"),
    state:z.string().trim().min(1,"State is required"),
    zip:z.string().trim().min(1,"Zip/Postal is required"),
    isParkingFee: z.boolean(),
    parkingInfo:z.string().trim().min(1,"Parking Info is required")

});


export const locationValidationSchema = z.object({
  locations: z.array(locationValidationRules),
});
