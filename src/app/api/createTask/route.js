const { getConnection } = require("../connection");
import { NextResponse } from "next/server";

export async function POST(request, context) {
  try {
    const { task } = await request.json();
    if (!task) {
      return NextResponse.json(
        {
          error: "Task description is required",
        },
        {
          status: 400,
        }
      );
    }

    const connection = await getConnection();
    await connection.execute(
      `INSERT INTO tasks (task) VALUES (:task)`,
      [task],
      { autoCommit: true }
    );

    return NextResponse.json({
      message: "Task added successfully",
    });
  } catch (error) {
    console.error("Error adding task:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
