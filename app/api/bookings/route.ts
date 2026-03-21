import { addBooking, getBookings } from "@/lib/bookings";

export async function GET() {
  try {
    const bookings = await getBookings();

    return Response.json({
      success: true,
      bookings,
    });
  } catch {
    return Response.json(
      {
        success: false,
        message: "Failed to load bookings",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const requiredFields = [
      "fullName",
      "contactNumber",
      "email",
      "vehicleModel",
      "vehicleType",
      "preferredDate",
      "serviceType",
      "issueDescription",
      "serviceAddress",
    ];

    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim() === "") {
        return Response.json(
          {
            success: false,
            message: `${field} is required`,
          },
          { status: 400 }
        );
      }
    }

    const booking = await addBooking({
      fullName: body.fullName,
      contactNumber: body.contactNumber,
      email: body.email,
      vehicleModel: body.vehicleModel,
      vehicleType: body.vehicleType,
      preferredDate: body.preferredDate,
      serviceType: body.serviceType,
      issueDescription: body.issueDescription,
      serviceAddress: body.serviceAddress,
    });

    return Response.json({
      success: true,
      message: "Booking submitted successfully",
      booking,
    });
  } catch {
    return Response.json(
      {
        success: false,
        message: "Failed to submit booking",
      },
      { status: 500 }
    );
  }
}
