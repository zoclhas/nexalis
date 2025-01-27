import { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";

export const removeUploadsConverter: JSXConvertersFunction = (props) => {
  const { defaultConverters } = props;
  return {
    ...defaultConverters,
    upload: () => null,
  };
};
