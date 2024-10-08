import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import sendResponse from "../../Utils/sendResponse";
import { User } from "../Users/user.model";
import { createToken } from "../../Utils/authUtils";
import config from "../../config";
import { access } from "fs";
import { sendEmail } from "../../Utils/sendEmail";

// succesfully login user
const loginUser = async (payload: TauthUser) => {
  const { userEmail, userPassword } = payload;
  console.log(payload);
  if (!userEmail || !userPassword) {
    throw new AppError(httpStatus.BAD_REQUEST, "need password and email");
  }

  const user = await User.findOne({ userEmail });
  console.log(user?.password, userPassword);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "user not found");
  }

  if (user?.password !== userPassword) {
    throw new AppError(httpStatus.CONFLICT, "password not matched");
  }

  const jwtPayload = { userId: user?._id, userRole: user.role };
  const token = createToken(
    jwtPayload,
    config.accessToken as string,
    config.accessTokenexpiries as string
  );
  const refreshtoken = createToken(
    jwtPayload,
    config.refreshToken as string,
    config.refreshTokenexpiries as string
  );

  return { refreshtoken, token, user };
};

const forgetPassword = async (userId: string) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }

  const jwtLoad = {
    userId: user._id,
    role: user.role,
  };

  const resetToken = createToken(jwtLoad, config.accessToken as string, "10m");

  const resetUILink = `${config.reset_pass_base_url}?id=${user._id}&token=${resetToken} `;

  sendEmail(
    user.userEmail,
    resetUILink,
    "Reset your password within ten mins!"
  );
};
const emailVerification = async (userId: string) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }
  if (user.isEmailVerified) {
    throw new AppError(httpStatus.CONFLICT, "email already verfied ");
  }

  const jwtLoad = {
    userId: user._id,
    role: user.role,
  };

  const emailVerificationToken = createToken(
    jwtLoad,
    config.accessToken as string,
    "10m"
  );

  const varificationLink = `${config.reset_Email_base_backend}/api/pizza/auth/confirm-email?id=${user._id}&token=${emailVerificationToken} `;

  sendEmail(user.userEmail, varificationLink, "please verify your email");
};

const confirmEmail = async (id: String) => {
  const result = await User.findByIdAndUpdate(
    id,
    { isEmailVerified: true },
    { new: true }
  );

// navigate specifiuc front end path
  return result
};

export const AuthServices = {
  loginUser,
  forgetPassword,
  emailVerification,
  confirmEmail,
};
