import Swal, { type SweetAlertOptions } from "sweetalert2";

// Tailwind-powered dark glass theme defaults
const glassTheme: SweetAlertOptions = {
  // Glassy popup surface
  background: "rgba(17,24,39,0.55)", // ~bg-gray-900/55
  color: "#e5e7eb", // text-gray-200
  iconColor: "#818cf8", // indigo-400
  // Dim page with a subtle tint
  backdrop: "rgba(2,6,23,0.35)", // ~bg-slate-950/35

  // Let Tailwind drive the look & feel
  buttonsStyling: false,
  customClass: {
    container: "!p-3",
    popup:
      "rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl !p-6 " +
      "bg-gray-900/60", // glassy base
    title: "text-lg font-semibold text-gray-100",
    htmlContainer: "text-gray-300 leading-relaxed",
    confirmButton:
      "px-5 py-2 min-w-[9rem] rounded-xl font-medium bg-indigo-500 text-white " +
      "hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 " +
      "disabled:opacity-60",
    denyButton:
      "px-4 py-2 rounded-xl font-medium bg-rose-600/90 text-white " +
      "hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400",
    cancelButton:
      "px-4 py-2 rounded-xl font-medium bg-gray-700/70 text-gray-200 " +
      "hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400",
    actions: "gap-3",
    closeButton: "text-gray-400 hover:text-gray-200",
    input:
      "rounded-xl bg-gray-800/60 border border-white/10 text-gray-100 " +
      "placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent",
    timerProgressBar: "bg-indigo-400",
  },
};

// Base mixin (use this for full SweetAlert2 control)
export const glassSwal = Swal.mixin({
  ...glassTheme,
  // sensible defaults; override per call
  confirmButtonText: "OK",
});

export function fire(options: SweetAlertOptions) {
  return glassSwal.fire(options);
}
