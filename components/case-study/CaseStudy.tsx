import Container from "@/components/ui/Container";

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="bg-slate-950 py-28 text-white"
    >
      <Container>

        <div className="max-w-3xl">

          <p className="text-blue-400 font-semibold">
            Featured Project
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Building an Online Store from Scratch
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            I wanted to understand how a real e-commerce application
            works, so instead of watching another tutorial, I decided
            to build one myself.
          </p>


<div className="mt-20 grid gap-12 lg:grid-cols-2">

<div>

<h3 className="text-3xl font-bold">
The Problem
</h3>

<p className="mt-6 leading-8 text-slate-300">

I wanted a project that would challenge me beyond building simple pages.
I needed something that included authentication, a database, protected routes,
and the kind of features people actually expect from a real application.

</p>

</div>

<div>

<h3 className="text-3xl font-bold">
What I Built
</h3>

<ul className="mt-6 space-y-4 text-slate-300">

<li>• User authentication</li>

<li>• Product catalogue</li>

<li>• Shopping cart</li>

<li>• Order management</li>

<li>• Admin dashboard</li>

<li>• REST API</li>

</ul>

</div>

<div className="mt-20">

<h3 className="text-3xl font-bold">
What I Learned
</h3>

<p className="mt-6 max-w-4xl leading-8 text-slate-300">

This project changed the way I think about software.

I learned that writing code is only one part of building an application.
Planning the database, organising files, handling errors, and thinking about the user's experience are just as important.

If I built this project again today, I'd improve the folder structure, write more reusable components, and add automated testing.

</p>

</div>
<div className="mt-16 flex flex-wrap gap-4">

<span className="rounded-full bg-blue-600 px-5 py-2">
React
</span>

<span className="rounded-full bg-blue-600 px-5 py-2">
Next.js
</span>

<span className="rounded-full bg-blue-600 px-5 py-2">
Node.js
</span>

<span className="rounded-full bg-blue-600 px-5 py-2">
Express
</span>

<span className="rounded-full bg-blue-600 px-5 py-2">
MongoDB
</span>

<span className="rounded-full bg-blue-600 px-5 py-2">
Tailwind CSS
</span>

</div>
<div className="mt-16 flex gap-5">

<a
href="#"
className="rounded-xl bg-white px-8 py-4 font-semibold text-black"
>

View Live Project

</a>

<a
href="#"
className="rounded-xl border border-slate-700 px-8 py-4"
>

View Source Code

</a>

</div>

</div>
        </div>

      </Container>
    </section>
  );
}