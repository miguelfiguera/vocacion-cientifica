import { create } from "zustand";

export const headerStore = create((set) => ({
  headerTitle: "",
  vocation: () => set({ headerTitle: "Proyecto Vocación Científica" }),
  comoParticipar: () => set({ headerTitle: "¿Cómo participar?" }),
  entrevistas: () => set({ headerTitle: "Entrevistas" }),
  entrevistados: () => set({ headerTitle: "Entrevistados" }),
}));
