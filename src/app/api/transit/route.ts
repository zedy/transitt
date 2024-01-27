import useAxios from "@/app/_hooks/use-axios-handlers";
import { type NextRequest } from "next/server";

/* eslint-disable import/prefer-default-export */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("aaa");
  console.log(id);

  const fetchResult = await useAxios({
    method: "GET",
    url: "http://transport.opendata.ch/v1/connections",
    requestConfig: {
      params: {
        from: "Lausanne",
        to: "Genève",
      },
    },
  });

  console.log(fetchResult);

  return new Response(fetchResult);
}
