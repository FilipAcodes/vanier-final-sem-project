const { getConnection } = require("../connection");
import { NextResponse } from "next/server";

export async function PUT(request, context) {
  try {
    const requestBody = await request.json();
    const { id, task } = requestBody;
    if (!id || !task) {
      return NextResponse.json(
        {
          error: "Task ID and new task description are required",
        },
        {
          status: 400,
        }
      );
    }

    const connection = await getConnection();
    const result = await connection.execute(
      `UPDATE tasks SET task = :task WHERE id = :id`,
      [task, id],
      { autoCommit: true }
    );

    if (result.rowsAffected === 0) {
      return NextResponse.json(
        {
          error: "Task not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      message: "Task updated successfully",
    });
  } catch (error) {
    console.error("Error updating task:", error);
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
