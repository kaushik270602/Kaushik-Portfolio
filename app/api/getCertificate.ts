import { NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { Certificate } from "@/typings";
const query = groq`
    *[_type == "certificate"]
`

export async function GET() {
    const certificate: Certificate[] = await client.fetch(query)
    return NextResponse.json({certificate});
}