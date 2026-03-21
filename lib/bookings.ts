export type Booking = {
  id: string;
  fullName: string;
  contactNumber: string;
  email: string;
  vehicleModel: string;
  vehicleType: string;
  preferredDate: string;
  serviceType: string;
  issueDescription: string;
  serviceAddress: string;
  createdAt: string;
};

declare global {
  // eslint-disable-next-line no-var
  var __bookings__: Booking[] | undefined;
}

const bookingsStore = global.__bookings__ || [];

if (!global.__bookings__) {
  global.__bookings__ = bookingsStore;
}

export function getBookings() {
  return bookingsStore;
}

export function addBooking(
  data: Omit<Booking, "id" | "createdAt">
): Booking {
  const booking: Booking = {
    id: `PAD-${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...data,
  };

  bookingsStore.unshift(booking);
  return booking;
}
