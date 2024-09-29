// widgetsData.ts
import { Leaf, Home, CalendarDays, Bell, BookMarked, Sprout } from 'lucide-react';

interface WidgetData {
  link: string;
  titulo: string;
  layout: string;
  icono: React.ReactNode;
  finalizado: boolean;
}

export function getWidgets(cultivoId: string | null): WidgetData[] {
  return [
    {
      link: "cultivos",
      titulo: "Mis cultivos",
      layout: "2 Cultivos",
      icono: <Leaf className="w-6 h-6 text-primary" />,
      finalizado: true,
    },
    {
      link: "dashboard",
      titulo: "Dashboard",
      layout: cultivoId ? `${cultivoId}` : 'Selecciona un cultivo',
      icono: <Home className="w-6 h-6 text-primary" />,
      finalizado: !!cultivoId,
    },
    {
      link: "calendario",
      titulo: "Calendario",
      layout: "5 Tareas pendientes",
      icono: <CalendarDays className="w-6 h-6 text-primary" />,
      finalizado: false,
    },
    {
      link: "alertas",
      titulo: "Alertas",
      layout: "3 Nuevas alertas",
      icono: <Bell className="w-6 h-6 text-primary" />,
      finalizado: false,
    },
    {
      link: "recetas",
      titulo: "Recetas",
      layout: "Nuevas recetas",
      icono: <BookMarked className="w-6 h-6 text-primary" />,
      finalizado: true,
    },
    {
      link: "semillas",
      titulo: "Semillas",
      layout: "Nuevas semillas",
      icono: <Sprout className="w-6 h-6 text-primary" />,
      finalizado: false,
    },
  ];
}
