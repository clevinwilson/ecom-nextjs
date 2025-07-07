import { createProduct } from "@/domains/products/services/productService";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const res = await createProduct(reqBody);
    if (res) {
      return NextResponse.json(
        { message: "Product created successfully", success: true },
        { status: 200 }
      );
    }
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
};
