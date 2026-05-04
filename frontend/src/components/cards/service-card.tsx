import { Layers, Rocket, Sparkles } from "lucide-react";
import type { Service } from "@/types/service.type";
import { Card } from "@/components/ui/card";

type ServiceCardProps = {
  service: Service;
};

const icons = {
  sparkles: Sparkles,
  rocket: Rocket,
  layers: Layers,
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Sparkles;

  return (
    <Card className="group transition duration-300 hover:-translate-y-1 hover:border-violet-300/40">
      <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-400/25 to-cyan-300/20 text-cyan-100">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        {service.description}
      </p>
    </Card>
  );
}
