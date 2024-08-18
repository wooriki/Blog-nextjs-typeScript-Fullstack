import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const extractIdOfBlogItemToBeDeleted = url.searchParams.get("id");

    const deletedBlogPost = await prisma.post.delete({
      where: {
        id: Number(extractIdOfBlogItemToBeDeleted),
      },
    });

    if (deletedBlogPost) {
      return NextResponse.json({
        success: true,
        message: "해당 포스트가 삭제되었습니다.",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "삭제되지 않았습니다. 다시 시도해 주세요. ",
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
