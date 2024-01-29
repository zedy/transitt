import axiosHandler from "@/app/_lib/axios-handler";
import { type NextRequest } from "next/server";

/* eslint-disable import/prefer-default-export */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("to");
  const time = searchParams.get("time");

  if (!from && !to) {
    return new Response("Missing required parameters", {
      status: 400,
    });
  }

  const fetchResult = await axiosHandler({
    method: "GET",
    url: "http://transport.opendata.ch/v1/connections",
    requestConfig: {
      params: {
        from,
        to,
        date,
        time,
      },
    },
  });

  // console.log(fetchResult);

  return new Response(fetchResult);
}
