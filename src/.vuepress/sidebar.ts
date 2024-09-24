import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "演唱会",
      icon: "zondicons:music-artist",
      prefix: "concert/",
      children: "structure",
      collapsible: true,
      expanded: true,
    },
  ],
});
