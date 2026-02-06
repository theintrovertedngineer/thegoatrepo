import { treaty } from "@elysiajs/eden";
import type { App } from "@goat-repo/api";

const api = treaty<App>("localhost:3000");

const { data: homeData, error: homeError } = await api.home.get();
const { data: langData, error: langError } = await api.lang.post({
  name: "TypeScript",
  creator: "Microsoft",
  creationYear: 2012,
  isCompiled: false,
});

console.log("=== /home endpoint ===");
console.log("response:", homeData);
if (homeError) {
  console.error("Error:", homeError);
}

console.log("\n=== /lang endpoint ===");
console.log("response:", langData);
if (langError) {
  console.error("Error:", langError);
}
