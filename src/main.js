import { logger } from "./applications/logging";
import { web } from "./applications/web";

web.listen(3000, () => {
  logger.info("App start");
})