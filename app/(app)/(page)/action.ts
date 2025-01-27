"use server";

export async function action(
  prevState: { message: string; error: boolean } | undefined,
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
    console.error(err);
    return {
      message: "Failed to send",
      error: true,
    };
  }
}
