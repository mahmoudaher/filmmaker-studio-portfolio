import { revalidatePath } from "next/cache";

export async function POST(req) {
  try {
    // No secret validation (public webhook endpoint) – ensure you trust the caller
    const body = await req.json().catch(() => null);
    
    console.log("Sanity webhook payload:", body);

    // Default revalidations for common pages
    const revalidated = new Set(["/", "/film", "/photography", "/about"]);
    revalidated.forEach((p) => revalidatePath(p));

    // Targeted revalidation based on document type/slug if available
    const doc = body?.body || body; // Sanity can wrap payload under body
    const docType = doc?._type;
    const slug = doc?.slug?.current || doc?.slug;

    if (docType === "photoProjects") {
      revalidatePath("/photography");
      if (slug) revalidatePath(`/photography/${slug}`);
    }

    if (docType === "about") {
      revalidatePath("/about");
    }

    return Response.json({ ok: true, revalidated: Array.from(revalidated), targeted: { type: docType, slug: slug || null } });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: "Failed to revalidate" }, { status: 500 });
  }
}
