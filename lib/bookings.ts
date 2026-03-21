import { prisma } from "@/lib/prisma";

export type BookingInput = {
  fullName: string;
  contactNumber: string;
  email: string;
  vehicleModel: string;
  vehicleType: string;
  preferredDate: string;
  serviceType: string;
  issueDescription: string;
  serviceAddress: string;
};

export async function getBookings() {
  return prisma.booking.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function addBooking(data: BookingInput) {
  const reference = `PAD-${Date.now()}`;

  return prisma.booking.create({
    data: {
      reference,
      ...data,
    },
  });
}
