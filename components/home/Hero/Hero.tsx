import { state } from "@/stores/store";
import { useProxy } from "valtio/utils";

export default function Hero() {
  const global = useProxy(state);
  return (
    <div
      className="flex w-full"
      onClick={() => {
        global.showSidebar = !global.showSidebar;
      }}
    >
      Hero
    </div>
  );
}
