// app/(public)/page.tsx

import Link from "next/link";

import { getOffers } from "@/lib/api";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function HomePage() {

  const featuredOffers = await getOffers();

  return (
    <div className="bg-background">

      <section className="border-b">

        <div className="container mx-auto max-w-6xl px-6 py-24">

          <Badge variant="secondary">
            AI • Automation • Productivity
          </Badge>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Discover AI Tools
            <span className="text-primary">
              {" "}That Help You Work Smarter
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Explore carefully selected AI platforms that help businesses,
            developers, creators, and marketers automate workflows and grow
            faster.
          </p>

          <div className="mt-10 flex gap-4">

            <Button asChild>
              <Link href="#offers">
                Browse Tools
              </Link>
            </Button>

          </div>

        </div>

      </section>

      <section
        id="offers"
        className="container mx-auto max-w-6xl px-6 py-20"
      >

        <div className="grid gap-6 md:grid-cols-3">

          {featuredOffers.map((offer) => (

            <Card key={offer.id}>

              <CardHeader>

                <Badge className="w-fit">
                  {offer.merchantName}
                </Badge>

                <CardTitle>
                  {offer.offerName}
                </CardTitle>

                <CardDescription>
                  {offer.description}
                </CardDescription>

              </CardHeader>

              <CardContent>

                <Button
                  asChild
                  className="w-full"
                >

                  <Link
                    href={`/out/${offer.offerSlug}`}
                  >
                    Learn More
                  </Link>

                </Button>

              </CardContent>

            </Card>

          ))}

        </div>

      </section>

    </div>
  );

}