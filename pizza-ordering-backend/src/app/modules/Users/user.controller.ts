import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import sendResponse from "../../Utils/sendResponse";
import { UserServices } from "./user.services";

const createUser = catchAsync(async (req, res) => {
  console.log(req.body);

  const result = await UserServices.createUserIntoDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " user created successfully ",
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  console.log(req.body);

  const result = await UserServices.getAllUser();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " user retrived successfully",
    data: result,
  });
});

const deleteSingleUser = catchAsync(async (req, res) => {
  console.log(req.body);

  const result = await UserServices.deleteSingleUser(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " user deleted successfully",
    data: result,
  });
});
const updateUser = catchAsync(async (req, res) => {
  console.log(req.body);

  const result = await UserServices.updateSingleUser(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " user updated successfully",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  updateUser,
  deleteSingleUser,
  getAllUser,
};
