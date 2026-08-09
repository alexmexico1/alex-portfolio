"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-slate-900">
        Gallery
      </h2>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
        <Image
          src={selectedImage}
          alt={title}
          width={1600}
          height={900}
          className="w-full object-cover"
          priority
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-xl border transition ${
              selectedImage === image
                ? "border-slate-900"
                : "border-slate-200 hover:border-slate-400"
            }`}
          >
            <Image
              src={image}
              alt={title}
              width={400}
              height={225}
              className="aspect-video w-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}