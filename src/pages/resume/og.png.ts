import type { APIRoute } from "astro";
import { generateOgImageForPage } from "@utils/generateOgImages";

export const GET: APIRoute = async () =>
  new Response(
    await generateOgImageForPage(
      "Resume",
      "Arun Meti's resume — education, experience, skills, and projects.",
    ),
    { headers: { "Content-Type": "image/png" } },
  );
