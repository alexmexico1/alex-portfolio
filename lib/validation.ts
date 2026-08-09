export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!data.name.trim()) {
    return "Please enter your name.";
  }

  if (!isValidEmail(data.email)) {
    return "Please enter a valid email address.";
  }

  if (!data.subject.trim()) {
    return "Please enter a subject.";
  }

  if (!data.message.trim()) {
    return "Please enter your message.";
  }

  return null;
}