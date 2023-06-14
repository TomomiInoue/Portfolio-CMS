import { list } from "@keystone-6/core";
import {
  BaseAccessArgs,
  AccessOperation,
} from "@keystone-6/core/dist/declarations/src/types/config/access-control";
import { text, password, select } from "@keystone-6/core/fields";
import { BaseListTypeInfo, MaybePromise } from "@keystone-6/core/types";
export default list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ validation: { isRequired: true }, isIndexed: "unique" }),
    password: password({ validation: { isRequired: true } }),
  },
  access: function (
    args: BaseAccessArgs<BaseListTypeInfo> & { operation: AccessOperation }
  ): MaybePromise<boolean> {
    throw new Error("Function not implemented.");
  },
});
