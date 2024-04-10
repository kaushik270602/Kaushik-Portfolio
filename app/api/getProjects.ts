import { NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { Project } from "@/typings";
const query = groq`
    *[_type == "project"]
`

export async function GET() {
    const projects: Project[] = await client.fetch(query)
    return NextResponse.json({projects});
}