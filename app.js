document.addEventListener('DOMContentLoaded', () => {
  // Cloudinary Image URL Dynamic Prefix Resolver
  const getCloudinaryUrl = (localPath) => {
    if (!localPath) return "";
    if (localPath.startsWith("http")) return localPath;
    
    // Explicit mappings for uploaded Cloudinary images:
    if (localPath.includes("uds_alleppey_3.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/uds_alleppey_3_pqrxuw.jpg";
    }
    if (localPath.includes("founder.png")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/founder_xfuvif.jpg";
    }
    if (localPath.includes("blanket_days_2.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/blanket_days_2_rwa9ga.jpg";
    }
    if (localPath.includes("blanket_days_1.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/blanket_days_1_au1ybi.jpg";
    }
    if (localPath.includes("blanket_days_3.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/blanket_days_3_d6evn7.jpg";
    }
    if (localPath.includes("blanket_days_4.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/blanket_days_4_ytocek.jpg";
    }
    if (localPath.includes("blanket_days_5.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/blanket_days_5_a2f0yn.jpg";
    }
    if (localPath.includes("grand_cliff_5.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/grand_cliff_5_qvu8ac.jpg";
    }
    if (localPath.includes("grand_cliff_1.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/grand_cliff_1_djuj6m.jpg";
    }
    if (localPath.includes("grand_cliff_2.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/grand_cliff_2_b3xeqr.jpg";
    }
    if (localPath.includes("grand_cliff_3.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/grand_cliff_3_ddsoju.jpg";
    }
    if (localPath.includes("grand_cliff_4.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/grand_cliff_4_yts3vd.jpg";
    }
    if (localPath.includes("uds_alleppey_1.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/uds_alleppey_1_bhrmwi.jpg";
    }
    if (localPath.includes("uds_alleppey_2.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/uds_alleppey_2_rp3vsr.jpg";
    }
    if (localPath.includes("uds_alleppey_4.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/uds_alleppey_4_onmkuu.jpg";
    }
    if (localPath.includes("ramada_kochi_2.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/ramada_kochi_2_glcc9d.jpg";
    }
    if (localPath.includes("ramada_kochi_1.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/ramada_kochi_1_rqtczx.jpg";
    }
    if (localPath.includes("ramada_kochi_3.jpg")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/ramada_kochi_3_lorgg2.jpg";
    }
    if (localPath.includes("exp_spicetrails")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_spicetrails_c2eqsx.jpg";
    }
    if (localPath.includes("exp_backwaters")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_backwaters_ulreub.jpg";
    }
    if (localPath.includes("exp_kovalam")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_kovalam_zhoxbx.jpg";
    }
    if (localPath.includes("exp_culture")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_culture_xzvrsq.jpg";
    }
    if (localPath.includes("exp_ayurveda")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_ayurveda_yjlgmg.jpg";
    }
    if (localPath.includes("exp_athirapally")) {
      return "https://res.cloudinary.com/ltevzqit/image/upload/f_auto,q_auto/exp_athirapally_pvfc1x.jpg";
    }

    // Default fallback to local assets folder
    return localPath;
  };

  // ==========================================
  // 1. Sticky Navigation & Scroll States
  // ==========================================
  const header = document.querySelector('.header');
  const scrollThreshold = 50;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call on page load

  // ==========================================
  // 2. Mobile Nav Drawer & Overlay Toggles
  // ==========================================
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  const navLinks = document.querySelectorAll('.nav-link, #mobileNavDrawer .btn');

  const toggleMobileNav = () => {
    mobileToggle.classList.toggle('open');
    mobileDrawer.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    
    const mobileFloatingCta = document.getElementById('mobileFloatingCta');
    if (mobileDrawer.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
      if (mobileFloatingCta) mobileFloatingCta.classList.add('nav-drawer-open');
    } else {
      document.body.style.overflow = '';
      if (mobileFloatingCta) mobileFloatingCta.classList.remove('nav-drawer-open');
    }
  };

  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener('click', toggleMobileNav);
    mobileOverlay.addEventListener('click', toggleMobileNav);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer && mobileDrawer.classList.contains('active')) {
        toggleMobileNav();
      }
    });
  });

  // ==========================================
  // 3. Smooth Scroll Anchor Offset Fix
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        const headerOffset = 90; // Standard offset for sticky nav bar space
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================
  // 4. Testimonial Quotes Slider (Next/Prev Controls)
  // ==========================================
  const testSlides = document.querySelectorAll('.testimonial-slide');
  const prevTestBtn = document.getElementById('prevTestBtn');
  const nextTestBtn = document.getElementById('nextTestBtn');
  let activeTestIndex = 0;
  let testimonialInterval;

  const showTestimonial = (index) => {
    if (testSlides.length === 0) return;
    
    // Bounds check and wrap around
    if (index < 0) {
      activeTestIndex = testSlides.length - 1;
    } else if (index >= testSlides.length) {
      activeTestIndex = 0;
    } else {
      activeTestIndex = index;
    }

    testSlides.forEach((slide, idx) => {
      if (idx === activeTestIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  };

  if (prevTestBtn && nextTestBtn) {
    prevTestBtn.addEventListener('click', () => {
      showTestimonial(activeTestIndex - 1);
      resetAutoPlay();
    });

    nextTestBtn.addEventListener('click', () => {
      showTestimonial(activeTestIndex + 1);
      resetAutoPlay();
    });
  }

  // Auto-play Testimonials every 7 seconds
  const startAutoPlay = () => {
    testimonialInterval = setInterval(() => {
      showTestimonial(activeTestIndex + 1);
    }, 7000);
  };

  const resetAutoPlay = () => {
    clearInterval(testimonialInterval);
    startAutoPlay();
  };

  if (testSlides.length > 0) {
    startAutoPlay();
  }

  // ==========================================
  // 5. FAQ Accordion Toggle
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.maxHeight = '0px';
          }
        });

        if (isOpen) {
          item.classList.remove('active');
          answer.style.maxHeight = '0px';
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // ==========================================
  // 6. Scroll-Driven Center-Viewport Fade-in Animations
  // ==========================================
  const animatedElements = document.querySelectorAll('.fade-in-section');

  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Trigger once when near viewport center
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '-20% 0px -20% 0px' // Center trigger across all sections
  });

  animatedElements.forEach(el => {
    animationObserver.observe(el);
  });

  // ==========================================
  // 7. Inquiry Form Client Submission Handling
  // ==========================================
  const inquiryForm = document.getElementById('inquiryForm');
  const successOverlay = document.getElementById('formSuccessOverlay');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Form validation (Name and Phone only as per brief)
      const name = document.getElementById('fullName')?.value.trim() || '';
      const phone = document.getElementById('phone')?.value.trim() || '';

      if (!name || !phone) {
        alert('Please fill out all required fields.');
        return;
      }

      // Validate phone number format (minimum 7 digits, maximum 18 characters including spaces, dashes, +, and brackets)
      const phoneRegex = /^\+?[0-9\s\-()]{7,18}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        const phoneInput = document.getElementById('phone');
        if (phoneInput) phoneInput.focus();
        return;
      }

      const formData = {
        name,
        phone
      };

      console.log('Sending Enquiry (Qnest Holidays):', formData);

      // Construct WhatsApp message and redirect in a new tab
      const waMsg = `Hello Qnest Holidays, I would like to plan a trip to Kerala.\n\nMy Details:\n- Name: ${name}\n- Phone: ${phone}`;
      const waUrl = `https://wa.me/919037534857?text=${encodeURIComponent(waMsg)}`;
      window.open(waUrl, '_blank');

      // Open Success Overlay popup
      successOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';

      inquiryForm.reset();
    });
  }

  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', () => {
      successOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (successOverlay) {
    successOverlay.addEventListener('click', (e) => {
      if (e.target === successOverlay) {
        successOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ==========================================
  // 8. Active Nav Link Scroll Spy
  // ==========================================
  const spySections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-menu .nav-link');

  const spyOptions = {
    root: null,
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, spyOptions);

  spySections.forEach(section => {
    spyObserver.observe(section);
  });

  // ==========================================
  // 9. About Section mobile Cover Flow Slider (Safe fallback)
  // ==========================================
  const collageContainer = document.getElementById('aboutCollage');
  if (collageContainer) {
    const slides = collageContainer.children;
    
    const updateActiveSlide = () => {
      if (window.innerWidth > 992) {
        Array.from(slides).forEach(slide => {
          slide.classList.remove('active-slide');
        });
        return;
      }
      
      const containerCenter = collageContainer.scrollLeft + (collageContainer.offsetWidth / 2);
      
      let closestSlide = null;
      let minDistance = Infinity;
      
      Array.from(slides).forEach(slide => {
        const slideCenter = slide.offsetLeft + (slide.offsetWidth / 2);
        const distance = Math.abs(containerCenter - slideCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestSlide = slide;
        }
      });
      
      Array.from(slides).forEach(slide => {
        if (slide === closestSlide) {
          slide.classList.add('active-slide');
        } else {
          slide.classList.remove('active-slide');
        }
      });
    };
    
    collageContainer.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateActiveSlide);
    });
    
    window.addEventListener('resize', updateActiveSlide);
    setTimeout(updateActiveSlide, 300);
  }

  // ==========================================
  // 10. Hotels Section Filter & Slider (11 Destinations Cover Flow)
  // ==========================================
  const hotelData = [
    { id: 'thekkady', title: "Blanket Days Resort & Spa", sub: "Thekkady", rating: "★★★★★ Luxury Resort & Spa", img: "assets/blanket_days_2.jpg", gallery: ["assets/blanket_days_2.jpg", "assets/blanket_days_1.jpg", "assets/blanket_days_3.jpg", "assets/blanket_days_4.jpg", "assets/blanket_days_5.jpg"] },
    { id: 'munnar', title: "Grand Cliff Munnar", sub: "Munnar", rating: "★★★★★ Premium Hill Resort", img: "assets/grand_cliff_5.jpg", gallery: ["assets/grand_cliff_5.jpg", "assets/grand_cliff_1.jpg", "assets/grand_cliff_2.jpg", "assets/grand_cliff_3.jpg", "assets/grand_cliff_4.jpg"] },
    { id: 'alappuzha', title: "Uday Backwater Resort", sub: "Alappuzha", rating: "★★★★★ Luxury Backwater Resort", img: "https://res.cloudinary.com/ltevzqit/image/upload/v1785039903/Uday_Backwater_view_4_2_iitxkm.jpg", gallery: ["https://res.cloudinary.com/ltevzqit/image/upload/v1785039903/Uday_Backwater_view_4_2_iitxkm.jpg", "https://res.cloudinary.com/ltevzqit/image/upload/v1785039903/Uday_Backwater_view_5_1_vor5hr.jpg"] },
    { id: 'kovalam', title: "UDS Hotel & Resort", sub: "Kovalam", rating: "★★★★★ Luxury Beach Resort & Spa", img: "assets/uds_alleppey_1.jpg", gallery: ["assets/uds_alleppey_1.jpg", "assets/uds_alleppey_2.jpg", "assets/uds_alleppey_3.jpg", "assets/uds_alleppey_4.jpg"] },
    { id: 'shanghumugham', title: "UDS Hotel & Resort", sub: "Shanghumugham", rating: "★★★★★ Premium Transit Resort", img: "assets/uds_alleppey_1.jpg", gallery: ["assets/uds_alleppey_1.jpg", "assets/uds_alleppey_2.jpg", "assets/uds_alleppey_3.jpg", "assets/uds_alleppey_4.jpg"] },
    { id: 'kochi', title: "Ramada Resort by Wyndham", sub: "Kochi", rating: "★★★★★ Luxury Waterfront Resort", img: "assets/ramada_kochi_2.jpg", gallery: ["assets/ramada_kochi_2.jpg", "assets/ramada_kochi_1.jpg", "assets/ramada_kochi_3.jpg"] }
  ];

  const categoriesList = ['thekkady', 'munnar', 'alappuzha', 'kovalam', 'shanghumugham', 'kochi'];
  let activeCategory = 'thekkady';
  
  // Track classes for 4 cards (left, center, right, and hidden buffer)
  let slideClasses = ['left-slide', 'center-slide', 'right-slide', 'hidden-right'];
  let isTransitioning = false;
  let destTransitionTimeout = null;
  let mobileActiveIndex = 0; // Track active index on mobile snap carousel

  // Sync both sets of pill tab backdrops
  function syncBackdropForContainer(containerId, backdropId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const backdrop = document.getElementById(backdropId);
    const activeBtn = container.querySelector('.dest-pill-btn.active');
    
    if (backdrop && activeBtn) {
      backdrop.style.left = `${activeBtn.offsetLeft}px`;
      backdrop.style.width = `${activeBtn.offsetWidth}px`;
    }
  }

  function syncAllBackdrops() {
    syncBackdropForContainer('hotelPillNav', 'destPillBackdrop');
    syncBackdropForContainer('expPillNav', 'expPillBackdrop');
  }

  window.filterDestinations = function(category) {
    activeCategory = category;

    // Reset transition states immediately to clear any running shift animations
    if (destTransitionTimeout) {
      clearTimeout(destTransitionTimeout);
      destTransitionTimeout = null;
    }
    isTransitioning = false;

    // Update active tab styling
    const hotelNav = document.getElementById('hotelPillNav');
    if (hotelNav) {
      const buttons = hotelNav.querySelectorAll('.dest-pill-btn');
      buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(category)) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Smooth scroll the selected tab into view horizontally on mobile
      const activeBtn = hotelNav.querySelector('.dest-pill-btn.active');
      if (activeBtn) {
        const containerWidth = hotelNav.clientWidth;
        const btnWidth = activeBtn.clientWidth;
        const btnLeft = activeBtn.offsetLeft;
        hotelNav.scrollTo({
          left: btnLeft - (containerWidth / 2) + (btnWidth / 2),
          behavior: 'smooth'
        });
      }
    }

    // Sync sliding backdrop pill background position
    syncAllBackdrops();

    const sliderContainer = document.querySelector('.dest-slider-container.single-hotel');
    if (!sliderContainer) return;

    const slides = sliderContainer.querySelectorAll('.dest-slide-card');

    // 1. Trigger exit shrink-down animation on current cards
    slides.forEach(slide => {
      slide.classList.remove('card-entering');
      slide.classList.add('card-switching');
    });

    destTransitionTimeout = setTimeout(() => {
      sliderContainer.innerHTML = ''; // Clear existing cards
      sliderContainer.scrollLeft = 0; // Reset scroll position to beginning
      if (typeof expectedScrollLeft !== 'undefined') {
        expectedScrollLeft = 0; // Reset scroll tracker
      }

      const item = hotelData.find(h => h.id === category);
      if (item && item.gallery && item.gallery.length > 0) {
        // Create marquee track container
        const track = document.createElement('div');
        track.className = 'hotel-marquee-track';
        sliderContainer.appendChild(track);

        // Helper to append a set of cards
        const createCards = () => {
          item.gallery.forEach((photoUrl, index) => {
            const card = document.createElement('div');
            card.className = 'dest-slide-card center-slide card-entering';
            card.setAttribute('data-hotel-id', item.id);
            
            card.innerHTML = `
              <img src="${getCloudinaryUrl(photoUrl)}" alt="${item.title} - View ${index + 1}" class="hotel-img" style="display: block;">
              <div class="slide-card-content text-bottom">
                  <h3>${item.title}</h3>
              </div>
            `;
            track.appendChild(card);
          });
        };

        // Create one set of cards (no duplication)
        createCards();
      }
    }, 140);
  };

  // ==========================================
  // 11. Destinations Section (Activity Switcher)
  // ==========================================
  const expData = {
    munnar: {
      title: "Munnar",
      sub: "Tea Plantations",
      desc: "Wander through the lush, emerald tea plantations that blanket the misty hills of Munnar.",
      img: "assets/exp_spicetrails.png"
    },
    alappuzha: {
      title: "Alappuzha",
      sub: "Houseboat Cruise",
      desc: "Drift along the tranquil backwaters in a traditional luxury houseboat, experiencing the serene rhythm of Alappuzha.",
      img: "assets/exp_backwaters.png"
    },
    trivandrum: {
      title: "Trivandrum",
      sub: "Beach Holiday",
      desc: "Relax on the sun-kissed golden sands and soak in the vibrant coastal energy of Trivandrum's pristine beaches.",
      img: "assets/exp_kovalam.png"
    },
    thekkady: {
      title: "Thekkady",
      sub: "Ziplining & Adventure",
      desc: "Soar through the mountain canopies and experience a thrilling bird's-eye view of spice valleys and dense jungle foliage.",
      img: "assets/blanket_days_1.jpg"
    },
    kochi: {
      title: "Kochi",
      sub: "Kathakali & Culture",
      desc: "Witness the majestic and colorful storytelling of a classical Kathakali dance performance, reflecting Kerala's deep artistic heritage.",
      img: "assets/exp_culture.png"
    },
    kumarakom: {
      title: "Kumarakom",
      sub: "Ayurveda & Wellness",
      desc: "Rejuvenate your body and mind with authentic, holistic Ayurvedic spa treatments overlooking the peaceful Vembanad Lake.",
      img: "assets/exp_ayurveda.png"
    },
    athirapally: {
      title: "Athirapally",
      sub: "Waterfalls & Wildlife",
      desc: "Witness the majestic power of the Athirapally waterfalls cascading through dense, untouched tropical forests.",
      img: "assets/exp_athirapally.png"
    }
  };

  // Autoplay configuration for experiences
  const expCategories = ['munnar', 'alappuzha', 'trivandrum', 'thekkady', 'kochi', 'kumarakom', 'athirapally'];
  let currentExpIndex = 0;
  let expAutoplayTimer = null;

  function startExpAutoplay() {
    stopExpAutoplay();
    expAutoplayTimer = setInterval(() => {
      currentExpIndex = (currentExpIndex + 1) % expCategories.length;
      window.filterExperiences(expCategories[currentExpIndex]);
    }, 6000);
  }

  function stopExpAutoplay() {
    if (expAutoplayTimer) {
      clearInterval(expAutoplayTimer);
      expAutoplayTimer = null;
    }
  }

  window.filterExperiences = function(category) {
    const data = expData[category];
    if (!data) return;

    // Sync active index
    const catIndex = expCategories.indexOf(category);
    if (catIndex !== -1) {
      currentExpIndex = catIndex;
    }

    // Restart autoplay timer to reset the 6s countdown on manual click
    startExpAutoplay();

    // Update active button styling in experience section
    const container = document.getElementById('expPillNav');
    if (container) {
      const buttons = container.querySelectorAll('.dest-pill-btn');
      buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(category)) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Smooth scroll the selected tab into view horizontally on mobile
      const activeBtn = container.querySelector('.dest-pill-btn.active');
      if (activeBtn) {
        const containerWidth = container.clientWidth;
        const btnWidth = activeBtn.clientWidth;
        const btnLeft = activeBtn.offsetLeft;
        container.scrollTo({
          left: btnLeft - (containerWidth / 2) + (btnWidth / 2),
          behavior: 'smooth'
        });
      }
    }

    // Sync sliding backdrop pill background position
    syncAllBackdrops();

    // Dynamic fade transition for experience content (smoother, slower fade & slide)
    const imgEl = document.getElementById('expBannerImg');
    const cardEl = document.getElementById('expBannerCard');
    const titleEl = document.getElementById('expCardTitle');
    const subEl = document.getElementById('expCardSubtitle');
    const descEl = document.getElementById('expCardDesc');

    if (imgEl && cardEl) {
      imgEl.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      cardEl.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

      imgEl.style.opacity = '0';
      cardEl.style.opacity = '0';
      cardEl.style.transform = 'translateY(15px)';

      setTimeout(() => {
        imgEl.src = getCloudinaryUrl(data.img);
        if (titleEl) titleEl.textContent = data.title;
        if (subEl) subEl.textContent = data.sub;
        if (descEl) descEl.textContent = data.desc;

        imgEl.style.opacity = '1';
        cardEl.style.opacity = '1';
        cardEl.style.transform = 'translateY(0)';
      }, 350);
    }
  };

  // Pause autoplay when hovering over the experiences block
  const expBannerWrapper = document.getElementById('expBannerWrapper');
  if (expBannerWrapper) {
    expBannerWrapper.addEventListener('mouseenter', stopExpAutoplay);
    expBannerWrapper.addEventListener('mouseleave', startExpAutoplay);
  }

  // ==========================================
  // 12. Number Counter Scroll Animation
  // ==========================================
  const statsContainer = document.getElementById('aboutStatsBar');
  if (statsContainer) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll('.stat-number');
          statNumbers.forEach(el => {
            const target = parseFloat(el.getAttribute('data-target'));
            const suffix = el.getAttribute('data-suffix') || '';
            const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
            const duration = 2500; // 2.5 seconds smooth duration
            const startTime = performance.now();

            function updateCounter(currentTime) {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 4);
              const currentVal = target * easeOut;

              el.textContent = currentVal.toFixed(decimals) + suffix;

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                el.textContent = target.toFixed(decimals) + suffix;
              }
            }

            requestAnimationFrame(updateCounter);
          });
          observer.unobserve(entry.target); // Run once when scrolled into view
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px'
    });

    counterObserver.observe(statsContainer);
  }

  // ==========================================
  // 13. Mobile Floating CTA Multi-State Scroll Handler
  // ==========================================
  const mobileFloatingCta = document.getElementById('mobileFloatingCta');
  const heroSection = document.getElementById('home');
  const testimonialsSection = document.getElementById('testimonials');

  if (mobileFloatingCta && heroSection) {
    const handleScrollFloatingCta = () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const testimonialsBottom = testimonialsSection ? testimonialsSection.getBoundingClientRect().bottom : 9999;

      if (heroBottom > 120) {
        mobileFloatingCta.classList.remove('state-center', 'state-side');
      }
      else if (testimonialsBottom <= 150) {
        mobileFloatingCta.classList.remove('state-center');
        mobileFloatingCta.classList.add('state-side');
      }
      else {
        mobileFloatingCta.classList.remove('state-side');
        mobileFloatingCta.classList.add('state-center');
      }
    };

    window.addEventListener('scroll', handleScrollFloatingCta, { passive: true });
    handleScrollFloatingCta();
  }

  // ==========================================
  // 14. Hotel Photo Gallery Lightbox Modal Logic
  // ==========================================
  const galleryOverlay = document.getElementById('galleryOverlay');
  const galleryMainImg = document.getElementById('galleryMainImg');
  const galleryHotelName = document.getElementById('galleryHotelName');
  const galleryPhotoCounter = document.getElementById('galleryPhotoCounter');
  const galleryThumbnails = document.getElementById('galleryThumbnails');
  const galleryCloseBtn = document.getElementById('galleryCloseBtn');
  const galleryPrevBtn = document.getElementById('galleryPrevBtn');
  const galleryNextBtn = document.getElementById('galleryNextBtn');

  let currentGalleryPhotos = [];
  let currentPhotoIndex = 0;
  let currentHotelName = "";

  const openGallery = (hotel) => {
    if (!hotel.gallery || hotel.gallery.length === 0) return;

    currentGalleryPhotos = hotel.gallery;
    currentPhotoIndex = 0;
    currentHotelName = hotel.title;

    updateGalleryView();

    galleryOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent body scroll
    
    // Auto-focus overlay for keyboard interactions
    galleryOverlay.focus();
  };

  const closeGallery = () => {
    galleryOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  };

  const updateGalleryView = () => {
    if (currentGalleryPhotos.length === 0) return;

    // Apply switching transition to slide main image out
    galleryMainImg.classList.add('switching');

    setTimeout(() => {
      galleryMainImg.src = getCloudinaryUrl(currentGalleryPhotos[currentPhotoIndex]);
      galleryHotelName.textContent = currentHotelName;
      galleryPhotoCounter.textContent = `${currentPhotoIndex + 1} of ${currentGalleryPhotos.length}`;

      // Update active thumbnail
      const thumbs = galleryThumbnails.querySelectorAll('.gallery-thumb');
      thumbs.forEach((thumb, idx) => {
        if (idx === currentPhotoIndex) {
          thumb.classList.add('active');
          thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          thumb.classList.remove('active');
        }
      });

      galleryMainImg.classList.remove('switching');
    }, 150);
  };

  const showNextPhoto = () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % currentGalleryPhotos.length;
    updateGalleryView();
  };

  const showPrevPhoto = () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + currentGalleryPhotos.length) % currentGalleryPhotos.length;
    updateGalleryView();
  };

  // Build thumbnails dynamically
  const buildThumbnails = () => {
    galleryThumbnails.innerHTML = '';
    currentGalleryPhotos.forEach((photoUrl, idx) => {
      const thumbDiv = document.createElement('div');
      thumbDiv.className = `gallery-thumb ${idx === 0 ? 'active' : ''}`;
      
      const thumbImg = document.createElement('img');
      thumbImg.src = getCloudinaryUrl(photoUrl);
      thumbImg.alt = `Thumbnail ${idx + 1}`;
      
      thumbDiv.appendChild(thumbImg);
      thumbDiv.addEventListener('click', () => {
        if (idx !== currentPhotoIndex) {
          currentPhotoIndex = idx;
          updateGalleryView();
        }
      });
      galleryThumbnails.appendChild(thumbDiv);
    });
  };

  // Modal Control Triggers
  if (galleryCloseBtn) galleryCloseBtn.addEventListener('click', closeGallery);
  if (galleryPrevBtn) galleryPrevBtn.addEventListener('click', showPrevPhoto);
  if (galleryNextBtn) galleryNextBtn.addEventListener('click', showNextPhoto);

  // Click outside main container closes gallery
  if (galleryOverlay) {
    galleryOverlay.addEventListener('click', (e) => {
      if (e.target === galleryOverlay) {
        closeGallery();
      }
    });
  }

  // Keyboard navigation support
  window.addEventListener('keydown', (e) => {
    if (!galleryOverlay.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeGallery();
    } else if (e.key === 'ArrowRight') {
      showNextPhoto();
    } else if (e.key === 'ArrowLeft') {
      showPrevPhoto();
    }
  });

  // ==========================================
  // 12. Infinite Auto-Marquee and Drag-to-Scroll (Hotels Section)
  // ==========================================
  const hotelSlider = document.querySelector('.dest-slider-container.single-hotel');
  let expectedScrollLeft = 0;
  let isUserScrolling = false;
  let userScrollTimeout = null;
  let isHovered = false;
  let isDown = false;
  let startX = 0;
  let scrollLeftStart = 0;

  if (hotelSlider) {
    // Detect mouse hover to slow down speed
    hotelSlider.addEventListener('mouseenter', () => {
      isHovered = true;
    });
    hotelSlider.addEventListener('mouseleave', () => {
      isHovered = false;
      isDown = false;
      hotelSlider.classList.remove('grabbing');
    });

    // Detect native/manual scroll actions (touch swipes, trackpad/wheel scrolls)
    hotelSlider.addEventListener('scroll', () => {
      // Check if actual scroll position deviates from programmatic auto-scroll path
      const diff = Math.abs(hotelSlider.scrollLeft - expectedScrollLeft);
      if (diff > 1.5) {
        // User is interacting! Halt auto-scroll.
        isUserScrolling = true;
        clearTimeout(userScrollTimeout);
        userScrollTimeout = setTimeout(() => {
          isUserScrolling = false;
          expectedScrollLeft = hotelSlider.scrollLeft;
        }, 2200); // Resume auto scroll after 2.2 seconds of inactivity
      }
    });

    // Desktop Mouse Drag-to-Scroll Mechanics
    hotelSlider.addEventListener('mousedown', (e) => {
      isDown = true;
      hotelSlider.classList.add('grabbing');
      startX = e.pageX - hotelSlider.offsetLeft;
      scrollLeftStart = hotelSlider.scrollLeft;
      isUserScrolling = true;
      clearTimeout(userScrollTimeout);
    });

    hotelSlider.addEventListener('mouseup', () => {
      isDown = false;
      hotelSlider.classList.remove('grabbing');
      userScrollTimeout = setTimeout(() => {
        isUserScrolling = false;
        expectedScrollLeft = hotelSlider.scrollLeft;
      }, 2200);
    });

    hotelSlider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - hotelSlider.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag sensitivity multiplier
      hotelSlider.scrollLeft = scrollLeftStart - walk;
      expectedScrollLeft = hotelSlider.scrollLeft;
    });

    // Stretched Frame-by-Frame requestAnimationFrame Loop
    function marqueeStep() {
      if (!isUserScrolling && !isDown) {
        const maxScroll = hotelSlider.scrollWidth - hotelSlider.clientWidth;
        if (maxScroll > 0 && hotelSlider.scrollLeft < maxScroll - 1) {
          const speed = isHovered ? 0.25 : 0.65; // slow speed on hover, normal speed otherwise (0.65px per frame is very slow and smooth)
          hotelSlider.scrollLeft += speed;
          expectedScrollLeft = hotelSlider.scrollLeft;
        }
      }
      requestAnimationFrame(marqueeStep);
    }

    // Start auto-scroll ticker loop
    requestAnimationFrame(marqueeStep);
  }

  // Initial setup trigger on load
  setTimeout(() => {
    syncAllBackdrops();
    window.filterDestinations('thekkady');
    window.filterExperiences('munnar');
  }, 300);

  window.addEventListener('resize', syncAllBackdrops);
});

