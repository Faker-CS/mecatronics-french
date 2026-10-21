import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  postalCode?: string;
  message?: string;
  consent?: string;
};

const required = ["firstName", "lastName", "phone", "email", "postalCode", "consent"] as const;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const missing = required.filter((key) => !data[key]?.toString().trim());
  if (missing.length) {
    return NextResponse.json({ error: "Missing fields", fields: missing }, { status: 422 });
  }
  if (!/^\S+@\S+\.\S+$/.test(data.email!)) {
    return NextResponse.json({ error: "Invalid email", fields: ["email"] }, { status: 422 });
  }

  // TODO: forward the request (email, CRM, backend API…). Until then it is
  // only logged server-side.
  console.info("[contact] new request", {
    name: `${data.firstName} ${data.lastName}`,
    postalCode: data.postalCode,
  });

  return NextResponse.json({ ok: true });
}
