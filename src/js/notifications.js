import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { info } from "@pnotify/core";

function runInfoNotification() {
  info({
    text: "Sorry :) No matches found",
    delay: 1000,
  });
}

export default runInfoNotification;
