import * as retry from "async-retry";

retry(() => {
  // nothing
}, {
  retries: 3
})