"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Rocket,
  Settings,
  Code,
  Zap,
  Github,
  ChevronRight
} from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 relative flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/peanut-logo.svg"
              alt="Peanut DSP Logo"
              width={32}
              height={32}
              className="brightness-0"
            />
            <span className="text-xl font-extrabold font-[family-name:var(--font-outfit)]">Peanut DSP</span>
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-xl font-bold font-[family-name:var(--font-geist-mono)] tracking-tight">gDAQ</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-20 h-fit">
            <nav className="space-y-1">
              <div className="pb-4">
                <h3 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wider">
                  Getting Started
                </h3>
                <div className="space-y-1">
                  <Link
                    href="#introduction"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    <BookOpen className="h-4 w-4" />
                    Introduction
                  </Link>
                  <Link
                    href="#installation"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    <Rocket className="h-4 w-4" />
                    Installation
                  </Link>
                  <Link
                    href="#quickstart"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    <Zap className="h-4 w-4" />
                    Quick Start
                  </Link>
                </div>
              </div>

              <div className="pb-4">
                <h3 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wider">
                  Core Concepts
                </h3>
                <div className="space-y-1">
                  <Link
                    href="#flowcharts"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Flowcharts
                  </Link>
                  <Link
                    href="#actions"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Actions
                  </Link>
                  <Link
                    href="#instruments"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Instruments
                  </Link>
                  <Link
                    href="#visualizations"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Visualizations
                  </Link>
                </div>
              </div>

              <div className="pb-4">
                <h3 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wider">
                  Advanced
                </h3>
                <div className="space-y-1">
                  <Link
                    href="#python-extensions"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    <Code className="h-4 w-4" />
                    Python Extensions
                  </Link>
                  <Link
                    href="#configuration"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    <Settings className="h-4 w-4" />
                    Configuration
                  </Link>
                </div>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 font-[family-name:var(--font-outfit)]">
                Documentation
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to get started with gDAQ
              </p>
            </div>

            {/* Introduction Section */}
            <section id="introduction" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-8 w-8" />
                Introduction
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  Under Construction
                </p>
              </div>
            </section>

            {/* Installation Section */}
            <section id="installation" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Rocket className="h-8 w-8" />
                Installation
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  Under Construction
                </p>
              </div>
            </section>

            {/* Quick Start Section */}
            <section id="quickstart" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Zap className="h-8 w-8" />
                Quick Start
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  Under Construction
                </p>
              </div>
            </section>

            {/* Python Extensions Section */}
            <section id="python-extensions" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Code className="h-8 w-8" />
                Python Extensions
              </h2>
              <div className="prose prose-slate max-w-none">
                <Card className="my-6">
                  <CardHeader>
                    <CardTitle>Creating a Custom Action and Instrument</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SyntaxHighlighter
                      language="python"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem',
                      }}
                    >
                      {`from pygdaq import instrument, action

@action("Rolling Average")
def rolling_average(last_ten_values: list[float]) -> float:
    average = sum(last_ten_values) / len(last_ten_values)
    return average

@instrument("My Instrument")
class MyInstrument:
    port: int
    connection: SomeInstrumentConn

    def __init__(self, port: int):
        self.port = port

    @instrument.read
    def my_read_method(self) -> float:
        result = self.connection.read(port)
        return result

    @instrument.write
    def my_write_method(self, value: float) -> None:
        self.connection.write(value)

    @instrument.custom("My Custom Method")
    def my_custom_method(self, value: float, other_value: float) -> None:
        self.connection.do_something(value, other_value)`}
                    </SyntaxHighlighter>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Next Steps */}
            <section className="mt-16 border-t pt-8">
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <p className="text-lg text-muted-foreground">Under Construction</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
