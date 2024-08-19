import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const extractData = await request.json();
    const updatedBlogPost = await prisma.post.update({
      where: {
        id: Number(extractData.id),
      },
      data: {
        comments: extractData.comments,
      },
    });
    if (updatedBlogPost) {
      return NextResponse.json({
        success: true,
        message: "포스트가 업데이트 되었습니다.",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "포스트가 업데이트에 실패했습니다. 다시 시도해 주세요.",
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
