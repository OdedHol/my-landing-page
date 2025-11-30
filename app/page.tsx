'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardBody, CardFooter } from '@/components/ui/Card';
import List, { ListItem } from '@/components/ui/List';
import Input, { TextArea, Select } from '@/components/ui/Input';
import Container, { Section, Grid } from '@/components/ui/Container';
import { Display, Heading, Text, Badge } from '@/components/ui/Typography';

// Decorative SVG Components
function FloatingOrb({ top, left, size = 200, delay = 0 }: { top: string; left: string; size?: number; delay?: number }) {
  return (
    <svg
      style={{
        position: 'absolute',
        top,
        left,
        width: size,
        height: size,
        opacity: 0.2,
        pointerEvents: 'none',
        animation: `float ${10 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        zIndex: 0,
      }}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`grad-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fec89a', stopOpacity: 0.3 }} />
          <stop offset="50%" style={{ stopColor: '#fec5bb', stopOpacity: 0.25 }} />
          <stop offset="100%" style={{ stopColor: '#ffd7ba', stopOpacity: 0.2 }} />
        </linearGradient>
        <filter id={`blur-${delay}`}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>
      <path
        fill={`url(#grad-${delay})`}
        filter={`url(#blur-${delay})`}
        d="M47.1,-57.8C59.9,-47.3,68.4,-31.4,72.3,-14.2C76.2,3,75.5,21.4,67.8,36.1C60.1,50.8,45.4,61.8,29.3,67.4C13.2,73,-4.3,73.2,-20.7,68.5C-37.1,63.8,-52.4,54.2,-61.5,40.2C-70.6,26.2,-73.5,7.8,-70.4,-9.2C-67.3,-26.2,-58.2,-41.8,-45.4,-52.3C-32.6,-62.8,-16.3,-68.2,0.4,-68.7C17.1,-69.2,34.3,-68.3,47.1,-57.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

function WaveDecoration({ position = 'top' }: { position?: 'top' | 'bottom' }) {
  return (
    <svg
      style={{
        position: 'absolute',
        [position]: 0,
        left: 0,
        width: '100%',
        height: '100px',
        pointerEvents: 'none',
        transform: position === 'bottom' ? 'scaleY(-1)' : 'none',
        zIndex: 1,
      }}
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`wave-grad-${position}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#ffe5d9', stopOpacity: 0.3 }} />
          <stop offset="50%" style={{ stopColor: '#fae1dd', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: '#f8edeb', stopOpacity: 0.3 }} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#wave-grad-${position})`}
        d="M0,50 C360,20 360,80 720,50 C1080,20 1080,80 1440,50 L1440,100 L0,100 Z"
      />
    </svg>
  );
}

function DecorativePattern() {
  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.02,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1.5" fill="#fec89a" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

function SparkleIcon({ delay = 0, top, left }: { delay?: number; top: string; left: string }) {
  return (
    <svg
      style={{
        position: 'absolute',
        top,
        left,
        width: '24px',
        height: '24px',
        animation: `sparkle 3s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        opacity: 0.6,
        pointerEvents: 'none',
      }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"
        fill="url(#sparkle-gradient)"
      />
      <defs>
        <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fec89a' }} />
          <stop offset="100%" style={{ stopColor: '#fec5bb' }} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Add keyframe animations to document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translate(0, 0) rotate(0deg);
        }
        25% {
          transform: translate(10px, -10px) rotate(5deg);
        }
        50% {
          transform: translate(-5px, -20px) rotate(-5deg);
        }
        75% {
          transform: translate(-10px, -10px) rotate(3deg);
        }
      }

      @keyframes sparkle {
        0%, 100% {
          opacity: 0.3;
          transform: scale(0.8) rotate(0deg);
        }
        50% {
          opacity: 1;
          transform: scale(1.2) rotate(180deg);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .animate-on-scroll {
        opacity: 0;
      }

      .animate-on-scroll.visible {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .animate-scale {
        opacity: 0;
      }

      .animate-scale.visible {
        animation: fadeInScale 0.8s ease-out forwards;
      }

      .animate-left {
        opacity: 0;
      }

      .animate-left.visible {
        animation: slideInLeft 0.8s ease-out forwards;
      }

      .animate-right {
        opacity: 0;
      }

      .animate-right.visible {
        animation: slideInRight 0.8s ease-out forwards;
      }

      .stagger-1 {
        animation-delay: 0.1s;
      }

      .stagger-2 {
        animation-delay: 0.2s;
      }

      .stagger-3 {
        animation-delay: 0.3s;
      }

      .stagger-4 {
        animation-delay: 0.4s;
      }

      .hero-content {
        animation: fadeInScale 1s ease-out;
      }

      .premium-texture {
        position: relative;
      }

      .premium-texture::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image:
          radial-gradient(circle at 20% 50%, rgba(254, 200, 154, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(254, 197, 187, 0.05) 0%, transparent 50%);
        pointer-events: none;
        z-index: 0;
      }
    `;
    document.head.appendChild(style);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-scale, .animate-left, .animate-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Section background="default" padding="large" className="premium-texture" style={{ position: 'relative', overflow: 'hidden', paddingTop: '10rem', paddingBottom: '10rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <DecorativePattern />
        <FloatingOrb top="10%" left="5%" size={300} delay={0} />
        <FloatingOrb top="60%" left="80%" size={250} delay={2} />
        <FloatingOrb top="30%" left="70%" size={180} delay={4} />
        <SparkleIcon top="15%" left="15%" delay={0} />
        <SparkleIcon top="25%" left="85%" delay={1} />
        <SparkleIcon top="70%" left="20%" delay={2} />

        <Container size="medium">
          <div ref={heroRef} className="hero-content" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ marginBottom: '2rem' }}>
              <Badge variant="secondary">Tel Aviv's Premier Food Concierge</Badge>
            </div>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.25rem', color: 'var(--color-text-primary)', letterSpacing: '0.02em' }}>
              Syd&amp;Eats
            </p>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1.75rem',
              background: 'linear-gradient(135deg, #fec89a 0%, #fec5bb 50%, #ffd7ba 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.15,
              maxWidth: '900px',
              margin: '0 auto 1.75rem'
            }}>
              Premium Food Concierge Service in Tel Aviv
            </h1>
            <Text
              variant="lead"
              color="secondary"
              align="center"
              style={{
                maxWidth: '640px',
                margin: '0 auto 3.5rem',
                fontSize: '1.25rem',
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              I'll book the restaurant, you show up hungry
            </Text>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="secondary" size="large">
                Get Started
              </Button>
              <Button variant="outline" size="large">
                Learn More
              </Button>
            </div>
          </div>
        </Container>

        <WaveDecoration position="bottom" />
      </Section>

      {/* Features Section */}
      <Section
        background="surface"
        padding="large"
        style={{
          position: 'relative',
          paddingTop: '8rem',
          paddingBottom: '8rem',
          background: 'linear-gradient(180deg, #ffffff 0%, #fef9f8 100%)',
        }}
      >
        <Container size="medium">
          <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '720px', margin: '0 auto 5rem' }}>
            <Heading level={2} className="animate-on-scroll" style={{ fontSize: 'clamp(2.25rem, 4vw, 2.75rem)', marginBottom: '1.25rem', fontWeight: 700 }}>
              What We Offer
            </Heading>
            <Text variant="lead" color="secondary" align="center" className="animate-on-scroll stagger-1" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              Curated dining experiences crafted exclusively for discerning food enthusiasts
            </Text>
          </div>

          <Grid columns={3} gap="large" style={{ position: 'relative', zIndex: 1 }}>
            <div className="animate-scale stagger-1">
              <Card
                variant="feature"
                hoverable
                style={{
                  height: '100%',
                  background: '#ffffff',
                  border: '1px solid var(--color-border-light)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(252, 213, 206, 0.12)',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-15%',
                  width: '160px',
                  height: '160px',
                  background: 'radial-gradient(circle, rgba(254, 200, 154, 0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }} />
                <CardHeader
                  icon="🍽️"
                  title="Restaurant Booking"
                  subtitle="Premium reservations"
                />
                <CardBody>
                  <Text color="secondary" style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
                    Access to Tel Aviv's most exclusive restaurants. We handle the reservations, you enjoy the experience.
                  </Text>
                </CardBody>
              </Card>
            </div>

            <div className="animate-scale stagger-2">
              <Card
                variant="feature"
                hoverable
                style={{
                  height: '100%',
                  background: '#ffffff',
                  border: '1px solid var(--color-border-light)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(252, 213, 206, 0.12)',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-15%',
                  width: '160px',
                  height: '160px',
                  background: 'radial-gradient(circle, rgba(254, 197, 187, 0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }} />
                <CardHeader
                  icon="👨‍🍳"
                  title="Curated Selection"
                  subtitle="Personalized recommendations"
                />
                <CardBody>
                  <Text color="secondary" style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
                    Handpicked dining experiences tailored to your preferences and dietary requirements.
                  </Text>
                </CardBody>
              </Card>
            </div>

            <div className="animate-scale stagger-3">
              <Card
                variant="feature"
                hoverable
                style={{
                  height: '100%',
                  background: '#ffffff',
                  border: '1px solid var(--color-border-light)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(252, 213, 206, 0.12)',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-15%',
                  width: '160px',
                  height: '160px',
                  background: 'radial-gradient(circle, rgba(255, 215, 186, 0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }} />
                <CardHeader
                  icon="⭐"
                  title="VIP Treatment"
                  subtitle="Exclusive access"
                />
                <CardBody>
                  <Text color="secondary" style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
                    Skip the wait and enjoy priority seating at the city's hottest culinary destinations.
                  </Text>
                </CardBody>
              </Card>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Services List with Form */}
      <Section
        background="default"
        padding="large"
        className="premium-texture"
        style={{
          position: 'relative',
          paddingTop: '8rem',
          paddingBottom: '8rem',
          overflow: 'hidden',
        }}
      >
        <FloatingOrb top="20%" left="85%" size={200} delay={1} />
        <Container size="medium">
          <Grid columns={2} gap="large" style={{ alignItems: 'center' }}>
            <div className="animate-left" style={{ paddingRight: 'clamp(1rem, 3vw, 3rem)' }}>
              <Heading level={2} style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.25rem', lineHeight: 1.25, fontWeight: 700 }}>
                Why Choose Syd&amp;Eats?
              </Heading>
              <Text color="secondary" style={{ fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '3rem', color: 'var(--color-text-secondary)' }}>
                Sydney Wolff brings years of culinary expertise and insider connections to ensure
                your dining experiences are nothing short of extraordinary.
              </Text>

              <List variant="feature" style={{ marginTop: '2.5rem' }}>
                <div className="animate-left stagger-1">
                  <ListItem
                    icon="📱"
                    title="Simple Process"
                    description="Tell us your preferences and we handle the rest"
                  />
                </div>
                <div className="animate-left stagger-2">
                  <ListItem
                    icon="🎯"
                    title="Perfect Match"
                    description="Every restaurant selection is carefully curated"
                  />
                </div>
                <div className="animate-left stagger-3">
                  <ListItem
                    icon="💎"
                    title="Premium Service"
                    description="White-glove concierge experience from start to finish"
                  />
                </div>
              </List>
            </div>

            <div className="animate-right" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(254, 200, 154, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                pointerEvents: 'none',
                zIndex: 0,
              }} />
              <Card
                variant="elevated"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 12px 48px rgba(254, 200, 154, 0.18), 0 0 1px rgba(0,0,0,0.05)',
                  border: '1px solid var(--color-border-light)',
                }}
              >
                <CardHeader title="Book Your Experience" />
                <CardBody>
                  <Input
                    label="Name"
                    placeholder="Your name"
                    fullWidth
                    required
                  />
                  <Input
                    type="email"
                    label="Email"
                    placeholder="your@email.com"
                    fullWidth
                    required
                  />
                  <Select
                    label="Party Size"
                    fullWidth
                    required
                    options={[
                      { value: '', label: 'Select party size' },
                      { value: '2', label: '2 people' },
                      { value: '4', label: '4 people' },
                      { value: '6', label: '6 people' },
                      { value: '8+', label: '8+ people' },
                    ]}
                  />
                  <TextArea
                    label="Special Requests"
                    placeholder="Dietary restrictions, preferences, occasion..."
                    fullWidth
                    rows={4}
                  />
                </CardBody>
                <CardFooter>
                  <Button variant="secondary" fullWidth size="large">
                    Request Reservation
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Benefits Checklist */}
      <Section
        background="surface"
        padding="large"
        style={{
          background: 'linear-gradient(180deg, #fef9f8 0%, #ffffff 100%)',
          paddingTop: '8rem',
          paddingBottom: '8rem',
          position: 'relative',
        }}
      >
        <Container size="small">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <Heading level={2} className="animate-on-scroll" style={{ fontSize: 'clamp(2.25rem, 4vw, 2.75rem)', marginBottom: '1.25rem', fontWeight: 700 }}>
              What You Get
            </Heading>
            <Text variant="lead" color="secondary" align="center" className="animate-on-scroll stagger-1" style={{ maxWidth: '620px', margin: '0 auto', fontSize: '1.125rem', lineHeight: 1.7 }}>
              A comprehensive concierge service designed to elevate every dining moment
            </Text>
          </div>

          <div
            className="animate-scale stagger-2"
            style={{
              background: 'white',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 8px 32px rgba(252, 213, 206, 0.12)',
              border: '1px solid var(--color-border-light)',
            }}
          >
            <List variant="checklist">
              <ListItem title="Guaranteed reservations at top Tel Aviv restaurants" />
              <ListItem title="Personalized dining recommendations based on your taste" />
              <ListItem title="Priority access and preferred seating arrangements" />
              <ListItem title="Special occasion coordination and surprises" />
              <ListItem title="Dietary accommodation and menu consultation" />
              <ListItem title="Flexible rescheduling and cancellation support" />
            </List>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section
        background="accent"
        padding="large"
        style={{
          background: 'linear-gradient(135deg, #fec89a 0%, #fec5bb 50%, #ffd7ba 100%)',
          paddingTop: '7rem',
          paddingBottom: '7rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }} />

        <Container size="small">
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Heading level={2} className="animate-on-scroll" style={{ color: 'white', fontSize: 'clamp(2.25rem, 4vw, 3rem)', marginBottom: '1.5rem', textShadow: '0 2px 20px rgba(0,0,0,0.1)', fontWeight: 700 }}>
              Ready to Elevate Your Dining?
            </Heading>
            <Text
              variant="lead"
              className="animate-on-scroll stagger-1"
              style={{
                color: 'rgba(255, 255, 255, 0.95)',
                marginBottom: '3rem',
                fontSize: '1.125rem',
                lineHeight: 1.7,
                textShadow: '0 1px 10px rgba(0,0,0,0.05)',
                maxWidth: '640px',
                margin: '0 auto 3rem',
              }}
            >
              Let Sydney Wolff handle the details while you focus on what matters—great food and
              great company.
            </Text>
            <div className="animate-scale stagger-2">
              <Button
                variant="primary"
                size="large"
                style={{
                  background: 'white',
                  color: 'var(--color-text-primary)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  fontWeight: 600,
                }}
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Section background="default" padding="medium">
        <Container size="medium">
          <div style={{
            textAlign: 'center',
            borderTop: '1px solid var(--color-border)',
            paddingTop: '3rem',
            paddingBottom: '2rem',
          }}>
            <Text variant="small" color="light" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
              © 2024 Syd&amp;Eats. Premium food concierge service in Tel Aviv, Israel.
            </Text>
          </div>
        </Container>
      </Section>
    </>
  );
}
