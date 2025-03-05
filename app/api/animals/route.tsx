import { db } from "@/drizzle/db";
import { animals } from "@/drizzle/schema";
import { NextResponse } from "next/server";
import { eq, and, sql } from "drizzle-orm";

export const GET = async (req: any) => {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get("type");
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    let result;
    if (type) {
      result = await db
        .select()
        .from(animals)
        .where(
          and(
            eq(animals.animalType, type),
            sql`EXTRACT(MONTH FROM updated_at) = ${currentMonth}`,
            sql`EXTRACT(YEAR FROM updated_at) = ${currentYear}`
          )
        );
    } else {
      result = await db
        .select()
        .from(animals)
        .where(
          and(
            sql`EXTRACT(MONTH FROM updated_at) = ${currentMonth}`,
            sql`EXTRACT(YEAR FROM updated_at) = ${currentYear}`
          )
        );
    }
    
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error fetching animals",
        err,
      },
      { status: 500 }
    );
  }
};
