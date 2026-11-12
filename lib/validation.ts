/** Shared validation used by both the client forms and the API routes. */
export type FieldErrors = Record<string, string>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+()\-.\s\d]{7,20}$/;

export const serviceIds = ["basic", "mini", "full"] as const;
export const contactServiceOptions = ["Basic Cleaning", "Mini Detailing", "Full Detailing", "Not Sure"] as const;
export const vehicleKeys = ["small", "suv", "large"] as const;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function isPastDate(value: string) {
  const d = new Date(`${value}T23:59:59`);
  return Number.isNaN(d.getTime()) || d.getTime() < Date.now();
}

function validateIdentity(data: Record<string, unknown>, errors: FieldErrors) {
  const name = str(data.name);
  const phone = str(data.phone);
  const email = str(data.email);
  if (name.length < 2) errors.name = "Please enter your full name.";
  if (!phoneRe.test(phone) || phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number.";
  if (!emailRe.test(email)) errors.email = "Please enter a valid email address.";
}

export function validateContact(data: Record<string, unknown>): FieldErrors {
  const errors: FieldErrors = {};
  validateIdentity(data, errors);
  if (str(data.vehicle).length < 2) errors.vehicle = "Please tell us your vehicle type.";
  if (!contactServiceOptions.includes(str(data.service) as (typeof contactServiceOptions)[number]))
    errors.service = "Please choose a service.";
  const date = str(data.date);
  if (date && isPastDate(date)) errors.date = "Please choose a future date.";
  if (str(data.message).length > 2000) errors.message = "Message is too long (2000 characters max).";
  return errors;
}

export function validateBooking(data: Record<string, unknown>): FieldErrors {
  const errors: FieldErrors = {};
  if (!serviceIds.includes(str(data.service) as (typeof serviceIds)[number])) errors.service = "Please select a service.";
  if (!vehicleKeys.includes(str(data.vehicle) as (typeof vehicleKeys)[number])) errors.vehicle = "Please select your vehicle type.";
  validateIdentity(data, errors);
  const date = str(data.date);
  if (!date) errors.date = "Please choose a preferred date.";
  else if (isPastDate(date)) errors.date = "Please choose a future date.";
  if (!str(data.time)) errors.time = "Please choose a preferred time.";
  if (str(data.notes).length > 2000) errors.notes = "Notes are too long (2000 characters max).";
  return errors;
}
