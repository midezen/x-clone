"use server";

export const shareAction = async (formData: FormData) => {
  const file = formData.get("file");
  const desc = formData.get("desc");
  console.log({ file, desc });
};
