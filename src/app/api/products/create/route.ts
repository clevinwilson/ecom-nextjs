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
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
