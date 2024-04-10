import { NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { PageInfo } from "@/typings";
const query = groq`
    *[_type == "pageInfo"][0]
`

export async function GET() {
    const pageInfo: PageInfo[] = await client.fetch(query)
    return NextResponse.json({pageInfo});
}