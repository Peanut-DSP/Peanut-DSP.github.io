import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Mail,
  MapPin,
  Github,
  Workflow,
  Database,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 relative flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/peanut-logo.svg"
              alt="Peanut DSP Logo"
              width={40}
              height={40}
              className="brightness-0"
            />
            <span className="text-2xl font-extrabold font-[family-name:var(--font-outfit)]">Peanut DSP</span>
          </div>
          <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="/docs" className="text-sm font-medium hover:text-primary transition-colors">Docs</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://bsky.app" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/10 via-gray-400/10 to-gray-300/10 blur-2xl rounded-full transform scale-125" />
            <h1 className="relative text-7xl md:text-9xl font-bold tracking-tight font-[family-name:var(--font-inter)] leading-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)] pb-2 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              gDAQ
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Automate everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible and Powerful
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All the capabilities of proprietary software 
              without the price tag.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
              <Card>
                <CardHeader>
                  <Workflow className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Flowchart Based Editing</CardTitle>
                  <CardDescription>
                    Build your processes just like you visualize them,
                    with an easy-to-navigate and powerful flowchart editor.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Custom Visualizations</CardTitle>
                  <CardDescription>
                    Pick from a long list of different charts and graphs
                    to visualize process variables.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Image
                    src="/rust.svg"
                    alt="Rust"
                    width={56}
                    height={56}
                    className="mb-1"
                  />
                  <CardTitle>Built With Rust</CardTitle>
                  <CardDescription>
                    gDAQ's execution engine is built entirely
                    with Rust, making it performant and reliable.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Image
                    src="/python.svg"
                    alt="Python"
                    width={40}
                    height={40}
                    className="mb-2 brightness-0"
                  />
                  <CardTitle>Extendable With Python</CardTitle>
                  <CardDescription>
                    Have calculations you want to run, or an instrument
                    you want to connect to? Use custom actions and instruments
                    written in Python to extend the capabilities of gDAQ.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Endlessly Connectable</CardTitle>
                  <CardDescription>
                    Send data to any common DBMS, REST APIs, OPC UA, MQTT,
                    or any number of other destinations.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Email</CardTitle>
                <CardDescription>
                  john@peanutdsp.com
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Location</CardTitle>
                <CardDescription>
                  Denver, CO
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/peanut-logo.svg"
                alt="Peanut DSP Logo"
                width={24}
                height={24}
                className="brightness-0"
              />
              <span className="font-bold font-[family-name:var(--font-outfit)]">Peanut DSP</span>
            </div>
            <p className="text-sm text-muted-foreground">
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
