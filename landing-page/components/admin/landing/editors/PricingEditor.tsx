// components/admin/landing/editors/PricingEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import type { PricingSettings, PricingPlan } from "@/types/section";

interface PricingEditorProps {
  settings: PricingSettings;
  onChange: (settings: PricingSettings) => void;
}

export function PricingEditor({ settings, onChange }: PricingEditorProps) {
  const addPlan = () => {
    onChange({
      ...settings,
      plans: [
        ...settings.plans,
        { name: "", price: "", description: "", button: "Get Started", url: "#" },
      ],
    });
  };

  const removePlan = (index: number) => {
    const newPlans = settings.plans.filter((_, i) => i !== index);
    onChange({ ...settings, plans: newPlans });
  };

  const updatePlan = (index: number, field: keyof PricingPlan, value: string) => {
    const newPlans = [...settings.plans];
    newPlans[index] = { ...newPlans[index], [field]: value };
    onChange({ ...settings, plans: newPlans });
  };

  const handleChange = (field: keyof PricingSettings, value: string) => {
    onChange({ ...settings, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={settings.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Pricing Plans"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subtitle">Subtitle</Label>
        <Textarea
          id="subtitle"
          value={settings.subtitle}
          onChange={(e) => handleChange("subtitle", e.target.value)}
          placeholder="Brief description"
          rows={2}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Plans</Label>
          <Button type="button" variant="outline" size="sm" onClick={addPlan}>
            <Plus className="h-4 w-4 mr-1" />
            Add Plan
          </Button>
        </div>

        <div className="space-y-4">
          {settings.plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <Label className="text-sm font-medium">Plan {index + 1}</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removePlan(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Input
                  value={plan.name}
                  onChange={(e) => updatePlan(index, "name", e.target.value)}
                  placeholder="Plan name"
                />
                <Input
                  value={plan.price}
                  onChange={(e) => updatePlan(index, "price", e.target.value)}
                  placeholder="Price (e.g. $99)"
                />
              </div>

              <Textarea
                value={plan.description}
                onChange={(e) => updatePlan(index, "description", e.target.value)}
                placeholder="Plan description"
                rows={2}
              />

              <div className="grid grid-cols-2 gap-3">
                <Input
                  value={plan.button}
                  onChange={(e) => updatePlan(index, "button", e.target.value)}
                  placeholder="Button text"
                />
                <Input
                  value={plan.url}
                  onChange={(e) => updatePlan(index, "url", e.target.value)}
                  placeholder="Button URL"
                />
              </div>
            </div>
          ))}
          {settings.plans.length === 0 && (
            <p className="text-sm text-gray-500">No pricing plans added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}