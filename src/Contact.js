import { useState } from "react";
import "./Contact.css";
import KeyboardButton from "./components/KeyboardButton";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "E-Mail jest wymagany";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Niepoprawny adres E-Mail";
    }

    if (!formData.subject) {
      newErrors.subject = "Wybierz temat wiadomości";
    }

    if (!formData.message) {
      newErrors.message = "Wiadomość nie może być pusta";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Formularz wysłany");

    setFormData({ email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <main>
    <form className="form" onSubmit={handleSubmit}>
      <h2>Kontakt</h2>

      <label>
        E-Mail:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Podaj swoj mail"
        />
      </label>
        {errors.email && <span className="error">{errors.email}</span>}


      <label>
        Temat wiadomości:
        <select name="subject" value={formData.subject} onChange={handleChange}>
          <option value="">-- Wybierz temat --</option>
          <option value="pytanie">Pytanie</option>
          <option value="sugestia">Sugestia</option>
          <option value="inny">Inny</option>
        </select>
      </label>
        {errors.subject && <span className="error">{errors.subject}</span>}


      <label>
        Wiadomość:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Twoja wiadomość"
        />
      </label>
        {errors.message && <span className="error">{errors.message}</span>}

        <KeyboardButton type="sumbitZ" text="Wyslij"/>
    </form>
    </main>

  );
}

export default Contact;