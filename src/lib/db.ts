import mongoose from "mongoose";

const uri = process.env.MONGO_URI!;
if (!uri) throw new Error("Missing MONGODB_URI");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached = (global as any)._mongoose as { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (!cached) cached = (global as any)._mongoose = { conn: null, promise: null };

export async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    console.log("[db] connecting with Standard URI…", uri.slice(0, 40) + "…");
    cached.promise = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000, // fail fast if unreachable
      // no SRV here, so DNS SRV won't be used
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}