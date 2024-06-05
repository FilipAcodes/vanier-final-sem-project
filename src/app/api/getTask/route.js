const { getConnection } = require("../connection");
import { NextResponse } from "next/server";

export async function GET(request, context) {
  try {
    const connection = await getConnection();
    const data = await connection.execute(`select * from tasks`);
    return NextResponse.json({
      data: data.rows,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
