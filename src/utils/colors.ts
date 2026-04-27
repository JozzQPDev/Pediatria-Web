// src/utils/colors.ts
export const colorClasses = {
    green: {
    bgLight: "bg-emerald-50",
    text: "text-emerald-600",
    icon: "bg-emerald-500",
    gradient: "from-emerald-500 to-teal-600",
    blob: "bg-emerald-200"
  },
  blue: {
    bgLight: "bg-blue-50",
    text: "text-blue-600",
    icon: "bg-blue-500",
    gradient: "from-blue-500 to-indigo-600",
    blob: "bg-blue-200"
  },
  yellow: {
    bgLight: "bg-amber-50",
    text: "text-amber-600",
    icon: "bg-amber-500",
    gradient: "from-amber-400 to-orange-500",
    blob: "bg-amber-200"
  },
  pink: {
    bgLight: "bg-pink-50",
    text: "text-pink-600",
    icon: "bg-pink-500",
    gradient: "from-pink-500 to-rose-600",
    blob: "bg-pink-200"
  },
  purple: {
    bgLight: "bg-purple-50",
    text: "text-purple-600",
    icon: "bg-purple-500",
    gradient: "from-purple-500 to-violet-600",
    blob: "bg-purple-200"
  },
  teal: {
    bgLight: "bg-teal-50",
    text: "text-teal-600",
    icon: "bg-teal-500",
    gradient: "from-teal-500 to-cyan-600",
    blob: "bg-teal-200"
  }
};

export type ColorKey = keyof typeof colorClasses;