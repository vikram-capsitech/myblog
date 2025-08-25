import { dbConnect } from "@/lib/db";
import { welcomeEmail } from "@/lib/email";
import { Subscriber } from "@/models/Subscriber";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    await dbConnect();

    const existing = await Subscriber.findOne({ email });
    if (!existing) {
      await Subscriber.create({ email, name });
    }

    await welcomeEmail({ email: email });

    return NextResponse.json({ ok: true });
  }catch (err) {
    console.error("/api/subscribe", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
