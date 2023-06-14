import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  BaseAccessArgs,
  AccessOperation,
} from "@keystone-6/core/dist/declarations/src/types/config/access-control";
import { text } from "@keystone-6/core/fields";
import { BaseListTypeInfo, MaybePromise } from "@keystone-6/core/types";
import { document } from "@keystone-6/fields-document";

export default list({
  fields: {
    company: text({ validation: { isRequired: true } }),
    position: text({ validation: { isRequired: true } }),
    period: text({ validation: { isRequired: true } }),
    body: document({
      formatting: true,
      dividers: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
      ],
    }),
    tech: text({ validation: { isRequired: true } }),
  },
  access: allowAll,
});
