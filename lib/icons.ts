import type { ServiceIconKey } from "@/lib/content";
import {
  BarChart3,
  ClipboardCheck,
  FileText,
  Globe,
  Mail,
  MapPin,
  Megaphone,
  Rocket,
  Search,
  Share2,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<ServiceIconKey, LucideIcon> = {
  rocket: Rocket,
  globe: Globe,
  search: Search,
  share2: Share2,
  megaphone: Megaphone,
  fileText: FileText,
  mail: Mail,
  mapPin: MapPin,
  barChart: BarChart3,
  clipboardCheck: ClipboardCheck,
};

export function getServiceIcon(key: ServiceIconKey): LucideIcon {
  return iconMap[key];
}
