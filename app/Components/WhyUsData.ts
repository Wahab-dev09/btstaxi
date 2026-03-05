import { Bolt } from '@boxicons/react';
import { DollarCircle } from '@boxicons/react';
import { Clock4 } from '@boxicons/react';


// Card type
export type Card = {
  title: string;
  tagline: string;
  image: React.ElementType;
};
export type Stat = {
  value: string;
  label: string;
};

// Cards data
export const process: Card[] = [
  { title: "Choose Pickup & Airport", tagline: "Select your pickup location and the airport you're traveling to", image: Bolt },
  { title: "Confirm Ride via WhatsApp", tagline: "Hit the WhatsApp button to confirm your booking instantly", image: DollarCircle },
  { title: "Meet Your Driver", tagline: "Our professional driver picks you up on time and drives you safely", image: Clock4 },
];
export const benefits: Card[] = [
  { title: "Instant Car Booking", tagline: "No long forms, no waiting. Confirm quickly and your driver is on the way", image: Bolt },
  { title: "Affordable Pricing", tagline: "Clear upfront fares with no hidden charges. Premium airport transfers within reach", image: DollarCircle },
  { title: "Available 24/7", tagline: "Early morning flight or late-night arrival, we are ready whenever you are", image: Clock4 },
];

export const stats: Stat[] = [
  { value: "10+", label: "Years of Service" },
  { value: "24/7", label: "Availability" },
  { value: "99%", label: "On-Time Rides" },
  { value: "4.8/5", label: "Customer Rating" },
  { value: "50K+", label: "Rides Completed" },
];