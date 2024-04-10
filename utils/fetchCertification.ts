import {Certificate} from "@/typings";

export const fetchCertificate = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCertificate`)
    const data = await res.json()
    const certificate: Certificate[] = data.certificate

    return certificate
}