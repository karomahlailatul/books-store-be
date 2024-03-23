import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
  CustomErrorType,
  GetByPaginationParamsType,
  PaginationType,
} from "@/types/app";

const prisma = new PrismaClient();

const services = {
  getByPagination: async (params: GetByPaginationParamsType) => {
    const {
      page,
      limit,
      offset,
      search,
      searchBy,
      sortBy,
      sort,
    }: GetByPaginationParamsType = params;

    let whereClause: Prisma.usersWhereInput = {};
    if (search) {
      whereClause = {
        [searchBy as string]: {
          contains: search,
          mode: "insensitive",
        },
      };
    }

    const [totalData, result] = await Promise.all([
      prisma.users.count({ where: whereClause }),
      prisma.users.findMany({
        take: limit,
        skip: offset,
        orderBy: {
          [sortBy]: sort,
        },
        where: whereClause,
        // include: {
        //   categories: true,
        // },
      }),
    ]);

    const totalPage = Math.ceil(totalData / limit);
    const pagination: PaginationType = {
      page,
      limit,
      totalData,
      totalPage,
    };
    return [result, pagination as PaginationType];
  },

  getById: async (id: number) => {
    const result = await prisma.users.findUnique({
      where: {
        id,
      },
      // include: {
      //   categories: true,
      // },
    });

    if (!result) {
      const error: CustomErrorType = new Error("Data not found");
      error.statusCode = 404;
      throw error;
    }

    return result;
  },

  getByIdCount: async (id: number) => {
    const result = await prisma.users.count({
      where: {
        id,
      },
    });

    if (!result || result === 0) {
      const error: CustomErrorType = new Error("Data not found");
      error.statusCode = 404;
      throw error;
    }

    return result;
  },

  create: async (data: Prisma.usersCreateInput) => {
    const result = await prisma.users.create({
      data,
    });

    if (!result) {
      const error: CustomErrorType = new Error("Failed created");
      error.statusCode = 400;
      throw error;
    }

    return result;
  },

  updateById: async (id: number, data: Prisma.usersUpdateInput) => {
    const result = await prisma.users.update({
      where: {
        id,
      },
      data,
    });

    if (!result) {
      const error: CustomErrorType = new Error("Failed updated");
      error.statusCode = 400;
      throw error;
    }

    return result;
  },

  deleteById: async (id: number) => {
    const result = await prisma.users.delete({
      where: {
        id,
      },
    });

    if (!result) {
      const error: CustomErrorType = new Error("Failed deleted");
      error.statusCode = 400;
      throw error;
    }

    return result;
  },

  register: async (data: Prisma.usersCreateInput) => {
    const hashedPassword = await bcrypt.hash(
      data?.password || "user123",
      Number(process.env.PASSWORD_SALT) || 10
    );
    const result = await prisma.users.create({
      data: {
        ...data,
        password: hashedPassword,
        point: 100, // default point after register
      },
    });

    if (!result) {
      throw new Error("Failed to create user");
    }

    if (!result) {
      const error: CustomErrorType = new Error("Failed to create user");
      error.statusCode = 404;
      throw error;
    }

    result.password = null;

    return result;
  },

  login: async (email: string, password: string) => {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      const error: CustomErrorType = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password || "user123"
    );

    if (!isPasswordMatch) {
      const error: CustomErrorType = new Error("Password not match");
      error.statusCode = 400;
      throw error;
    }

    const secretKey = process.env.SECRET_KEY_JWT || "secretBookApp";
    user.password = null;

    const token = jwt.sign({ userId: user.id, role: user.role }, secretKey, {
      expiresIn: "12h",
    });
    const refreshToken = jwt.sign(
      { userId: user.id, role: user.role },
      secretKey,
      {
        expiresIn: "30d",
      }
    );

    return [
      token,
      refreshToken,
      user,
      43200, // 12 hours,
    ];
  },

  resetPassword: async (id: number, password: string) => {
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.PASSWORD_SALT) || 10
    );
    const result = await prisma.users.update({
      where: {
        id,
      },
      data: {
        password: hashedPassword,
      },
    });

    if (!result) {
      const error: CustomErrorType = new Error("Failed to reset password");
      error.statusCode = 400;
      throw error;
    }

    return result;
  },
};

export default services;
