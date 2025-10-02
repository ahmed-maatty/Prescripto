import bcrypt from "bcryptjs";
import { Schema, model, Types } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ["Patient", "Doctor", "Admin"],
      default: "Patient",
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    phone: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    profielPhoto: {
      type: Object,
      default: {
        url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      },
    },
    appointments: [
      {
        type: Types.ObjectId,
        ref: "Appointment",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePass = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);
export default User;
