import { state } from "@/stores/store";
import { useProxy } from "valtio/utils";
import { motion } from "framer-motion"; // Add this import

export default function Sidebar() {
  const global = useProxy(state);
  if (!global.showSidebar) return null;

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="fixed top-0 left-0 h-screen p-[10px] z-100 pt-[60px] w-[250px]"
    >
      <div
        className="bg-gray-200 relative h-full"
        style={{
          borderRadius: "20px 0 20px 20px",
        }}
      >
        sidebar
      </div>
    </motion.div>
  );
}
