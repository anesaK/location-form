import * as z from "zod";
import { locationValidationSchema } from "./location-validation-schema";

export type LocationsData = z.infer<typeof locationValidationSchema>;     
