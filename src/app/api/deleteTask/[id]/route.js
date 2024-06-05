const { getConnection } = require("../../connection");
import { NextResponse } from "next/server";

export async function DELETE(request, context) {
  try {
    const { id } = context.params;
    if (!id) {
      return NextResponse.json(
        {
          error: "Task ID is required",
        },
        {
          status: 400,
        }
      );
    }

    const connection = await getConnection();
    const result = await connection.execute(
      `DELETE FROM tasks WHERE id = :id`,
      [id],
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
      success: true,
    });
  } catch (error) {
    console.error("Error deleting task:", error);
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
