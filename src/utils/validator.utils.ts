/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  checkFloatRegex,
  checkingContentRegex,
  checkNumberRegex,
  noHTMLRegex,
  passwordRegex,
} from "@/utils/regex.utils";

// helper function to test for no HTML
export const noHTMLTest = (value: string) => {
  return !noHTMLRegex.test(value);
};

export const passwordTest = (value: string) => {
  return passwordRegex.test(value);
};

export const customContentTest = (value: string) => {
  return checkingContentRegex.test(value);
};

// Helper function to test for valid image/video file
export const isValidImageOrVideo = (value: any) => {
  const isFileList = value instanceof FileList;
  const isString = typeof value === "string";
  return (
    (isFileList && value.length > 0) || (isString && value.startsWith("https"))
  );
};

// Helper function to test for file size
export const isValidFileSize = (value: any) => {
  const isFileList = value instanceof FileList;
  const isString = typeof value === "string";
  return (
    (isFileList && value.length > 0 && value[0]?.size < 1024 * 1024 * 2) ||
    (isString && value.startsWith("https"))
  );
};

// Helper function to test for valid file format
export const isValidFileFormat = (
  value: any,
  formatList: { image?: boolean; video?: boolean; custom?: string[] },
) => {
  const { image, video, custom } = formatList;

  const imageFormat = ["image/jpg", "image/jpeg", "image/png"];
  const videoFormat = ["video/mp4", "video/mkv"];

  const isFileList = value instanceof FileList;
  const isString = typeof value === "string";

  const validFormatList = [
    ...(image ? imageFormat : []),
    ...(video ? videoFormat : []),
    ...(custom || []),
  ];

  return (
    (isFileList &&
      value.length > 0 &&
      validFormatList.includes(value[0]?.type)) ||
    (isString && value.startsWith("https"))
  );
};

// Helper function to test number
export const checkNumberTest = (value: string) => {
  return checkNumberRegex.test(value);
};

// Helper function to test number
export const checkFloatTest = (value: string) => {
  return checkFloatRegex.test(value);
};
