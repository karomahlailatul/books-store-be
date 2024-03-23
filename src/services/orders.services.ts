import { Prisma, PrismaClient } from "@prisma/client";

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

    let whereClause: Prisma.ordersWhereInput = {};
    if (search) {
      whereClause = {
        [searchBy as string]: {
          contains: search,
          mode: "insensitive",
        },
      };
    }

    const [totalData, result] = await Promise.all([
      prisma.orders.count({ where: whereClause }),
      prisma.orders.findMany({
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
    const result = await prisma.orders.findUnique({
      where: {
        id,
      },
      // include: {
         
      //   seller: true,
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
    const result = await prisma.orders.count({
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

  create: async (data: Prisma.ordersCreateInput) => {
    const result = await prisma.orders.create({
      data,
    });

    if (!result) {
      const error: CustomErrorType = new Error("Failed created");
      error.statusCode = 400;
      throw error;
    }

    return result;
  },

  updateById: async (id: number, data: Prisma.ordersUpdateInput) => {
    const result = await prisma.orders.update({
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
    const result = await prisma.orders.delete({
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
};

export default services;
