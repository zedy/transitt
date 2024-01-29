import axiosHandler from "@/app/_lib/axios-handler";
import { type NextRequest } from "next/server";
import dayjs from "dayjs";

/* eslint-disable import/prefer-default-export */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  let date = searchParams.get("to");
  let time = searchParams.get("time");

  if (!from && !to) {
    return new Response("Missing required parameters", {
      status: 400,
    });
  }

  if (!date) {
    const now = new Date();
    date = dayjs(now).format("YYYY-MM-DD");
    time = dayjs(now).format("HH:mm");
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
