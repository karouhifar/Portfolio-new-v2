import React from "react";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-surface to-brand-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent-1/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-accent-2/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm text-sm">
                <span className="text-brand-accent-1">●</span>
                <span>Cloud</span>
                <span className="text-brand-accent-2">●</span>
                <span>Data</span>
                <span className="text-brand-primary">●</span>
                <span>Web</span>
              </div>
            </div>

            <h1 className="hero-text">
              I build reliable data pipelines and cinematic web experiences.
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              From E2E ingestion on Databricks to interactive 3D front-ends, I
              ship fast, durable systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group">
                Book a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button>
                <Download className="w-5 h-5" />
                View Resume
              </button>
            </div>
          </div>

          {/* Right Column - 3D Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* 3D Image with Glow Effect */}
              <div className="relative rounded-3xl overflow-hidden glow-border">
                <img
                  src={
                    "https://thumbs.dreamstime.com/b/monkey-wearing-suit-tie-posing-business-portrait-businessman-formal-corporate-371978098.jpg"
                  }
                  alt="3D geometric visualization representing modern tech"
                  className="w-full h-full object-cover animate-float"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/30 to-transparent" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-accent-1/20 rounded-full blur-xl animate-glow" />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-accent-2/20 rounded-full blur-xl animate-glow"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
