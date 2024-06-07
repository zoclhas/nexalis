"use client";

export async function submitForm(
  prevState: { message: string; error: boolean },
  form: FormData,
) {
  try {
    const honeyPot = form.get("name");
    if (honeyPot) {
      return {
        message: "Sent!",
        error: false,
      };
    }

    return {
      message: "Sent!",
      error: false,
    };
  } catch (err) {
    return {
      message: "Failed to send",
      error: true,
    };
  }
}
