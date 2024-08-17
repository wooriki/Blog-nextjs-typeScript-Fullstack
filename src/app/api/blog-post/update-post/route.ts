import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "에러가 발생했습니다. 다시 시도해 주세요.",
    });
  }
}
