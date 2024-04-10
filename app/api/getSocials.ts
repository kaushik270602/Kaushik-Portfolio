import { NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { Social } from "@/typings";
const query = groq`
    *[_type == "social"]
`

export async function GET() {
    const socials: Social[] = await client.fetch(query)
    return NextResponse.json({socials});
}

