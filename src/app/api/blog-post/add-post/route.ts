import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const extractPostData = await request.json();
    const newlyCreatedPost = await prisma.post.create({
      data: extractPostData,
    });

    console.log(extractPostData, "extractPostData");

    if (newlyCreatedPost) {
      return NextResponse.json({
        success: true,
        message: "새 글이 성공적으로 작성되었습니다. ",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "에러가 발생했습니다. 다시 시도해 주세요.",
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
