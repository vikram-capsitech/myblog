import mongoose, { Schema, models } from "mongoose";

export interface ISubscriber {
  _id?: string;
  email: string;
  name?: string;
  verified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const SubscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: { type: String },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true, collection: "subscriber" }
);

export const Subscriber =
  models.Subscriber ||
  mongoose.model<ISubscriber>("Subscriber", SubscriberSchema);
