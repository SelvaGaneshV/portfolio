import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold">Selva Ganesh</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Software Engineer building scalable web apps and clean UI experiences.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-semibold tracking-wide uppercase">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${import.meta.env.VITE_EMAIL}`}
                className="break-all hover:text-foreground"
              >
                {import.meta.env.VITE_EMAIL}
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 {import.meta.env.VITE_PHONE_NUMBER}</span>
            </li>

            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Tirunelveli, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-3 text-sm font-semibold tracking-wide uppercase">Connect</h4>

          <div className="flex gap-3">
            <Button variant="outline" size="icon" asChild>
              <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t pt-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Selva Ganesh. All rights reserved.
      </div>
    </footer>
  );
}

export default Contact;
