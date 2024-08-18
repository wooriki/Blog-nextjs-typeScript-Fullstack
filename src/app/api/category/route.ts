import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const extractCategoryID = searchParams.get("categoryID");

    const getBlogPostListBasedOnCurrentCategoryID = await prisma.post.findMany({
      where: {
        category: extractCategoryID || "",
      },
    });
    if (getBlogPostListBasedOnCurrentCategoryID) {
      return NextResponse.json({
        success: true,
        data: getBlogPostListBasedOnCurrentCategoryID,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "정보를 가져오는데 실패했습니다. 다시 시도해 주세요.",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "에러가 발생했습니다. 다시 시도해 주세요.",
    });
  }
}
