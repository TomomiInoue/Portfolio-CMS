import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  BaseAccessArgs,
  AccessOperation,
} from "@keystone-6/core/dist/declarations/src/types/config/access-control";
import { image, relationship, text } from "@keystone-6/core/fields";
import { BaseListTypeInfo, MaybePromise } from "@keystone-6/core/types";
import { document } from "@keystone-6/fields-document";
import richText from "./richText";

export default list({
  fields: {
    Bio: relationship({ ref: "RichText" }),
  },
  access: allowAll,
});
