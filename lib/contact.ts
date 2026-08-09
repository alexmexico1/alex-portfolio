export type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendMessage(data: ContactForm) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}