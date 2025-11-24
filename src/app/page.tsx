"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Globe, Award, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="small"
      background="radialGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="SuperCoffee"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="SUPERCOFFEE"
          description="Experience the finest coffee crafted with passion. Premium beans, expert brewing, and unforgettable moments."
          buttons={[
            { text: "Explore Menu", href: "menu" },
            { text: "Visit Us", href: "contact" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979334646-ien3s0g8.jpg",
              imageAlt: "Fresh espresso cup with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979338363-ia7rtzqz.jpg",
              imageAlt: "Modern coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979341247-0k8brwjx.jpg",
              imageAlt: "Barista pouring latte art"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Crafted with passion, served with love. SuperCoffee is your destination for exceptional coffee experiences and warm community moments."
          buttons={[
            { text: "Learn Our Story", href: "https://example.com" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Our Signature Menu"
          description="Discover our carefully curated selection of premium coffee drinks"
          tag="Coffee Selection"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          products={[
            {
              id: "1",
              name: "Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979347610-vfd6is1t.jpg",
              imageAlt: "Double shot espresso",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Americano",
              price: "$4.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979345093-68jn8vj0.jpg",
              imageAlt: "Classic americano",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Cappuccino",
              price: "$5.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979346164-5pbm5wkc.jpg",
              imageAlt: "Creamy cappuccino",
              initialQuantity: 1
            },
            {
              id: "4",
              name: "Macchiato",
              price: "$5.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979349373-5ugoewf8.jpg",
              imageAlt: "Espresso macchiato",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Coffee Excellence"
          description="Numbers that showcase our commitment to quality"
          tag="By The Numbers"
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            {
              id: "1",
              value: "15K+",
              title: "Happy Customers",
              description: "Served daily with excellence",
              icon: Coffee
            },
            {
              id: "2",
              value: "50+",
              title: "Coffee Varieties",
              description: "From around the world",
              icon: Globe
            },
            {
              id: "3",
              value: "100%",
              title: "Fair Trade",
              description: "Ethically sourced beans",
              icon: Award
            },
            {
              id: "4",
              value: "10",
              title: "Years Strong",
              description: "Trusted since 2015",
              icon: Sparkles
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="Partner with premium suppliers who share our commitment to quality"
          tag="Our Partners"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979366577-lcq8ldq0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979370502-z7t90qj7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979371675-hpdoothz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979375955-m6kxxhdr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979379456-nm361xpm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979380936-yyzx9jqf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979382768-g8no8tnl.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Customer Love Stories"
          description="Hear from our loyal coffee enthusiasts"
          tag="Testimonials"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Executive",
              testimonial: "SuperCoffee has become my daily ritual. The quality and consistency are unmatched. Best coffee in the city!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979350592-3wfc1sug.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Software Developer",
              testimonial: "Great atmosphere for working, incredible espresso, and the baristas actually remember my order. A gem!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979352666-crjytqjs.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Freelance Designer",
              testimonial: "The cappuccino here is art. I come for the coffee, stay for the community vibe. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979355139-gxju8qni.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Consultant",
              testimonial: "Five stars across the board. Premium quality beans, knowledgeable staff, and perfect brewing every time.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979359593-rz02xx1e.jpg",
              imageAlt: "David Kim portrait"
            },
            {
              id: "5",
              name: "Jessica Martinez",
              role: "Author",
              testimonial: "My favorite coffee spot to write. The ambiance is perfect, and the lattes fuel my creativity daily.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979362326-hgrw1stn.jpg",
              imageAlt: "Jessica Martinez portrait"
            },
            {
              id: "6",
              name: "Thomas Anderson",
              role: "Architect",
              testimonial: "SuperCoffee sets the standard for specialty coffee. Worth every penny, and their sourcing practices are admirable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763979363951-fvgnvqfb.jpg",
              imageAlt: "Thomas Anderson portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Everything you need to know about SuperCoffee"
          textPosition="left"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What hours are you open?",
              content: "We're open Monday to Friday from 6am to 8pm, and Saturday to Sunday from 7am to 9pm. Holiday hours may vary."
            },
            {
              id: "2",
              title: "Do you offer online ordering?",
              content: "Yes! You can order online through our website or app for pickup or delivery. We aim to have your order ready in 10 minutes."
            },
            {
              id: "3",
              title: "Are your beans ethically sourced?",
              content: "Absolutely. 100% of our beans are Fair Trade certified and sourced directly from sustainable farms around the world."
            },
            {
              id: "4",
              title: "Do you have dietary options?",
              content: "Yes! We offer almond, oat, soy, and coconut milk alternatives, plus we have sugar-free syrups and vegan pastries available."
            },
            {
              id: "5",
              title: "Can I reserve a table for meetings?",
              content: "We have dedicated meeting spaces available. Please contact us at least 24 hours in advance to make a reservation."
            },
            {
              id: "6",
              title: "Do you offer catering services?",
              content: "Yes! We provide corporate catering for events. Contact our team for custom packages and pricing."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have a question or want to visit us? Fill out the form below and we'll respond within 24 hours."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "your@email.com",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "(123) 456-7890",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us what you're thinking...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="SuperCoffee"
          copyrightText="© 2025 SuperCoffee. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee Drinks", href: "menu" },
                { label: "Pastries", href: "menu" },
                { label: "Gift Cards", href: "https://example.com/gifts" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "https://example.com/careers" },
                { label: "Blog", href: "https://example.com/blog" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Feedback", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}