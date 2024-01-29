import axiosHandler from "@/app/_lib/axios-handler";
import { type NextRequest } from "next/server";

/* eslint-disable import/prefer-default-export */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const fetchResult = await axiosHandler({
    method: "GET",
    url: "http://transport.opendata.ch/v1/locations",
    requestConfig: {
      params: {
        query,
      },
    },
  });

  return Response.json({ ...fetchResult });
}
