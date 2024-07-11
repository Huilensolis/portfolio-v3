import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: "es" | "en" };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  {}: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const ogImage = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/opengraph-image`;

  return {
    title: "Huilen Solis Portfolio",
    description: "Full Stack Developer",
    creator: "Huilen Solis",
    openGraph: {
      images: [{ url: ogImage }, ...previousImages],
      title: "Huilen Solis Portfolio",
      description: "Full stack Developer",
      type: "website",
      locale: "en-us",
    },
    twitter: {
      title: "Huilen Solis Portfolio",
      description: "Full Stack Developer",
      creator: "huilensolis" || undefined,
      images: [
        { url: ogImage, alt: "Huilen Solis Portfolio" },
        ...previousImages,
      ],
      card: "summary_large_image",
    },
  };
}

export const dynamic = "force-static";

export default function FreelancingPage() {
  return <>Freelancing</>;
}