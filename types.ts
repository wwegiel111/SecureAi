import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface UseCase {
  title: string;
  description: string;
  benefit: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChartData {
  name: string;
  Cloud: number;
  Local: number;
}