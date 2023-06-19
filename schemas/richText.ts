import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  BaseAccessArgs,
  AccessOperation,
} from "@keystone-6/core/dist/declarations/src/types/config/access-control";
import { image, text } from "@keystone-6/core/fields";
import { BaseListTypeInfo, MaybePromise } from "@keystone-6/core/types";
import { document } from "@keystone-6/fields-document";

export default list({
  fields: {
    RichText: document({
      formatting: true,
      dividers: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
      ],
    }),
  },
  access: allowAll,
});
