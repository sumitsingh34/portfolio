"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and career path"
        />

        <div className="space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <TimelineItem key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
