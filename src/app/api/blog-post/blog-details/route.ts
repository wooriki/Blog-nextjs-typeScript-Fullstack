import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const blogID = url.searchParams.get("blogID");

    const blogDetails = await prisma.post.findUnique({
      where: {
        id: Number(blogID),
      },
    });

    if (blogDetails) {
      return NextResponse.json({
        success: true,
        data: blogDetails,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "블로그 포스트를 가져오지 못 했습니다. 다시 시도해 주세요. ",
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "에러가 발생했습니다. 다시 시도해 주세요.",
    });
  }
}
