import { 
  ShieldCheck, 
  Server, 
  BrainCircuit, 
  Users, 
  FileText, 
  Scale, 
  Factory, 
  Stethoscope 
} from 'lucide-react';
import { NavItem, ProcessStep, UseCase, FaqItem, ChartData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Problem vs Rozwiązanie', href: '#comparison' },
  { label: 'Proces', href: '#process' },
  { label: 'Dla kogo?', href: '#use-cases' },
  { label: 'Kontakt', href: '#contact' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Audyt i Cyfryzacja',
    description: 'Analizujemy przepływ danych w Twojej firmie. Porządkujemy dokumenty i przygotowujemy je do bezpiecznego przetworzenia.',
    icon: FileText,
  },
  {
    title: 'Instalacja Sprzętu',
    description: 'Dostarczamy i konfigurujemy dedykowaną stację roboczą lub serwer. Wszystko zostaje w Twoim biurze.',
    icon: Server,
  },
  {
    title: 'Wdrożenie "Firmowego Mózgu"',
    description: 'Instalujemy system RAG (Retrieval-Augmented Generation). Twój czat zna teraz Twoje umowy, e-maile i procedury.',
    icon: BrainCircuit,
  },
  {
    title: 'Szkolenie Zespołu',
    description: 'Uczymy Twoich pracowników, jak efektywnie korzystać z asystenta AI, aby oszczędzać godziny pracy dziennie.',
    icon: Users,
  },
];

export const USE_CASES: UseCase[] = [
  {
    title: 'Kancelarie Prawne',
    description: 'Analizuj 500 stron umów w 30 sekund. Wyszukuj klauzule i precedensy w historycznych aktach spraw.',
    benefit: '100% Tajemnicy Adwokackiej',
    icon: Scale,
  },
  {
    title: 'Biura Rachunkowe',
    description: 'Automatyczne kategoryzowanie faktur i błyskawiczne wyszukiwanie interpretacji podatkowych w bazie wiedzy.',
    benefit: 'Dane finansowe nie opuszczają biura',
    icon: FileText,
  },
  {
    title: 'Firmy Medyczne',
    description: 'Anonimizacja dokumentacji pacjentów i szybkie wyszukiwanie w historii chorób bez chmury.',
    benefit: 'Pełna zgodność z RODO',
    icon: Stethoscope,
  },
  {
    title: 'Produkcja i Przemysł',
    description: 'Dostęp do dokumentacji technicznej maszyn i procedur serwisowych dla pracowników na hali, offline.',
    benefit: 'Działa bez dostępu do Internetu',
    icon: Factory,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Czy potrzebuję drogiego superkomputera?",
    answer: "Nie zawsze. Do wielu zastosowań wystarczy mocna stacja robocza z kartą graficzną (GPU) klasy konsumenckiej. Dostarczamy gotowe rozwiązania sprzętowe lub doradzamy przy zakupie.",
  },
  {
    question: "Czy AI zmyśla fakty (halucynuje)?",
    answer: "Minimalizujemy to ryzyko stosując technikę RAG (Retrieval-Augmented Generation). Nasze AI opiera odpowiedzi wyłącznie na dostarczonych przez Ciebie dokumentach i zawsze podaje źródło informacji.",
  },
  {
    question: "Czy moje dane są bezpieczne?",
    answer: "Tak. To nasza główna obietnica. Model działa lokalnie, kabel sieciowy może być nawet odłączony. Żaden bajt danych nie jest wysyłany do OpenAI, Google czy Microsoftu.",
  },
  {
    question: "Czy to rozwiązanie jest zgodne z RODO?",
    answer: "Absolutnie. Ponieważ dane nie są powierzane podmiotom trzecim (przetwarzanie w chmurze), odpada wiele ryzyk prawnych związanych z transferem danych poza EOG.",
  },
];

export const COMPARISON_DATA: ChartData[] = [
  { name: 'Prywatność', Cloud: 40, Local: 100 },
  { name: 'Kontrola', Cloud: 30, Local: 100 },
  { name: 'Koszty (Długi termin)', Cloud: 90, Local: 20 },
  { name: 'Zależność od Internetu', Cloud: 100, Local: 0 },
];
